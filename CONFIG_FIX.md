# 配置文件加载修复 / Config File Loading Fix

**Developer / 开发者**: OMEGA1947  
**Date / 日期**: 2025-10-24

---

## 🐛 问题描述 / Problem Description

### 错误信息 / Error Message:
```
Uncaught Exception:Error: Cannot find module '../../config,json'
```

### 原因分析 / Root Cause:
静态导入 `import config from '../../config.json'` 在 Electron 打包后无法正确解析路径，导致应用崩溃。

---

## ✅ 解决方案 / Solution

### 1. 动态配置加载 / Dynamic Config Loading

改用 `fs.readFileSync` 动态加载配置文件，支持多个可能的路径：

```typescript
function loadConfig() {
  // 尝试多个可能的配置文件位置
  const possiblePaths = [
    path.join(__dirname, '../../config.json'),          // 开发模式
    path.join(process.resourcesPath, 'config.json'),   // 打包后
    path.join(app.getPath('userData'), 'config.json'), // 用户数据目录
  ];

  for (const configPath of possiblePaths) {
    try {
      if (fs.existsSync(configPath)) {
        const configData = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(configData);
      }
    } catch (error) {
      console.error(`Failed to load config from ${configPath}:`, error);
    }
  }

  // 如果找不到配置文件，返回默认配置
  console.warn('Config file not found, using default configuration');
  return getDefaultConfig();
}
```

### 2. 默认配置后备 / Default Config Fallback

提供完整的默认配置，确保即使找不到 `config.json` 也能正常运行：

```typescript
function getDefaultConfig() {
  return {
    theme: { /* ... */ },
    search: {
      maxResults: 1000,
      fuzzyMatch: true,
      caseSensitive: false,
      includeHidden: false,
      indexPaths: [
        path.join(app.getPath('home')),
        path.join(app.getPath('documents'))
      ],
      // ...
    },
    hotkey: { /* ... */ },
    performance: { /* ... */ }
  };
}
```

### 3. 打包配置更新 / Build Config Update

在 `package.json` 的 `electron-builder` 配置中添加 `config.json`：

```json
{
  "build": {
    "files": [
      "dist/**/*",
      "package.json",
      "config.json"  // 添加这一行
    ]
  }
}
```

---

## 📝 修改的文件 / Modified Files

### 1. `src/main/index.ts`
- ❌ 移除: `import config from '../../config.json';`
- ✅ 添加: `loadConfig()` 函数
- ✅ 添加: `getDefaultConfig()` 函数
- ✅ 修改: 在 `app.whenReady()` 中调用 `loadConfig()`

### 2. `tsconfig.main.json`
- ❌ 移除: `"config.json"` from include array
- 不再需要静态导入配置文件

### 3. `package.json`
- ✅ 添加: `"config.json"` 到 build.files

---

## 🎯 优势 / Advantages

### 1. 灵活性 / Flexibility
- ✅ 支持多个配置文件位置
- ✅ 开发和生产环境都能正常工作
- ✅ 用户可以在用户数据目录自定义配置

### 2. 健壮性 / Robustness
- ✅ 配置文件缺失时有默认值
- ✅ 详细的错误日志
- ✅ 优雅的失败处理

### 3. 可维护性 / Maintainability
- ✅ 配置加载逻辑集中管理
- ✅ 易于扩展和修改
- ✅ 代码更清晰

---

## 🧪 测试步骤 / Testing Steps

### 1. 开发模式测试 / Development Mode Test
```bash
npm run build:main
npm run dev
```

### 2. 验证配置加载 / Verify Config Loading
查看控制台输出：
```
Configuration loaded: { theme: {...}, search: {...}, ... }
```

### 3. 打包测试 / Build Test
```bash
npm run build
npm run package
```

### 4. 配置文件位置 / Config File Locations

**开发模式** / Development:
```
D:\BR\code\hacker-file-search\config.json
```

**打包后** / After Build:
```
[app_resources]\config.json
```

**用户自定义** / User Custom:
```
C:\Users\Administrator\AppData\Roaming\hacker-file-search\config.json
```

---

## 🔍 调试技巧 / Debugging Tips

### 查看配置加载日志:
```javascript
console.log('Configuration loaded:', config);
```

### 手动测试配置加载:
```javascript
const config = loadConfig();
console.log('Index paths:', config.search.indexPaths);
console.log('Hotkey:', config.hotkey.global);
```

### 检查文件是否存在:
```javascript
const configPath = path.join(__dirname, '../../config.json');
console.log('Config exists:', fs.existsSync(configPath));
```

---

## 📚 相关文档 / Related Documentation

- Electron 应用路径: https://www.electronjs.org/docs/api/app
- Node.js fs 模块: https://nodejs.org/api/fs.html
- Electron Builder 配置: https://www.electron.build/configuration/contents

---

## ✅ 验证清单 / Verification Checklist

- [x] 开发模式下配置正常加载
- [x] TypeScript 编译无错误
- [x] 默认配置完整可用
- [x] 打包配置包含 config.json
- [x] 错误处理健壮
- [x] 日志输出清晰

---

**修复完成 / Fix Completed** ✅

现在应用可以在开发和生产环境中正常运行！

**© 2025 OMEGA1947 - All Rights Reserved**
