# 图标设置说明 / Icon Setup Guide

**Developer / 开发者**: OMEGA1947  
**Date / 日期**: 2025-10-24

---

## ✅ 已完成的图标配置 / Completed Icon Configuration

### 📁 图标文件位置 / Icon File Locations

```
hacker-file-search/
├── build/
│   ├── icon.ico         # Windows应用图标
│   └── icon.png         # macOS/Linux应用图标
├── favicon.ico          # 网页图标
└── index.html           # HTML中已引用favicon
```

### 🖼️ 图标来源 / Icon Source

```
来源: E:\LOGO\我的\
- favicon.ico          → build/icon.ico (Windows应用图标)
- icon-512.png         → build/icon.png (macOS/Linux图标)
- favicon.ico          → favicon.ico (网页图标)
```

---

## ⚙️ 配置详情 / Configuration Details

### 1. package.json 配置

```json
{
  "build": {
    "win": {
      "target": ["nsis"],
      "icon": "build/icon.ico"
    },
    "mac": {
      "icon": "build/icon.png"
    },
    "linux": {
      "icon": "build/icon.png",
      "target": ["AppImage", "deb"]
    }
  }
}
```

### 2. 主窗口图标配置

**文件**: `src/main/index.ts`

```typescript
// 主窗口
mainWindow = new BrowserWindow({
  icon: path.join(__dirname, '../../build/icon.ico'),
  // ... 其他配置
});

// 紧凑搜索窗口
compactWindow = new BrowserWindow({
  icon: path.join(__dirname, '../../build/icon.ico'),
  // ... 其他配置
});
```

### 3. HTML Favicon 配置

**文件**: `index.html`

```html
<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <title>FILE://SEARCH</title>
</head>
```

---

## 🎨 图标显示位置 / Icon Display Locations

### 开发模式 / Development Mode
- ✅ 任务栏图标
- ✅ 窗口标题栏图标（如果有框架）
- ✅ Alt+Tab 切换器
- ✅ 浏览器标签页 (开发时)

### 打包后 / After Build
- ✅ 应用程序图标（桌面/开始菜单）
- ✅ 任务栏图标
- ✅ 安装程序图标
- ✅ 卸载程序图标
- ✅ Alt+Tab 切换器

---

## 🚀 测试图标 / Test Icons

### 开发模式测试 / Development Mode Test

```bash
npm run dev
```

**检查项** / Checklist:
- [ ] 主窗口任务栏图标显示
- [ ] 紧凑窗口任务栏图标显示
- [ ] Alt+Tab 显示正确图标

### 打包测试 / Build Test

```bash
npm run build
npm run package
```

**检查项** / Checklist:
- [ ] 生成的安装程序有图标
- [ ] 安装后桌面快捷方式有图标
- [ ] 开始菜单图标正确
- [ ] 运行时任务栏图标正确

---

## 🔄 更换其他图标 / Change to Different Icon

### 方法 1: 替换现有图标文件

```bash
# 1. 准备新图标
#    - Windows: icon.ico (256x256推荐)
#    - macOS/Linux: icon.png (512x512推荐)

# 2. 替换文件
Copy-Item "新图标.ico" "build\icon.ico" -Force
Copy-Item "新图标.png" "build\icon.png" -Force
Copy-Item "新图标.ico" "favicon.ico" -Force

# 3. 重新编译
npm run build:main

# 4. 测试
npm run dev
```

### 方法 2: 使用图标生成工具

推荐工具：
- **electron-icon-builder** - 从PNG生成所有尺寸图标
- **imagemagick** - 命令行图标转换
- **在线工具** - favicon.io, icoconvert.com

```bash
# 安装 electron-icon-builder
npm install --save-dev electron-icon-builder

# 从512x512 PNG生成所有图标
npx electron-icon-builder --input=icon-512.png --output=build
```

---

## 📐 图标尺寸规范 / Icon Size Specifications

### Windows (.ico)
```
推荐包含多个尺寸:
- 16x16
- 32x32
- 48x48
- 64x64
- 128x128
- 256x256 (主要尺寸)
```

### macOS (.icns 或 .png)
```
推荐尺寸:
- 512x512
- 1024x1024 (Retina)
```

### Linux (.png)
```
推荐尺寸:
- 512x512
- 256x256
```

### Web (favicon.ico)
```
推荐尺寸:
- 16x16
- 32x32
- 48x48
```

---

## 🎯 图标设计建议 / Icon Design Tips

### 视觉效果 / Visual Design
- ✅ 使用简洁的设计
- ✅ 高对比度，易于识别
- ✅ 避免过多细节（小尺寸时不清晰）
- ✅ 使用品牌色彩
- ✅ 在深色/浅色背景都清晰可见

### 技术要求 / Technical Requirements
- ✅ 使用PNG格式（透明背景）
- ✅ 正方形比例
- ✅ 高分辨率源文件
- ✅ 避免使用纯黑或纯白

### 黑客风格建议 / Hacker Style Suggestions
- 🎨 霓虹绿色 (#00ff41)
- 🎨 深色背景
- 🎨 数字/代码元素
- 🎨 终端/命令行图标
- 🎨 简洁的几何图形

---

## 🐛 常见问题 / Troubleshooting

### 问题 1: 图标不显示

**原因**:
- 缓存问题
- 路径错误
- 文件格式不正确

**解决**:
```bash
# 清除缓存
Remove-Item $env:APPDATA\hacker-file-search -Recurse -Force

# 检查文件路径
Test-Path "build\icon.ico"

# 重新编译
npm run build:main
npm run dev
```

### 问题 2: 打包后图标丢失

**原因**:
- build目录未包含在打包文件中

**解决**:
```json
// package.json
{
  "build": {
    "files": [
      "dist/**/*",
      "build/**/*"  // 确保包含build目录
    ]
  }
}
```

### 问题 3: 图标模糊

**原因**:
- 图标尺寸太小
- 未包含多个尺寸

**解决**:
- 使用至少256x256的.ico文件
- 确保.ico包含多个尺寸

---

## 📝 图标更换记录 / Icon Change Log

| 日期 / Date | 操作 / Action | 说明 / Description |
|------------|--------------|-------------------|
| 2025-10-24 | 初始设置 | 从 E:\LOGO\我的\ 导入图标 |
| | | Windows: favicon.ico |
| | | Web: favicon.ico |
| | | macOS/Linux: icon-512.png |

---

## 📞 支持 / Support

如需更换图标或遇到问题，请参考本文档或联系开发者。

**Developer / 开发者**: OMEGA1947

---

**© 2025 OMEGA1947 - All Rights Reserved**
