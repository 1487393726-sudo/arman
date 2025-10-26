# 测试指南 / Test Guide

**Developer / 开发者**: OMEGA1947  
**Version / 版本**: 2.1.0  
**Date / 日期**: 2025-10-24

---

## 🎯 当前配置 / Current Configuration

### 窗口模式 / Window Modes

#### 1. 主窗口（启动时）/ Main Window (On Start)
- **尺寸** / Size: 900x700
- **界面** / UI: 完整功能界面
- **显示** / Display: 应用启动时自动显示

#### 2. 紧凑搜索窗口（快捷键）/ Compact Search Window (Hotkey)
- **尺寸** / Size: 600x90
- **字体** / Font: 27号
- **触发** / Trigger: 按 Ctrl+Tab
- **特点** / Features:
  - 🔍 大字体搜索框
  - 📋 显示全部搜索结果
  - ⚡ 失焦自动隐藏
  - 🎯 始终置顶

---

## 🚀 启动测试 / Launch Test

### 方法 1: 开发模式 / Development Mode
```bash
npm run dev
```

**期望结果** / Expected:
1. ✅ 主窗口打开（900x700）
2. ✅ 显示完整界面
3. ✅ 文件索引开始运行

### 方法 2: 生产模式 / Production Mode
```bash
npm run build
npm run package
```

---

## ⌨️ 快捷键测试 / Hotkey Test

### 测试步骤 / Test Steps

#### 1. 打开紧凑搜索窗口
```
按下: Ctrl+Tab
```

**期望结果** / Expected:
- ✅ 600x90 紧凑窗口出现
- ✅ 窗口居中显示
- ✅ 27号大字体输入框
- ✅ 自动聚焦到输入框
- ✅ 显示"🔍"搜索图标

#### 2. 搜索测试
```
输入: txt
```

**期望结果** / Expected:
- ✅ 实时显示搜索结果
- ✅ 所有匹配文件都显示
- ✅ 文件类型图标正确
- ✅ 文件大小正确显示

#### 3. 导航测试
```
按键: ↑ ↓
```

**期望结果** / Expected:
- ✅ 选中项高亮显示
- ✅ 选中项背景变绿
- ✅ 左侧显示绿色边框

#### 4. 打开文件
```
按键: Enter
```

**期望结果** / Expected:
- ✅ 文件被打开
- ✅ 紧凑窗口自动关闭

#### 5. 关闭窗口
```
按键: Esc
```

**期望结果** / Expected:
- ✅ 第一次按：清空搜索
- ✅ 第二次按：关闭窗口

---

## 🔍 搜索功能测试 / Search Function Test

### 测试用例 / Test Cases

#### 用例 1: 简单搜索
```
输入: config
期望: 找到所有包含 "config" 的文件
```

#### 用例 2: 扩展名搜索
```
输入: ext:mp3
期望: 找到所有音乐文件
结果图标: 🎵
```

#### 用例 3: 视频文件搜索
```
输入: ext:mp4
期望: 找到所有视频文件
结果图标: 🎬
```

#### 用例 4: 应用程序搜索
```
输入: ext:exe
期望: 找到所有应用程序
结果图标: ⚙️
```

#### 用例 5: 组合搜索
```
输入: name:report ext:pdf
期望: 找到名为 report 的 PDF 文件
```

---

## 🖼️ 界面测试 / UI Test

### 紧凑搜索窗口检查项 / Compact Window Checklist

- [ ] 窗口尺寸正确（600x90）
- [ ] 字体大小正确（27号）
- [ ] 搜索框居中对齐
- [ ] 发光效果正常
- [ ] 图标显示正常（🔍）
- [ ] 清除按钮工作（✕）
- [ ] 结果列表滚动正常
- [ ] 文件图标正确显示
- [ ] 文件路径完整显示
- [ ] 文件大小格式化正确

### 主窗口检查项 / Main Window Checklist

- [ ] 窗口尺寸正确（900x700）
- [ ] 标题栏显示正常
- [ ] 搜索语法提示显示
- [ ] 文件索引状态显示
- [ ] 结果列表正常
- [ ] 状态栏信息正确

---

## 📊 性能测试 / Performance Test

### 1. 索引性能 / Indexing Performance
```
观察指标:
- 索引速度（文件/秒）
- 内存占用
- CPU 使用率
```

### 2. 搜索性能 / Search Performance
```
测试步骤:
1. 输入单个字符
2. 观察响应时间
3. 记录结果数量

期望:
- 响应时间 < 100ms
- 结果准确
- 无卡顿
```

### 3. 窗口切换性能 / Window Switching Performance
```
测试:
1. 快速按 Ctrl+Tab
2. 观察窗口响应

期望:
- 立即显示/隐藏
- 无延迟
- 无闪烁
```

---

## 🐛 常见问题测试 / Common Issues Test

### 问题 1: 快捷键不响应
**测试步骤**:
1. 按 Ctrl+Tab
2. 如果无反应，检查配置文件

**解决方案**:
```json
// config.json
"hotkey": {
  "global": "CommandOrControl+Tab"
}
```

### 问题 2: 窗口显示异常
**测试步骤**:
1. 检查窗口是否被其他窗口遮挡
2. 查看任务栏是否有窗口图标

**解决方案**:
- 使用 Alt+Tab 切换窗口
- 或重启应用

### 问题 3: 搜索结果为空
**测试步骤**:
1. 检查索引状态
2. 查看控制台日志

**排查**:
```
打开开发者工具:
Ctrl+Shift+I (在主窗口)
查看 Console 标签
```

---

## ✅ 完整测试清单 / Complete Test Checklist

### 启动测试 / Startup Test
- [ ] 应用正常启动
- [ ] 主窗口显示
- [ ] 无错误提示
- [ ] 文件索引开始

### 快捷键测试 / Hotkey Test
- [ ] Ctrl+Tab 打开紧凑窗口
- [ ] Ctrl+Tab 关闭紧凑窗口
- [ ] Esc 清空搜索
- [ ] Esc 关闭窗口

### 搜索测试 / Search Test
- [ ] 实时搜索工作
- [ ] 所有结果显示
- [ ] 图标正确
- [ ] 路径显示完整

### 导航测试 / Navigation Test
- [ ] ↑↓ 键导航
- [ ] 鼠标点击选择
- [ ] Enter 打开文件
- [ ] 选中项高亮

### 界面测试 / UI Test
- [ ] 27号字体显示清晰
- [ ] 发光效果正常
- [ ] 窗口尺寸正确
- [ ] 动画流畅

---

## 📝 测试报告模板 / Test Report Template

```
测试日期: ___________
测试人员: ___________
版本号: 2.1.0

启动测试: ✅ / ❌
快捷键测试: ✅ / ❌
搜索功能: ✅ / ❌
界面显示: ✅ / ❌
性能表现: ✅ / ❌

问题描述:
_____________________
_____________________

建议:
_____________________
_____________________
```

---

## 🔧 调试技巧 / Debugging Tips

### 查看日志 / View Logs
```bash
# 主进程日志
在控制台查看

# 渲染进程日志
按 F12 打开开发者工具
```

### 配置检查 / Config Check
```bash
# 查看当前配置
node test-app.js
```

### 清除缓存 / Clear Cache
```bash
# 删除用户数据
Remove-Item $env:APPDATA\hacker-file-search -Recurse
```

---

## 📞 问题反馈 / Issue Feedback

如果测试发现问题，请记录：
1. 操作步骤
2. 预期结果
3. 实际结果
4. 错误信息
5. 截图（如有）

**Developer / 开发者**: OMEGA1947

---

**© 2025 OMEGA1947 - All Rights Reserved**
