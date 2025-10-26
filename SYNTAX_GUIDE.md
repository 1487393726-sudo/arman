# 搜索语法与文件图标指南 / Search Syntax & File Icons Guide

**开发者 / Developer**: OMEGA1947

---

## 搜索语法 / Search Syntax

### 基础搜索 / Basic Search
```
filename          # 简单文件名搜索 / Simple filename search
doc report        # 多关键词 AND 搜索 / Multiple keywords AND search
```

### 文件名搜索 / Filename Search
```
name:invoice      # 匹配文件名包含 "invoice" / Match filename containing "invoice"
name:test.py      # 匹配特定文件名 / Match specific filename
```

### 扩展名搜索 / Extension Search
```
ext:pdf           # 所有 PDF 文件 / All PDF files
ext:.txt          # 所有文本文件 / All text files (可以加点或不加)
ext:js            # 所有 JavaScript 文件 / All JavaScript files
```

### 文件大小 / File Size
```
size:>10mb        # 大于 10MB / Larger than 10MB
size:<1gb         # 小于 1GB / Smaller than 1GB
size:>5kb         # 大于 5KB / Larger than 5KB
size:>=100mb      # 大于等于 100MB / Greater than or equal to 100MB
```

支持的单位 / Supported units: `kb`, `mb`, `gb`

### 修改时间 / Modified Time
```
modified:<7d      # 最近 7 天内修改 / Modified within last 7 days
modified:>30d     # 30 天前修改 / Modified more than 30 days ago
modified:2025-01  # 2025年1月修改 / Modified in Jan 2025
modified:2025-01-15  # 特定日期 / Specific date
```

### 创建时间 / Created Time
```
created:<30d      # 最近 30 天内创建 / Created within last 30 days
created:>90d      # 90 天前创建 / Created more than 90 days ago
created:2025      # 2025年创建 / Created in 2025
```

### 路径搜索 / Path Search
```
path:C:\Projects  # 在特定路径下 / In specific path
path:Documents    # 包含 "Documents" 的路径 / Path containing "Documents"
path:D:\BR\code   # 在代码目录 / In code directory
```

### 正则表达式 / Regular Expression
```
regex:^test_.*\.py$    # 以 test_ 开头的 Python 文件 / Python files starting with test_
/\d{4}-\d{2}-\d{2}/    # 日期格式文件名 / Date format filenames
regex:config.*\.json   # config 开头的 JSON 文件 / JSON files starting with config
```

### 排除搜索 / Exclude Search
```
-ext:tmp          # 排除临时文件 / Exclude temp files
!path:node_modules  # 排除 node_modules 目录 / Exclude node_modules
-ext:log          # 排除日志文件 / Exclude log files
!path:cache       # 排除缓存目录 / Exclude cache directory
```

### 组合搜索 / Combined Search
```
name:config ext:json path:src
# 在 src 目录下查找名为 config 的 JSON 文件
# Find JSON files named config in src directory

ext:js size:>100kb modified:<7d
# 最近 7 天修改的大于 100KB 的 JS 文件
# JS files larger than 100KB modified in last 7 days

name:report ext:pdf -path:archive
# 名为 report 的 PDF，排除 archive 目录
# PDF files named report, excluding archive directory
```

---

## 文件图标系统 / File Icon System

### 图标符号说明 / Icon Symbol Legend

| 符号 / Symbol | 类型 / Type | 说明 / Description |
|--------------|-------------|-------------------|
| ◉ | 目录 / Directory | 文件夹 / Folders |
| ◆ | 代码 / Code | 编程语言文件 / Programming language files |
| ◈ | 文档 / Document | 文档文件 / Document files |
| ◇ | 数据 / Data | 数据和配置文件 / Data and config files |
| ◐ | Web | Web相关文件 / Web-related files |
| ◘ | 媒体 / Media | 图像和压缩文件 / Images and archives |
| ▶ | 视频 / Video | 视频文件 / Video files |
| ♪ | 音频 / Audio | 音频文件 / Audio files |
| ◙ | 可执行 / Executable | 可执行和库文件 / Executable and library files |
| ○ | 临时 / Temporary | 临时文件 / Temporary files |
| ◌ | 通用 / Generic | 通用文件 / Generic files |

### 文档类型 / Document Types
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .pdf | ◈ | PDF | 红色 / Red (#ff3333) |
| .doc, .docx | ◈ | DOC | 蓝色 / Blue (#2b579a) |
| .txt, .md, .rtf | ◈ | TXT | 绿色 / Green (#00ff41) |
| .xls, .xlsx, .csv | ◈ | XLS | 深绿 / Dark Green (#1d6f42) |
| .ppt, .pptx | ◈ | PPT | 橙红 / Orange-Red (#d24726) |

### 编程语言 / Programming Languages
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .js, .mjs, .cjs | ◆ | JS | 黄色 / Yellow (#f7df1e) |
| .ts, .tsx | ◆ | TS | 蓝色 / Blue (#3178c6) |
| .jsx | ◆ | JSX | 青色 / Cyan (#61dafb) |
| .py, .pyc, .pyd | ◆ | PY | 蓝色 / Blue (#3776ab) |
| .java, .class | ◆ | JAVA | 橙色 / Orange (#f89820) |
| .cpp, .cc, .cxx | ◆ | C++ | 深蓝 / Dark Blue (#00599c) |
| .c, .h | ◆ | C | 灰蓝 / Gray-Blue (#a8b9cc) |
| .cs | ◆ | C# | 绿色 / Green (#239120) |
| .go | ◆ | GO | 青色 / Cyan (#00add8) |
| .rs | ◆ | RUST | 橙色 / Orange (#dea584) |
| .php | ◆ | PHP | 紫色 / Purple (#777bb4) |
| .rb | ◆ | RUBY | 红色 / Red (#cc342d) |
| .swift | ◆ | SWIFT | 橙色 / Orange (#fa7343) |
| .kt, .kts | ◆ | KT | 紫色 / Purple (#7f52ff) |
| .lua | ◆ | LUA | 深蓝 / Navy (#000080) |
| .sh, .bash, .zsh | ◆ | SH | 绿色 / Green (#4eaa25) |
| .ps1, .psm1 | ◆ | PS | 深蓝 / Dark Blue (#012456) |

### 数据格式 / Data Formats
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .json, .jsonc | ◇ | JSON | 橙色 / Orange (#ffaa00) |
| .xml, .xaml | ◇ | XML | 橙红 / Orange-Red (#ff6600) |
| .yaml, .yml | ◇ | YAML | 红色 / Red (#cc0000) |
| .toml | ◇ | TOML | 棕色 / Brown (#9c4121) |
| .ini, .cfg, .conf | ◇ | CFG | 灰色 / Gray (#6d8086) |
| .sql | ◇ | SQL | 橙色 / Orange (#e38c00) |
| .db, .sqlite | ◇ | DB | 深蓝 / Dark Blue (#003b57) |

### Web文件 / Web Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .html, .htm | ◐ | HTML | 橙红 / Orange-Red (#e34c26) |
| .css, .scss, .sass | ◐ | CSS | 蓝色 / Blue (#1572b6) |
| .vue | ◐ | VUE | 绿色 / Green (#42b883) |
| .svelte | ◐ | SVLT | 橙红 / Orange-Red (#ff3e00) |
| .wasm | ◐ | WASM | 紫色 / Purple (#654ff0) |

### 图像文件 / Image Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .jpg, .jpeg | ◘ | JPG | 青色 / Cyan (#00ffff) |
| .png | ◘ | PNG | 青色 / Cyan (#00ffff) |
| .gif | ◘ | GIF | 青色 / Cyan (#00ffff) |
| .svg | ◘ | SVG | 橙色 / Orange (#ffb13b) |
| .ico, .icon | ◘ | ICO | 青色 / Cyan (#00ffff) |
| .psd, .ai, .sketch | ◘ | DSN | 蓝色 / Blue (#31a8ff) |

### 媒体文件 / Media Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .mp4, .avi, .mkv | ▶ | VID | 品红 / Magenta (#ff00ff) |
| .mp3, .wav, .flac | ♪ | AUD | 品红 / Magenta (#ff00ff) |

### 压缩文件 / Archive Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .zip, .rar, .7z | ◘ | ZIP | 橙色 / Orange (#ffaa00) |

### 可执行文件 / Executable Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .exe, .msi | ◙ | EXE | 红色 / Red (#ff3333) |
| .dll, .so, .dylib | ◙ | LIB | 浅红 / Light Red (#ff6666) |
| .bin, .dat | ◙ | BIN | 灰色 / Gray (#999999) |

### 其他文件 / Other Files
| 扩展名 / Extension | 图标 / Icon | 标签 / Label | 颜色 / Color |
|-------------------|-------------|-------------|-------------|
| .log | ◇ | LOG | 灰色 / Gray (#6d8086) |
| .tmp, .temp, .cache | ○ | TMP | 深灰 / Dark Gray (#666666) |
| .env | ◇ | ENV | 黄色 / Yellow (#ecd53f) |
| .lock | ◇ | LOCK | 浅灰 / Light Gray (#cccccc) |
| .git, .gitignore | ◆ | GIT | 橙红 / Orange-Red (#f05032) |
| .ttf, .otf, .woff | ◐ | FONT | 灰色 / Gray (#6d8086) |

---

## 使用示例 / Usage Examples

### 例子 1：查找最近修改的大型图片
```
ext:jpg size:>5mb modified:<7d
```

### 例子 2：查找配置文件
```
name:config ext:json -path:node_modules
```

### 例子 3：查找所有Python测试文件
```
regex:^test_.*\.py$ path:tests
```

### 例子 4：查找未使用的临时文件
```
ext:tmp size:>0 modified:>30d
```

### 例子 5：查找所有TypeScript组件
```
ext:tsx name:Component path:src
```

---

## 快捷键 / Keyboard Shortcuts

| 快捷键 / Key | 功能 / Function |
|-------------|----------------|
| Ctrl+Space | 唤醒/隐藏应用 / Toggle app |
| ↑ ↓ | 导航结果 / Navigate results |
| Enter | 打开文件 / Open file |
| Ctrl+Enter | 在文件管理器中显示 / Reveal in explorer |
| Esc | 关闭应用 / Close app |
| 右键点击 | 在文件管理器中显示 / Reveal in explorer |

---

**版权所有 © 2025 OMEGA1947**
**All Rights Reserved © 2025 OMEGA1947**
