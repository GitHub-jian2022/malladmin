(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[24],{557:function(e,t,a){},558:function(e,t,a){e.exports=a.p+"static/media/defalutAvatar.63e13fb8.jpg"},583:function(e,t,a){"use strict";a.r(t);a(63);var n=a(64),o=a.n(n),l=(a(320),a(322)),s=a.n(l),r=(a(71),a(72)),c=a.n(r),i=a(55),m=a(56),u=a(156),p=a(58),f=a(57),h=a(0),d=a.n(h),v=a(2),E=a(83),y=(a(557),a(558)),N=a.n(y),g=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={messageCount:1,navs:[{title:"\u6536\u85cf",num:4,path:"/my/collection"},{title:"\u5173\u6ce8",num:3,path:"/my/follow"},{title:"\u8db3\u8ff9",num:3,path:"/my/browserecord"},{title:"\u4f59\u989d",num:666,path:"/my/purse"}],tools:[{pathname:"/my/order",text:"\u5f85\u4ed8\u6b3e",icon:d.a.createElement("i",{className:"iconfont",style:{color:"#f00",fontSize:28}},"\ue60e")},{pathname:"/my/order",text:"\u5f85\u53d1\u8d27",icon:d.a.createElement("i",{className:"iconfont",style:{color:"#f00",fontSize:28}},"\ue618")},{pathname:"/my/order",text:"\u5f85\u6536\u8d27",icon:d.a.createElement("i",{className:"iconfont",style:{color:"#f00",fontSize:28}},"\ue6b8")},{pathname:"/my/order",text:"\u5f85\u8bc4\u4ef7",icon:d.a.createElement("i",{className:"iconfont",style:{color:"#f00",fontSize:28}},"\ue61a")},{pathname:"/my/aftersale",text:"\u9000\u6b3e/\u552e\u540e",icon:d.a.createElement("i",{className:"iconfont",style:{color:"#f00",fontSize:28}},"\ue61b")}],user:{}},e.renderNavs=function(){return d.a.createElement("div",{className:"top_nav"},e.state.navs.map((function(t,a){return d.a.createElement("div",{className:"top_nav-item",key:a,onClick:function(){e.props.history.push({pathname:t.path,query:{data:t}})}},d.a.createElement("span",null,t.num),d.a.createElement("span",null,t.title))})))},e.RenderTools=function(){return d.a.createElement("div",{className:"tools"},e.state.tools.map((function(t,a){return d.a.createElement("div",{className:"tools_item",key:a,onClick:e.toolsItemClick.bind(Object(u.a)(e),{pathname:t.pathname,initialPage:a+1,text:t.text})},t.icon,d.a.createElement("div",null,t.text))})))},e.toolsItemClick=function(t){"/my/aftersale"!==t.pathname?e.props.history.push({pathname:t.pathname,initialPage:t.initialPage,text:t.text}):c.a.info("\u6b64\u529f\u80fd\u6682\u672a\u5f00\u901a",1)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("user"))||{};this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.messageCount,n=t.user;return d.a.createElement(E.g,null,d.a.createElement("div",{className:"top"},d.a.createElement("div",{className:"top_info"},d.a.createElement("div",{className:"top_l",onClick:function(){return e.props.history.push("/login")}},d.a.createElement("img",{src:n.avatar_url||N.a,alt:""}),n.username?d.a.createElement("div",{className:"userInfo"},d.a.createElement("div",{className:"username"},n.username||"\u8bf7\u767b\u5f55"),d.a.createElement("div",{className:"userNav"},d.a.createElement("div",null,n.gender||""))):d.a.createElement("div",{className:"userInfo"},d.a.createElement("div",{className:"username"},"\u8bf7\u767b\u5f55"))),d.a.createElement("div",{className:"top-r"},d.a.createElement("i",{className:"iconfont",onClick:function(){return e.props.history.push("/search")}},"\ue611"),d.a.createElement("i",{className:"iconfont set",onClick:function(){return e.props.history.push("/my/setup")}},"\ue602"),a>0?d.a.createElement(s.a,{text:a,overflowCount:99},d.a.createElement("i",{className:"iconfont",onClick:function(){c.a.info("\u6b64\u529f\u80fd\u6682\u672a\u5f00\u901a",1),console.log("message")}},"\ufe63")):d.a.createElement("i",{className:"iconfont",onClick:function(){c.a.info("\u6b64\u529f\u80fd\u6682\u672a\u5f00\u901a",1),console.log("message")}},"\ufe63"))),this.renderNavs()),d.a.createElement("div",{className:"MyOrder"},d.a.createElement("div",{className:"title"},d.a.createElement("h3",null,"\u6211\u7684\u8ba2\u5355"),d.a.createElement("div",{onClick:this.toolsItemClick.bind(this,{pathname:"/my/order",initialPage:0,text:"\u5168\u90e8"})},d.a.createElement("span",null,"\u67e5\u770b\u5168\u90e8"),d.a.createElement(o.a,{type:"right",size:"14",color:"#999"}))),this.RenderTools()))}}]),a}(h.Component);t.default=Object(v.g)(g)}}]);
//# sourceMappingURL=24.4a33e9f8.chunk.js.map