(window["webpackJsonpmatthias-ta-morrendo"]=window["webpackJsonpmatthias-ta-morrendo"]||[]).push([[0],{172:function(e,t,n){e.exports=n(375)},374:function(e,t,n){},375:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(49),c=n.n(o),u=n(35),i=n(19),s=function(e){var t=e.data,n=e.count,a=t.slice(Math.max(t.length-n,1));return r.a.createElement(i.d,{width:"95%",height:300},r.a.createElement(i.c,{data:a},r.a.createElement(i.a,{strokeDasharray:"3 3"}),r.a.createElement(i.e,{dataKey:"date"}),r.a.createElement(i.f,null),r.a.createElement(i.b,{type:"monotone",dataKey:"glicose",stroke:"#8884d8"})))},l=n(80),d=n.n(l),m=n(144),p=n(145),f=n.n(p),h=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.get("https://docs.google.com/spreadsheets/d/1rgUTX_90dFgdIWYj5lfooY2q8WEZfxmD6D78DsB6sew/export?exportFormat=csv").then(g));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(e){return e.data.split("\n").map(function(e){return e.split(",")}).map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return{date:n,glicose:parseInt(a)}})},v=n(146),w=function(e){var t=Object(v.a)(e).pop();return t&&t.glicose},b=function(e){if(void 0!==e)switch(!0){case e<80:return{dying:"SIM",but:void 0};case e>=80&&e<=120:return{dying:"N\xc3O",but:void 0};case e>120:return{dying:"N\xc3O",but:"mas ta se fudendo"};default:return}},E=(n(374),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(5),i=Object(u.a)(c,2),l=i[0],d=i[1];Object(a.useEffect)(function(){h().then(o)},[]);var m=function(e){var t=w(e);return b(t)}(n);return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Matthias ta morrendo?"),r.a.createElement("span",null,m&&m.dying),r.a.createElement("span",null,m&&m.but),r.a.createElement("input",{type:"range",min:1,max:100,value:l,onChange:function(e){return d(parseInt(e.target.value))}}),r.a.createElement(s,{data:n,count:l}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[172,1,2]]]);
//# sourceMappingURL=main.96a4d045.chunk.js.map