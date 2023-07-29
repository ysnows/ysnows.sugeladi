const fs = require('fs')

// 如果不存在，创建 ./dist
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}
// copy main.yml to dist/main.yml
fs.copyFileSync('./main.yml', './dist/main.yml')
