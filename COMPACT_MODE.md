# 紧凑搜索模式 / Compact Search Mode

**Developer / 开发者**: OMEGA1947  
**Version / 版本**: 2.1.0  
**Date / 日期**: 2025-10-24

---

## 🎯 新功能概述 / New Features Overview

### 1. 大字体搜索界面 / Large Font Search Interface
- **48号字体输入** / 48pt Font Input
- **800x120 紧凑窗口** / 800x120 Compact Window
- **实时搜索建议** / Real-time Search Suggestions
- **智能图标识别** / Smart Icon Recognition

### 2. 自定义快捷键 / Custom Hotkey
- **默认: Ctrl+Tab** / Default: Ctrl+Tab
- **备用: Ctrl+Space** / Alternate: Ctrl+Space  
- **用户可配置** / User Configurable

### 3. 文件类型智能识别 / Smart File Type Recognition
- ⚙️ **应用程序** / Applications (.exe, .msi, .app)
- 🎬 **视频文件** / Videos (.mp4, .avi, .mkv, .mov)
- 🎵 **音乐文件** / Music (.mp3, .wav, .flac, .ogg)
- 🖼️ **图片文件** / Images (.jpg, .png, .gif, .svg)
- 📄 **文档文件** / Documents (.pdf, .doc, .txt)
- 📁 **文件夹** / Folders

---

## 🚀 使用方法 / How to Use

### 启动应用 / Launch Application
```
按下 Ctrl+Tab (默认快捷键)
Press Ctrl+Tab (default hotkey)
```

### 搜索文件 / Search Files
1. **输入关键词** - 一个字即可开始搜索
2. **查看结果** - 实时显示匹配文件
3. **选择文件** - 使用 ↑↓ 键或鼠标
4. **打开文件** - 按 Enter 或点击

### 快捷键 / Keyboard Shortcuts

| 按键 / Key | 功能 / Function |
|-----------|----------------|
| Ctrl+Tab | 唤醒/隐藏搜索窗口 / Toggle search window |
| ↑ ↓ | 上下导航结果 / Navigate results |
| Enter | 打开选中文件 / Open selected file |
| Esc | 清空搜索/关闭窗口 / Clear search/Close window |
| Ctrl+, | 打开设置 (未来功能) / Open settings (future) |

---

## 🎨 界面特点 / Interface Features

### 搜索框 / Search Box
```
🔍 [输入文字搜索...]
   ├─ 48号超大字体
   ├─ 实时搜索反馈
   ├─ 发光文字效果
   └─ 一键清空按钮
```

### 结果列表 / Results List
```
⚙️  软件名称.exe                     12.5MB
    C:\Program Files\Software\app.exe

🎵  音乐文件.mp3                     5.2MB
    D:\Music\song.mp3

🎬  视频文件.mp4                     450MB
    D:\Videos\movie.mp4
```

### 窗口行为 / Window Behavior
- ✅ 始终置顶 / Always On Top
- ✅ 屏幕居中 / Screen Centered
- ✅ 自动展开结果 / Auto-expand Results
- ✅ 失焦可选隐藏 / Hide on Focus Loss (optional)

---

## ⚙️ 配置说明 / Configuration

### config.json 配置 / config.json Settings

```json
{
  "hotkey": {
    "global": "CommandOrControl+Tab",      // 主快捷键
    "alternate": "CommandOrControl+Space", // 备用快捷键
    "settings": "CommandOrControl+,"       // 设置快捷键
  },
  "window": {
    "width": 800,           // 窗口宽度
    "height": 120,          // 窗口高度
    "fontSize": 48,         // 字体大小
    "compactMode": true     // 紧凑模式
  },
  "search": {
    "maxResults": 1000,     // 最大结果数
    "fuzzyMatch": true,     // 模糊匹配
    "caseSensitive": false  // 大小写敏感
  }
}
```

### 修改快捷键 / Change Hotkey

**方法 1: 编辑配置文件**
```json
"hotkey": {
  "global": "CommandOrControl+Shift+S"  // 改为 Ctrl+Shift+S
}
```

**方法 2: 使用设置界面 (开发中)**
```
Ctrl+, → 快捷键设置 → 选择新快捷键
```

---

## 🔍 搜索技巧 / Search Tips

### 快速查找应用 / Quick Find Applications
```
chrome          → 查找 Chrome 浏览器
vscode          → 查找 VS Code
word            → 查找 Microsoft Word
```

### 按类型搜索 / Search by Type
```
ext:mp3         → 所有音乐文件
ext:mp4         → 所有视频文件
ext:exe         → 所有应用程序
```

### 组合搜索 / Combined Search
```
music ext:mp3   → 名称包含 music 的 MP3 文件
video size:>100mb → 大于 100MB 的视频文件
```

---

## 📊 性能优化 / Performance Optimization

### 搜索速度 / Search Speed
- ⚡ 实时搜索 < 100ms
- ⚡ 索引更新 < 5s
- ⚡ 结果展示 < 50ms

### 内存占用 / Memory Usage
- 💾 空闲状态: ~50MB
- 💾 搜索状态: ~100MB
- 💾 索引状态: ~150MB

### 文件索引 / File Indexing
- 📁 支持多个索引路径
- 📁 实时监控文件变化
- 📁 智能排除规则
- 📁 增量索引更新

---

## 🎯 使用场景 / Use Cases

### 1. 快速启动应用 / Quick Launch Apps
```
Ctrl+Tab → 输入 "chr" → Enter
快速打开 Chrome 浏览器
```

### 2. 查找文档 / Find Documents
```
Ctrl+Tab → 输入 "report" → 选择文件
快速定位工作文档
```

### 3. 搜索媒体文件 / Search Media Files
```
Ctrl+Tab → 输入 "video" → 浏览结果
快速找到视频文件
```

### 4. 定位下载文件 / Locate Downloads
```
Ctrl+Tab → 输入文件名 → 打开
快速找到下载的文件
```

---

## 🔧 技术实现 / Technical Implementation

### 架构 / Architecture
```
┌─────────────────────────────────┐
│   CompactSearch Component       │
│   ├─ 48px Font Input           │
│   ├─ Real-time Search          │
│   └─ Smart Results Display     │
└─────────────────────────────────┘
          ↕
┌─────────────────────────────────┐
│   Main Process                  │
│   ├─ File Indexer              │
│   ├─ Search Engine             │
│   └─ Hotkey Manager            │
└─────────────────────────────────┘
```

### 组件文件 / Component Files
```
src/renderer/components/
  ├─ CompactSearch.tsx      # 紧凑搜索组件
  └─ CompactSearch.css      # 样式文件

src/renderer/
  ├─ AppCompact.tsx         # 紧凑模式App
  └─ styles/
      └─ AppCompact.css     # 全局样式
```

---

## 🐛 已知问题 / Known Issues

### 1. 快捷键冲突
**问题**: 某些应用可能占用 Ctrl+Tab  
**解决**: 修改配置文件使用其他快捷键

### 2. 中文输入法
**问题**: 输入法可能影响快捷键响应  
**解决**: 使用英文状态下的快捷键

### 3. Windows 应用搜索
**状态**: 开发中  
**预计**: 下个版本支持

---

## 🔮 未来计划 / Future Plans

### 短期 / Short-term
- [ ] 图形化设置界面
- [ ] Windows 应用集成
- [ ] 搜索历史记录
- [ ] 自定义主题

### 长期 / Long-term
- [ ] 插件系统
- [ ] 云同步
- [ ] AI 智能搜索
- [ ] 多语言支持

---

## 📞 反馈与支持 / Feedback & Support

有问题或建议？欢迎反馈！  
Got issues or suggestions? Feel free to feedback!

**Developer / 开发者**: OMEGA1947  
**Version / 版本**: 2.1.0

---

**© 2025 OMEGA1947 - All Rights Reserved**
