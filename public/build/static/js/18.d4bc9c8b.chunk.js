(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[18],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(66),r=a.n(n),l=a(60),i=a.n(l),o=a(61),s=a.n(o),c=a(62),u=a.n(c),d=a(63),f=a.n(d),m=a(0),p=a.n(m),v=a(70),h=a.n(v),E=function(e){function t(){i()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return f()(t,e),s()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,a){var n="on"+e,r=this.props.children;r.props[n]&&r.props[n](a),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.disabled,n=e.activeClassName,l=e.activeStyle,i=a?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},o=p.a.Children.only(t);if(!a&&this.state.active){var s=o.props,c=s.style,u=s.className;return!1!==l&&(l&&(c=r()({},c,l)),u=h()(u,n)),p.a.cloneElement(o,r()({className:u,style:c},i))}return p.a.cloneElement(o,i)}}]),t}(p.a.Component),y=E;E.defaultProps={disabled:!1}},118:function(e,t,a){"use strict";a(75),a(119)},119:function(e,t,a){},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(66)),r=u(a(60)),l=u(a(61)),i=u(a(62)),o=u(a(63)),s=u(a(70)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},f=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,a=e.className,r=e.children,l=e.mode,i=e.icon,o=e.onLeftClick,u=e.leftContent,f=e.rightContent,m=d(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return c.createElement("div",(0,n.default)({},m,{className:(0,s.default)(a,t,t+"-"+l)}),c.createElement("div",{className:t+"-left",role:"button",onClick:o},i?c.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},i):null,u),c.createElement("div",{className:t+"-title"},r),c.createElement("div",{className:t+"-right"},f))}}]),t}(c.Component);t.default=f,f.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},164:function(e,t,a){"use strict";a(75),a(64),a(165)},165:function(e,t,a){},166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(66)),r=m(a(76)),l=m(a(60)),i=m(a(61)),o=m(a(62)),s=m(a(63)),c=m(a(70)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),d=m(a(110)),f=m(a(65));function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a},v=/^[\u4e00-\u9fa5]{2}$/,h=v.test.bind(v);function E(e){return"string"===typeof e}function y(e){return E(e.type)&&h(e.props.children)?u.cloneElement(e,{},e.props.children.split("").join(" ")):E(e)?(h(e)&&(e=e.split("").join(" ")),u.createElement("span",null,e)):e}var g=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.children,l=t.className,i=t.prefixCls,o=t.type,s=t.size,m=t.inline,v=t.disabled,h=t.icon,E=t.loading,g=t.activeStyle,N=t.activeClassName,b=t.onClick,O=p(t,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),C=E?"loading":h,_=(0,c.default)(i,l,(e={},(0,r.default)(e,i+"-primary","primary"===o),(0,r.default)(e,i+"-ghost","ghost"===o),(0,r.default)(e,i+"-warning","warning"===o),(0,r.default)(e,i+"-small","small"===s),(0,r.default)(e,i+"-inline",m),(0,r.default)(e,i+"-disabled",v),(0,r.default)(e,i+"-loading",E),(0,r.default)(e,i+"-icon",!!C),e)),M=u.Children.map(a,y),j=void 0;if("string"===typeof C)j=u.createElement(f.default,{"aria-hidden":"true",type:C,size:"small"===s?"xxs":"md",className:i+"-icon"});else if(C){var x=C.props&&C.props.className,k=(0,c.default)("am-icon",i+"-icon","small"===s?"am-icon-xxs":"am-icon-md");j=u.cloneElement(C,{className:x?x+" "+k:k})}return u.createElement(d.default,{activeClassName:N||(g?i+"-active":void 0),disabled:v,activeStyle:g},u.createElement("a",(0,n.default)({role:"button",className:_},O,{onClick:v?void 0:b,"aria-disabled":v}),j,M))}}]),t}(u.Component);g.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},t.default=g,e.exports=t.default},167:function(e,t,a){e.exports=a.p+"static/media/1.73d3109f.jpg"},555:function(e,t,a){},556:function(e,t,a){e.exports=a.p+"static/media/address-b.f193ef75.svg"},581:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));a(164);var n=a(166),r=a.n(n),l=(a(118),a(120)),i=a.n(l),o=(a(64),a(65)),s=a.n(o),c=a(24),u=a(25),d=a(27),f=a(26),m=a(0),p=a.n(m),v=(a(555),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("user"))||{};console.log("user: ",e),this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return p.a.createElement("div",{className:"create-order-page"},p.a.createElement(i.a,{mode:"light",icon:p.a.createElement(s.a,{type:"left"}),onLeftClick:function(){return e.props.history.go(-1)}},"\u786e\u8ba4\u8ba2\u5355"),p.a.createElement("div",{className:"address"},p.a.createElement("img",{className:"addr-icon",src:a(556),alt:""}),p.a.createElement("div",{className:"info"},p.a.createElement("div",{className:"info-l"},p.a.createElement("div",{className:"contact"},p.a.createElement("span",{className:"username"},t.username),p.a.createElement("span",null,t.phone)),p.a.createElement("div",{className:"addr"},"\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02")),p.a.createElement("div",{className:"info-r"},p.a.createElement(s.a,{type:"right"})))),p.a.createElement("div",{className:"order"},p.a.createElement("div",{className:"title"},"\u5df2\u9009\u5546\u54c1"),p.a.createElement("div",{className:"order-item"},p.a.createElement("img",{src:a(167),alt:""}),p.a.createElement("div",{className:"order-info-r"},p.a.createElement("div",{className:"left"},p.a.createElement("div",{className:"title"},"\u6234\u5c14(DELL)\u6210\u5c315880\u82f1\u7279\u5c14\u9177\u777fi5\u5546\u7528\u529e\u516c\u53f0\u5f0f\u673a\u7535\u8111\u6574\u673a(i5-10400F 8G 256G 1T 2G\u72ec\u663e \u4e09\u5e74\u4e0a\u95e8)23.8\u82f1\u5bf8"),p.a.createElement("div",{className:"desc"},"\u5185\u5b58\u5bb9\u91cf:16G;\u786c\u76d8\u5bb9\u91cf:512G\u56fa\u6001\u786c\u76d8")),p.a.createElement("div",{className:"right"},p.a.createElement("div",{className:"price"},"10.00"),p.a.createElement("div",{className:"count"},"x1"))))),p.a.createElement("div",{className:"calculate"},p.a.createElement("div",{className:"amount"},p.a.createElement("span",null,"\u5546\u54c1\u91d1\u989d"),p.a.createElement("span",{className:"price"},"\xa5 10.00")),p.a.createElement("div",{className:"freight"},p.a.createElement("span",null,"\u8fd0\u8d39"),p.a.createElement("span",{className:"price"},"\xa5 0.00")),p.a.createElement("div",{className:"total-price"},"\u603b\u4ef7\uff1a",p.a.createElement("span",null,"\xa5 10.00")),p.a.createElement(r.a,{type:"primary"},"\u7acb\u5373\u652f\u4ed8")))}}]),n}(m.Component))},76:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a(185),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(e,t,a){return t in e?(0,l.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}}]);
//# sourceMappingURL=18.d4bc9c8b.chunk.js.map