/*!build time : 2014-07-30 10:01:07 AM*/
KISSY.add("kg/anti-ie6/2.0.0/normal/index",function(a){!function(b,c){var d={template:['<div class="fuck-ie6-info fuck-ie6-info{r}">','<div class="fuck-ie6-container" id="fieContainer">','<div class="fuck-ie6-why" id="fieWhy" ><span class="sp1">\u60a8\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7\u66f4\u65b0\u9ad8\u7248\u672c\u6d4f\u89c8\u5668\uff01</span> <a href="javascript:;" class="sp2">\u67e5\u770b\u539f\u56e0&#62;&#62;</a></div>','<div class="fuck-ie6-show" id="fieWhyBack">','<span class="sp1">\u60a8\u4f7f\u7528\u7684IE6\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u4e0d\u4ec5\u5b58\u5728\u8f83\u591a\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u4e5f\u65e0\u6cd5\u5b8c\u7f8e\u652f\u6301\u6700\u65b0\u7684web\u6280\u672f\u548c\u6807\u51c6\uff0c\u51fa\u4e8e\u5b89\u5168\u548c\u4f53\u9a8c\u7684\u8003\u8651\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528\u4ee5\u4e0b\u9ad8\u7248\u672c\u6d4f\u89c8\u5668\u3002</span>','<a href="javascript:;" class="sp2">&#60;&#60;\u8fd4\u56de</a>',"</div>","</div>","</div>",'<div class="fuck-ie6-update">','<ul id="fieUpdates" style="padding-left:120px;">','<li style="margin-right: 35px;"><a target="_blank" href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie"><i class="b-ie"></i>\u5347\u7ea7IE</a>',"</li>",'<li><a href="http://download.taobaocdn.com/client/browser/download.php?pid=0080_2010"><i class="b-taobao"></i>\u4e0b\u8f7d\u6dd8\u5b9d\u6d4f\u89c8\u5668</a>',"</li>","</ul>",'<div class="fuck-ie6-keep"><a href="javascript:;" id="fieKeepIE6" >\u4e0d\u518d\u63d0\u793a</a></div>',"</div>",'<a href="javascript:;" class="fuck-ie6-close" id="fieClose" title="close"></a>'].join(""),style:".fuck-ie6-close,.fuck-ie6-update li a i{background:url(http://img04.taobaocdn.com/tps/i4/T1yTvUXbFlXXc8DhIo-320-101.png) no-repeat 0 0}.fuck-ie6{background-position:0 -1262px;position:absolute;border:1px solid #d9d9d9;background-color:#fafafa;width:576px;height:376px;top:0;left:0;overflow:hidden;font-size:14px;z-index:999999}.fuck-ie6-close{position:absolute;top:25px;right:25px;width:21px;height:21px;background-position:0 0;cursor:pointer}.fuck-ie6-close:hover{background-position:-21px 0}.fuck-ie6-info{position:absolute;width:520px;height:150px;left:30px;top:20px;overflow:hidden}.fuck-ie6-container{width:1040px;position:relative}.fuck-ie6-container a{text-decoration:none}.fuck-ie6-container a:hover{text-decoration:underline}.fuck-ie6-why,.fuck-ie6-show{float:left;width:520px;height:150px;cursor:pointer;position:relative}.fuck-ie6-why .sp1{font-size:26px;display:block;padding-top:50px}.fuck-ie6-why .sp2{position:absolute;right:0;top:100px;font-weight:bold;color:#06c}.fuck-ie6-show .sp1{font-size:18px;display:block;padding-top:30px;line-height:1.7;padding-bottom:10px}.fuck-ie6-show .sp2{display:block;color:#06c;font-weight:bold}.fuck-ie6-update{position:absolute;top:200px;left:30px}.fuck-ie6-update ul{padding:0;list-style:none;overflow:hidden;zoom:1;margin:0}.fuck-ie6-update li{float:left;padding:0;list-style:none}.fuck-ie6-update li a{display:block;text-align:center;width:120px;height:110px;color:#06c;font-weight:bold;text-decoration:none;font-size:13px}.fuck-ie6-update li a:hover{text-decoration:underline}.fuck-ie6-update li a i{display:block;width:80px;height:80px;margin:0 auto;background-position:0 -21px}.fuck-ie6-update li a i.b-taobao{background-position:-160px -21px}.fuck-ie6-update li a i.b-chrome{background-position:-80px -21px}.fuck-ie6-update li a i.b-browser360{background-position:-240px -21px}.fuck-ie6-keep{padding-top:15px}.fuck-ie6-keep a{color:black;font-weight:bold}.fuck-ie6-keep a:hover{color:#06c}",init:function(){if(!(b.cookie.indexOf("anti_ie6")>-1)){var a=this.template,c=this.style,d=(Math.round(10*Math.random())%3+1).toString(),e=b.body,f=b.getElementsByTagName("head")[0],g=e.offsetWidth,h=b.createElement("style");h.type="text/css",h.media="screen",h.styleSheet?h.styleSheet.cssText=c:h.appendChild(b.createTextNode(c)),f.appendChild(h),this.div=b.createElement("div"),this.wrapDiv=b.createElement("div"),this.wrapDiv.style.cssText="position:absolute;top:100px;",this.div.className="fuck-ie6",this.wrapDiv.style.left=(g-580)/2+"px",a=a.replace("{r}",d),this.div.innerHTML=a,this.wrapDiv.appendChild(this.div);var i=b.createElement("iframe"),j="z-index: 0; position: absolute; border:0; width: 576px; height:376px;left:0;top:0;";i.style.cssText=j,this.wrapDiv.appendChild(i),e.appendChild(this.wrapDiv),this.bindEvents()}},bindEvents:function(){var a=b.getElementById("fieWhy"),c=(b.getElementById("fieContainer"),b.getElementById("fieClose")),d=this,e=b.getElementById("fieUpdates"),f=b.getElementById("fieKeepIE6"),g=(e.getElementsByTagName("a"),b.getElementById("fieWhyBack"));a.onclick=function(){d.whyNoIe6Anim(0,-520,30)},g.onclick=function(){d.whyNoIe6Anim(-520,520,30)},c.onclick=function(){d.wrapDiv.parentNode.removeChild(d.wrapDiv)},f.onclick=function(){var a=new Date;a.setTime(a.getTime()+6048e5),b.cookie="anti_ie6=1; path=/; expires="+a.toGMTString(),d.wrapDiv.parentNode.removeChild(d.wrapDiv)}},whyNoIe6Anim:function(a,c,d,e,f){var g=f||0,h=arguments.callee,i=b.getElementById("fieContainer"),j=this;i.style.left=j.easeOut(g,a,c,d)+"px",d>g?(g++,setTimeout(function(){h.call(j,a,c,d,e,g)},10)):e&&e()},riseBrowser:function(a,b,c){var d=c||0,e=0,f=35,g=25,h=arguments.callee,i=this;0===d&&(a.animRunningRise=!0),a.style.bottom=i.backOut(d,e,f,g,2)+"px",g>d?(d++,setTimeout(function(){h.call(i,a,b,d)},10)):(b&&b(),a.animRunningRise=!1)},fallBrowser:function(a,b,c){var d=c||0,e=35,f=-35,g=20,h=arguments.callee,i=this;0===d&&(a.animRunningFall=!0),a.style.bottom=i.easeOut(d,e,f,g)+"px",g>d?(d++,setTimeout(function(){h.call(i,a,b,d)},10)):(b&&b(),a.animRunningFall=!1)},easeOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},backOut:function(a,b,d,e,f){return f==c&&(f=1.70158),d*((a=a/e-1)*a*((f+1)*a+f)+1)+b}};a.ready(function(){d.init()})}(document)});