(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=(a(19),function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Upload image"))}),u=a(2),s=a(7),o=a.n(s),m=a(13),f=a(4);a(26),a(21);f.initializeApp({apiKey:"AIzaSyAzofFadz4DYEQO99gCRbKSVAkCdDIKSEs",authDomain:"firegram-bb6f7.firebaseapp.com",databaseURL:"https://firegram-bb6f7.firebaseio.com",projectId:"firegram-bb6f7",storageBucket:"firegram-bb6f7.appspot.com",messagingSenderId:"781170915982",appId:"1:781170915982:web:62822f484678083d1227df"});var p=f.storage(),d=f.firestore(),b=f.firestore.FieldValue.serverTimestamp,g=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],f=i[1],g=Object(n.useState)(null),E=Object(u.a)(g,2),j=E[0],v=E[1];return Object(n.useEffect)((function(){var t=p.ref(e.name),a=d.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){f(e)}),Object(m.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=b(),a.add({url:n,createdAt:r}),v(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:j,error:s}},E=function(e){var t=e.file,a=e.setFile,c=g(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement("div",{className:"progress-bar",style:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],o=i[1],m=["image/png","image/jpg","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png, jpg or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c})))},v=a(8),O=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(){var e=O("images").docs;return console.log(e),r.a.createElement("div",{className:"img-grid"},e&&e.map((function(e){return r.a.createElement("div",{className:"img-wrap",key:e.id},r.a.createElement("img",{style:{objectFit:"contain"},width:"100%",src:e.url,alt:"uploaded pic"}))})))};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(j,null),r.a.createElement(h,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a40d3bb0.chunk.js.map