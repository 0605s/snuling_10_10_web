(this["webpackJsonp10-10web"]=this["webpackJsonp10-10web"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,u,l=n(0),p=n.n(l),j=n(38),b=n.n(j),x=n(49),d=(n(125),n(15)),f=(n(126),n(17)),h=n(18),m=h.a.div(r||(r=Object(f.a)(["\n\twidth: 100vw;\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 10px max(calc((100vw - 1200px) / 2), 5vw);\n\t/* ","; */\n\tbackground-image: url(",");\n"])),window.screen.width>1100?Math.floor((window.screen.width-1100)/2):"5vw",(function(e){return e.backgroundImg})),O=h.a.div(c||(c=Object(f.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 500;\n\tfont-size: 3rem;\n\tpadding: 2rem 0px;\n\t/* border-bottom: 3px solid black; */\n"]))),v=(h.a.div(a||(a=Object(f.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 400;\n\tfont-size: 2rem;\n"]))),h.a.div(i||(i=Object(f.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 400;\n\tfont-size: 1.5rem;\n"])))),g=h.a.div(s||(s=Object(f.a)(["\n\tfont-family: 'YoonGothic';\n\tfont-weight: 300;\n\tfont-size: 1rem;\n"]))),w=n(1),k=function(){return Object(w.jsxs)(m,{children:[Object(w.jsx)("div",{children:"Home"}),";"]})},E=n(16),y=n.n(E),S=n(21),T=n(33),L=n(12),C=n(203),U=n(204),I=n(200),D=n(205),F=n(196),R=n(106),_=n.n(R),z=Object(h.a)(C.a)(o||(o=Object(f.a)(["\n\tjustify-content: space-around;\n"]))),A=(Object(h.a)(U.a)(u||(u=Object(f.a)(["\n\tdisplay: in-line;\n\twidth: 100px;\n\theight: 30px;\n"]))),function(e){var t=e.type,n=e.onSubmit,r=(Object(d.g)(),Object(l.useState)("")),c=Object(L.a)(r,2),a=c[0],i=c[1],s=Object(l.useState)(""),o=Object(L.a)(s,2),u=o[0],p=o[1],j=Object(l.useCallback)((function(){n(a,u),i(""),p("")}),[]);return Object(w.jsxs)(C.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(I.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(w.jsx)(_.a,{})}),Object(w.jsx)(D.a,{component:"h1",variant:"h5",children:t}),Object(w.jsxs)(z,{component:"form",onSubmit:j,children:[Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(w.jsx)(F.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(w.jsx)(U.a,{variant:"text",fullWidth:!0,size:"medium",children:"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"}),Object(w.jsx)(U.a,{type:"submit",fullWidth:!0,size:"medium",variant:"contained",children:t})]})]})}),N=n(59),H=n.n(N),G="https://jinh0park.pythonanywhere.com/api/",P=[{name:"In Progress",value:"I"},{name:"Unpublished",value:"U"},{name:"Closed",value:"C"}],K=[{name:"Recruiting",value:!1},{name:"Recruitment Complete",value:!0}],W=["korean","english","japanese","chinese","french","spanish"].map((function(e){return{name:e,value:e}})),Y=n(68),B=n(69),q=function(){function e(){Object(Y.a)(this,e)}return Object(B.a)(e,null,[{key:"setAccessToken",value:function(e){this.accessToken=e}},{key:"getHeader",value:function(e){return{headers:{Authorization:""===this.accessToken?void 0:"Bearer ".concat(this.accessToken)},params:e}}}]),e}();q.accessToken="";var J,M,Q,V,X,Z,$,ee,te,ne,re,ce,ae=q,ie=function(e,t){return H.a.get("".concat(G).concat(e),ae.getHeader(t))},se=function(e,t){return H.a.post("".concat(G).concat(e),t,ae.getHeader())},oe=n(14),ue=Object(oe.m)({userEmail:"",user:null,setUserEmail:function(e){this.userEmail=e},setUser:function(e){this.user=e},signUp:function(e,t){var n=this;return Object(S.a)(y.a.mark((function r(){var c,a,i,s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,a=200,i="",r.prev=3,r.next=6,se("signup/",{email:e,pw:t});case 6:s=r.sent,i=s.data.Token,a=s.status,n.setUserEmail(e),c=!0,r.next=18;break;case 13:r.prev=13,r.t0=r.catch(3),console.error("========= SignUp Error ========="),a=r.t0.response.status,console.error(r.t0);case 18:return r.abrupt("return",{success:c,code:a,token:i});case 19:case"end":return r.stop()}}),r,null,[[3,13]])})))()},login:function(e,t){var n=this;return Object(S.a)(y.a.mark((function r(){var c,a,i,s;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,a=200,i="",r.prev=3,r.next=6,se("login/",{email:e,pw:t});case 6:s=r.sent,n.setUserEmail(e),i=s.data.Token,a=s.status,c=!0,r.next=18;break;case 13:r.prev=13,r.t0=r.catch(3),console.error("========= login Error ========="),a=r.t0.response.status,console.error(r.t0);case 18:return r.abrupt("return",{success:c,code:a,token:i});case 19:case"end":return r.stop()}}),r,null,[[3,13]])})))()},getUserInfo:function(){var e=this;return Object(S.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,ie("mypage/");case 4:r=t.sent,e.setUser(r.data),n=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("========= getUserInfo Error ========="),console.error(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},postUserInfo:function(e){var t=this;return Object(S.a)(y.a.mark((function n(){var r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,n.next=4,se("mypage/",{favor:e.favor,subscribe:e.subscribe,lingual:e.lingual});case 4:c=n.sent,t.setUser(c.data),r=!0,n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.error("========= postUserInfo Error ========="),console.error(n.t0);case 13:return n.abrupt("return",r);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}),le=n(107),pe=n(53),je=n.n(pe),be=function(e){try{if(""===e)return Object(pe.now)();var t=Object(le.a)(e).exp;return t||Object(pe.now)()}catch(n){return console.log(n),Object(pe.now)()}},xe=function(e){var t=be(e);return je.a.unix(t).diff(Object(pe.now)())>=86400},de=Object(oe.m)({accessToken:"",refreshToken:"",setAccessToken:function(e){this.accessToken=e},setRefreshToken:function(e){this.refreshToken=e},saveAndSetTokens:function(e,t){var n=this;return Object(S.a)(y.a.mark((function r(){var c;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,r.prev=1,r.next=4,window.localStorage.multiSet([["ACCESS_TOKEN",e],["REFRESH_TOKEN",t]]);case 4:n.setAccessToken(n.accessToken),n.setRefreshToken(n.refreshToken),c=!0,r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error("========= setAccessToken Error ========="),console.error(r.t0);case 13:return r.abrupt("return",c);case 14:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getAccessToken:function(){var e=this;return Object(S.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,e.setAccessToken(""),t.next=5,window.localStorage.getItem("ACCESS_TOKEN");case 5:if((r=t.sent)&&xe(r)){t.next=8;break}return t.abrupt("return",n);case 8:e.accessToken=r,n=!0,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("========= getAccessToken Error ========="),console.error(t.t0);case 16:return t.abrupt("return",n);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},getRefreshToken:function(){var e=this;return Object(S.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,e.setRefreshToken(""),t.next=5,window.localStorage.getItem("REFRESH_TOKEN");case 5:if((r=t.sent)&&xe(r)){t.next=8;break}return t.abrupt("return",n);case 8:e.refreshToken=r,n=!0,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("========= getRefreshToken Error ========="),console.error(t.t0);case 16:return t.abrupt("return",n);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()},clear:function(){var e=this;return Object(S.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,window.localStorage.clear();case 4:e.setAccessToken(""),e.setRefreshToken(""),n=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("========= clear Error ========="),console.error(t.t0);case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}),fe=Object(oe.m)({isOpen:!1,text:"",setIsOpen:function(e){this.isOpen=e},setText:function(e){this.text=e}}),he=Object(oe.m)({experimentList:[],experimentDetail:{},setExperimentList:function(e){this.experimentList=e},setExperimentDetail:function(e){this.experimentDetail=e},getExperimentList:function(e,t,n){var r=this;return Object(S.a)(y.a.mark((function c(){var a,i;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=!1,c.prev=1,r.setExperimentList([]),c.next=5,ie("experiments/",{lingual:e&&e.length>0?e:void 0,status:t,is_full:n});case 5:i=c.sent,r.setExperimentList(i.data),a=!0,c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),console.error("========= getExperimentList Error ========="),console.error(c.t0);case 14:return c.abrupt("return",a);case 15:case"end":return c.stop()}}),c,null,[[1,10]])})))()},getExperimentDetail:function(e){var t=this;return Object(S.a)(y.a.mark((function n(){var r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,n.prev=1,t.setExperimentDetail(void 0),n.next=5,ie("experiments/".concat(e,"/"));case 5:c=n.sent,t.setExperimentDetail(c.data),r=!0,n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.error("========= getExperimentDetail Error ========="),console.error(n.t0);case 14:return n.abrupt("return",r);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},putExperimentDetail:function(e){return Object(S.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,t.prev=1,t.next=4,r="experiments/".concat(e),c=void 0,a=void 0,H.a.put("".concat(G).concat(r),c,ae.getHeader(a));case 4:200===t.sent.data&&(n=!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("========= getExperimentDetail Error ========="),console.error(t.t0);case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}var r,c,a}),t,null,[[1,8]])})))()}}),me=Object(oe.m)({loading:!0,setLoading:function(e){this.loading=e}}),Oe=function(){return{UserStore:ue,TokenStore:de,ToastStore:fe,ExperimentStore:he,LoadingStore:me}},ve=Object(T.a)((function(){var e=Oe().UserStore,t=Object(d.g)(),n=Object(l.useCallback)(function(){var n=Object(S.a)(y.a.mark((function n(r,c){return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.login(r,c);case 2:n.sent,t.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[]);return Object(w.jsx)(A,{type:"Login",onSubmit:n})})),ge=ve,we=n(206),ke=function(e){var t=e.title;e.subTitle;return Object(w.jsxs)(m,{children:[Object(w.jsx)(O,{children:t}),Object(w.jsx)(we.a,{orientation:"horizontal",variant:"middle",flexItem:!0})]})},Ee=n(207),ye=n(195),Se=function(e){var t=e.name,n=e.isSelected,r=e.onClick;return Object(w.jsx)(U.a,{variant:n?"contained":"outlined",onClick:r,children:t})},Te=h.a.div(J||(J=Object(f.a)(["\n\tpadding: 20px 0px;\n"]))),Le=Object(h.a)(ye.a)(M||(M=Object(f.a)(["\n\tmargin: 20px 0px;\n"]))),Ce=Object(T.a)((function(){var e=Oe(),t=e.ExperimentStore,n=e.LoadingStore,r=Object(l.useState)(void 0),c=Object(L.a)(r,2),a=c[0],i=c[1],s=Object(l.useState)(void 0),o=Object(L.a)(s,2),u=o[0],p=o[1],j=Object(l.useState)([]),b=Object(L.a)(j,2),x=b[0],d=b[1],f=function(){var e=Object(S.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),i(a===r?void 0:r),e.next=4,t.getExperimentList(x.join(","),a===r?void 0:r,u);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(S.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),p(u===r?void 0:r),e.next=4,t.getExperimentList(x.join(","),a,u===r?void 0:r);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(S.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),d(x.includes(r)?x.filter((function(e){return e!==r})):x.concat(r)),e.next=4,t.getExperimentList(x.includes(r)?x.filter((function(e){return e!==r})).join(","):x.concat(r).join(","),a,u);case 4:e.sent&&n.setLoading(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(Te,{children:[Object(w.jsxs)(Le,{spacing:2,direction:"row",children:[Object(w.jsx)("div",{children:"status Filter"}),P.map((function(e){return Object(w.jsx)(Se,{name:e.name,isSelected:a===e.value,onClick:function(){return f(e.value)}},e.name)}))]}),Object(w.jsxs)(Le,{spacing:2,direction:"row",children:[Object(w.jsx)("div",{children:"isFull Filter"}),K.map((function(e){return Object(w.jsx)(Se,{name:e.name,isSelected:u===e.value,onClick:function(){return h(e.value)}},e.name)}))]}),Object(w.jsxs)(Le,{spacing:2,direction:"row",children:[Object(w.jsx)("div",{children:"lingual Filter"}),W.map((function(e){return Object(w.jsx)(Se,{name:e.name,isSelected:x.includes(e.value),onClick:function(){return m(e.value)}},e.name)}))]})]})})),Ue=Ce,Ie=n(201),De=h.a.div(Q||(Q=Object(f.a)(["\n\twidth: 370px;\n\theight: 350px;\n\tborder-radius: 20px;\n\tborder: 2px solid black;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t:hover {\n\t\tbackground-color: whitesmoke;\n\t\tcursor: pointer;\n\t}\n"]))),Fe=function(e){var t=e.item,n=Object(d.g)(),r=Object(l.useCallback)((function(){n.push("/experiment/".concat(t.id))}),[]);return Object(w.jsxs)(De,{onClick:r,children:[Object(w.jsxs)(v,{children:["[",t.title,"]"]}),Object(w.jsx)("div",{children:"ON"===t.exp_type?"Online":"Offline"}),Object(w.jsx)("div",{children:t.status}),Object(w.jsxs)("div",{children:["Languages: ",t.lingual," "]}),Object(w.jsx)("div",{children:t.is_full?"\ubaa8\uc9d1 \uc644\ub8cc":"\ubaa8\uc9d1\uc911"}),Object(w.jsx)("div",{children:t.reward_price})]})},Re=Object(T.a)((function(){var e=Oe().ExperimentStore;return Object(w.jsx)(Ie.a,{container:!0,rowSpacing:1,columnSpacing:1,alignItems:"center",children:e.experimentList.map((function(e){return Object(w.jsx)(Ie.a,{item:!0,xs:12,md:6,lg:4,children:Object(w.jsx)(Fe,{item:e},e.title)},e.title)}))})})),_e=Object(T.a)((function(){var e=Oe(),t=e.ExperimentStore,n=e.LoadingStore,r=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setLoading(!0),e.next=3,t.getExperimentList();case 3:e.sent&&n.setLoading(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){r()}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(m,{children:[Object(w.jsx)(Ue,{}),Object(w.jsx)(we.a,{orientation:"horizontal",variant:"middle",flexItem:!0})]}),Object(w.jsx)(m,{children:n.loading?Object(w.jsx)(Ee.a,{}):Object(w.jsx)(Re,{})})]})})),ze=_e,Ae=function(e){e.title,e.menu;var t=e.children;return Object(w.jsx)("div",{children:t})},Ne=function(){return Object(w.jsxs)(Ae,{children:[Object(w.jsx)(ke,{title:"\uc2e4\ud5d8 \ucc38\uc5ec",subTitle:"\uc5b8\uc5b4\ud559\uacfc \uc2e4\ud5d8\uc5d0 \ucc38\uc5ec\ud574\uc8fc\uc138\uc694"}),Object(w.jsx)(ze,{})]})},He=h.a.div(V||(V=Object(f.a)(["\n\twidth: 100vw;\n\theight: 100px;\n\tmargin: 0px;\n\tbox-sizing: border-box;\n\tpadding: 0px 10vw;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),Ge=h.a.img(X||(X=Object(f.a)(["\n\twidth: 200px;\n\theight: auto;\n\topacity: 1;\n"]))),Pe=Object(h.a)(U.a)(Z||(Z=Object(f.a)(["\n\twidth: 50px;\n"]))),Ke=function(){var e=Object(d.g)();return Object(w.jsxs)(He,{children:[Object(w.jsx)(Ge,{src:"".concat("/10-10web","/img/snuling_logo.png"),alt:"",onClick:function(){return e.push("/")}}),Object(w.jsx)(Pe,{variant:"text",onClick:function(){return e.push("/login")},children:"Login"})]})},We=n(25),Ye=n(202),Be=n(108),qe=function(){return Object(w.jsx)(ke,{title:"People"})},Je=function(){return Object(w.jsx)(ke,{title:"Events & News"})},Me=function(){return Object(w.jsx)(ke,{title:"Research & News"})},Qe=function(){return Object(w.jsx)(ke,{title:"Contact Us"})},Ve=Object(h.a)(m)($||($=Object(f.a)(["\n\tbackground-color: ",";\n\theight: 200px;\n\tpadding: 0px 10vw;\n\tdisplay: flex;\n\tflex-direction: row;\n"])),"#666666"),Xe=h.a.div(ee||(ee=Object(f.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: ",";\n"])),(function(e){return"right"===e.type&&"flex-end"})),Ze=h.a.img(te||(te=Object(f.a)(["\n\twidth: 200px;\n\theight: auto;\n\topacity: 1;\n\tmargin-bottom: 20px;\n\t:hover {\n\t\tcursor: pointer;\n\t}\n"]))),$e=Object(h.a)(g)(ne||(ne=Object(f.a)(["\n\tcolor: white;\n\ttext-align: left;\n\tline-height: 25px;\n\ttext-decoration: none;\n"]))),et=[{name:"\uc5b8\uc5b4\ud559\uacfc \ud648\ud398\uc774\uc9c0",url:"http://hosting01.snu.ac.kr/~linguist/"},{name:"\uc11c\uc6b8\ub300\ud559\uad50 \uc778\ubb38\ub300\ud559",url:"http://humanities.snu.ac.kr"}],tt=function(){return Object(w.jsxs)(Ve,{children:[Object(w.jsxs)(Xe,{type:"left",children:[Object(w.jsx)(Ze,{src:"".concat("/10-10web","/img/snuling_logo.png"),alt:"snuling_logo"}),Object(w.jsxs)($e,{children:["Department of Linguistics, Seoul National University, Gwanak_1 Gwanak-ro, Seoul 151-745, Korea ","\n"," Tel:+82-2-880-6164, Fax:+82-2-882-2451."]})]}),Object(w.jsxs)(Xe,{type:"right",children:[Object(w.jsx)($e,{children:"\uad00\ub828 \uc0ac\uc774\ud2b8"}),et.map((function(e){return Object(w.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(w.jsx)($e,{children:e.name})},e.name)}))]})]})},nt=Object(T.a)((function(){var e=Object(d.i)().id,t=Object(d.g)(),n=Oe().ExperimentStore;return Object(l.useEffect)((function(){n.getExperimentDetail(parseInt(e,10))}),[]),n.experimentDetail?Object(w.jsxs)(m,{children:[Object(w.jsx)("div",{children:n.experimentDetail.title}),Object(w.jsx)(U.a,{disabled:n.experimentDetail.is_full,onClick:function(){return console.log("\ucc38\uc5ec")},children:"\uc2e4\ud5d8 \ucc38\uc5ec\ud558\uae30"}),Object(w.jsx)(U.a,{onClick:function(){return t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]}):null})),rt=n(197),ct=n(208),at=Object(h.a)(rt.a)(re||(re=Object(f.a)(["\n\twidth: 100vw;\n\tbox-sizing: border-box;\n\tpadding: 0px 10vw;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\t/* background-color: ","; */\n"])),"#0f0f70"),it=Object(h.a)(ct.a)(ce||(ce=Object(f.a)(["\n\tfont-size: 20px;\n"]))),st=[{title:"People",url:"/people"},{title:"Events & News",url:"/event"},{title:"Research & Projects",url:"/research"},{title:"\uc2e4\ud5d8 \ucc38\uc5ec",url:"/experiment"}],ot=function(){var e=Object(d.h)(),t=Object(d.g)();return Object(w.jsx)(at,{value:function(){var t=e.pathname.split("/")[1];return!!["people","event","research","experiment"].includes(t)&&"/".concat(t)}(),centered:!0,variant:"fullWidth",children:st.map((function(e){return Object(w.jsx)(it,{label:e.title,value:e.url,onClick:function(){return t.push("".concat(e.url))}},e.title)}))})},ut=Object(Be.a)({typography:{fontFamily:"YoonGothic"}}),lt=Object(T.a)((function(){Oe().ToastStore;return Object(We.d)((function(){return Object(w.jsx)(x.b,{basename:"/10-10web",children:Object(w.jsxs)(Ye.a,{theme:ut,children:[Object(w.jsx)(Ke,{}),Object(w.jsx)(ot,{}),Object(w.jsx)(C.a,{sx:{flex:1,minHeight:"100vh"},children:Object(w.jsxs)(d.d,{children:[Object(w.jsx)(d.b,{exact:!0,path:"/",component:k}),Object(w.jsx)(d.b,{path:"/experiment",exact:!0,component:Ne}),Object(w.jsx)(d.b,{path:"/experiment/:id",exact:!0,component:nt}),Object(w.jsx)(d.b,{path:"/people",exact:!0,component:qe}),Object(w.jsx)(d.b,{path:"/event",exact:!0,component:Je}),Object(w.jsx)(d.b,{path:"/research",exact:!0,component:Me}),Object(w.jsx)(d.b,{path:"/contact",exact:!0,component:Qe}),Object(w.jsx)(d.b,{path:"/login",exact:!0,component:ge}),Object(w.jsx)(d.a,{to:"/"})]})}),Object(w.jsx)(tt,{})]})})}))})),pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(w.jsx)(p.a.StrictMode,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(lt,{})})}),document.getElementById("root")),pt()}},[[157,1,2]]]);
//# sourceMappingURL=main.a8046802.chunk.js.map