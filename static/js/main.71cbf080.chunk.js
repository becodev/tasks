(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{23:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(15),c=n.n(s),r=(n(23),n(18)),i=n(5),l=n(9),j=n.n(l),u=n(16),o=n(4),m=n(10),d=n(17),b=n(6),h=n.n(b),O=n(0),p=function(e){var t=e.createTasks,n=Object(a.useState)({name:"",surname:"",date:"",time:"",description:""}),s=Object(i.a)(n,2),c=s[0],r=s[1],l=function(e){e.preventDefault(),r(Object(m.a)(Object(m.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(u.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),p&&x&&f&&v&&g){e.next=6;break}return h.a.fire({position:"center",icon:"error",title:"Form is empty!",showConfirmButton:!1,timer:1600}),e.abrupt("return",null);case 6:return e.next=8,h.a.fire({title:"CONFIRM",showDenyButton:!0,confirmButtonText:"yes",denyButtonText:"Cancel"}).then((function(e){e.isConfirmed&&(h.a.fire({position:"center",icon:"success",title:"Sent!",showConfirmButton:!1,timer:1500}),c.id=Object(d.v4)(),t(c),r({name:"",surname:"",date:"",time:"",description:""}))}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=c.name,x=c.surname,f=c.date,v=c.time,g=c.description;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"create new task"}),Object(O.jsxs)("form",{onSubmit:b,children:[Object(O.jsx)("label",{children:"Developer name"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:"u-full-width",onChange:l,value:p}),Object(O.jsx)("label",{children:"Developer surname"}),Object(O.jsx)("input",{type:"text",name:"surname",placeholder:"Surname",className:"u-full-width",onChange:l,value:x}),Object(O.jsx)("label",{children:"Date"}),Object(O.jsx)("input",{type:"date",name:"date",className:"u-full-width",onChange:l,value:f}),Object(O.jsx)("label",{children:"Time"}),Object(O.jsx)("input",{type:"time",name:"time",className:"u-full-width",onChange:l,value:v}),Object(O.jsx)("label",{children:"Description"}),Object(O.jsx)("textarea",{name:"description",placeholder:"Description",className:"u-full-width",onChange:l,value:g}),Object(O.jsx)("button",{type:"submit",className:"u-full-width button-primary",children:"Submit"})]})]})},x=function(e){var t=e.deleteTask,n=e.task,a=n.name,s=n.surname,c=n.date,r=n.time,i=n.description,l=n.id;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"tarea",children:[Object(O.jsxs)("p",{children:["Name: ",Object(O.jsxs)("span",{children:[" ",a," "]})," "]}),Object(O.jsxs)("p",{children:["Surname: ",Object(O.jsxs)("span",{children:[" ",s]})," "]}),Object(O.jsxs)("p",{children:["Date: ",Object(O.jsxs)("span",{children:[" ",c]})," "]}),Object(O.jsxs)("p",{children:["Time: ",Object(O.jsxs)("span",{children:[" ",r," "]})]}),Object(O.jsxs)("p",{children:["Description:",Object(O.jsxs)("span",{children:[" ",i]})," "]}),Object(O.jsx)("button",{className:"button eliminar u-full-width",onClick:function(){return t(l)},children:"Delete"})]})})},f=function(){var e=JSON.parse(localStorage.getItem("tasks"));e||(e=[]);var t=Object(a.useState)(e),n=Object(i.a)(t,2),s=n[0],c=n[1],l=function(e){var t=s.filter((function(t){return t.id!==e}));c(t)},j=0===s.length?Object(O.jsx)("h1",{children:"no tasks"}):Object(O.jsx)("h1",{children:"tasks"});return Object(a.useEffect)((function(){e?localStorage.setItem("tasks",JSON.stringify(s)):localStorage.setItem("tasks",JSON.stringify([])),console.log(s)}),[s,e]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"tasks manager"}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"one-half column",children:Object(O.jsx)(p,{createTasks:function(e){c([].concat(Object(r.a)(s),[e]))}})}),Object(O.jsxs)("div",{className:"one-half column",children:[j,s.map((function(e){return Object(O.jsx)(x,{task:e,deleteTask:l})}))]})]})})]})};c.a.render(Object(O.jsx)(f,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.71cbf080.chunk.js.map