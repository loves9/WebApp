
# 一、概述


# 二、环境配置和前期准备

#### 1.安装nodejs

vue插件应用工程是通过npm构建的，所以需要安装nodejs，安装后就可以使用npm了，安装相关问题请参考网上的安装教程。

官网地址：[https://nodejs.org/en/](https://nodejs.org/en/)

> 注：nodejs版本需8.0以上

#### 2.安装IDE

推荐使用 **Visual Studio Code** \(如何评价VSCode：[https://www.zhihu.com/question/29984607](https://www.zhihu.com/question/29984607)\)开发

#### 3.建立工程

* **已有工程**

svn或git拉取工程后执行：

```
npm install
```

npm会自动下载各个依赖包，然后执行：

```
npm run dev
```

成功后在浏览器中输入 localhost:8080 查看效果。

* **新建工程**

安装华融科技脚手架，全局安装执行：
```
npm install hrkj-cli@1.0.2 -g
```

安装脚手架成功后，创建工程执行：
```
hrkj create <your project name>
```
输入工程名字就自动创建工程了。

初始化工程执行：

```
npm install
```

npm会根据`package.json`中的配置自动下载各个依赖包，下载成功后执行：

```
npm run dev
```

成功后在浏览器中输入 localhost:8080 查看效果。`npm run dev` 可实时监控代码变更实现自动刷新页面。

> 注：
>
> 所有依赖包和相关模块都在`package.json`文件中（包括vue、webpack、等等），开发时可根据自身项目需要修改依赖。
>
> 在融讯通发布H5插件应用需要遵循融讯通平台规则，所以尽量使用TestDemo模板（或minxing插件）新建工程，以防上传到平台后无法识别。

# 三、vue工程说明
以华融科技脚手架创建的工程为例，建议先用脚手架建立工程，对照着看效果更佳。

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

此文件夹为`npm install`自动生成，可忽略

### src

所有业务功能相关的文件都存放在此文件夹内

* #### assets  
assets为资源文件夹，此文件夹内的资源会被webpack编译

* #### components  
公共组件文件夹

* #### config  
config文件夹存放的是参数配置文件

* #### http  
请求接口文件夹，存放所有网络请求接口
* #### module   
业务文件夹，按业务创建模块，创建模块执行：


```
npm run createModule <your module name>
```

就会自动创建模块了 
* #### router  
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
https://github.com/airyland/vux/blob/v2/src/styles/variable.less

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

**jQuery**

在当前项目的目录下（就是package.json），运行命令 `npm install jquery --save`  这样就将jquery安装到了这个项目中。
然后修改webpack.base.conf.js(在build文件下)两个地方：

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

参考：https://segmentfault.com/a/1190000007020623

**bootstrap**

参考地址：https://getbootstrap.com/docs/4.1/getting-started/webpack/


#### 学习参考资料
1.vue官网：https://cn.vuejs.org/

2.vux参考：https://doc.vux.li/zh-CN/

3.webpack参考：https://segmentfault.com/a/1190000006178770
