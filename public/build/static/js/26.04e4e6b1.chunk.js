(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[26],{549:function(t,e,s){},579:function(t,e,s){"use strict";s.r(e);var a=s(54),i=s(55),r=s(57),n=s(56),o=s(0),l=s.n(o),c=s(82),h=s(25),u=s(79),y=(s(549),function(t){Object(r.a)(s,t);var e=Object(n.a)(s);function s(){var t;Object(a.a)(this,s);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state={history_list:[]},t.onSubmit=function(e){t.props.searchByKeyWord(e),t.props.history.push({pathname:"/listpage/"+e});var s=JSON.parse(localStorage.getItem("history_list"))||[];s.includes(e)||(s.unshift(e),localStorage.setItem("history_list",JSON.stringify(s)))},t.delHistory=function(){t.setState({history_list:[]}),localStorage.removeItem("history_list")},t}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("history_list"))||[];this.setState({history_list:t}),localStorage.setItem("history_list",JSON.stringify(t))}},{key:"render",value:function(){var t=this,e=this.state.history_list;return l.a.createElement("div",{className:"Search"},l.a.createElement(c.b,{onSubmit:this.onSubmit}),l.a.createElement("div",{className:"recent_search",style:{paddingLeft:10,paddingRight:10}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement("h3",{className:"title",style:{color:"#f00"}},"\u6700\u8fd1\u641c\u7d22"),l.a.createElement("span",{className:"iconfont del",onClick:this.delHistory},"\ue604")),l.a.createElement("div",{className:"history_list"},e.map((function(e,s){return l.a.createElement("div",{className:"history_list_item",key:s,onClick:function(){t.props.searchByKeyWord(e),t.props.history.push({pathname:"/listpage/"+e})}},e)})))))}}]),s}(o.Component));e.default=Object(h.b)((function(t){return{routes:t.routerReducer}}),(function(t){return{searchByKeyWord:function(e){t(Object(u.b)(e))}}}))(y)}}]);
//# sourceMappingURL=26.04e4e6b1.chunk.js.map