let koa = require('koa');
let app = koa();
app.use(function *() {
    let path = this.path;
    this.body = path;
});