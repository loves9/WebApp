# Vue工程说明

> module文件夹下的sample为工作流模板工程，用户可作为参考，用不到的情况下要删除，避免打包过大，造成不必要的浪费。

## 1.项目结构

### index.html

是整个工程的入口文件

### build

build文件夹存放的是构建和编译相关的文件

### cmd

脚本模板文件夹

### config

config文件夹存放的是参数配置文件

### node\_modules

此文件夹为`npm install`自动生成，可忽略，可删除，git、svn不需要提交

### src

所有业务功能相关的文件都存放在此文件夹内

* #### assets

  assets为资源文件夹，此文件夹内的资源会被webpack编译

* #### components

  公共组件文件夹

* #### config

  config文件夹存放的是参数配置文件

* #### common

  公共文件

* #### core

  核心文件

* #### lib

  库文件

* #### module

  业务文件夹，按业务创建模块，创建模块执行：

```
npm run createModule <your module name>
```

就会自动创建模块了

* ##### api

  网络请求文件夹，建议所有网络请求都写在里面

* #### rootRouter

  主router文件夹，当你创建新模块后，需要在router.js中注册

* #### store

  主store文件夹，新模块需要在index.js中注册

```
// 引入你的模块
import homeStore from '@/module/home/store'  
// 注册
store.registerModule('home', homeStore);
```

* #### style

  样式文件夹

### static

静态资源文件夹，不被webpack编译

### package.json

npm依赖和模块配置文件

## 2.规范

命名规范需遵从以下原则：

* 有意义的: 不过于具体，也不过于抽象 
* 简短: 2 到 3 个单词
* 具有可读性: 以便于沟通交流

### 2.1 组件命名

* 采用首字母大写驼峰命名方式 
* 各业务通用的公共组件需加上HRKJ前缀，用以区分单独业务封装的组件

### 2.2 文件夹的命名

文件夹采用小写命名

### 2.3 注释

```
   /**
     * 描述
     * 
     * @params 参数
     * @return object
     */
```

### 2.4 代码缩进

使用4个空格作为一个缩进层级

如果是首次提交，提交之前使用格式化工具格式代码

### 2.5 谨慎使用 this.$refs

Vue.js 支持通过 ref 属性来访问其它组件和 HTML 元素。并通过 this.$refs 可以得到组件或 HTML 元素的上下文。在大多数情况下，通过 this.$refs来访问其它组件的上下文是可以避免的。在使用时你需要注意避免调用了不恰当的组件 API，所以应该尽量避免使用 this.$refs。

## 3.路由配置

所有通过路由的页面都需要在router.js中注册才能push

## 4.vux样式修改

vux样式可在theme.less中复写，部分控件样式接口可参考：  
[https://github.com/airyland/vux/blob/v2/src/styles/variable.less](https://github.com/airyland/vux/blob/v2/src/styles/variable.less)

vux样式也可在vue文件的style中复写，如需引入文件请先引入，然后复写样式

```
<style lang='less'>
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

.vux-x-icon {
  fill: @red;
}
</style>
```

## 5.文件引入

如需引入jquery等文件可以参考如下方式：

> 模板工程已经集成了jquery，在工程中使用$符可以直接使用，下面是集成示例

**jQuery**

在当前项目的目录下（就是package.json），运行命令 `npm install jquery --save`  这样就将jquery安装到了这个项目中。  
然后修改webpack.base.conf.js\(在build文件下\)两个地方：

1.alias加入 'jquery': 'jquery'

```
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': 'jquery'
    }
  },
```

2.在module.exports的里面加入

```
{
   jQuery: "jquery",
   $: "jquery"
}
```

如：

```
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style',
  {
    name: 'less-theme',
    path: 'src/style/theme.less'
  },
  {
    jQuery: "jquery",
     $: "jquery"
  }
  ]
})
```

最后在应用页面中引入`import $ form 'jquery'`

参考：[https://segmentfault.com/a/1190000007020623](https://segmentfault.com/a/1190000007020623)

## 



