(this.webpackJsonpleonorasgamingtable=this.webpackJsonpleonorasgamingtable||[]).push([[0],{36:function(e,t,n){e.exports=n(80)},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},76:function(e,t){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(18),c=n.n(l),i=(n(41),n(42),n(5)),s=n(4),r=n(7),m=n(1),u=(n(43),n(44),n(19)),f=n.n(u),b=n(2),d=n.n(b);var v=function(){var e=f()("http://localhost:3001",{autoConnect:!1,transports:["websocket","polling"]}),t=Object(a.useRef)(),n=Object(a.useState)("off"),l=Object(m.a)(n,2),c=l[0],u=l[1],b=Object(a.useState)("off"),v=Object(m.a)(b,2),p=v[0],g=v[1],h=Object(a.useState)(""),E=Object(m.a)(h,2),O=E[0],j=E[1],N=Object(a.useState)("on"),y=Object(m.a)(N,2),S=y[0],k=y[1],w=Object(a.useState)(""),x=Object(m.a)(w,2),C=x[0],M=x[1],T=Object(a.useState)(""),P=Object(m.a)(T,2),B=P[0],L=P[1],A=Object(a.useState)("Write your first sentence please"),F=Object(m.a)(A,2),H=F[0],D=F[1],R=Object(a.useState)([]),W=Object(m.a)(R,2),I=W[0],J=W[1],X=Object(a.useState)(""),q=Object(m.a)(X,2),z=q[0],G=q[1],Q=Object(a.useState)([]),Z=Object(m.a)(Q,2),$=Z[0],K=Z[1],U=Object(a.useState)([]),V=Object(m.a)(U,2),Y=V[0],_=V[1],ee=Object(a.useState)("off"),te=Object(m.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)("off"),le=Object(m.a)(oe,2),ce=le[0],ie=le[1],se=Object(a.useState)("off"),re=Object(m.a)(se,2),me=re[0],ue=re[1],fe=Object(a.useState)(""),be=Object(m.a)(fe,2),de=be[0],ve=be[1],pe=Object(a.useState)(""),ge=Object(m.a)(pe,2),he=ge[0],Ee=ge[1],Oe=Object(a.useState)("off"),je=Object(m.a)(Oe,2),Ne=je[0],ye=je[1],Se=Object(a.useState)("off"),ke=Object(m.a)(Se,2),we=ke[0],xe=ke[1],Ce=Object(a.useState)("off"),Me=Object(m.a)(Ce,2),Te=Me[0],Pe=Me[1],Be=Object(a.useState)(""),Le=Object(m.a)(Be,2),Ae=Le[0],Fe=Le[1],He=Object(a.useState)("Welcome dear visitor, what would you like to be called?"),De=Object(m.a)(He,2),Re=De[0],We=De[1];Object(a.useEffect)((function(){"off"===p&&Ee("on")}),[]),Object(a.useEffect)((function(){C.length>0&&We("please also Select a spirit guide"),0===C.length&&We("Welcome dear visitor,what would you like to be called?")}),[C]),Object(a.useEffect)((function(){O.length>0&&(e.connect(),e.on("connect",(function(){e.emit("username",{userName:O,room:de})}))),e.on("users",(function(e){J(e)})),e.on("message",(function(e){K((function(t){return[].concat(Object(r.a)(t),[e])})),t.current.scrollTop=t.current.scrollHeight})),e.on("connected",(function(e){J((function(t){return[].concat(Object(r.a)(t),[e])}))})),e.on("start",(function(e){_((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.sentences))})),Fe(e.currentPlayer),Ie(),e.currentPlayer===O?k("on"):k("off")})),e.on("rejected",(function(){We("user name already Taken, sorry"),setTimeout((function(){We("Welcome dear visitor,what would you like to be called?")}),1e3)})),e.on("sentenceBroadcast",(function(e){console.log("newsentence"),console.log(e.text),console.log(e.player),D(e.text),Fe(e.player),_((function(t){return[].concat(Object(r.a)(t),[e.text])})),e.player===O?k("on"):k("off")})),e.on("disconnected",(function(e){J((function(t){return t.filter((function(t){return t.id!==e}))}))}))}),[O]);var Ie=function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?We("sorry "+C+" is already playing"):de?C.length>0&&de.length>0&&(Ee("off"),g("on"),xe("on"),setTimeout((function(){xe("off")}),2e3),setTimeout((function(){u("on")}),2e3)):We("please click on a spirit guide to choose her/him")},Je=function(t){t.preventDefault(),t.stopPropagation();var n={message:z,username:O,room:de};e.open(),e.emit("send",n),G("")},Xe=d()("invisible",{andreb:"on"===he,andrebSelected:"1"===de}),qe=d()("invisible",{rene:"on"===he,reneSelected:"2"===de}),ze=d()("invisible",{pablo:"on"===he,pabloSelected:"3"===de}),Ge=d()("invisible",{benjamin:"on"===he,benjaminSelected:"4"===de}),Qe=d()("invisible",{leonora:"on"===he,leonoraSelected:"5"===de}),Ze=d()("invisible",{max:"on"===he,maxSelected:"6"===de}),$e=d()("invisible",{andre:"on"===he,andreSelected:"7"===de}),Ke=d()("invisible",{marcel:"on"===he,marcelSelected:"8"===de}),Ue=d()({ghostHeadAndreB:"1"===de,andreBFall:"1"===de&&"on"===we,ghostHeadRene:"2"===de,reneFall:"2"===de&&"on"===we,ghostHeadPablo:"3"===de,pabloFall:"3"===de&&"on"===we,ghostHeadBenjamin:"4"===de,benjaminFall:"4"===de&&"on"===we,ghostHeadLeonora:"5"===de,leonoraFall:"5"===de&&"on"===we,ghostHeadMax:"6"===de,maxFall:"6"===de&&"on"===we,ghostHeadAndre:"7"===de,andreFall:"7"===de&&"on"===we,ghostHeadMarcel:"8"===de,marcelFall:"8"===de&&"on"===we},{rotateHead:"on"===Ne},{flyAway:"on"===Te}),Ve=["1","2","3","4","5","6","7","8"],Ye=Object(a.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),_e=Object(m.a)(Ye,2),et=_e[0],tt=_e[1],nt=Object(a.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),at=Object(m.a)(nt,2),ot=at[0],lt=at[1],ct=Object(a.useState)(""),it=Object(m.a)(ct,2),st=it[0],rt=it[1],mt=function(e){e.stopPropagation(),e.preventDefault(),console.log(e.target.id);var t=e.target.id;ve(t),lt(Object(s.a)({},t,"on")),console.log(ot),st.length>0&&(tt(Object(i.a)(Object(i.a)({},et),{},Object(s.a)({},st,"off"))),console.log("nametag "),console.log(et)),rt(t),console.log("previousedoll"),console.log(st)},ut=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;tt(Object(i.a)(Object(i.a)({},et),{},Object(s.a)({},t,"on")))},ft=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;"on"!==ot[t]&&tt(Object(i.a)(Object(i.a)({},et),{},Object(s.a)({},t,"off")))};return e.on("nextPlayer",(function(e){console.log(e),console.log(Ae),Fe(e),console.log("player and current player"),console.log(Ae),console.log(O),e===O?(k("on"),console.log("turnedon")):(k("off"),console.log("turnedoff"))})),o.a.createElement("div",{className:"allContainer"},o.a.createElement("div",{className:"finalPoemModal "+("on"===ne?"":"invisible")},o.a.createElement("div",{className:"finalPoemModalContent "+("on"===ne?"visible":"invisible")},o.a.createElement("div",{className:"closeModalPoem",onClick:function(){ae("off")}},"X"),o.a.createElement("ul",{className:"FinalPoemText"},Y.map((function(e,t){return o.a.createElement("li",{key:t},e)})))),o.a.createElement("button",{className:"downloadButton"},o.a.createElement("a",{href:"data:text/plain;charset=utf-8, "+JSON.stringify(Y,null,1),download:"poem.txt"},"download poem"))),o.a.createElement("div",{className:"rules "+("on"===ce?"":"invisible")},o.a.createElement("div",{className:"rulesContent "+("on"===ce?"visible":"invisible")},o.a.createElement("div",{className:"closeRules",onClick:function(){ie("off")}},"X"),o.a.createElement("p",null," For a minimum of three players, the first player writes any sentence, question, or statement and shows it to the next player. The second player then must write the exact opposite of the statement, word by word. The first statement is conceiled and passed onto the third player who must negate the negation of the first sentence."),o.a.createElement("p",null,"Here is an example composed by M Sandoz, F R Simon, and M Zimbacca "),o.a.createElement("p",null,o.a.createElement("br",null),"When my mother swigs champagne.",o.a.createElement("br",null),"My father\u2019s corpse gets drunk on chianti.",o.a.createElement("br",null),"Our mother\u2019s infants dry up tearlessly.",o.a.createElement("br",null),"The moribund waters of my fatherland.",o.a.createElement("br",null),"An infant dessicates our universe.",o.a.createElement("br",null),"An old corpse waters their afterlife.",o.a.createElement("br",null),"Two infants absorb what precedes death"))),o.a.createElement("div",{className:"on"===he?"dollsBackDrop":"invisible"}),o.a.createElement("div",{className:"nameInputDiv "+("on"===p?" invisible":"")},o.a.createElement("div",{className:"nameQuestion"},Re),o.a.createElement("input",{className:"nameinput",type:"text",onChange:function(e){e.preventDefault(),e.stopPropagation(),M(e.target.value)}}),o.a.createElement("input",{type:"submit",onClick:function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?We("sorry "+C+" is already playing"):de?C.length>0&&de.length>0&&j(C):We("please click on a spirit guide to choose her/him")}})),o.a.createElement("div",{id:Ve[0],className:Xe,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[1]?"":"invisible")},"Andre B")),o.a.createElement("div",{id:Ve[1],className:qe,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[2]?"":"invisible")},"Rene")),o.a.createElement("div",{id:Ve[2],className:ze,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[3]?"":"invisible")},"Pablo")),o.a.createElement("div",{id:Ve[3],className:Ge,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[4]?"":"invisible")},"Benjamin")),o.a.createElement("div",{id:Ve[4],className:Qe,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[5]?"":"invisible")},"Leonora")),o.a.createElement("div",{id:Ve[5],className:Ze,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[6]?"":"invisible")},"max")),o.a.createElement("div",{id:Ve[6],className:$e,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[7]?"":"invisible")},"Andre M")),o.a.createElement("div",{id:Ve[7],className:Ke,onClick:mt,onMouseOver:ut,onMouseLeave:ft},o.a.createElement("p",{className:"nameTag "+("on"===et[8]?"":"invisible")},"Marcel")),o.a.createElement("div",{className:"exterior"},o.a.createElement("div",{className:"leftCurtain "+("on"===p?"leftcurtainOn":"")}),o.a.createElement("div",{className:"rightCurtain "+("on"===p?"rightCurtainOn":"")})),o.a.createElement("div",{className:"interior "},o.a.createElement("div",{className:"on"===p?Ue:"invisible"}),o.a.createElement("div",{className:"title "+("on"===c?"titleAnimate":"invisible")},o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},"welcome ",O),o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},o.a.createElement("h1",null,"let's play OPPOSITES!")),o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},"current player : ",Ae)),o.a.createElement("div",{className:"table "+("on"===c?"tableAnimate":"invisible")},o.a.createElement("div",{className:"on"===c?"titleText":"invisible"},o.a.createElement("div",{className:"display "},H),o.a.createElement("div",{className:"on"===S?"invisible":""},"please wait your turn"),o.a.createElement("input",{className:"sentenceInput "+("on"===S?"":"invisible"),onChange:function(e){e.preventDefault(),e.stopPropagation(),L(e.target.value)},type:"text",placeholder:"write your sentence please"}),o.a.createElement("button",{className:"submitbutton "+("on"===S?"":"invisible"),onClick:function(){ye("on"),e.open(),e.emit("sentence",{sentence:B,room:de}),setTimeout((function(){ye("off")}),2e3)}},"broadcast Sentence"),o.a.createElement("button",{className:"turnButtom gameButton",onClick:function(t){t.preventDefault(),t.stopPropagation(),e.open(),e.emit("nextPlayer",de)}},"next player"),o.a.createElement("button",{className:"openPoemButton gameButton",onClick:function(){ae("on")}},"see poem"),o.a.createElement("button",{className:"openRulesButton gameButton",onClick:function(){ie("on")}},"see Rules")))),o.a.createElement("div",{className:"sidenavchat "+("on"===c?"visible ":"invisible ")+("on"===me?"largeChat":"")},o.a.createElement("div",{className:"chatWindow "+("on"===me?"visible":"invisible")},$.length?o.a.createElement("div",{ref:t,className:"messageBox "+("on"===me?"onChatbox":"")},$.map((function(e,t){var n=e.user,a=(e.date,e.text);return o.a.createElement("div",{key:t,className:n===O?"toLeft":"toRight"},n,": ",a," ")}))):o.a.createElement("h1",{className:"chat-title"},"Speak")),o.a.createElement("div",null,o.a.createElement("input",{className:"chatBox "+("on"===me?"visible":"invisible"),type:"text",placeholder:"message",value:z,onChange:function(e){return G(e.currentTarget.value)}}),o.a.createElement("button",{className:"chatbtn "+("on"===me?"":"invisible"),onClick:Je},"speak"),o.a.createElement("button",Object(s.a)({className:"chatbtn "+("on"===me?"":"invisible"),onClick:Je},"onClick",(function(t){t.preventDefault(),t.stopPropagation(),Pe("on"),e.open(),setTimeout((function(){Pe("off")}),1e3);var n={message:z,username:O,room:de};e.emit("sendToGhost",n),G("")})),"speak with ghost"),o.a.createElement("button",{className:"chatbtn "+("on"===me?"":"invisible"),onClick:function(){ue("off")}},"close chat"),o.a.createElement("button",{className:"chatbtn "+("on"===me?"invisible":""),onClick:function(){ue("on")}},"open chat"),o.a.createElement("div",{className:"roster "},o.a.createElement("h3",null,"players in the room"),o.a.createElement("ul",{id:"users"},I.map((function(e){var t=e.name,n=e.id;return o.a.createElement("li",{key:n,className:"on"===me?"centeredLi":""},t)})))))))};n(79);var p=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.8e29e63e.chunk.js.map