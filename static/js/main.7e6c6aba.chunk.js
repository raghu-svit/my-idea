(this.webpackJsonplivechat=this.webpackJsonplivechat||[]).push([[0],{221:function(e,t,n){},222:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),s=n.n(a),i=n(213),c=n.n(i),o=(n(221),n.p,n(222),n(11)),l=n(7),j=n(12),u=Object(j.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGHOUT_SUCCESS"})})).catch((function(t){e({type:"SIGHOUT_ERROR",errInfo:t})}))}))}}}))((function(e){return Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:"/Dashboard",children:"Dashboard"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:"/CreateProject",children:"Submit Idea"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:e.signOut,children:"LogOut"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})})]})})),d=function(){return Object(r.jsxs)("ul",{className:"right",children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:"/SignUp",children:"SignUp"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:"/SignIn",children:"Login"})})]})},h=Object(j.b)((function(e){return console.log("now"),console.log(e),console.log("end"),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,a=t.uid?Object(r.jsx)(u,{profile:n}):Object(r.jsx)(d,{});return Object(r.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(o.b,{to:"/",style:{textAlign:"left",fontSize:"40px"},children:"SV GIE"}),a]})})})),b=n(31),O=n(32),p=n(34),f=n(33),m=n(94),x=n.n(m),g=function(e){return Object(r.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(r.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(r.jsx)("span",{style:{backgroundColor:"lightgreen",fontSize:"large",fontFamily:"fantasy"},className:"card-title",children:e.title}),Object(r.jsx)("p",{children:e.content}),Object(r.jsxs)("p",{children:["Owner : ",e.author]}),Object(r.jsxs)("p",{className:"grey-text",children:["Posted : ",x()(e.date.toDate()).calendar()]})]})})},v=function(e){var t=e.projects;return Object(r.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(r.jsx)(o.b,{to:"/projects/"+e.id,children:Object(r.jsx)(g,{title:e.title,content:e.content,author:e.authorFirstName,date:e.date},e.id)},e.id)}))})},S=n(30),y=n(23),C=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects;return e.auth.uid?Object(r.jsx)("div",{className:"dashboard container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col1 s12 m6",children:Object(r.jsx)(v,{projects:t})})})}):Object(r.jsx)(l.a,{to:"/SignIn"})}}]),n}(a.Component),I=Object(y.d)(Object(j.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(S.firestoreConnect)([{collection:"projects"}]))(C),E=n(64),w=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).handleEmail=function(e){r.setState({email:e.target.value})},r.handlePassword=function(e){r.setState({password:e.target.value})},r.handleSubmit=function(e){console.log(r.state),e.preventDefault(),r.props.signIn(r.state)},r.state={email:"",password:""},r}return Object(O.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.authError;return t.auth.uid?Object(r.jsx)(l.a,{to:"/"}):Object(r.jsx)("div",{children:Object(r.jsxs)("form",(e={style:{border:"1px solid black"},onSubmit:this.handleSubmit},Object(E.a)(e,"style",{width:"50%",marginLeft:"25%",marginTop:"10%"}),Object(E.a)(e,"children",[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Email ID"}),Object(r.jsx)("input",{type:"email",name:"email",required:!0,value:this.state.email,onChange:this.handleEmail})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{type:"password",required:!0,name:"password",value:this.state.password,onChange:this.handlePassword})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn pink",children:"Login"})}),Object(r.jsx)("div",{children:n?Object(r.jsx)("p",{style:{color:"red"},children:n}):null})]),e))})}}]),n}(s.a.Component),R=Object(j.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",errInfo:t})}))}));var n}}}))(w),F=n(24),N=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).handleTitle=function(e){r.setState({title:e.target.value})},r.handleContent=function(e){r.setState({content:e.target.value})},r.handleSubmit=function(e){e.preventDefault(),console.log(r.state),r.props.createProject(r.state),r.props.history.push("/")},r.state={title:"",content:""},r}return Object(O.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,style:{width:"50%",marginLeft:"25%",marginTop:"10%"},children:[Object(r.jsx)("h4",{children:"Submit your Idea"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Project Title"}),Object(r.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleTitle})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Description"}),Object(r.jsx)("textarea",{type:"text",name:"content",value:this.state.content,onChange:this.handleContent})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn pink",children:"Create"})})]})}):Object(r.jsx)(l.a,{to:"/SignIn"})}}]),n}(s.a.Component),P=Object(j.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,n,r){r.getFirebase;var a=(0,r.getFirestore)(),s=n().firebase.profile,i=n().firebase.auth.uid;a.collection("projects").add(Object(F.a)(Object(F.a)({},e),{},{authorFirstName:s.firstname,authorLastName:s.lastname,authorId:i,date:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",errInfo:e})})),console.log("in Project Actions"),console.log(e)}}(t))}}}))(N),U=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).handleFirstName=function(e){r.setState({firstname:e.target.value})},r.handleLastName=function(e){r.setState({lastname:e.target.value})},r.handleEmail=function(e){r.setState({email:e.target.value})},r.handlePassword=function(e){r.setState({password:e.target.value})},r.handleSubmit=function(e){console.log(r.state),e.preventDefault(),r.props.signUp(r.state)},r.state={firstname:"",lastname:"",email:"",password:""},r}return Object(O.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(r.jsx)(l.a,{to:"/"}):Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,style:{width:"50%",marginLeft:"25%",marginTop:"10%"},children:[Object(r.jsx)("h3",{children:"SignUp"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"First Name"}),Object(r.jsx)("input",{type:"text",name:"firstname",required:!0,value:this.state.firstname,onChange:this.handleFirstName})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Last Name"}),Object(r.jsx)("input",{type:"text",name:"lastname",required:!0,value:this.state.lastname,onChange:this.handleLastName})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Email ID"}),Object(r.jsx)("input",{type:"text",name:"email",required:!0,value:this.state.email,onChange:this.handleEmail})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("input",{type:"password",name:"password",required:!0,pattern:".{6,}",placeholder:"min 6 charecters",value:this.state.password,onChange:this.handlePassword})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn pink",children:"SignUp"})})]})})}}]),n}(s.a.Component),T=Object(j.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signUp:function(t){return e((n=t,function(e,t,r){var a=r.getFirebase,s=r.getFirestore,i=a(),c=s();i.auth().createUserWithEmailAndPassword(n.email,n.password).then((function(e){return c.collection("users").doc(e.user.uid).set({firstname:n.firstname,lastname:n.lastname,initials:n.firstname[0]+n.lastname[0]})})).then((function(){e({type:"SIGHUP_SUCCESS"})})).catch((function(t){e({type:"SIGHUP_ERROR",errInfo:t})}))}));var n}}}))(U);var L=Object(y.d)(Object(j.b)((function(e,t){var n=t.match.params.id,r=e.firestore.data.projects;return{project:r?r[n]:null,auth:e.firebase.auth}})),Object(S.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{style:{backgroundColor:"lightgreen"},children:t.title}),Object(r.jsx)("p",{children:t.content}),Object(r.jsxs)("h6",{children:[t.authorFirstName," ",t.authorLastName]}),Object(r.jsx)("h6",{children:x()(t.date.toDate()).calendar()}),Object(r.jsxs)("h6",{children:["Status : ",t.status?t.status:"Not Started"]})]})}):Object(r.jsx)(l.a,{to:"/SignIn"})}));var k=function(){return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsx)("div",{children:Object(r.jsx)("span",{style:{fontSize:"30px",fontFamily:"sans-serif"},children:"Silicon Valley of India"})}),Object(r.jsx)("div",{style:{backgroundColor:"powderblue",textAlign:"center"},children:Object(r.jsxs)("p",{style:{fontFamily:"cursive"},children:["You can submit your Idea , I will give top 3 Ideas to Students to implement",Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"if it is successful"}),"  they will start a company ",Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"even if they fail"})," they will get a good job"]})}),Object(r.jsx)("footer",{style:{fontSize:"20px",fontFamily:"fantasy"},children:"We will give good gifts for top 10 Ideas"})]})};var A=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{}),Object(r.jsxs)(l.d,{children:[" createproject",Object(r.jsx)(l.b,{exact:!0,path:"/",component:k}),Object(r.jsx)(l.b,{path:"/Dashboard",component:I}),Object(r.jsx)(l.b,{path:"/projects/:id",component:L}),Object(r.jsx)(l.b,{path:"/SignIn",component:R}),Object(r.jsx)(l.b,{path:"/SignUp",component:T}),Object(r.jsx)(l.b,{path:"/CreateProject",component:P})]})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,407)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},D=n(215),G={authError:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("Login successd"),Object(F.a)(Object(F.a)({},e),{},{authError:null});case"LOGIN_ERROR":return console.log("Login failed"),Object(F.a)(Object(F.a)({},e),{},{authError:"Login Failed , please enter valid email & password"});case"SIGHOUT_SUCCESS":return console.log("Sign Out Successfully"),e;case"SIGNUP_SUCCESS":return console.log("SignUP successd"),Object(F.a)(Object(F.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("SignUp failed"),Object(F.a)(Object(F.a)({},e),{},{authError:t.errInfo.message});default:return e}},q={projects:[{id:1,title:"Farmers Friend",content:"This is to help Farmers",date:"jan 31st"},{id:2,title:"My School",content:"This is to solve problems of schools",date:"Feb 14th"},{id:3,title:"My Village",content:"This is to develop our own Villages",date:"Jul 2nd"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("in Project Reducer.."),console.log(t.project),e;case"CREATE_PROJECT_ERROR":return console.log("error "+t.errorInfo),e;default:return e}},H=n(65),M=Object(y.c)({auth:J,project:z,firestore:H.firestoreReducer,firebase:S.firebaseReducer}),V=n(96);n(406),n(403);V.a.initializeApp({apiKey:"AIzaSyAHaRKl7A3dAQVQaGC-ixMowk6l9vFqMd0",authDomain:"svgie-e0659.firebaseapp.com",projectId:"svgie-e0659",storageBucket:"svgie-e0659.appspot.com",messagingSenderId:"236832912347",appId:"1:236832912347:web:50926ca7690ff811246dfe",measurementId:"G-ESJX5B5RPF"}),V.a.firestore().settings({timestampsInSnapshots:!0});var B=V.a,W=Object(y.e)(M,Object(y.d)(Object(y.a)(D.a.withExtraArgument({getFirebase:S.getFirebase,getFirestore:H.getFirestore})),Object(H.reduxFirestore)(B),Object(S.reactReduxFirebase)(B,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));W.firebaseAuthIsReady.then((function(){c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j.a,{store:W,children:Object(r.jsx)(A,{})})}),document.getElementById("root")),_()}))}},[[405,1,2]]]);
//# sourceMappingURL=main.7e6c6aba.chunk.js.map