# html-css 课堂笔记

## html文档

### 一个html5文件它的结构是什么？

- 文档声明 `<!DOCTYPE html>`
- 根元素 `html`
- 根元素中包含 `head` 和 `body`
- `head` 中包含 `charset` 编码、标题等等。
- `body`中是写代码的。

### 可以使用emmet插件快写html5文档

输入一个英文状态的`!`，然后按`tab`，即可快速创建`html5`文档。

### gbk编码和utf-8编码的区别

`gbk` 国标码，仅包含汉字、符号、大小写英文字母、数字。
`utf-8` 万国码，包含`gbk`，还包含亚洲一些文字和特殊符号。

当前最流行用`utf-8`,设置是再`head`区域

```html
<head>
  <meta charset="utf-8" />
</head>
```

### 浏览器内核

1. `Trident` 三叉戟：`IE`、`360`安全浏览器（兼容模式）
2. `Gecko` 壁虎：`Firefox` 火狐
3. `Webkit`：Chrome、safari、Opera、360、腾讯

### 浏览器兼容性要求

1. 最低兼容要求：`Chrome`
2. 最高兼容要求：`IE8+`
3. `IE8-`不考虑

### 浏览器市场占有率

1. `Chrome`
2. `Safari`
3. `IE`
4. `UC`
5. `Firefox`

### PC电脑分辨率市场占有率

1. `1920x1080`
2. `1366x768`
3. `1440x900`
4. `1600x900` 
5. `1280x720`

## html 标签

### h1-h6 标题

```html
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题6</h6>
```

#### 属性

##### align 对齐

1. `left`：左对齐
2. `center`：居中对齐
3. `right`：右对齐
4. `justify`：两端对齐

##### 其他属性 id、name、class、style、title等

> 注意：
> 一个页面只允许一个`h1`
> 不能滥用`h2`
> 合理使用标题标签
> 标题它默认有上边距、下边距

### p 段落

`p` 段落标签

```html
<p>段落</p>
```

##### align 对齐

1. `left`：左对齐
3. `right`：右对齐
4. `justify`：两端对齐

> 注意：
> `p` 默认有上边距、下边距

##### 其他属性 id、name、class、style、title等

```html
<!-- 不允许这样包裹 -->
<p>段落
  <h1>标题1</h1>
</p>
```
不能用`p`标签去包裹1个标题标签，会被提取到外面。

```html
<!-- 允许这样包裹 -->
<h1>标题1
  <p>段落</p>
</h1>
```

### a 超级链接

超级链接默认颜色是蓝色、带下划线

```html
<a href="#">链接</a>
```
用于页面中跳转

> `#` 表示是一个空链接

注意当是外链接时，请记得要加上协议部分，不然无法访问

```html
<!-- 错误的 -->
<a href="www.baidu.com">链接</a>

<!-- 正确的 -->
<a href="http://www.baidu.com">链接</a>
```

有时候也会使用超级链接作为一个按钮使用

```html
<a>提交</a>
<button>确认</button>
```

有时候为了使得单击区域扩展

```html
<a href="#">
  <h1>标题1</h1>
  <p>段落</p>
</a>
```

#### 属性

##### href 链接

```html
<a href="#">链接</a>
```

超级链接打开邮箱

```html
<a href="mailto:2874219090@qq.com">联系我</a>
```

超级链接拨打电话

```html
<a href="tel:18579105168">联系我</a>
```

##### target 目标

1. `_self`： 在当前页面打开
2. `_blank`：在新窗口打开
3. `_parent`：在父窗口打开
4. `_top`：在顶级父窗口打开
5. `framename`：自定义窗口打开

##### title 描述文字

```html
<a href="#" title="这是一个超级链接">我的主题</a>
```
划过的时候，会弹出一个小提示。

#### 单击超级链接显示在iframe中

1. 分别新建`home.html`、`about.html`两个页面，`body`中的内容随意。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <h1>首页页面</h1>

</body>
</html>
```

2. 新建`连接.html`页面，代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<a href="home.html" target="main">首页</a> |
<a href="about.html" target="main">关于我们</a> 
<hr>
<iframe name="main" src="home.html" width="500" height="300"></iframe>

</body>
</html>
```

3. 注意 需要给`iframe` 取一个名 (`name="main"`)，然后`target`等于`main`

#### 超级链接有四个状态

顺序按照 `L-V-H-A` 排序

1. `a:link` : 默认状态
2. `a:visited`: 单击过后的状态
3. `a:hover`：划过时的状态
4. `a:active`：单击一瞬间的状态

#### 外链和内链接区别

```html
<!-- 外连接 -->
<a href="http://www.baidu.com">百度</a>

<!-- 内连接 -->
<a href="home.html">首页</a>
```

#### 锚点链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<a href="#home">首页</a> |
<a href="#course">课程</a> |
<a href="#teach">教学</a>

<hr>

<!-- <a name="home"></a> -->
<h2 id="home">首页</h2>
<div style="height: 2000px;"></div>

<h2 id="course">课程</h2>
<div style="height: 2000px;"></div>

<h2 id="teach">教学</h2>
<div style="height: 2000px;"></div>

</body>
</html>
```

锚点链接时超级链接`href`使用`#锚点名`进行跳转，

```html
<a href="#about">关于我们</a>

<div id="about">
  关于我们内容
</div>

<!-- 也看使用以下形式关联 -->

<a name="about">
  关于我们内容
</a>
```

#### 相对路径、绝对路径、本地路径、物理路径

##### 物理路径
 ```
 D:\scedu\uploads\f5c66cb6-348e-4fd4-a097-93ff4ab46901.jpg
 ```

##### 本地路径

```
file:///D:/scedu/uploads/68e5933a-7b21-4940-a87a-cdb66609bd6c.jpg
```

##### 绝对路径

以根目录为参考系的路径

```
<a href="/about/1.html">链接</a>
```

示例

```
cosy 根目录 /

cosy/src/pages/1.html

需要指向 cosy/public/index.html

//1.html

<a href="/public/index.html">链接</a>
```

##### 相对路径

表示以当前目录为参考系

```html
<a href="../../images/my.html">链接</a>
```

> `../` 表示往上一级目录（文件夹）
> `./` 表示当前目录（文件夹）
> 再`html`中`./`可以省略

### 图像

```html
<img src="路径">
```

#### 图像属性

##### src 路径

1. 本地路径，但是必须以本地方式访问页面，服务器方式访问不能显示。

```html
<!-- 必须以file:///本地的方式访问，不然图片将不显示 -->
<img src="file:///D:/Users/Desktop/abc.jpg" alt="">
```

2. 绝对路径

绝对路径是以根目录为参考的路径

```html
<!-- 必须以服务器方式访问，若以`file:///`本地访问则无非显示 -->
<img src="/3.jpg" alt="">
```

3. 相对路径

```html
<!-- 本地方式浏览和服务器方式浏览均支持，也推荐方案 -->
<img src="3.jpg" alt="">
```

##### jpg、png、gif、svg和webp图片格式区别

1. `jpg`：有损压缩格式图片，是位图，通常用于产品、风景、人物等色彩丰富的图片。
2. `png`：无损格式图片，图片画质清晰，通常支持`alpha`通道透明，通常用于小图标、或者产品图片。
3. `gif`：256色，显示的色域很窄，所以一般用于图标，或者颜色简单的图片，其次它可以做动图。
4. `svg`：svg是矢量图片，同时支持图片动画。
5. `webp`：这是谷歌发明的一款优于`jpg`的图片格式，`chrome`可以预览。



##### alt 图片描述

当图片不能显示的时候，会出现友好提示性的文字，其次它可以方便搜索引擎，识别图片的名称，方便收录。

```html
<img src="3.jpg" width="100" alt="背影">
```

经典面试题：

`title`和`alt`的区别是什么？

答： `title`是划过的时候弹出小提示，而`alt`是图片不能显示的时候给出的描述文字。

`href` 和 `src`的区别是什么？

答：

`href` 表示超文本引用（`hypertext reference`），在 `link`和`a` 等元素上使用
`src` 表示来源地址，在 `img`、`script`、`iframe` 等元素上

`src` 的内容，是页面必不可少的一部分，是引入。

`href` 的内容，是与该页面有关联，是引用。

区别就是，引入和引用。


##### align 对齐

1. `left` 水平左对齐
2. `right` 水平右对齐
3. `baseline` 垂直基线对齐 默认对齐方式
4. `bottom` 垂直底部对齐
5. `top` 垂直顶部对齐
6. `middle` 垂直居中
7. `absmiddle` 绝对垂直居中

查看浏览器兼容性网站

```
https://www.caniuse.com/
```

##### hspace 图片的横向距离

```html
<img src="images/1.png" hspace="20"> 
```
图片左右都会有间距

##### vspace 图片的纵向距离

```html
<img src="images/1.png" vspace="20"> 
```
图片上下都会有间距

##### object-fill 图像填充效果

1. `fill`：默认的，定义了宽高，图片可能会挤压变形
2. `contain`： 等比例缩放，会出现露底的情况。
3. `cover`：封面模式，保证完整填充，但是可能会图片四周会裁切
4. `none`：图片不会变形，但是会被裁剪
5. `scale-down`：最终呈现的是尺寸比较小的那个。

#### width宽度，height 高度

1. 只设置了`width`，`height`自适应
2. 只设置了`height`，`width`自适应

如果是像素，则直接填数字即可，还支持百分百（%）单位

```html
<img src="images/1.png" width="50%" height="100">
```

`auto`：可以设置宽和高为自动，如下

```html
<img src="images/1.png" width="50%" height="auto">
```

#### min-width, max-width，min-height，max-height

- `min-width` 最小宽度
- `max-width` 最大宽度
- `min-height` 最小高度
- `max-height` 最大高度

图片自适应写法，当图片能完全显示，则完全显示，不能完全显示，则缩小。

```html
<img 
src="video1.jpg"
style="max-width: 100%;height: auto;"
>
```

> 注意： `max-width`中的`100%`指的是图片的实际宽度

> 这里没有定义 `width`，没有定义宽度，就是图片的实际宽度

> `height: auto` 是指图片根据宽度自适应

##### border 图像边框

```html
<img 
src="FruitStore.jpg"
width="200"
height="200"
border="1"
>
```

> 注意：当你给图片加上超级链接时，再`IE11-`以下浏览器会出现蓝色的边框，解决方案就是给`img`边框设置为`0`即可

```html
 <a href="#">
  <img 
  src="3.jpg"
  width="50"
  border="0"
  >
 </a> 
 ```

#### 图像映射

## 空元素

### 空元素有那些？

`<br>`、`<hr>`

## html5书写规范

1. 一律使用小写字母

```html
<!-- 不推荐 -->
<P>段落</P>

<!-- 推荐 -->
<p>段落</p>
```

2. 属性使用双引号

```html
<!-- 不推荐 -->
<h1 align='center'>标题</h1>
<h1 align=center>标题</h1>

<!-- 推荐 -->
<h1 align="center">标题</h1>
```

3. 单标签不使用`/`

```html
<!-- 不推荐 -->
<br />

<!-- 推荐 -->
<br>
```
4.双标签成对使用

## 文本格式化

### 加粗 b strong

```html
<b>加粗</b>
<strong>加粗</strong>
```

`b` 加粗没有语义，只是加粗效果
`strong` 有语义，表示强调

### 斜体 i em

```html
<i>斜体</i>
<em>斜体</em>
```

`i` 斜体没有语义，只是斜体效果
`em` 有语义，表示强调

### 中划线 s del

```html
<s>无用的文本</s>
<del>被删除的文本</del>
```

### 下划线 u ins

```html
<u>下划线</u>
<ins>插入文本</ins>
```
### 上标 sup

```html
x<sup>2</sup>
```

### 下标 sub

```html
o<sub>2</sub>
```

### 高亮 mark

```html
这些<mark>HTML</mark>标签被称为格式化标签
```

### 代码 code

<code>var a = 10;</code>

### 小号文本 small 

```html
<h2>
大标题 <small>副标题</small>
</h2>
```

### 大号文本 big 

```html
<h2>
英文标题 <big>中文标题</big>
</h2>
```

### 引用文本 q

```html
<q>既然求了雨，就要承受泥泞！</q>
```

### 键盘输入 kbd

```html
<kbd>键盘输入</kbd>
```

#### 面试题：`b strong` 加粗 和 `i em` 斜体 它们之间的区别是?

`b` 无语义，仅表示加粗而已。
`strong` 有语义，仅表示强调。

`i` 无语义，仅表示斜体而已。
`em` 有语义，仅表示强调。


### pre 预格式文本 

`pre` 它可以保留 缩进、换行、空格、制表符等效果，通常用于显示**多行源代码**。

```html
<pre>
&lt;ul&gt;
  &lt;li&gt;导航&lt;/li&gt;
  &lt;li&gt;导航&lt;/li&gt;
&lt;/ul&gt;
</pre>
```

## 块级标签和行级标签

### block 什么是块级标签？

1. 独占一行
2. 可以设置宽高边框背景颜色等

具有代表性的标签有 `div`、`h1-h6`、`p`、`ul`、`li`、`headr` 等

### inline 什么是行级标签？

1. 可以并列显示在一起
2. 宽度和高度是根据内容决定的

具有代表性的标签有 `a`、`i`、`u`、`em`、`b`、`code`、`s`、`span`、`mark`等

### inline-block 什么是行块级标签？

1. 可以并列显示在一起
2. 也有具体的宽高边框等块级属性

具有代表性的标签有 `img`、`iframe`、`canvas`、`svg`、`video`、`textarea`、`input`等。

## 头部head

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>江西思诚科技有限公司</title>
  <meta name="keywords" content="网站关键，多个关键字用英文逗号分割">
  <meta name="description" content="网站描述一般50-60个字">
</head>
```

- `<meta charset="UTF-8">`：编码
- `<meta name="viewport"`：视口，控制缩放比例
- `<title>江西思诚科技有限公司</title>`：页面标题
- `<meta name="keywords"`：关键字
- `<meta name="description"`:：描述

什么是`SEO`中`TDK`是指什么？有什么意义？

1. `T`表示`title`标签中标题设置
2. `D`表示`<meta name="description"`设置
3. `K`表示`<meta name="keywords"`设置

### base 元素

`<base>` 标签描述了基本的链接地址/链接目标，该标签作为`HTML`文档中所有的链接标签的默认链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <base href="http://www.baidu.com/" target="_blank">
</head>
<body>

<a href="about.html">关于我们</a>
<a href="home.html">首页</a>

</body>
</html>
```

### link 元素

语法
```html
<link rel="stylesheet" href="样式文件.css">
```

示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <base href="http://www.baidu.com/" target="_blank">
</head>
<body>
```

> 特别注意：`<base>`会影响`link`中`href`，所以一定把`base`放在`meta`最后面


### style 元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1{
      color: red;
    }
  </style>
</head>
<body>
  <h1>标题1</h1>
</body>
</html>
```

### refresh 页面刷新

页面根据给定的秒数定时刷新

```html
<meta http-equiv="refresh" content="5">
```
`content`：填入的是秒，5表示5秒。

示例

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <meta http-equiv="refresh" content="5">
  <meta name="author" content="龚贤">
</head>
<body>
<h1>提交成功！</h1>
</body>
```

### 地址栏显示小图标

```html
<link rel="shortcut icon" href="图标.ico">
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="shortcut icon" href="images/seecen.ico">
</head>
```

## 样式

### 超级链接4种状态样式美化

以下分别定义了默认、单击过后、划过、单击一瞬间的状态效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 默认 */
    a{
      color: blueviolet;
      text-decoration: none;
    }
    /* 单击过后 */
    a:visited{
      color: yellow;
    }
    /* 划过 */
    a:hover{
      color:brown;
    }
    /* 单击一瞬间 */
    a:active{
      color: white;
    }
  </style>
</head>
<body>

<a href="#">链接</a>

</body>
</html>
````

### 行内样式

```html
<span style="background-color: red;color: white;">文本</span>
```

### 两端对齐效果

> `IE`和`Firefox`浏览器不支持`text-align: justify;`

```html
<style>
  p{
    width: 400px;
  }
  .dq{
    text-align: justify;
  }
</style>

<p>创立于1992年的菲姿时尚集团是集研发、生产、品牌管理、服务于一体的大型现代化品牌企业。28年来集团始终坚持国际化的品牌经营理念，现已发展成为一家多品牌、集团化运作的知名时尚品牌企业。
</p>

<hr>

<p class="dq">创立于1992年的菲姿时尚集团是集研发、生产、品牌管理、服务于一体的大型现代化品牌企业。28年来集团始终坚持国际化的品牌经营理念，现已发展成为一家多品牌、集团化运作的知名时尚品牌企业。
</p>
```

## table 表格

`table` 是一套组合标签，表格有表格头部`thead`、表格身体`tbody`、表格脚部`tfoot`，而表格头部又表格表头`th`，表格身体tbody 又有表格单元格`td`，具体如下。

```html
 <table border="1">
    <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>分数</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>10001</td>
        <td>张三</td>
        <td>60</td>
      </tr>
      <tr>
        <td>10002</td>
        <td>李四</td>
        <td>70</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td>总分</td>
        <td>130</td>
      </tr>
    </tfoot>
  </table>
```

以上代码可以通过快写的方式实现

```html
table[border="1"]>(thead>tr>th*3{字段$})+(tbody>tr>td*3{数据$})+(tfoot>tr>td*3{数据$})
```

### 表格属性  2020-7-10

#### border 边框

```html
<table border="1">
```

#### bgcolor 背景颜色

```html
<table border="1" bgcolor="blue">
```

#### align 对齐

1. `left`：左对齐
2. `center`：居中对齐
3. `right`：右对齐

#### width 宽度

单位仅支持百分百%和像素(可以不写`px`)

```html
<table widt="100">
<table widt="100%">
```

#### height 高度

需要注意表格的高度是作用于 `tbody`上的

```html
<table height="200">
```

#### cellpadding 字段th 和 单元格td的内填充距离

```html
<table cellpadding="10">
```
`th`和`td`四周会填充`10px`

#### cellspacing 字段th 和 单元格td的外间离

```html
<table cellspacing="10">
```
`th`和`td`四周外部间距`10px`

### 表格标签

1. `table` 表格容器
2. `thead` 表格表头
3. `tr` 表格行
4. `th` 表格字段，主要表现为加粗、居中
5. `tbody` 表格主体
6. `td` 表格单元格
7. `tfoot` 表格脚部
8. `caption` 表格标题，主要表现为表格上方居中显示
9. `colgroup` 表格列组的定义
10. `col` 表格列的定义


表格表头固定实例

```html
 
  <table border="1" cellspacing="0" cellpadding="10" width="500">
      <colgroup>
        <col width="100">
        <col>
        <col width="100">
      </colgroup>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>分数</th>
      </tr>
  </table>

  <div style="display: inline-block;height: 100px; overflow: auto;">

    <table border="1" cellspacing="0" cellpadding="10" width="500">
        <colgroup>
          <col width="100">
          <col>
          <col width="100">
        </colgroup>
        <tr>
          <td>10001</td>
          <td>张三</td>
          <td>60</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>
        <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>      <tr>
          <td>10002</td>
          <td>李四</td>
          <td>70</td>
        </tr>
    </table>

  </div>
```

### 表格th、td属性

### align 水平对齐

1. `left` : 左对齐
2. `center`: 居中对齐
3. `right`: 右对齐

```html
<tr>
  <td  align="center">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
我们也可以再tr上加上对齐，表示这一行都是应用此对齐

```html
<tr>
  <td>10001</td>
  <td align="center">张三</td>
  <td>60</td>
</tr>

<!-- 整行水平居中 -->

<tr align="center">
  <td>10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### valign 垂直对齐

1. `top` : 顶对齐
2. `middle`: 居中对齐
3. `bottom`: 底对齐

```html
<tr>
  <td>10001</td>
  <td valign="top">张三</td>
  <td>60</td>
</tr>

<!-- 整行顶对齐 -->

<tr valign="top">
  <td>10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
### bgcolor 背景颜色

```html
<tr>
  <td align="center" bgcolor="#ff0000">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>

<!-- 也可以写在tr，表示整行都是居中 着色 -->
<tr align="center" bgcolor="#ff0000">
  <td >10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### nowrap 强制不换行

```html
<tr>
  <td nowrap>张三张三张三张三张三张三张三</td>
  <td>张三</td>
  <td>60</td>
</tr>
```
### width 单元格宽度

```html
<tr>
  <td width="200">10001</td>
  <td >张三</td>
  <td>60</td>
</tr>
```

### height 单元格高度

```html
<tr>
  <td >10001</td>
  <td height="500">张三</td>
  <td>60</td>
</tr>
```

> 注意：当存在连续的字母或者数字，那么它是不会换行的，请看下面的代码。

```html
<tr>
  <td>1111111111aaaaaaaaaa11</td>
  <td>张三</td>
  <td>60</td>
</tr>
```

### colspan 合并列

```html
<tr>
  <td>10001</td>                                                     
  <td>张三</td>
  <td>60</td>
</tr>
<tr>
  <td colspan="3">合并列</td>
</tr>
```

暂时无数据 示例 

```html
<table border="1" cellspacing="0" cellpadding="10" width="500">
    <tr>
      <th width="100">编号</th>
      <th>姓名</th>
      <th width="100">分数</th>
    </tr>
    <tr>
      <td colspan="3" align="center">暂无数据！</td>
    </tr>
</table>
```

### rowspan 合并行

```html
<tr>
  <td rowspan="2">10001</td>
  <td>张三</td>
  <td>60</td>
</tr>
<tr>
  <td>李四</td>
  <td>70</td>
</tr>
```

同时应用合并列和合并行示例

```html
<table border="1" cellspacing="0" cellpadding="10" width="500">
    <tr>
      <th width="100">编号</th>
      <th>姓名</th>
      <th width="100">分数</th>
    </tr>
    <tr>
      <td rowspan="2">10001</td>
      <td colspan="2">张三</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>60</td>
    </tr>
</table>
```

## HTML 列表

列表分三种情况

1. 有序列表
2. 无序列表
3. 自定义列表

### 有序列表

有序列表默认是数字

```html
<ol>
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```

#### 有序列表 type 属性

1. `1`：表示数字
2. `A`：大写字母
3. `a`：小写字母
4. `I`: 大写罗马数字
5. `i`：小写罗马数字

```html
<ol type="a">
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```

#### start 起始位置

```html
<ol type="1" start="50">
  <li>本科</li>
  <li>大专</li>
  <li>中专</li>
</ol>
```
序号从50开始，依次是50,51,52

### HTML无序列表

有序列表默认是实心圆

```html
<ul>
  <li>文本1</li>
  <li>文本2</li>
  <li>文本3</li>
</ul>
```

#### 无序列表 type 属性

1. `disc`：默认值。实心圆。
2. `circle`：空心圆
3. `square`：实心方块
4. `none`：无

### 列表嵌套

多级树形菜单效果

```html
<ul type="none">
  <li>
    一级菜单1
    <ul type="none">
      <li>二级菜单1
        <ul type="none">
          <li>三级菜单1</li>
          <li>三级菜单2</li>
        </ul>
      </li>
      <li>二级菜单2</li>
      <li>二级菜单3</li>
    </ul>
  </li>
  <li>一级菜单2</li>
  <li>一级菜单3</li>
</ul>
```

### 自定义列表

```html
<dl>
  <dt>问题1</dt>
  <dd>答案1</dd>
  <dt>问题2</dt>
  <dd>答案2</dd>
</dl>
```

常用于`faq`类似于问与答。

## HTML 区块

### 区块元素

1. `div`：常用于排版，可以包含很多其他元素，块级元素。
2. `span`：常用于包裹文字，用于修饰文字，行级元素。
3. `h1-h6`：标题1~标题6
4. `p`：段落标签，它可以包裹行级或者行块级标签。
5. `ul ol dl`：列表标签
6. `table`：表格标签

表格布局版式示例

```html

<table border="0" width="800" height="500" cellspacing="0" cellpadding="10">
  <thead>
    <tr bgcolor="#FFA500">
      <th colspan="2">
        <h1>网页的主要标题</h1>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="150" bgcolor="#FFFDCF" valign="top">
        <ul type="none" style="padding-left: 10px;">
          <li>首页</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </td>
      <td bgcolor="#EEEEEE" valign="top">主体内容</td>
    </tr>
  </tbody>
  <tfoot>
    <tr bgcolor="#FFA500">
      <td colspan="2">
        <p align="center">&copy; 版权所有 侵权必究</p>
      </td>
    </tr>
  </tfoot>

</table>
```

## HTML 表单

### form 表单

用于包裹各种表单组件的容器，一个页面可以用多个`form`

```html
<form>
  <input type="text"> <br>
  <input type="password"> <br>
  <button>登录</button>
</form>
```

### form 属性

`form` 块级标签

1. `name` 表单名称，用于后期`js`查找

```html
<form name="myform">
  <input type="text">
</form>
```

2. `action` 表单提交的地址，这个地址通常是后端地址，用于处理收集表单信息。

```html
<form  action="login.php">
  <input type="text"> <br>
  <input type="password"> <br>
  <button>登录</button>
</form>
```

3. `method`：表单提交的方式，主要2种 `GET`和`POST`，默认不写是`GET`。

`GET`：通常用于小型数据收集，数据明文再地址栏上传输，大小不能超过`4kb`。

`POST`：通常用于大型且对安全性有要求的数据提交，理论不限制传输大小，会因为连接超时中断传输。

```html

  <!-- method 主要2种 GET 和 POST -->
  <form method="GET">
    <input name="a" type="text"> <br>
    <input name="b" type="password"> <br>
    <button>登录</button>
  </form>
```

4. `enctype`: 表单传输类型，有`3`种 

`application/x-www-form-urlencoded` 默认的，以字符串的方式传

`multipart/form-data` 以二进制的方式传，一般用于上传大文件。

`text/plain` 纯文本的方式传，小型数据。


### HTML 表单控件（组件）

#### input text 单行文本框

```html
<input type="text" size="30" maxlength="5" autocomplete="off">
```
1. `type`: 类型，`text`表示文本框，显示明文
2. `size`: 字宽，通常决定文本框的宽度，但是它不太准确，我们经常用css来控制宽度
3. `maxlength`: 字符最大能输入的个数
4. `autocomplete`：自动完成，会显示用户输入过的内容，有`2`个值：`on`表示开启 `off`表示关闭
5. `autofocus`：自动获取的焦点，就是光标停留在文本框中
6. `disabled`: 禁用失效的文本框，表现为暗淡些
7. `readonly`：只读的文本框，外观没有什么变化，可以复制，但是不能输入。
8. `value`：是指文本框的默认值，用户输入的值，通常用于收集信息。
9. `placeholder`：输入框提示性文字，，注意`IE10-`不支持。

#### input password 单行密码框

```html
<input type="password" size="30" maxlength="5">
```
1. `type`: 类型，`password`表示文本框，显示密文
2. `size`: 字宽，通常决定文本框的宽度，但是它不太准确，我们经常用css来控制宽度
3. `maxlength`: 字符最大能输入的个数
4. `autofocus`：自动获取的焦点，就是光标停留在文本框中
5. `disabled`: 禁用失效的文本框，表现为暗淡些
6. `readonly`：只读的文本框，外观没有什么变化，可以复制，但是不能输入。
7. `value`：是指文本框的默认值，用户输入的值，通常用于收集信息。
8. `placeholder`：输入框提示性文字，注意`IE10-`不支持。