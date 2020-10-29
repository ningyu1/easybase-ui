Easybase-UI is an easybase framework portal

# 介绍
Easybase是一款前后端分离的开源开发框架，基于springboot+vue开发的后台管理系统，前端基于vue-element-admin。

# 开发

```bash
## 安装依赖
npm install

## 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

## 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

# 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```