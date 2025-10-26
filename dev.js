const { spawn } = require('child_process');
const path = require('path');

// 设置环境变量
process.env.NODE_ENV = 'development';

// 启动Vite开发服务器
const vite = spawn('npm', ['run', 'dev:renderer'], {
  shell: true,
  stdio: 'inherit',
});

// 等待Vite启动后再启动Electron
setTimeout(() => {
  const electron = spawn('npm', ['run', 'dev:main'], {
    shell: true,
    stdio: 'inherit',
  });

  electron.on('exit', () => {
    vite.kill();
    process.exit();
  });
}, 3000);

process.on('SIGINT', () => {
  vite.kill();
  process.exit();
});
