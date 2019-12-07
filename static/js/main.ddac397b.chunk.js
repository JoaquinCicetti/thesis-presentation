(this["webpackJsonpthesis-presentation"]=this["webpackJsonpthesis-presentation"]||[]).push([[0],{312:function(e,a,t){e.exports=t(649)},317:function(e,a,t){},346:function(e,a){},422:function(e,a,t){},423:function(e,a,t){},424:function(e,a,t){},425:function(e,a,t){},426:function(e,a,t){},427:function(e,a,t){},428:function(e,a,t){},611:function(e,a,t){},612:function(e,a,t){},613:function(e,a,t){},614:function(e,a,t){},615:function(e,a,t){},616:function(e,a,t){},617:function(e,a,t){},618:function(e,a,t){},641:function(e,a,t){},642:function(e,a,t){},643:function(e,a,t){},649:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(55),s=t.n(l),i=(t(317),t(15)),r=t(35),o=t(70),m=t(267),u=t.n(m),d=t(268),E=t.n(d),p=function(e){var a=function(a){return e[a.code]&&e[a.code](a)};Object(n.useEffect)((function(){return document.addEventListener("keydown",a),function(){return document.removeEventListener("keydown",a)}}))},f=t(17),N=c.a.createContext({title:"",setTitle:function(e){}}),v=function(){var e=Object(n.useContext)(N),a=e.title,t=e.setTitle;return{title:a,updateTitle:function(e){e&&t(e)}}},g=(t(422),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("noencontreicono")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("h1",null,"Break"))}),h=(t(423),i.b.img({exit:{opacity:0,rotateX:"-90deg"},enter:{opacity:1,rotateX:"0deg",transition:{duration:400}}})),b=function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Calibraci\xf3n de la celda de carga")}),[]),c.a.createElement("div",{className:"slide calibration"},c.a.createElement(h,{src:"".concat("/thesis-presentation/images","/calibration.png")}))},y=(t(424),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Conclusiones")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"conclusions"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"Mejora en la adquisici\xf3n y procesamientos de datos."),c.a.createElement("li",{className:"item"},"Memorias de ensayos"),c.a.createElement("li",{className:"item"},"Mejorar las estad\xedsticas sobre el motor para analizar los comportamientos temporales."),c.a.createElement("li",{className:"item"},"Gr\xe1fica de variables."),c.a.createElement("li",{className:"item"},"Se logro desarrollar una aplicaci\xf3n abierta a futuras modificaciones."))),c.a.createElement("span",{className:"line right bottom"}))}),k=(t(425),i.b.div({exit:{opacity:0,scale:0},enter:{opacity:1,scale:1,staggerChildren:80,delayChildren:500}})),j=i.b.div({exit:{opacity:0},enter:{opacity:1}}),x=i.b.span({exit:{opacity:0},enter:{opacity:1}}),O=function(){var e=v().updateTitle,a="/thesis-presentation/icons";return Object(n.useEffect)((function(){e("Consola")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement(k,{className:"console"},c.a.createElement(x,{key:"line1",className:"lines"}),c.a.createElement(j,{key:"battery",className:"items"},c.a.createElement("img",{src:"".concat(a,"/battery.png"),className:"icon"})),c.a.createElement(x,{key:"line2",className:"lines"}),c.a.createElement(j,{key:"fan",className:"items"},c.a.createElement("img",{src:"".concat(a,"/fan.png"),className:"icon"})),c.a.createElement(x,{key:"line3",className:"lines"}),c.a.createElement(j,{key:"fuel",className:"items"},c.a.createElement("img",{src:"".concat(a,"/fuel.png"),className:"icon"})),c.a.createElement(x,{key:"line4",className:"lines"}),c.a.createElement(j,{key:"ignition",className:"items"},c.a.createElement("img",{src:"".concat(a,"/ignition.png"),className:"icon"})),c.a.createElement(x,{key:"line5",className:"lines"}),c.a.createElement(j,{key:"speed",className:"items"},c.a.createElement("img",{src:"".concat(a,"/speed.png"),className:"icon"})),c.a.createElement(x,{key:"line6",className:"lines"}),c.a.createElement(j,{key:"temperature",className:"items"},c.a.createElement("img",{src:"".concat(a,"/temperature.png"),className:"icon"})),c.a.createElement(x,{key:"line7",className:"lines"}),c.a.createElement("div",{className:"main"},c.a.createElement("img",{key:"cpu",className:"icon",src:"".concat(a,"/cpu.png")}))))},w=(t(426),i.b.div({exit:{opacity:0},enter:{opacity:1,staggerChildren:120,delayChildren:400,transition:{default:{duration:100}}}})),C=i.b.div({exit:{opacity:0,zIndex:0},enter:{opacity:1,zIndex:2,transition:{default:{duration:150}}}}),T=i.b.div({exit:{opacity:0},enter:{opacity:1},selected:{zIndex:3,scale:1.3,transition:{default:{ease:"easeOut",duration:400},zIndex:{duration:100}}},unselected:{zIndex:1,scale:1,transition:{default:{ease:"easeOut",duration:400},zIndex:{duration:100}}}}),q=[{name:"console",alt:"Consola"},{name:"break",alt:"Freno"},{name:"sensor",alt:"Encoder"},{name:"console-2",alt:"Detalle consola"},{name:"engine",alt:"Motor y freno"}],z=function(){var e=v().updateTitle,a=Object(n.useState)(q.length-1),t=Object(f.a)(a,2),l=t[0],s=t[1];return Object(n.useEffect)((function(){e(" ");var a=setInterval((function(){s((function(e){return e>=q.length-1?0:e+1}))}),1e4);return function(){return clearInterval(a)}}),[]),c.a.createElement("div",{className:"container"},c.a.createElement(C,{className:"overlay",key:"overlay"}),c.a.createElement(w,{key:"list",className:"slide currentSituation"},q.map((function(e,a){var t=e.name,n=e.alt,s="".concat("/thesis-presentation/images","/").concat(t,".jpg");return c.a.createElement(T,{className:"picture",pose:l===a?"selected":"unselected",key:s},c.a.createElement("img",{src:s,alt:n}),l===a&&c.a.createElement("p",null,n))}))))},M=(t(427),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Mejoras futuras")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"enhancements"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"Implementaci\xf3n del control del freno"),c.a.createElement("li",{className:"item"},"Extender adquisici\xf3n de datos para los diferentes sensores presentes en la consola."," "),c.a.createElement("li",{className:"item"},"Anexar estudios de consumo de los elementos presentes en sala."))),c.a.createElement("span",{className:"line right bottom"}))}),I=(t(428),t(37)),S=[{kg:5,v:.768},{kg:10,v:.979},{kg:15,v:1.218},{kg:25,v:1.663},{kg:35,v:2.08},{kg:45,v:2.53}],P=function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Linealizaci\xf3n")}),[]),c.a.createElement("div",{className:"slide linealization"},c.a.createElement(I.e,{height:"80%"},c.a.createElement(I.d,{data:S},c.a.createElement(I.a,{strokeDasharray:"3 3"}),c.a.createElement(I.f,{type:"number",domain:[0,"dataMax + 5"],dataKey:"kg"}),c.a.createElement(I.g,null),c.a.createElement(I.b,null),c.a.createElement(I.c,{type:"linear",dataKey:"v",stroke:"#377771",strokeWidth:4,dot:{strokeWidth:5},name:"Voltios vs Kilogramos."}))))},A=(t(611),i.b.ul({exit:{opacity:0},enter:{opacity:1,staggerChildren:500}})),D=i.b.li({exit:{opacity:0,rotateX:"-90deg"},enter:{opacity:1,rotateX:"0deg"}}),L=function(){var e=v().updateTitle,a="/thesis-presentation/icons";return Object(n.useEffect)((function(){e(" "),console.log("enter")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement(A,{className:"main-blocks"},c.a.createElement(D,{key:"engine",className:"block first"},c.a.createElement("img",{className:"icon",src:"".concat(a,"/engine.png")}),c.a.createElement("span",{className:"name"},"Motor")),c.a.createElement(D,{key:"panel",className:"block"},c.a.createElement("img",{className:"icon",src:"".concat(a,"/panel.png")}),c.a.createElement("span",{className:"name"},"Consola")),c.a.createElement(D,{key:"break",className:"block"},c.a.createElement("img",{className:"icon",src:"".concat(a,"/break-small.png")}),c.a.createElement("span",{className:"name"},"Freno"))),c.a.createElement("hr",null))},B=(t(612),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Propuesta de desarrollo")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"objectives"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"Correcci\xf3n de los m\xe9todos empleados para la adquisici\xf3n de datos, selecci\xf3n de sensores, desarrollo de Hardware."),c.a.createElement("li",{className:"item"},"Memoria de ensayos"),c.a.createElement("li",{className:"item"},"Interaccion del usuario con el sistema desarrollado."),c.a.createElement("li",{className:"item"},"Multiplataforma, con un enfoque Open Source la cual permita modificaciones futuras."),c.a.createElement("li",{className:"item"},"Desarrollo e implementaci\xf3n de controlador para freno el\xe9ctrico. Interfaz de usuario."))),c.a.createElement("span",{className:"line right bottom"}))}),F=(t(613),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Requerimientos")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"requirements"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"Medici\xf3n de torque desarrollado por el motor, para lo mismo disponen que el peso m\xe1ximo a medir es de 35 Kg."),c.a.createElement("li",{className:"item"},"Medici\xf3n de velocidad desarrollada por el motor, solicitud 12000 rpm valor m\xe1ximo."),c.a.createElement("li",{className:"item"},"Comando de elementos presentes en la sala."),c.a.createElement("li",{className:"item"},"Gr\xe1fica de variables."),c.a.createElement("li",{className:"item"},"Memoria de datos de ensayo."))),c.a.createElement("span",{className:"line right bottom"}))}),J=(t(614),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("\u200dVelocidad")}),[]),c.a.createElement("div",{className:"slide "},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"speed"},c.a.createElement("p",{className:"title"},"M\xe9todos de medici\xf3n"),c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"Sensor Inductivo",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"Inherentes a interferencias"),c.a.createElement("li",{className:"good"},"Larga vida util"),c.a.createElement("li",{className:"bad"},"Se\xf1al dif\xedcil de procesar a alta velocidad"),c.a.createElement("li",{className:"bad"},"Alto costo"))),c.a.createElement("li",{className:"item"},"Sensor de Efecto Hall",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"F\xe1cil procesamiento"),c.a.createElement("li",{className:"good"},"Dise\xf1ado para trabajar en ambientes con ruido"),c.a.createElement("li",{className:"bad"},"Mayor dificultad en el montaje"))),c.a.createElement("li",{className:"item"},"Sensor Fotoel\xe9ctrico",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"Menor costo"),c.a.createElement("li",{className:"bad"},"Vulnerable frente a linealidades e interferencias no deseadas"))))),c.a.createElement("span",{className:"line right bottom"}))}),K=(t(615),i.b.img({exit:{opacity:0,rotateY:"-180deg"},enter:{opacity:1,rotateY:"0deg"}})),R=function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Esquem\xe1tico")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement(K,{src:"".concat("/thesis-presentation/images","/schematic.png")}))},W=(t(616),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("\ud83d\ude4f")}),[]),c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Muchas gracias"))}),X=(t(617),function(){var e=v().updateTitle,a="/thesis-presentation/icons";return Object(n.useEffect)((function(){e("Proyecto final de ingenier\xeda")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("p",{className:"main-title"},"Automatizaci\xf3n de un banco de pruebas de un motor a combusti\xf3n"),c.a.createElement("div",{className:"author"},c.a.createElement("span",null,"Alumnos"),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("img",{className:"avatar",src:"".concat(a,"/avatar.png")}),"Cicetti, Joaqu\xedn"),c.a.createElement("div",null,c.a.createElement("img",{className:"avatar",src:"".concat(a,"/avatar.png")}),"Morelli, Nahuel"),c.a.createElement("span",null,"Director"),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("img",{className:"avatar director",src:"".concat(a,"/avatar-director.png")}),"Sim\xf3n, Jos\xe9")),c.a.createElement("hr",null))}),V=(t(618),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Torque")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("span",{className:"line left top"}),c.a.createElement("div",{className:"torque"},c.a.createElement("p",{className:"title"},"M\xe9todos de medici\xf3n"),c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},"...",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"..."),c.a.createElement("li",{className:"bad"},"..."))),c.a.createElement("li",{className:"item"},"...",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"..."),c.a.createElement("li",{className:"bad"},"..."))),c.a.createElement("li",{className:"item"},"...",c.a.createElement("ul",{className:"details"},c.a.createElement("li",{className:"good"},"..."),c.a.createElement("li",{className:"bad"},"..."))))),c.a.createElement("span",{className:"line right bottom"}))}),G=t(150),H=(t(640),t(641),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e(" ")}),[]),c.a.createElement("div",{className:"video"},c.a.createElement(G.Player,{autoPlay:!0,src:"".concat("/thesis-presentation/videos","/calibration.mp4")},c.a.createElement(G.ControlBar,{disableCompletely:!0})))}),Y=(t(642),function(){var e=v().updateTitle;return Object(n.useEffect)((function(){e("Automatizaci\xf3n de un banco de pruebas de un motor a combusti\xf3n")}),[]),c.a.createElement("div",{className:"slide"},c.a.createElement("div",{className:"asks"},c.a.createElement("div",{className:"ask"},c.a.createElement("img",{className:"icon",src:"".concat("/thesis-presentation/icons","/ask-2.png")}),"Qu\xe9 es un banco de pruebas"),c.a.createElement("div",{className:"ask"},"Para qu\xe9 sirve",c.a.createElement("img",{className:"icon",src:"".concat("/thesis-presentation/icons","/ask-2.png")}))),c.a.createElement("hr",null))}),Q=["title","what-is","main-blocks","console","current-situation","requirements","objectives","calibration","linealization","video","enhancements","conclusions","thanks"],$=(t(643),u()("http://localhost:3002")),U=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=v().title,l=Object(r.f)(),s=function(){a&&a.current&&"function"===typeof a.current.click&&a.current.click()},m=function(){e&&e.current&&"function"===typeof e.current.click&&e.current.click()};return p({ArrowLeft:m}),p({ArrowRight:s}),Object(n.useEffect)((function(){$.on("command",(function(e){"next"===e.command?s():m()})),$.on("shortcut",(function(e){var a=e.index,t="/".concat(Q[void 0===a?0:a]);l.push(t)})),$.emit("count",Q.length)}),[]),Object(n.useEffect)((function(){$.emit("update",{title:t})}),[t]),c.a.createElement("div",{className:"app"},c.a.createElement(r.a,{render:function(n){var l=n.location,s=l.pathname,m=Q.indexOf(s.replace("/","")),u=Q[m+1]||"",d=Q[m-1]||"",p=window.serverIP,f=void 0===p?"localhost":p;return c.a.createElement(i.a,null,c.a.createElement(_,{className:"header",key:"header",pose:-1===m?"expanded":"collapsed"},t),c.a.createElement(Z,{key:"routerContainer".concat(l.key)},c.a.createElement(r.c,{location:l,key:"switch"},c.a.createElement(r.a,{path:"/break",component:g,key:"break"}),c.a.createElement(r.a,{path:"/calibration",component:b,key:"calibration"}),c.a.createElement(r.a,{path:"/console",component:O,key:"console"}),c.a.createElement(r.a,{path:"/conclusions",component:y,key:"conclusions"}),c.a.createElement(r.a,{path:"/current-situation",component:z,key:"current-situation"}),c.a.createElement(r.a,{path:"/enhancements",component:M,key:"enhancements"}),c.a.createElement(r.a,{path:"/linealization",component:P,key:"linealization"}),c.a.createElement(r.a,{path:"/main-blocks",component:L,key:"main-blocks"}),c.a.createElement(r.a,{path:"/objectives",component:B,key:"objectives"}),c.a.createElement(r.a,{path:"/requirements",component:F,key:"requirements"}),c.a.createElement(r.a,{path:"/schematic",component:R,key:"schematic"}),c.a.createElement(r.a,{path:"/speed",component:J,key:"speed"}),c.a.createElement(r.a,{path:"/thanks",component:W,key:"thanks"}),c.a.createElement(r.a,{path:"/title",component:X,key:"title"}),c.a.createElement(r.a,{path:"/torque",component:V,key:"torque"}),c.a.createElement(r.a,{path:"/video",component:H,key:"video"}),c.a.createElement(r.a,{path:"/what-is",component:Y,key:"what-is"}))),c.a.createElement(ee,{key:"controls",className:"controls",pose:-1===m?"expanded":"collapsed"},m>=0&&c.a.createElement(o.b,{ref:e,id:"backButton",to:"/".concat(d)},c.a.createElement("img",{alt:"icon-arrow-right",className:"left",src:"".concat("/thesis-presentation/icons","/arrow-right.png")})),m>=0&&c.a.createElement("span",{className:"index"},m),m<Q.length&&c.a.createElement(o.b,{ref:a,to:"/".concat(u),className:"noDecoration"},m>=0?c.a.createElement("img",{alt:"icon-arrow-right",src:"".concat("/thesis-presentation/icons","/arrow-right.png")}):c.a.createElement(c.a.Fragment,null," ",c.a.createElement(E.a,{level:"L",fgColor:"#212121",size:"150",bgColor:"#ffffff00",value:"http://".concat(f,":3002/control")}),c.a.createElement("p",{className:"qrdetail"},"Conectar control")))))}}),c.a.createElement("div",{className:"bg"}))},Z=i.b.div({enter:{opacity:1,left:0,transition:{default:{duration:200},beforeChildren:!0}},exit:{opacity:0,left:"-20%"}}),_=i.b.span({collapsed:{fontSize:"2em",height:"10vh",transition:{duration:200}},expanded:{fontSize:"3em",height:"50vh",transition:{duration:200}}}),ee=i.b.div({collapsed:{height:"5vh",transition:{duration:200}},expanded:{height:"50vh",transition:{duration:200}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(o.a,{basename:"/thesis-presentation"},c.a.createElement((function(e){var a=e.children,t=Object(n.useState)("Proyecto final de ingenier\xeda"),l=Object(f.a)(t,2),s={title:l[0],setTitle:l[1]};return c.a.createElement(N.Provider,{value:s},a)}),null,c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[312,1,2]]]);
//# sourceMappingURL=main.ddac397b.chunk.js.map