(this.webpackJsonpblogging=this.webpackJsonpblogging||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),o=n(17),i=n.n(o),r=(n(34),n(35),n(2)),s=function(){return Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)("h3",{children:"PUBLIC"}),Object(r.jsx)("p",{children:"Blogging"})]})},l=n(12),d=n.n(l),u=n(15),j=(n(21),n(14)),b=j.a.initializeApp({apiKey:"AIzaSyBT5FM96vDG4JHtfjmA5GcoA5FEhJyCWyQ",authDomain:"publicblogging-e3071.firebaseapp.com",projectId:"publicblogging-e3071",storageBucket:"publicblogging-e3071.appspot.com",messagingSenderId:"560278651669",appId:"1:560278651669:web:a985f28057c7f1321d9f1c"}),m=b.firestore(),p=b.auth(),O=b.storage(),h=new j.a.auth.GoogleAuthProvider,f=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signInWithPopup(h).then((function(e){t=e.user})).catch((function(e){console.log(e.message)}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n(11),x=function(){var e=Object(g.b)(),t=function(){var t=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(n=t.sent)&&(console.log(n),e((c=n.displayName,a=n.photoURL,o=n.email,i=n.emailVerified,{type:"ADD",Payload:{name:c,pic:a,email:o,verified:i}})));case 4:case"end":return t.stop()}var c,a,o,i}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"signInButton",onClick:t,children:Object(r.jsx)("p",{children:"SignIn with Google"})})},v=(n(23),function(){var e=Object(g.c)((function(e){return e.userReducer.user[0]}));return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)(s,{}),e?Object(r.jsxs)("div",{className:"proImg btn",onClick:function(){var e=document.getElementById("dropDown");"block"===e.style.display?e.style.display="none":e.style.display="block"},children:[Object(r.jsx)("img",{alt:"img",id:"nav-pic",src:e.pic}),Object(r.jsx)("div",{className:"dropDown btn",id:"dropDown",onClick:function(){return window.location.reload(!1)},children:Object(r.jsx)("p",{children:"Log Out"})})]}):Object(r.jsx)(x,{})]})}),y=n(10);var C=function(){var e=j.a.firestore.FieldValue.serverTimestamp,t=Object(g.c)((function(e){return e.userReducer.user[0]})),n=Object(c.useState)(""),a=Object(y.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(null),l=Object(y.a)(s,2),d=l[0],u=l[1],b=Object(c.useState)(0),p=Object(y.a)(b,2),h=(p[0],p[1]);return t?Object(r.jsx)("div",{className:"createPost",children:Object(r.jsxs)("div",{className:"createPostUpload",children:[Object(r.jsx)("p",{children:"Create a post"}),Object(r.jsx)("textarea",{placeholder:"Add a Caption...",id:"createPostText",value:o,onChange:function(e){i(e.target.value)}}),Object(r.jsx)("div",{className:"img",children:Object(r.jsx)("img",{alt:"error",id:"uploadedImg"})}),Object(r.jsxs)("div",{id:"btns",children:[Object(r.jsx)("label",{htmlFor:"photoUpload",className:"btn",id:"photoLabel",children:"Add Photo"}),Object(r.jsx)("input",{type:"file",id:"photoUpload",onChange:function(e){u(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]),n=document.getElementById("uploadedImg");n.src=t,n.style.display="block"}}),Object(r.jsx)("button",{type:"button",className:"btn",onClick:function(){if(d){var n=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890",t="",n=0;n<7;n++){var c=Math.floor(Math.random()*e.length);t+=e.substring(c,c+1)}return t}();O.ref("Images/".concat(n,".jpg")).put(d).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);h(t)}),(function(e){console.log(e)}),(function(){O.ref("Images").child("".concat(n,".jpg")).getDownloadURL().then((function(n){m.collection("Posts").add({Name:t.name,ProfileUrl:t.pic,Email:t.email,PhotoUrl:n,Caption:o,createdAt:e()})}))}))}i(""),document.getElementById("uploadedImg").style.display="none"},id:"upload",children:"UPLOAD"})]})]})}):Object(r.jsxs)("div",{className:"createPostLogin",children:[Object(r.jsx)(x,{}),Object(r.jsx)("p",{children:"LogIn to create post"})]})},N=function(e){var t=Object(c.useState)([]),n=Object(y.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){m.collection("Posts").doc(e.id).collection("Comments").orderBy("createdAt","desc").onSnapshot((function(e){e.forEach((function(t){console.log(t.id," => ",t.data()),o(e.docs.map((function(e){return{Name:e.data().Name,Comment:e.data().Comment,ProfileUrl:e.data().ProfileUrl}})))}))}))}),[]),Object(r.jsx)("div",{className:"comments",children:a.map((function(e){return Object(r.jsx)("div",{className:"eachComment",children:Object(r.jsxs)("div",{id:"comment",children:[Object(r.jsx)("div",{id:"commentOwner",children:Object(r.jsx)("img",{src:e.ProfileUrl})}),Object(r.jsxs)("div",{className:"commentBody",children:[Object(r.jsx)("p",{children:e.Name}),Object(r.jsx)("p",{id:"commentText",children:e.Comment})]})]})})}))})},P=function(e){var t=j.a.firestore.FieldValue.serverTimestamp,n=Object(c.useState)(""),a=Object(y.a)(n,2),o=a[0],i=a[1],s=Object(g.c)((function(e){return e.userReducer.user[0]}));return Object(r.jsxs)("div",{className:"createComment",children:[Object(r.jsx)("textarea",{placeholder:"Comment here...",id:"createCommentText",value:o,onChange:function(e){i(e.target.value)}}),Object(r.jsx)("div",{id:"btns",children:Object(r.jsx)("button",{type:"button",style:{cursor:"pointer"},onClick:function(){""!==o&&(m.collection("Posts").doc(e.id).collection("Comments").add({Name:s.name,ProfileUrl:s.pic,Comment:o,createdAt:t()}),i(""))},id:"upload",children:"Comment"})})]})},E=function(e){var t=Object(c.useState)(e.caption),n=Object(y.a)(t,2),a=n[0],o=n[1];return Object(r.jsxs)("div",{className:"updateCaption",children:[Object(r.jsx)("textarea",{placeholder:"Add a Caption...",id:"updateCaptionText",value:a,onChange:function(e){o(e.target.value)}}),Object(r.jsx)("button",{type:"button",className:"update btn",onClick:function(){return t=e.id,void m.collection("Posts").doc(t).update({Caption:a});var t},children:"Update"})]})},U=function(){Object(c.useEffect)((function(){m.collection("Posts").orderBy("createdAt","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{Name:e.data().Name,Caption:e.data().Caption,Email:e.data().Email,PhotoUrl:e.data().PhotoUrl,ProfileUrl:e.data().ProfileUrl,id:e.id}})))}))}),[]);var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1],o=Object(g.c)((function(e){return e.userReducer.user[0]}));var i=Object(c.useState)(!1),s=Object(y.a)(i,2),l=s[0],d=s[1];return Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)("div",{className:"eachPost",children:Object(r.jsxs)("div",{id:"post",children:[Object(r.jsxs)("div",{id:"postHead",children:[Object(r.jsxs)("div",{className:"postHead",children:[Object(r.jsx)("img",{src:e.ProfileUrl}),Object(r.jsx)("p",{children:e.Name})]}),o&&o.email===e.Email?Object(r.jsx)("button",{type:"button",id:"deleteBtn",className:"btn",onClick:function(){return t=e.id,void m.collection("Posts").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));var t},children:"Delete"}):Object(r.jsx)(r.Fragment,{})]}),Object(r.jsxs)("div",{className:"postBody",children:[Object(r.jsxs)("div",{id:"captionBody",children:[Object(r.jsx)("p",{children:e.Caption}),o&&o.email===e.Email?Object(r.jsx)("button",{type:"button",id:"editBtn",className:"btn",onClick:function(){d(!l)},children:"Edit"}):Object(r.jsx)(r.Fragment,{})]}),o&&o.email===e.Email&&l?Object(r.jsx)(E,{id:e.id,caption:e.Caption}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("img",{src:e.PhotoUrl})]}),o?Object(r.jsx)(P,{id:e.id}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)(N,{id:e.id})]})})}))})},I=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(v,{}),Object(r.jsx)(C,{}),Object(r.jsx)(U,{})]})};n(47);var w=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(I,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))},B=n(19),D=n(29),k=n(27),A={user:[]};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(k.a)(Object(k.a)({},e),{},{user:[].concat(Object(D.a)(e.user),[t.Payload])});default:return e}},L=Object(B.a)({userReducer:T}),F=Object(B.b)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g.a,{store:F,children:Object(r.jsx)(w,{})})}),document.getElementById("root")),S()}},[[48,1,2]]]);
//# sourceMappingURL=main.57142460.chunk.js.map