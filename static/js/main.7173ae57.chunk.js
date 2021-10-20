(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{218:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},244:function(t,e){},267:function(t,e){},269:function(t,e){},346:function(t,e){},348:function(t,e){},381:function(t,e){},386:function(t,e){},388:function(t,e){},395:function(t,e){},408:function(t,e){},431:function(t,e){},440:function(t,e){},442:function(t,e){},512:function(t,e,n){},513:function(t,e,n){},514:function(t,e,n){"use strict";n.r(e);var i,a,o,r,s,d,l,p,c,u,y,b,m,f=n(2),j=n(84),h=n.n(j),x=n(24),O=n(118),w=n(16),g=n(57),A=n(18),E=n.n(A),C=n(68),S=n(67),J=n.n(S),T=n(217),v=n.n(T),k=n(218),M=n(69),D=n(219),N=n(15),z={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(N.a)(Object(N.a)({},z),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(N.a)(Object(N.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(N.a)(Object(N.a)({},z),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(N.a)(Object(N.a)({},t),{},{account:e.payload.account});default:return t}},U={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(N.a)(Object(N.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(N.a)(Object(N.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(N.a)(Object(N.a)({},U),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},V=Object(M.b)({blockchain:q,data:F}),W=[D.a],R=Object(M.c)(M.a.apply(void 0,W)),B=Object(M.d)(V,R),I=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},H=function(t){return function(){var t=Object(C.a)(E.a.mark((function t(e){var n,i,a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,B.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,B.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return i=t.sent,t.next=10,B.getState().blockchain.smartContract.methods.cost().call();case 10:a=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:i,cost:a}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(I("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},P=function(t){return{type:"CONNECTION_FAILED",payload:t}},Q=function(t){return function(){var e=Object(C.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(H());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=n(17),G=L.a.div(i||(i=Object(w.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Y=(L.a.div(a||(a=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),L.a.div(o||(o=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"])))),Z=L.a.div(r||(r=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),K=L.a.div(s||(s=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),_=L.a.div(d||(d=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),X=L.a.p(l||(l=Object(w.a)(["\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(L.a.p(p||(p=Object(w.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),L.a.p(c||(c=Object(w.a)(["\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),tt=(L.a.div(u||(u=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEECAIAAACjtsYkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAutSURBVHhe7dwxdqM6FMZxlylTpswyUk45ZcqUc840KbODVHOyhJRpZwdZ0iwhZd690WfOjUCywGCw3/9XvIOEwBj0gcQ4b/cJ4POTJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJACOJGzF+/v7jx8/3t7eVMZpkYStuLm52e12V1dXKuO0SMJWWAwSlXFal3DeL2NcoRyQhJVcwnm/jHFFioFRGad1CeddPejM+5C+A0lYCUnYCn0HkrASkrCUsbMXfQeSsBKSUGO9+fb21vZs/x01I7cNr6+vbcP22cvXN3Aq47RIQlHXmxPr0+1hSJP4RFWHqDVJWAlJKIq9OWkMg0VIG+x2j4+Pqj1EG3x9i+5Z1Df26YRGJGFY7M13d3daahvtTHggxI876NzfF28TSRiW9eaXlxcVGj5F7RoeCJV7f0X7cwbtSMKA19dX7TF0O5XHJEHlAotBnIf00eNPiSQM6B4IDw8PqpqUhPqAvj8PSbQap0UScnHI/vHxodoxn2Lj+NSyPqDvmqV7f1o2aS1OjCTkSvNdVTV8SpxU2LJqe1KzCaMvLIEk5LSv78P0OHNQVdXT01NqbDf+xpeeqb1RGadFEr6JQyNVfZ/axplDhQ2r4hipJQypsVEZp0USvsmGRv23nHHmUBfHSPUJgxn7zMHsSMI32tFuZ5Hov+kf+1ozhqHxPVLjMwezIwnSv/1npr3dj2MkVQ1JbUz7Mwfz+v8m4WDX70zLQBIfC6oaohYMjdZzsUmIHd0W+oOTgzGwgcosd2jtjiRs20UloaI/OIl36z41moP2WN4n0+UtOMtTbzf4xoFNp3GEo9anTQLT5S04vyTEO+hBY4f42my+JNggTXss71OrmS6v6vySUHka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"),et=n.p+"static/media/newbannere.a8a16e68.png",nt=n(1),it=L.a.button(y||(y=Object(w.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: solid;\n  background-color: black;\n  padding: 10px;\n  fontFamily: Staatliches, cursive;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: bold;\n  font-size: 40px;\n  color: white;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    color: #white;\n  }\n  :hover {\n    transition-duration: .4s;\n    color: #02F702;\n  }\n"]))),at=L.a.div(b||(b=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=L.a.img(m||(m=Object(w.a)(["\n  width: 300px;\n  height: 44px;\n  @media (min-width: 767px) {\n    width: 600px;\n    height: 80px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var rt=function(){var t,e=Object(g.b)(),n=Object(g.c)((function(t){return t.blockchain})),i=Object(g.c)((function(t){return t.data})),a=Object(f.useState)(""),o=Object(O.a)(a,2),r=o[0],s=o[1],d=Object(f.useState)(!1),l=Object(O.a)(d,2),p=l[0],c=l[1],u=function(){""!==n.account&&null!==n.smartContract&&e(H(n.account))};return Object(f.useEffect)((function(){u()}),[n.account]),Object(nt.jsx)(G,{style:{backgroundColor:"var(--black)",fontSize:40},children:Object(nt.jsxs)(_,{flex:1,ai:"center",style:{padding:24,backgroundColor:"black"},children:[Object(nt.jsx)(X,{style:(t={display:"flex",flexDirection:"row",textAlign:"left",fontSize:40,fontWeight:"bold",paddingRight:10,margin:0,borderStyle:"solid",borderColor:"white",borderWidth:0,paddingLeft:30},Object(x.a)(t,"paddingRight",30),Object(x.a)(t,"paddingTop",30),Object(x.a)(t,"borderRadius",20),Object(x.a)(t,"textAlign","center"),Object(x.a)(t,"justifySelf","center"),Object(x.a)(t,"justifyContent","center"),Object(x.a)(t,"color","#7C3AED"),Object(x.a)(t,"background","black"),t),children:Object(nt.jsx)("a",{href:"https://google.com",children:Object(nt.jsx)(ot,{alt:"none",src:et,style:{textAlign:"center"}})})}),Object(nt.jsx)(Z,{}),Object(nt.jsx)(at,{flex:1,style:{padding:24,paddingTop:0},children:Object(nt.jsxs)(_,{flex:1,jc:"center",ai:"center",style:{paddingTop:0,flexDirection:"column"},children:[Object(nt.jsx)(X,{style:{color:"white",textAlign:"center",maxWidth:600,fontSize:25,fontWeight:"bold",borderStyle:"solid",borderColor:"black",paddingBottom:30},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."}),Object(nt.jsxs)(X,{style:{textAlign:"center",fontSize:40,fontWeight:"bold",borderStyle:"solid",borderColor:"white",borderWidth:5,paddingLeft:100,paddingRight:100,borderRadius:10,paddingTop:5,paddingBottom:5,marginTop:5,marginBottom:20,background:"black",color:"white"},children:[" Counter:",Object(nt.jsx)("br",{}),null==n.account?"   ?????":"   "+i.totalSupply,"/1000"]}),Object(nt.jsx)(_,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"black",padding:24,paddingTop:20,borderStyle:"solid",borderColor:"white",borderWidth:0,borderRadius:20,fontSize:40,maxWidth:700,maxHeight:1500},children:1e3==Number(i.totalSupply)?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(X,{style:{textAlign:"center"},children:"The sale has ended."}),Object(nt.jsxs)($,{style:{fontSize:30,textAlign:"center",color:"white"},children:["Dont worry, you're not missing out! You can still get TC1 on"," ",Object(nt.jsx)("a",{href:"https://testnets.opensea.io/collection/",children:"Opensea.io"})]})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:40,color:"white"},children:r}),""===n.account||null===n.smartContract?Object(nt.jsxs)(_,{ai:"center",jc:"center",children:[Object(nt.jsxs)($,{style:{textAlign:"center",fontSize:25,marginBottom:0,color:"white",maxWidth:600},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",Object(nt.jsx)(Y,{}),Object(nt.jsx)(Y,{}),Object(nt.jsxs)("div",{style:{flex:"display"},children:[Object(nt.jsx)(ot,{alt:"silver",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(nt.jsx)(ot,{alt:"silver",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(nt.jsx)(ot,{alt:"gold",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(nt.jsx)(ot,{alt:"diamond",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(nt.jsx)(ot,{alt:"diamond",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}})]})]}),Object(nt.jsx)(it,{style:{fontFamily:"'Staatliches', cursive;",borderWidth:10,borderRadius:90,fontSize:60,marginTop:30},onClick:function(t){t.preventDefault(),e(function(){var t=Object(C.a)(E.a.mark((function t(e){var n,i,a,o,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e({type:"CONNECTION_REQUEST"}),n=window,!(i=n.ethereum)||!i.isMetaMask){t.next=21;break}return J.a.setProvider(i),a=new v.a(i),t.prev=6,t.next=9,i.request({method:"eth_requestAccounts"});case 9:return o=t.sent,t.next=12,i.request({method:"net_version"});case 12:4==t.sent?(r=new J.a(k,"0x94976dD8df588ce2aB902697EE2fa4A42ADADf5e"),e({type:"CONNECTION_SUCCESS",payload:{account:o[0],smartContract:r,web3:a}}),i.on("accountsChanged",(function(t){e(Q(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(P("Change network to Ethereum.")),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),e(P("Something went wrong."));case 19:t.next=22;break;case 21:e(P("Please install Metamask."));case 22:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}()),u()},children:"CONNECT"}),Object(nt.jsx)(K,{}),""!==n.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(Y,{}),Object(nt.jsx)($,{style:{textAlign:"center",fontSize:50},children:Object(nt.jsx)("bold",{style:{color:"white"},children:n.errorMsg})})]}):null]}):Object(nt.jsxs)(_,{ai:"center",jc:"center",fd:"row",style:{marginTop:0,paddingTop:0,color:"white"},children:[Object(nt.jsx)("form",{children:Object(nt.jsx)("input",{id:"inputBox",placeholder:"#",type:"number",min:"1",max:"5",style:{fontFamily:"'Staatliches', cursive",fontSize:30,textAlign:"center",backgroundColor:"black",color:"white",borderWidth:4,borderColor:"white",borderStyle:"solid",borderRadius:100,paddingRight:10,width:100}})}),Object(nt.jsx)(Y,{}),Object(nt.jsx)(it,{style:{fontFamily:"'Staatliches', cursive;",fontSize:50},disabled:p?1:0,onClick:function(t){var i;t.preventDefault(),i=1,(i=document.getElementById("inputBox").value)<=0||(s("Minting your Official TC1 NFT..."),c(!0),n.smartContract.methods.mint(n.account,i).send({gasLimit:285e3*i,to:"0x94976dD8df588ce2aB902697EE2fa4A42ADADf5e",from:n.account,value:n.web3.utils.toWei((.01*i).toString(),"ether")}).once("error",(function(t){console.log(t),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),c(!1)})).then((function(t){s("CONGRATS! Your NFT successfully minted!"),c(!1),e(H(n.account))}))),u()},children:p?"BUSY":"MINT"})]})]})}),Object(nt.jsxs)(X,{style:{color:"white",textAlign:"left",borderStyle:"solid",borderColor:"white",borderWidth:5,borderRadius:20,maxWidth:600,fontSize:70,paddingLeft:30,paddingRight:30,paddingTop:30,lineHeight:.6,paddingBottom:30},children:["Road Map",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsxs)("text",{style:{fontSize:35},children:[Object(nt.jsx)("text",{style:{fontSize:50},children:"25%"})," - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50},children:"50%"})," - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50},children:"100%"})," - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"]})]}),Object(nt.jsxs)(X,{style:{color:"white",textAlign:"left",borderStyle:"solid",borderColor:"white",borderWidth:5,borderRadius:20,marginTop:50,maxWidth:600,fontSize:70,paddingLeft:30,paddingRight:30,paddingTop:30,lineHeight:.6,paddingBottom:30},children:["F.A.Q.",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsxs)("text",{style:{fontSize:35},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50,color:"white"},children:"Question 1?"}),Object(nt.jsx)("br",{}),"lorem ipsum",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50,color:"white"},children:"Question 2?"}),Object(nt.jsx)("br",{}),"lorem ipsum",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50,color:"white"},children:"Question 3?"}),Object(nt.jsx)("br",{}),"lorem ipsum",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50,color:"white"},children:"Question 4?"}),Object(nt.jsx)("br",{}),"lorem ipsum",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{}),Object(nt.jsx)("text",{style:{fontSize:50,color:"white"},children:"Question 5?"}),Object(nt.jsx)("br",{}),"lorem ipsum",Object(nt.jsx)("br",{}),Object(nt.jsx)("br",{})]})]})]})}),Object(nt.jsx)(Y,{}),Object(nt.jsxs)(_,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsx)($,{style:{textAlign:"center",fontSize:40},children:Object(nt.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x94976dD8df588ce2aB902697EE2fa4A42ADADf5e",style:{textDecoration:"none",color:"white",fontSize:20},children:"Smart Contract Link"})}),Object(nt.jsx)(Y,{})]})]})})},st=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,518)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),o(t),r(t)}))};n(512),n(513);h.a.render(Object(nt.jsx)(g.a,{store:B,children:Object(nt.jsx)(rt,{})}),document.getElementById("root")),st()}},[[514,1,2]]]);
//# sourceMappingURL=main.7173ae57.chunk.js.map