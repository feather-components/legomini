# About legomini:超轻量web前端UI框架 

>  适用于管理后台的前端UI模块化框架(css+html+js)

>  独立的样式解决方案legomini.css; 解决：选择器繁琐冗长；命名冲突；层级结构不清晰；代码难以复用;

>  约定模块化的样式命名和组织规范;

>  建议的DTD: HTML5 文档类型

>  当前版本：v1.0


## 特性

> - iconfont 而不是图片：大胆使用图形按钮等ui组件而不必担心因请求过多而影响性能

> - 实现移动端H5样式的最基础需求


## 兼容性

> - 暂不支持ie8及以下版本


## 安装
    bower install feather-components/datagrid2 
    feather2 install feather-components/datagrid2
    
    
## 引入
普通引入

```html
        <link rel="stylesheet" href="dist/css/legomini.min.css">
        <script src="dist/js/rem.js"></script>
```

feather2引入
```html
    require.async("legomini");
```

