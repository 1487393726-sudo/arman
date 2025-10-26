# Hacker File Search / 黑客文件搜索

**Developer / 开发者**: OMEGA1947

A hacker-style local file search application with terminal aesthetics.

一个具有黑客终端美学的本地文件搜索应用程序。

## Features / 特性

- **Fast Indexing** / **快速索引**: Real-time file system monitoring and indexing
- **Advanced Search Syntax** / **高级搜索语法**: Supports complex queries with operators  
- **Rich File Icons** / **丰富文件图标**: 80+ file types with colored ASCII art icons
- **Hacker UI** / **黑客界面**: Terminal-style interface with scanline effects
- **Keyboard-First** / **键盘优先**: Optimized for keyboard navigation
- **Cross-Platform** / **跨平台**: Built with Electron, runs on Windows, macOS, and Linux

## Search Syntax / 搜索语法

### Basic Search / 基础搜索
```
filename          # 简单文件名搜索 / Simple filename search
doc report        # 多关键词 AND 搜索 / Multiple keywords AND search
```

### Advanced Operators / 高级操作符
```
name:invoice              # 按文件名 / By filename
ext:pdf                   # 按扩展名 / By extension
size:>10mb                # 按大小 / By size
modified:<7d              # 7天内修改 / Modified within 7 days
created:2025-01           # 按创建日期 / By creation date
path:C:\Projects          # 按路径前缀 / By path prefix
regex:^test_.*\.py$       # 正则匹配 / Regex matching
```

### Exclude / 排除
```
-ext:tmp                  # 排除临时文件 / Exclude temp files
!path:node_modules        # 排除路径 / Exclude path
```

### Combined Search / 组合搜索
```
name:config ext:json path:src
(ext:jpg OR ext:png) size:>5mb modified:<30d
```

## Keyboard Shortcuts / 键盘快捷键

### Global / 全局
- `Ctrl+Space` - Toggle application / 切换应用
- `Ctrl+Shift+F` - Alternative hotkey / 备用快捷键

### Navigation / 导航
- `↑/↓` - Navigate results / 导航结果
- `Enter` - Open file / 打开文件
- `Ctrl+Enter` - Reveal in file explorer / 在文件管理器中显示
- `Esc` - Close application / 关闭应用

## Installation / 安装

```bash
# Install dependencies / 安装依赖
npm install

# Development mode / 开发模式
npm run dev

# Build / 构建
npm run build

# Package / 打包
npm run package
```

## Configuration / 配置

Edit `config.json` to customize:
编辑 `config.json` 进行自定义配置：

- Index paths / 索引路径
- Exclude patterns / 排除规则
- Theme colors / 主题颜色
- Hotkeys / 快捷键
- Performance settings / 性能设置

## Tech Stack / 技术栈

- **Electron** - Desktop application framework
- **React** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Chokidar** - File system monitoring
- **Fuse.js** - Fuzzy search

## Documentation / 文档

See `SYNTAX_GUIDE.md` for complete search syntax and file icon reference.

查看 `SYNTAX_GUIDE.md` 了解完整的搜索语法和文件图标参考。

## License / 许可证

MIT

---

**© 2025 OMEGA1947 - All Rights Reserved**
