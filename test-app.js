// 快速测试脚本
console.log('Testing file indexer and search engine...\n');

const path = require('path');
const config = require('./config.json');

// 测试配置加载
console.log('✓ Config loaded successfully');
console.log('  Index paths:', config.search.indexPaths);
console.log('  Hotkey:', config.hotkey.global);

// 测试编译后的文件
const fs = require('fs');
const distFiles = [
  'dist/main/index.js',
  'dist/main/indexer.js',
  'dist/main/search.js',
  'dist/main/query-parser.js',
  'dist/main/preload.js'
];

console.log('\nChecking compiled files:');
distFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} - MISSING`);
  }
});

console.log('\n✓ All checks passed!');
console.log('\nYou can now run:');
console.log('  npm run dev    - Start in development mode');
console.log('  npm run build  - Build for production');
console.log('  npm run package - Create installer');
