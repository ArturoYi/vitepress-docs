const fs = require("fs");
const path = require("path");
// 使用promisify方法来promise化指定方法
const { promisify } = require("util");
stat = promisify(fs.stat);
readdir = promisify(fs.readdir);

// 异步
async function calcSize(dirPath, cb) {
  let fileSize = 0;
  let error = null;
  async function calc(dirPath) {
    try {
      const statObj = await stat(dirPath);
      if (statObj.isDirectory()) {
        const files = await readdir(dirPath);
        let dirs = files.map((item) => {
          return path.join(dirPath, item);
        });
        let index = 0;
        async function next() {
          if (index < dirs.length) {
            let current = dirs[index++];
            await calc(current);
            await next();
          }
        }
        return await next();
      } else {
        fileSize += statObj.size;
      }
    } catch (err) {
      error = err;
    }
  }
  await calc(dirPath);
  cb(error, fileSize);
}

calcSize("docs", (err, state) => {
  console.log(err, state);
}).then((res) => {
  console.log(res);
});
