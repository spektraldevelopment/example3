(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),u=n.n(c),l=n(6),o=n(7),i=n(9),s=n(8),p=n(10),m=n(21),f=n(5),h=n(13),b=n.n(h),j=n(20),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={fruits:[]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/fruits");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({fruits:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fruits;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",null,e.name)}))))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,"About Page")))}}]),t}(a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:O}),r.a.createElement(f.a,{exact:!0,path:"/about",component:v}),r.a.createElement(f.a,{component:O})))}}]),t}(a.Component);u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.462050f2.chunk.js.map