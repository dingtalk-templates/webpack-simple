## {{ name }}

> {{ description }}

# 项目介绍

这个项目为钉钉开发者准备了从构建，调试，到打包一系列的流程以及编写weex应用的最佳实践，我们使用`Webpack`来打包源代码，`Babel`帮助我们处理ES6的转译。

> 注意 ⚠️ 此项目是基于webpack构建的简化版

你可以在 [weex-generator-package](https://github.com/icepy/weex-generator-package) 访问并下载使用它。

# 目录结构

1. components 可以共享的组件放在这里
3. lib 可以共享的函数.js文件放在这里
4. pages 真正的页面放在这里
5. platforms 平台相关的入口放在这里

# Build Setup

```bash
# install dependencies
npm install

# 启动 mock 服务器
npm run mock

# 启动 vue web dev 环境，自启服务器 at localhost:8080
npm run dev:web

# build vue web release 环境
npm run build:web

# 启动 weex dev 环境，自启服务器 at localhost:8089
npm run dev:weex

# 启动 weex release 环境
npm run build:weex

# 编译weex和Web环境下所需要的资源，这是可以正式部署的静态资源
npm run build
```

# Mock

本项目用koa写了一个简单的mock server，它非常的灵活可复制，你可以找到 `mock` 目录，在`router.js`中书写你想要mock的数据，比如GET：

```JavaScript
router.get('/weex/get', function *(next) {
    this.body = {
        success: 1
    };
});
```

如果你想写一个POST请求也很容易：

```JavaScript
router.post('/weex/post', function *(next) {
    this.body = {
        success: true
    };
});
```

### 构建脚本学习资源

* [babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/guides/)

### 如何创建一个传统bundle.js式页面

我们可以先看一个很传统的方式来创建一个新页面，一个页面就是一个`bundle.js`，你应该在`Webpack`配置中去处理这些`bundle.js`。

当你选择创建一个新的页面时，需要经过下列几个步骤：

1. 在platforms/weex目录下创建你的入口文件（icepy-entry.js）

```JavaScript
import Home from '../../pages/icepy/index.vue';
Home.el = '#app';
new Vue(Home);
```
2. 在pages/目录下创建一个`icepy`目录并且创建一个index.vue文件，你可以写一个很简单的Hello Your Name

```Vue
<template>
  <div>
    <text class="hello">Hello Your Name</text>
  </div>
</template>
<script>
  export default {
    name: 'your name'
    data: {}
  }
</script>
<style>
  .hello{

  }
</style>
```

3. 在build目录下的webpack.weex.conf.js文件中的entry里填上一个新的入口

```JavaScript
// webpack 配置

entry:{
  'weex-icepy-bundle': './src/platforms/weex/icepy-entry.js'
}
```

最后，在你的终端里输入 `npm run dev:weex`，感受一下吧。
