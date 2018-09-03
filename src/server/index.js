const express = require('express');
const os = require('os');

const app = express();
const api = express.Router();

const request = require('request');

app.use(express.static('dist'));
// 对外提供一个“/api/getUsername”的接口
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
// app.get('/api/getInfo', (req, res) => res.send({ userInfo: 'xx' }));


// 可以利用express.Router()进行路由拆分
api.get('/getUserName', (req, res, next) => {
  res.send({ username: os.userInfo().username });
});

function getInfoMethod() {
  request('https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user', (error, response, body) => {
    console.log(body);
    return body;
  });
}
function getInfoPromi() {
  return new Promise((resolve, reject) => {
    // request('https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user', (error, response, body) => {
    request('http://rap2api.taobao.org/app/mock/data/382300', (error, response, body) => {
      console.log('request result is: ', body);
      if (!error && response.statusCode === 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}
// 调用mock接口再通过“getInfo”接口给前台
api.get('/getInfo', (req, res, next) => {
  // http://eslint.cn/docs/rules/func-names 改用函数表达式的方式编写，更加方便调试
  /* new Promise(function(resolve, reject) {
    request('https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/user', (error, response, body) => {
    console.log('request result is: ', body);
    if (!error && response.statusCode === 200) {
      resolve(body);
    } else {
      reject(error);
    }
  })
  .then((data) => { */
  getInfoPromi().then((data) => {
    const result = JSON.parse(data);
    console.log('api get result is: ', JSON.stringify(result));
    res.send({
      data: result
    });
  });
});

app.use('/api', api);
app.listen(8080, () => console.log('Listening on port 8080!'));
