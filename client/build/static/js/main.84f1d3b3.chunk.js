(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(41),r=c.n(s),i=(c(108),c(12)),o=(c(109),c(110),c(141),c(3)),j=Object(n.createContext)({}),l=c(150),b=c(148),d=c(15),u=c(96),h=c(156),O=c(151),x=c(97),m=c(146),f=c(102),p=c(95);c.n(p).a.config();var g,v={apiKey:"AIzaSyCV1S46-jZ-Xd21HVeWr10ZlfyCi78nXAw",authDomain:"bankify-capstone.firebaseapp.com",projectId:"bankify-capstone",storageBucket:"bankify-capstone.appspot.com",messagingSenderId:"676135899184",appId:"1:676135899184:web:c096fc5caa04eea7a15df5"};var w=c(35),y=c(1),N="undefined"!==typeof window?g||(g=f.a.initializeApp(v)):null,k=Object(w.c)(N);function C(){return k}var S=c(2),A=c.n(S),B=c(5),D=c(68),I=c.n(D);C().currentUser;var L=C();function P(e,t,c,n){Object(w.b)(L,t,c).then((function(e){return n("You are now registered!","success"),e})).then((function(t){return Object(w.h)(t,{displayName:e,profileURL:"https://ui-avatars.com/api/?name=".concat(e)}).catch((function(e){return n(e.message,"danger","Name not filed!")})),t})).then((function(e){(function(e){var t=new Headers;t.append("Authorization","Bearer ".concat(e.accessToken)),fetch("/api",{method:"POST",headers:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))})(e).catch((function(e){return n(e.message,"danger","Database Failure")}))})).catch((function(e){return n(e.message,"danger","Registration Failed!")}))}function W(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),a=c[0],s=c[1];return{value:a,onChange:function(e){s(e.target.value)},clear:function(){return s(e)}}}function T(e){var t=e.label,c=e.ac,n=e.state,a=e.type,s=n.value,r=n.onChange;return Object(y.jsx)("input",{type:a||"text",placeholder:t,autoComplete:c,className:"form-control mb-3",value:s,onChange:r,required:!0})}function E(){var e=Object(n.useContext)(j).createAlert,t=W(""),c=W(""),a=W(""),s=W("");return Object(y.jsx)(u.a,{sm:8,lg:7,xl:6,children:Object(y.jsxs)(h.a,{style:{maxWidth:"36rem",minWidth:"18rem"},children:[Object(y.jsx)(h.a.Header,{children:Object(y.jsx)("h2",{children:"Register Account"})}),Object(y.jsx)(h.a.Body,{className:"justify-content-center align-item-center",children:Object(y.jsxs)(O.a,{onSubmit:function(n){if(n.preventDefault(),!(a.value===s.value))return s.clear(),void e("Passwords do not match!","danger");P(t.value,c.value,a.value,e)},className:"mb-3",children:[Object(y.jsxs)(O.a.Group,{className:"mb-3",children:[Object(y.jsx)(O.a.Label,{className:"mb-3",children:"Name"}),Object(y.jsx)(x.a,{controlId:"floatingInput",label:"Account Name",className:"mb-3",children:Object(y.jsx)(T,{label:"Account Name",ac:"name",state:t})})]}),Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Label,{children:"Email"}),Object(y.jsx)(x.a,{controlId:"floatingInput",label:"Email",className:"mb-3",children:Object(y.jsx)(T,{label:"Email",ac:"email",state:c})})]}),Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Label,{children:"Password"}),Object(y.jsx)(x.a,{controlId:"floatingPassword",label:"New Password",className:"mb-3",children:Object(y.jsx)(T,{type:"password",label:"New Password",ac:"new-password",state:a})}),Object(y.jsx)(x.a,{controlId:"floatingPassword",label:"Confirm Password",className:"mb-3",children:Object(y.jsx)(T,{type:"password",label:"Confirm Password",ac:"confirm-password",state:s})})]}),Object(y.jsx)(m.a,{type:"submit",children:"Register"})]})})]})})}var H=c(154);function F(){var e=Object(n.useContext)(j).createAlert,t=W(""),c=W("");return Object(y.jsx)(u.a,{sm:8,lg:7,xl:6,children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(h.a.Header,{children:Object(y.jsx)("h2",{children:"Login"})}),Object(y.jsx)("br",{}),Object(y.jsxs)(h.a.Body,{children:[Object(y.jsx)(h.a.Title,{children:"Login Methods:"}),Object(y.jsxs)(H.a,{defaultActiveKey:"1",children:[Object(y.jsxs)(H.a.Item,{eventKey:"0",children:[Object(y.jsx)(H.a.Header,{children:"Email and Password"}),Object(y.jsxs)(H.a.Body,{children:[Object(y.jsxs)(O.a,{onSubmit:function(n){n.preventDefault();var a=function(e,t,c){var n;return Object(w.e)(L,e,t).then((function(){c("Welcome back to Bankify","success","Successful Login!"),n=!0})).catch((function(e){return c(e.message,"danger")})),n}(t.value,c.value,e);a&&(t.clear(),c.clear())},className:"mb-3",children:[Object(y.jsx)(O.a.Group,{children:Object(y.jsx)(x.a,{controlId:"floatingInput",label:"Email",className:"mb-3",children:Object(y.jsx)(T,{label:"Email",ac:t,state:t})})}),Object(y.jsx)("br",{}),Object(y.jsx)(O.a.Group,{children:Object(y.jsx)(x.a,{controlId:"floatingPassword",label:"Password",className:"mb-3",children:Object(y.jsx)(T,{label:"Password",ac:"current-password",state:c})})}),Object(y.jsx)(m.a,{type:"submit",children:"Login"})]}),Object(y.jsx)(h.a.Footer,{})]})]}),Object(y.jsx)(H.a.Item,{eventKey:"1",children:Object(y.jsx)(H.a.Header,{onClick:function(t){t.preventDefault(),function(e){var t=new w.a;t.addScope("profile"),t.addScope("email"),Object(w.f)(L,t).then((function(t){e("Welcome back to Bankify","success","Successful Login!")})).catch((function(t){return e(t.message,"danger")}))}(e)},children:"Google"})})]})]}),Object(y.jsx)(h.a.Footer,{})]})})}function U(e,t){var c=Object(n.useState)(!1),a=Object(i.a)(c,2),s=a[0],r=a[1];return{show:s,open:function(){return r(!0)},close:function(){return r(!1)},transaction:e,account:t}}var R=c(147);function G(e){var t=e.msg,c=e.type,n=void 0===c?"danger":c,a=e.heading,s=void 0===a?"":a,r=e.reset,i=void 0===r?"":r;return t?(setTimeout(i,4e3),Object(y.jsxs)(R.a,{variant:n,onClose:i,dismissible:!0,children:[s&&Object(y.jsx)(R.a.Heading,{children:s}),Object(y.jsx)("p",{children:t})]})):null}var $=c(155);function z(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1],d=e.transaction,u=e.account,h=e.show,x=e.close,f=e.state,p=Object(i.a)(f,2),g=p[0],v=p[1],w=Object(n.useContext)(j).user,N=function(e){b(e)},k=function(){b("")},C=function(e){e.preventDefault(),s(e.target.value)},S=function(){var e=Number(g),t=Number(a);return Number.isInteger(t)?t<=0||t>1e6?(N("Must be an amount between $1 and $1 million"),s(""),!1):"Deposit"===d||t<=e||(N("Withdraw may not exceed existing balance of $".concat(g)),s(g),!1):(N("Must enter a whole number"),s(""),!1)},A=function(e){return Number(g)-Number(e)},B=function(e){return Number(g)+Number(e)},D=function(){return Object(y.jsxs)(O.a.Group,{className:"mb-3",children:[Object(y.jsx)(O.a.Label,{children:"".concat(d," Amount")}),Object(y.jsx)("span",{className:"input-group-text",children:"$"}),Object(y.jsx)("input",{id:"modal-input",autoComplete:"off",className:"form-control mb-3",value:a,onChange:C,required:!0})]})},I=function(){s(""),x(),k()};return Object(y.jsxs)($.a,{show:h,onHide:I,backdrop:"static",children:[Object(y.jsx)($.a.Header,{closeButton:!0,children:Object(y.jsx)($.a.Title,{children:"".concat(d," into ").concat(u)})}),Object(y.jsxs)(O.a,{onSubmit:function(e){if(e.preventDefault(),S()){console.log("valid");var t=("Deposit"===d?B:A)(g);!function(e,t,c){var n=new Headers;n.append("Authorization","Bearer ".concat(e.accessToken)),n.append("Content-Type","application/x-www-form-urlencoded");var a=new URLSearchParams;a.append("account",t),a.append("amount",c),fetch("/api",{method:"PUT",headers:n,body:a,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))}(w,u,t),v(t),x()}},children:[Object(y.jsxs)($.a.Body,{children:[Object(y.jsx)(G,{msg:l,reset:k}),Object(y.jsx)(D,{})]}),Object(y.jsxs)($.a.Footer,{children:[Object(y.jsx)(m.a,{variant:"secondary",onClick:I,children:"End Transaction"}),Object(y.jsx)(m.a,{type:"submit",variant:"primary",children:d})]})]})]})}function K(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(0),s=Object(i.a)(a,2),r=(s[0],s[1]),l=U("Deposit","Checking"),b=U("Withdraw","Checking"),d=U("Deposit","Savings"),O=U("Withdraw","Savings"),x=Object(n.useState)(null),m=Object(i.a)(x,2),f=m[0],p=m[1],g=Object(n.useContext)(j).user;Object(n.useEffect)((function(){f?(r(f.savings),c(f.checking)):function(e,t){var c={method:"get",url:"/api",headers:{Authorization:"Bearer ".concat(e.accessToken)}};Object(B.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I()(c).then((function(e){return e.data})).then((function(e){t(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))()}(g,p)}));var v=g.displayName?g.displayName.toUpperCase():"USER",w=g.photoURL,N=function(){return w||(w="https://react-bootstrap.github.io/logo.svg"),Object(y.jsx)("img",{src:w,className:"avatar-img"})};return Object(y.jsxs)(u.a,{sm:8,lg:7,xl:6,children:[Object(y.jsxs)(h.a,{children:[Object(y.jsx)(M,{children:Object(y.jsx)(N,{})}),Object(y.jsxs)(h.a.Body,{className:"justify-content-center align-item-center",children:[Object(y.jsx)(h.a.Text,{children:"Hello ".concat(v,"!")}),console.log(g),console.log(f),f&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(q,{title:"Checking",balance:f.checking,openDeposit:l.open,openWithdraw:b.open}),Object(y.jsx)("hr",{}),Object(y.jsx)(q,{title:"Savings",balance:f.savings,openDeposit:d.open,openWithdraw:O.open})]})]})]}),Object(y.jsx)(z,Object(o.a)(Object(o.a)({},l),{},{state:e})),Object(y.jsx)(z,Object(o.a)(Object(o.a)({},b),{},{state:e})),Object(y.jsx)(z,Object(o.a)(Object(o.a)({},d),{},{state:a})),Object(y.jsx)(z,Object(o.a)(Object(o.a)({},O),{},{state:a}))]})}function M(e){return Object(y.jsx)(h.a.Header,{children:Object(y.jsxs)(b.a,{className:"align-items-center",children:[Object(y.jsx)(u.a,{children:Object(y.jsx)("h2",{children:"Dashboard"})}),Object(y.jsx)(u.a,{sm:"3",className:"align-item-end",children:e.children})]})})}function q(e){var t=e.title,c=e.balance,n=e.openDeposit,a=e.openWithdraw;return Object(y.jsxs)("div",{className:"panel-".concat(t.toLowerCase()),children:[Object(y.jsx)(h.a.Title,{children:t}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:"input-group mb-3",children:[Object(y.jsx)("span",{className:"input-group-text",children:"$"}),Object(y.jsx)("span",{className:"form-control","aria-label":"Amount",children:"".concat(c,".00")}),Object(y.jsx)(m.a,{variant:"outline-primary",id:"deposit",onClick:n,children:"Deposit"}),Object(y.jsx)(m.a,{variant:"outline-primary",id:"withdraw",onClick:a,children:"Withdraw"})]})]})}var J=c(27);function V(e){e.user;return Object(y.jsx)(u.a,{sm:8,lg:7,xl:6,children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)(h.a.Header,{children:Object(y.jsx)("h2",{children:"Welcome to Bankify"})}),Object(y.jsxs)(h.a.Body,{children:[Object(y.jsxs)(h.a.Text,{children:[Object(y.jsx)("p",{children:"Bankify is the banking solution for you! With local branches across the United States, we serve our customers with services like: withdraw, deposit, balances, and hack the system."}),Object(y.jsx)("p",{children:"While not FDIC insured, client-side Firebase Authentication does keep you passwords safe. Not bad ehh?"})]}),Object(y.jsx)(J.b,{to:"/register",children:Object(y.jsx)(m.a,{type:"link",children:"Register Now"})}),"      ",Object(y.jsx)(J.b,{to:"/login",children:Object(y.jsx)(m.a,{type:"link",children:"Login"})})]})]})})}var X=c(149);function Z(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(j).createAlert;function r(){var e;I.a.get("/backdoor").then((function(e){return e.data})).then((function(t){e=t})).catch((function(e){console.log(e)})).then((function(){a(e)})),s(e?"":"Data Fetch Error","danger")}function o(){return c&&0!==c.length?Object(y.jsxs)(X.a,{striped:!0,bordered:!0,hover:!0,style:{tableLayout:"fixed"},children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"#"}),Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Email"}),Object(y.jsx)("th",{children:"uid"}),Object(y.jsx)("th",{children:"Checking Balance"}),Object(y.jsx)("th",{children:"Savings Balance"})]})}),Object(y.jsx)("tbody",{children:c.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t+1}),Object(y.jsx)("td",{children:e.name||""}),Object(y.jsx)("td",{children:e.email||""}),Object(y.jsxs)("td",{children:[e.uid||""," "]}),Object(y.jsx)("td",{children:"$".concat(String(e.checking),".00")}),Object(y.jsxs)("td",{children:["$".concat(String(e.savings),".00")," "]})]},t)}))})]}):Object(y.jsx)("div",{children:"loading..."})}return Object(n.useEffect)((function(){Object(B.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})))()}),[]),Object(y.jsx)(h.a,{children:Object(y.jsx)(h.a.Body,{children:Object(y.jsx)(o,{})})})}function Y(){var e=Object(n.useContext)(j),t=e.user;e.createAlert;return Object(y.jsx)(d.d,{children:Object(y.jsx)(l.a,{fluid:!0,children:Object(y.jsxs)(b.a,{className:"justify-content-center",children:[Object(y.jsx)(d.b,{exact:!0,path:"/register",children:t?Object(y.jsx)(d.a,{to:"/dashboard"}):Object(y.jsx)(E,{})}),Object(y.jsx)(d.b,{exact:!0,path:"/login",children:t?Object(y.jsx)(d.a,{to:"/dashboard"}):Object(y.jsx)(F,{})}),Object(y.jsx)(d.b,{exact:!0,path:"/dashboard",children:t?Object(y.jsx)(K,{}):Object(y.jsx)(d.a,{to:"/"})}),Object(y.jsx)(d.b,{exact:!0,path:"/alldata",children:Object(y.jsx)(Z,{})}),Object(y.jsx)(d.b,{exact:!0,path:"/",children:t?Object(y.jsx)(K,{}):Object(y.jsx)(V,{})})]})})})}var Q=c(152),_=c(153);function ee(){return Object(y.jsx)(Q.a,{collapseOnSelect:!0,expand:"md",bg:"dark",variant:"dark",sticky:!0,children:Object(y.jsxs)(l.a,{className:"justify-content-space-between",children:[Object(y.jsx)(J.b,{to:"/",className:"navbar-brand nav-link",children:"Bankify"}),Object(y.jsx)(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(y.jsx)(Q.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(y.jsx)(_.a,{children:Object(y.jsx)(te,{})})})]})})}function te(){var e=Object(n.useContext)(j).createAlert,t=function(){return Object(y.jsx)(J.b,{to:"/alldata",className:"nav-link",children:"All Data"})},c=Object(n.useContext)(j).user?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J.b,{to:"/dashboard",className:"nav-link",children:"Dashboard"}),Object(y.jsx)(t,{}),Object(y.jsx)(J.b,{to:"/",className:"nav-link",onClick:function(){return function(e){Object(w.g)(L).then((function(){e?e("Come back soon!","secondary"):console.log("Successful Logout")})).catch((function(t){e&&e(t.message,"danger")}))}(e)},children:"Logout"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J.b,{to:"/login",className:"nav-link",children:"Login"}),Object(y.jsx)(J.b,{to:"/register",className:"nav-link",children:"Register"}),Object(y.jsx)(t,{})]});return c}function ce(){var e=Object(n.useContext)(j).user,t=function(){var e=Object(n.useContext)(j);return{msg:e.msg,type:e.type,heading:e.heading,reset:e.reset}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ee,{}),Object(y.jsx)(G,Object(o.a)({},t)),Object(y.jsx)(Y,{user:e})]})}var ne=Object(n.createContext)();function ae(e){var t=Object(n.useState)((Object(w.d)(L,(function(e){return e}))(),null)),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(y.jsx)(ne.Provider,{value:{user:a,setUser:s},children:e.children})}function se(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],b=Object(n.useState)(""),d=Object(i.a)(b,2),u=d[0],h=d[1],O=Object(n.useState)("danger"),x=Object(i.a)(O,2),m=x[0],f=x[1],p=C();Object(w.d)(p,(function(e){a(e)}));var g={msg:o,type:m,heading:u,reset:function(){l(""),f("danger"),h("")}};return Object(y.jsx)(ae,{children:Object(y.jsx)(j.Provider,{value:{user:c,setUser:a,createAlert:function(e,t,c){l(e),f(t),h(c)},alertProps:g},children:Object(y.jsx)(J.a,{children:Object(y.jsx)(ce,{})})})})}r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(se,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.84f1d3b3.chunk.js.map