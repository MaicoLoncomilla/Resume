(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports={buttonLink:"button_buttonLink__2ISrR",aLink:"button_aLink__2SgvQ",aLink2:"button_aLink2__2DrfD",changeLanguage:"button_changeLanguage__2hKtL",iconEnable:"button_iconEnable__mFE42",button_loading:"button_button_loading__3r_VR",span_loading:"button_span_loading__10JdX",button_loading_spinner:"button_button_loading_spinner__1W9Aq",buttonCV:"button_buttonCV__1lIs6"}},3:function(e,t,a){e.exports={textP:"text_textP__Z0ehL",textLabel:"text_textLabel__3zQ-o",aTextA:"text_aTextA__31VAC",textA:"text_textA__FIGjq",Icon:"text_Icon__1kgr1",textH1:"text_textH1__1oz7q",textH3:"text_textH3__1VUWL",textLabelH1:"text_textLabelH1__1Xzr6",textMySkill:"text_textMySkill__2h4Pm",textMySkillFrontBack:"text_textMySkillFrontBack__oenTf",labelTitleMySkill:"text_labelTitleMySkill__2g2T5"}},4:function(e,t,a){e.exports={containerHeader:"container_containerHeader__11LA_",containerFormHeader:"container_containerFormHeader__h3SQ4",containerSection:"container_containerSection__3WtnH",containerImg:"container_containerImg__2l45o",containerH1:"container_containerH1__1uClP",containerSectionMain:"container_containerSectionMain__3Ad0F",containerSectionProjects:"container_containerSectionProjects__2Zai_",containerSectionProjectsDiv:"container_containerSectionProjectsDiv__H7vIX",containerSectionMySkill:"container_containerSectionMySkill__36YAO",containerSectionFrontBack:"container_containerSectionFrontBack__3GQwJ",containerMainProgress:"container_containerMainProgress__FxbQO",containerProgress:"container_containerProgress__1SjjT",containerSectionFooter:"container_containerSectionFooter__27ZAI",containerForm:"container_containerForm__3Zj0Y",containerInput:"container_containerInput__2xntr",containerRedes:"container_containerRedes__28qpd",containerEnable:"container_containerEnable__2oJ2B",containerButton:"container_containerButton__3npaX",containerIconA:"container_containerIconA__29Gok",iconButton:"container_iconButton__3AoeK"}},48:function(e,t,a){},49:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(1),i=a(0),o=a.n(i),r=a(10),s=a.n(r),l=(a(48),a(49),a(22)),u=a(18),d=a.p+"static/media/imagenFondoContacto.d54f696d.jpg",b=a(4),j=a.n(b),m=a(3),p=a.n(m),h=a(11),x=a.n(h),_=a(7),O=a(36),g=a.n(O),v=a(37),f=a.n(v),N=a(35),y=a.n(N),k=a(14);function S(){var e=Object(i.useState)({name:"",lastName:"",email:"",asunto:"",mensaje:""}),t=Object(u.a)(e,2),a=t[0],o=t[1],r=Object(_.c)((function(e){return e.active})),s=Object(i.useState)(!1),b=Object(u.a)(s,2),m=b[0],h=b[1],O=function(e,t){o(Object(n.a)(Object(n.a)({},a),{},Object(l.a)({},e,t)))},v=Object(k.d)();return Object(c.jsxs)("footer",{className:j.a.containerSectionFooter,id:"section-contact",reset:!0,children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(d,")")},className:j.a.containerImg}),Object(c.jsxs)("form",{className:j.a.containerForm,onSubmit:function(e){return e.preventDefault(),a.name&&a.lastName&&a.email&&a.asunto&&a.mensaje?/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(a.email)?(h(!0),y.a.post("https://proyectomaico.glitch.me/",a).then((function(){return h(!1),r?v.show("Email enviado correctamente!",{type:"success",timeout:2500}):v.show("Email sent successfully",{type:"success",timeout:2500})})).catch((function(e){return h(!1),r?v.show("Ocurrio un Error ".concat(e),{type:"error",timeout:2500}):v.show("Error! ".concat(e),{type:"error",timeout:2500})})),void o({name:"",lastName:"",email:"",asunto:"",mensaje:""})):r?(o(Object(n.a)(Object(n.a)({},a),{},{email:""})),v.show("El email no es correcto",{type:"error",timeout:2500})):(o(Object(n.a)(Object(n.a)({},a),{},{email:""})),v.show("Email is not Correct!",{type:"error",timeout:2500})):r?v.error("Los campos no pueden estar vacios!",{type:"error",timeout:2500}):v.error("Do not enter empty inputs!",{type:"error",timeout:2500})},children:[Object(c.jsx)("h3",{className:p.a.textLabelH1,style:{textAlign:"center"},children:r?"Hablemos":"Contact Me"}),Object(c.jsxs)("div",{className:j.a.containerInput,children:[Object(c.jsx)("input",{placeholder:r?"Nombre":"First Name",value:a.name,onChange:function(e){return O("name",e.target.value)}}),Object(c.jsx)("input",{placeholder:r?"Apellido":"Last Name",value:a.lastName,onChange:function(e){return O("lastName",e.target.value)}})]}),Object(c.jsxs)("div",{className:j.a.containerInput,children:[Object(c.jsx)("input",{placeholder:r?"E-mail":"Your Email",value:a.email,onChange:function(e){return O("email",e.target.value)}}),Object(c.jsx)("input",{placeholder:r?"Tema":"Subjet",value:a.asunto,onChange:function(e){return O("asunto",e.target.value)}})]}),Object(c.jsx)("div",{className:j.a.containerInput,children:Object(c.jsx)("textarea",{placeholder:r?"Mensaje":"Message",value:a.mensaje,onChange:function(e){return O("mensaje",e.target.value)}})}),Object(c.jsx)("button",{type:"submit",className:m?x.a.button_loading:null,children:Object(c.jsx)("span",{className:m?x.a.span_loading:null,children:r?"ENVIAR MENSAJE":"SUBMIT MESSAGE"})}),Object(c.jsxs)("div",{className:j.a.containerRedes,children:[Object(c.jsx)("a",{rel:"noopener noreferrer",target:"_BLANK",href:"https://www.linkedin.com/in/maicoloncomilla/",children:Object(c.jsx)(g.a,{fontSize:"large"})}),Object(c.jsx)("a",{rel:"noopener noreferrer",target:"_BLANK",href:"https://github.com/MaicoLoncomilla",children:Object(c.jsx)(f.a,{fontSize:"large"})})]})]})]})}var E={IDIOMA:"IDIOMA"},M=a(38),I=a.n(M),L=a(39),A=a.n(L),P=a.p+"static/media/maicoloncomillaCV_Espa\xf1ol.d3f49039.pdf",F=a.p+"static/media/maicoloncomillaCV_English.b0f4bbcf.pdf";function H(){var e=E.IDIOMA,t=Object(_.c)((function(e){return e.active})),a=Object(i.useState)(t),n=Object(u.a)(a,2),o=n[0],r=n[1],s=Object(_.b)();return Object(c.jsxs)("nav",{className:j.a.containerHeader,children:[Object(c.jsx)("div",{className:j.a.containerButton,onClick:function(){return r(!o),void s({type:e,payload:o})},children:Object(c.jsxs)("div",{className:j.a.containerIconA,children:[Object(c.jsx)(I.a,{className:p.a.Icon}),Object(c.jsx)("p",{className:p.a.textA,children:t?"English":"Spanish"})]})}),Object(c.jsx)("form",{className:j.a.containerFormHeader,action:t?P:F,method:"GET",target:"_blank",children:Object(c.jsxs)("div",{className:j.a.containerIconA,children:[Object(c.jsx)(A.a,{className:p.a.Icon}),Object(c.jsx)("button",{className:x.a.buttonCV,type:"submit",children:t?"Descargar CV":"Download CV"})]})})]})}var w=a.p+"static/media/Icon.79d707e0.png",C=a.p+"static/media/wultur.f4b0bfc1.png",T=a.p+"static/media/facebook.c878f394.png",B=[{title:"React Js",value:80},{title:"React Native",value:60},{title:"Redux",value:85},{title:"HTML",value:75},{title:"JavaScript",value:70},{title:"CSS",value:80}],D=[{title:"Node Js",value:60},{title:"Express",value:70},{title:"Sequelize",value:70}],R=[{direction:"row",title:"Wultur",descriptionEn:"This is a student project we made as part of our education at Henry. This project consist of showing and managing the purchase of programming courses. The user will be able to enter the app, buy and make the payment in Paypal.",descriptionEs:"Este es un proyecto estudiantil, que hicimos como parte de nuestra educaci\xf3n en Henry. \n Este proyecto consiste en mostrar y gestionar la compra de cursos de programaci\xf3n. El usuario podra desde ingresar a la App, comprar y realizar el pago en Paypal.",front:"React Js, Redux, CSS (vanilla)",back:"Node Js, Express, Passport, Sequelize",database:"PostgreSQL",link:"https://wultur.herokuapp.com/",image:C,linkGithub:"https://github.com/henry-labs/ecommerce-ft06-g08"},{direction:"row",title:"Wallet Fly",descriptionEn:'This is a final project we made as part of our education at Henry. \n In this Virtual Wallet you can enter and recharge money to your account, from an emulation of the "PagoFacil" service. \n You can also send money to your contacts. \n You can upload photos from your cell phone, and also activate the fingerprint to add security to the app.',descriptionEs:'Este es el proyecto final, que hicimos como parte de nuestra educaci\xf3n en Henry. \n En esta Billetera Virtual puedes recargar dinero a tu cuenta, desde una emulaci\xf3n del servicio de "PagoFacil". Ademas podras enviar dinero a tus contactos, puedes subir fotos desde tu celular, y tambien activar la huella digital para a\xf1adir seguridad a la App.',front:"React-Native, Redux-Persist, react-native-paper, Expo",back:"Node Js, Express, Passport, Sequelize",database:"MySql, Firebase",link:"https://www.youtube.com/watch?v=eLRw2Gs2k_c&feature=youtu.be&ab_channel=maico",image:w,linkGithub:"https://github.com/MaicoLoncomilla/Virtual-Wallet-"},{direction:"row",title:"Facebook-clone",descriptionEn:"My first personal project made in React Js. \n In this project, you could login with your Google account, and create a post, and see other people's posts.",descriptionEs:"Mi primer proyecto personal realizado en React Js. \n En este proyecto, podrias loguearte con tu cuenta de Google, y crear un post, y ver los post de otras personas.",front:"React Js, Redux, CSS (vanilla), JavaScript",back:"",database:"Firebase",link:"https://maicoloncomilla.github.io/fb-clone/",image:T,linkGithub:"https://github.com/MaicoLoncomilla/fb-clone"}];function J(){var e=Object(_.c)((function(e){return e.active}));return Object(c.jsxs)("section",{className:j.a.containerSectionMySkill,id:"section-mySkill",children:[Object(c.jsx)("h2",{className:p.a.textMySkill,children:e?"Habilidades":"My Skills"}),Object(c.jsxs)("div",{className:j.a.containerSectionFrontBack,children:[Object(c.jsxs)("div",{className:j.a.containerMainProgress,children:[Object(c.jsx)("h2",{className:p.a.textMySkillFrontBack,children:"Front End"}),B.map((function(e,t){return Object(c.jsxs)("div",{className:j.a.containerProgress,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:p.a.labelTitleMySkill,children:e.title}),Object(c.jsxs)("label",{className:p.a.labelTitleMySkill,children:[e.value,"%"]})]}),Object(c.jsx)("progress",{max:100,value:e.value})]},t)}))]}),Object(c.jsxs)("div",{className:j.a.containerMainProgress,children:[Object(c.jsx)("h2",{className:p.a.textMySkillFrontBack,children:"Back End"}),D.map((function(e,t){return Object(c.jsxs)("div",{className:j.a.containerProgress,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:p.a.labelTitleMySkill,children:e.title}),Object(c.jsxs)("label",{className:p.a.labelTitleMySkill,children:[e.value,"%"]})]}),Object(c.jsx)("progress",{max:100,value:e.value})]},t)}))]})]})]})}var G=a.p+"static/media/posibleFondo.c6076e74.jpg";function V(){var e=Object(_.c)((function(e){return e.active}));return Object(c.jsxs)("section",{className:j.a.containerSection,children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(G,")")},className:j.a.containerImg}),Object(c.jsxs)("div",{className:j.a.containerH1,children:[Object(c.jsx)("h1",{className:p.a.textH1,children:e?"Hola, soy Maico y":" Hi, I'm Maico and"}),Object(c.jsxs)("h1",{className:p.a.textH1,children:[e?" soy":" I'm",Object(c.jsx)("label",{className:p.a.textLabelH1,children:e?" Desarrollador Web,":" Web Developer,"})]}),Object(c.jsx)("h3",{className:p.a.textH3,children:Object(c.jsx)("label",{children:e?" apasionado por lo que hago,":" passionate about what i do,"})}),Object(c.jsx)("h3",{className:p.a.textH3,children:Object(c.jsxs)("label",{children:[" ",e?" y siempre aprendiendo algo nuevo.":" and always learning something new."]})}),Object(c.jsx)("button",{className:x.a.buttonLink,children:Object(c.jsx)("a",{className:x.a.aLink2,href:"#section-contact",children:e?"Hablemos":"Let's talk"})})]})]})}function z(e){var t=e.title,a=e.description,n=e.front,i=e.back,o=e.database,r=e.direction,s=e.link,l=e.image,u=e.linkGithub,d=Object(_.c)((function(e){return e.active}));return Object(c.jsxs)("div",{className:j.a.containerSectionProjects,style:{flexDirection:r},children:[Object(c.jsx)("img",{src:l,alt:"imageProject"}),Object(c.jsxs)("div",{className:j.a.containerSectionProjectsDiv,children:[Object(c.jsxs)("p",{className:p.a.textP,children:[d?"Titulo: ":"Title: ",Object(c.jsxs)("label",{className:p.a.textLabel,children:[" ",t]})]}),Object(c.jsxs)("p",{className:p.a.textP,children:[d?"Descripci\xf3n: ":"Description: ",Object(c.jsxs)("label",{className:p.a.textLabel,children:[" ",a]})]}),Object(c.jsxs)("p",{className:p.a.textP,children:["FE:",Object(c.jsxs)("label",{className:p.a.textLabel,children:[" ",n]})]}),Object(c.jsxs)("p",{className:p.a.textP,children:["BE:",Object(c.jsxs)("label",{className:p.a.textLabel,children:[" ",i]})]}),Object(c.jsxs)("p",{className:p.a.textP,children:[d?"Base de Datos: ":"Database: ",Object(c.jsxs)("label",{className:p.a.textLabel,children:[" ",o]})]}),Object(c.jsxs)("p",{className:p.a.textP,children:[d?"Codigo: ":"Code: ",Object(c.jsx)("a",{href:u,className:p.a.aTextA,target:"_BLANK",rel:"noopener noreferrer",children:d?"Click aqui":"Click Here"})]}),Object(c.jsx)("button",{className:x.a.buttonLink,children:Object(c.jsx)("a",{className:x.a.aLink,href:s,target:"_BLANK",rel:"noopener noreferrer",children:d?"ABRIR":"OPEN"})})]})]})}function q(){var e=Object(_.c)((function(e){return e.active}));return Object(c.jsx)("section",{className:j.a.containerSectionMain,id:"section-projects",children:null===R||void 0===R?void 0:R.map((function(t,a){return Object(c.jsx)(z,{direction:t.direction,title:t.title,description:e?t.descriptionEs:t.descriptionEn,front:t.front,back:t.back,database:t.database,link:t.link,image:t.image,linkGithub:t.linkGithub},a)}))})}var W=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(H,{}),Object(c.jsx)(V,{}),Object(c.jsx)(q,{}),Object(c.jsx)(J,{}),Object(c.jsx)(S,{})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))},K=a(16),Q=a(40),Y=E.IDIOMA,X={active:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(n.a)(Object(n.a)({},e),{},{active:t.payload});default:return Object(n.a)({},e)}},$=a(41),ee=Object(K.c)(U,Object(K.a)(Q.a)),te={position:k.b.TOP_RIGHT,timeout:5e3,offset:"30px",transition:k.c.SCALE};s.a.render(Object(c.jsx)(_.a,{store:ee,children:Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(k.a,Object(n.a)(Object(n.a)({template:$.a},te),{},{children:Object(c.jsx)(W,{})}))})}),document.getElementById("root")),Z()}},[[75,1,2]]]);
//# sourceMappingURL=main.9c8b21b1.chunk.js.map