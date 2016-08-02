在微信中，html被缓存然后资源啥的都被缓存了。 

想法：
	生成一个 version.js  内容是版本号
	然后公共的js里面也放上这一段 
	每次 ajax get 然后加随机数请求这个 version.js 
	然后比较内容是不是相等
	如果是相等那么就是一个版本
	如果不同那么就reload(true)

风险：
	由于reload的原因， 会导致 document.referre的改变。  业务逻辑中用到此属性的都会被影响。

例子：
先在当前文件夹下启动http-server（关于[http-server](https://github.com/indexzero/http-server)），然后在微信里面打开 `你的ip:8080` 访问几个页面，然后修改version.js的值，再访问其他页面。


目前看来解决了document.referrer的问题就ok了。

document.referrer的问题，其实可以通过跳转页面带参数解决。
可以通过跳转的时候 location.href='./b.html?source=a.html'; 
