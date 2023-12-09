import{a as w,t as N,n as L,b as x,g as H,c as Q,T as C,U as K,e as M}from"./index-IuekBrYr.js";import{g as F,a as X}from"./claim-jkMOmlP0.js";import{w as Z,y as tt,S as et,p as st,a as T,u as k,x as l,c as m,v as P,f as c,d as y,b as S,l as it,m as ot,h as at,e as rt}from"./vendor-od9KRoES.js";var j={exports:{}};(function(t,e){(function(i,o){o(e,t)})(Z,function(i,o){var s={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function r(p){try{delete window[p]}catch{window[p]=void 0}}function $(p){var u=document.getElementById(p);u&&document.getElementsByTagName("head")[0].removeChild(u)}function z(p){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],D=p,W=u.timeout||s.timeout,A=u.jsonpCallback||s.jsonpCallback,_=void 0;return new Promise(function(G,B){var g=u.jsonpCallbackFunction||a(),V=A+"_"+g;window[g]=function(Y){G({ok:!0,json:function(){return Promise.resolve(Y)}}),_&&clearTimeout(_),$(V),r(g)},D+=D.indexOf("?")===-1?"?":"&";var v=document.createElement("script");v.setAttribute("src",""+D+A+"="+g),u.charset&&v.setAttribute("charset",u.charset),u.nonce&&v.setAttribute("nonce",u.nonce),u.referrerPolicy&&v.setAttribute("referrerPolicy",u.referrerPolicy),u.crossorigin&&v.setAttribute("crossorigin","true"),v.id=V,document.getElementsByTagName("head")[0].appendChild(v),_=setTimeout(function(){B(new Error("JSONP request to "+p+" timed out")),r(g),$(V),window[g]=function(){r(g)}},W),v.onerror=function(){B(new Error("JSONP request to "+p+" failed")),r(g),$(V),_&&clearTimeout(_)}})}o.exports=z})})(j,j.exports);var lt=j.exports;const nt=tt(lt),f=async()=>H("MediaBoard",{account:await Q()}),ct=async(t,e,i)=>{const o=await f(),s="vote",a={},r=[t,e,i];await w(a,o,s,r);const $=o[s](...r);return new N($,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"VoteSubject",title:"Vote Subject",ts:L(),overrides:a}})},dt=async t=>{try{console.log("URI:"+t),t="https://twitter.com/archdeaconsal/status/1732505736616563171",console.log("url:https://publish.twitter.com/oembed?url="+encodeURIComponent(t));let e=await nt("https://publish.twitter.com/oembed?url="+encodeURIComponent(t));return console.log(e.json()),e.json()}catch(e){console.log(e)}},ut=async t=>{try{const e=await f();console.log("addr->"+t);const i="getSocials",o=[t];return(await e[i](...o))[0][2]}catch(e){console.log(e)}},ht=async(t,e)=>{const i=await f(),o="retreat",s={},a=[t,e];await w(s,i,o,a);const r=i[o](...a);return new N(r,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:L(),overrides:s}})},mt=async t=>{const e=await f(),i="subjectToData",o={},s=[t];return await w(o,e,i,s),await e[i](...s)},pt=async t=>{const e=await f(),i="userSubjectVotes",o={},s=[t,x.bridge.account];return await w(o,e,i,s),await e[i](...s)},gt=async t=>{const e=await f(),i="getRetreatPrice",o={},s=[t,1];return await w(o,e,i,s),await e[i](...s)},vt=async t=>{const e=await f(),i="getVotePrice",o={},s=[t,1];return await w(o,e,i,s),await e[i](...s)},ft=async t=>{const e=await f(),i="getVotePriceWithFee",o={},s=[t,1];return await w(o,e,i,s),await e[i](...s)},bt=async(t,e)=>{const i=24n*60n*60n;let o=BigInt(new Date().getTime())/1000n-i,s=`{
      albumWeeklyVotes(first: ${t}, where:{week:${e}}, orderBy: volumeTotal, orderDirection:desc) {
        id
        volumeTotal
        album {
          id
          name
          image
          url
          totalVotes
          artist {
            address
          }
          votes(first:1, where:{time_lt:${o}} orderBy:time, orderDirection:desc){
            supply
          }
        }
      }
    }`;return await F("MediaBoard",s)},wt=async t=>{const e=24n*60n*60n;let i=BigInt(new Date().getTime())/1000n-e,o=`{
      albums(first: ${t}, orderBy:totalVotes, orderDirection:desc) {
        id
        image
        name
        url
        totalVotes
        artist {
          address
        }
        votes(first:1, where:{time_lt:${i}} orderBy:time, orderDirection:desc){
          supply
        }
      }
    }`;return await F("MediaBoard",o)};var yt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,$t=(t,e,i,o)=>{for(var s=o>1?void 0:o?xt(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&yt(e,i,s),s};class U extends et{constructor(){super(),this.key="",this.key="tweets",this.sync()}sync(){this.tweets=JSON.parse(localStorage.getItem(this.key)||"[]")}save(){this.tweets=[...this.tweets],localStorage.setItem(this.key,JSON.stringify(this.tweets))}}$t([st({value:[]})],U.prototype,"tweets",2);const O=new U;var _t=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,d=(t,e,i,o)=>{for(var s=o>1?void 0:o?Vt(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&_t(e,i,s),s};const R=()=>({tx:""});let n=class extends C(""){constructor(){super(...arguments),this.bindBridge=new T(this,x),this.bindTweets=new T(this,O),this.album="",this.url="",this.name="",this.author="",this.retreatDisabled=!0,this.socialName="",this.socialURI="",this.socialID="",this.socialVerified=!1,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=R(),this.resetState=()=>{this.err=R(),this.pending=!1,this.success=!1,this.price=void 0,this.votes=void 0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice(),this.readFromTwitter()}get tweets(){return O.tweets}readFromLocal(t){let e={key:"",author_name:"",author_url:"",html:""};return this.tweets.some(i=>{i.key==t&&(e=i)}),e}async readFromTwitter(){let t=await ut(this.author),e=this.readFromLocal(t);console.log("Read tweet from localStorage"),e.key.length==0&&(e=await dt(this.author),e.key=t,this.tweets.unshift(e),O.save()),this.socialName=e.author_name,this.socialURI=e.author_url,this.socialID=e.author_url.substring(e.author_url.lastIndexOf("/")+1,e.author_url.length-1),console.log(this.socialID),this.socialVerified=e.html.includes(this.author),this.socialVerified=!0}async getPrice(){try{this.votes=mt(this.album).then(t=>t[4]),this.myVotes=pt(this.album).then(t=>(t>0&&(this.retreatDisabled=!1),t)),this.price=vt(this.album).then(t=>k(t,18)),this.retreatPrice=gt(this.album).then(t=>k(t,18))}catch(t){let e=t.message||t.code;this.updateErr({tx:e})}}async vote(){this.pending=!0;try{this.tx=await ct(this.album,1,{value:(await ft(this.album))[0]}),this.success=await this.tx.wait()}catch(t){console.log(t);let e=t.message||t.code;(t.code==="ACTION_REJECTED"||t.code==="INVALID_ARGUMENT")&&(this.updateErr({tx:e}),this.pending=!1)}finally{}}async retreat(){this.pending=!0;try{this.tx=await ht(this.album,1),this.success=await this.tx.wait()}catch(t){console.log(t);let e=t.message||t.code;(t.code==="ACTION_REJECTED"||t.code==="INVALID_ARGUMENT")&&(this.updateErr({tx:e}),this.pending=!1)}finally{}}render(){return l`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="font-bold">VOTE Track</p><div slot="center" class="flex mx-4 mt-4"><div class="flex grow pb-4"><div class="w-24 mr-4"><img-loader src="${this.url}"></img-loader></div><div><div class="text-lg font-bold">${this.name}</div><div><div class="text-sm font-light text-blue-300">${m(this.socialVerified,()=>l`<span><i class="text-green-600 text-sm mdi mdi-check-decagram"></i></span>`)}${this.socialName}</div><div class="text-sm font-light text-blue-300"><a href="${this.socialURI}" target="_blank">@${this.socialID}</a></div></div><div class="text-gray-500">You own ${P(this.myVotes,l`<i class="text-sm mdi mdi-loading"></i>`)} tickets</div></div></div><div class="text-right"><span class="text-lg text-sky-500">${P(this.votes,l`<i class="text-sm mdi mdi-loading"></i>`)}</span><div class="text-sm text-gray-500">Tickets</div><span class="text-lg text-sky-500">${P(this.price,l`<i class="text-sm mdi mdi-loading"></i>`)} FTM</span><div class="text-sm text-gray-500">Vote price <i class="text-sm mdi mdi-help-circle-outline"></i></div></div></div><div slot="bottom" class="mx-4 grid grid-cols-1 text-center">${m(!this.pending,()=>l`<ui-button class="mt-1 w-full" @click="${this.vote}">Vote</ui-button><ui-button class="mt-1 w-full" ?disabled="${this.retreatDisabled}" @click="${this.retreat}">Retreat</ui-button><div class="text-sm text-gray-500">Retreat price: ${P(this.retreatPrice,l`<i class="text-sm mdi mdi-loading"></i>`)} FTM</div>`,()=>l`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your vote has been submit."}}}"><ui-button slot="view" @click="${this.close}">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};d([y({type:String})],n.prototype,"album",2);d([y({type:String})],n.prototype,"url",2);d([y({type:String})],n.prototype,"name",2);d([y({type:String})],n.prototype,"author",2);d([y({type:Promise})],n.prototype,"votes",2);d([c()],n.prototype,"myVotes",2);d([c()],n.prototype,"price",2);d([c()],n.prototype,"retreatPrice",2);d([c()],n.prototype,"retreatDisabled",2);d([c()],n.prototype,"socialName",2);d([c()],n.prototype,"socialURI",2);d([c()],n.prototype,"socialID",2);d([c()],n.prototype,"socialVerified",2);d([c()],n.prototype,"tx",2);d([c()],n.prototype,"success",2);d([c()],n.prototype,"pending",2);d([c()],n.prototype,"rewards",2);d([c()],n.prototype,"err",2);n=d([S("vote-album-dialog")],n);const Pt=":host::part(dialog-container){padding-left:1rem;padding-right:1rem;padding-top:.5rem;font-size:1rem;line-height:1.5rem;min-height:100px}:host::part(dialog-header){min-height:0}:host::part(dialog-body){min-height:0}:host::part(dialog-footer){min-height:0}";var Tt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,J=(t,e,i,o)=>{for(var s=o>1?void 0:o?Ct(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&Tt(e,i,s),s};let I=class extends C([K.styles,Pt]){constructor(){super(...arguments),this.button=!1,this.el$=it()}onClose(){this.emit("close")}refClose(){var t;(t=this.el$.value)==null||t.close()}render(){return l`<ui-dialog ${ot(this.el$)} @close="${this.onClose}"><slot slot="header" name="header" class="font-bold"></slot><slot></slot>${m(this.button,()=>l`<div slot="footer" class="w-full flex justify-between gap-4"><div></div><div><ui-button text @click="${this.refClose}">Close</ui-button></div></div>`)}</ui-dialog>`}};J([y({type:Boolean})],I.prototype,"button",2);I=J([S("ui-prompt")],I);const St="li.header{margin-bottom:.5rem;font-weight:300;--tw-text-opacity: 1;color:#fafaf9;color:rgba(250,250,249,var(--tw-text-opacity));border-bottom:1px solid #898989}li.item:hover{--tw-bg-opacity: 1;background-color:#3f3f46;background-color:rgba(63,63,70,var(--tw-bg-opacity))}@media (min-width: 500px){.name{font-size:1.25rem;line-height:1.75rem}}.icon{font-size:1.875rem;line-height:2.25rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var Dt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,b=(t,e,i,o)=>{for(var s=o>1?void 0:o?Ot(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&Dt(e,i,s),s};let h=class extends C(St){constructor(){super(...arguments),this.bindBridge=new T(this,x),this.weekly=!1,this.showAlbumVote=!1,this.albumToVote={id:"",totalVotes:0,url:"",name:"",artist:{address:""}},this.pending=!1,this.prompt=!1,this.promptMessage="",this.init=async()=>{this.pending=!0;try{let e=this.weekly?await bt(10,await X()):await wt(10);console.log(e),this.albumList=this.weekly?e.albumWeeklyVotes:e.albums}catch(e){this.promptMessage=e,this.prompt=!0}console.log(this.albumList),this.pending=!1;for(var t=0;t<this.albumList.length;t++)if(this.weekly){let e=this.albumList[t];this.albumList[t]=e.album,this.albumList[t].volumeTotal=e.volumeTotal}console.log(this.albumList)},this.close=()=>{this.showAlbumVote=!1,this.init()}}get disabled(){return!x.bridge.account}connectedCallback(){super.connectedCallback(),this.init()}getRandomInt(t){return Math.floor(Math.random()*t)}static dayChange(t){if(t.votes.length==0)return"New";{let e=t.votes[0].supply,i=t.totalVotes,o=Math.abs(e-i),s=(o*100/e).toFixed(1);return e>i?l`<p class="text-red-500">-${s}%</p>`:l`<p class="text-green-500">+${s}%</p>`}}render(){return l`<div>${m(this.pending&&!this.albumList,()=>l`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${m(this.albumList,()=>l`<ul role="list"><li class="flex header p-1"><div class="w-16">Rank</div><div class="flex-auto">Collection</div><div class="flex-auto text-right pr-3">${this.weekly?"Volume":"Price"}</div><div class="flex-none w-16 text-right">24H</div>${m(this.pending,()=>l`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${at(this.albumList,(t,e)=>l`<li class="flex py-2 items-center cursor-pointer ${rt({"bg-zinc-800/50":e%2})}" @click="${()=>{this.disabled?M.emit("connect-wallet"):(this.albumToVote=t,this.showAlbumVote=!0)}}"><div class="flex-none w-16 pl-4 text-lg font-light">${e+1}</div><div class="flex-initial flex"><div class="w-[4.6rem] h-[4.6rem] mr-4"><img-loader sizes="74px, 74px" src="${t.url}"></img-loader></div><div><p class="name truncate mt-2">${t.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-auto text-right pr-3"><p class="text-2xl">${this.weekly?k(t.volumeTotal,18):(Number(t.totalVotes)+1)/10}</p></div><div class="flex-none w-16 text-lg font-light">${h.dayChange(t)}</div></li>`)}</ul>${m(this.showAlbumVote,()=>l`<vote-album-dialog album="${this.albumToVote.id}" url="${this.albumToVote.url}" name="${this.albumToVote.name}" votes="${this.albumToVote.totalVotes}" author="${this.albumToVote.artist.address}" @close="${this.close}"></vote-album-dialog>`)}`)}</div>${m(this.prompt,()=>l`<p class="text-center text-orange-600">${this.promptMessage}</p>`)}`}};b([y({type:Boolean})],h.prototype,"weekly",2);b([c()],h.prototype,"albumList",2);b([c()],h.prototype,"showAlbumVote",2);b([c()],h.prototype,"albumToVote",2);b([c()],h.prototype,"pending",2);b([c()],h.prototype,"prompt",2);b([c()],h.prototype,"promptMessage",2);h=b([S("top-album")],h);var kt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,q=(t,e,i,o)=>{for(var s=o>1?void 0:o?jt(e,i):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(s=(o?r(e,i,s):r(s))||s);return o&&s&&kt(e,i,s),s};let E=class extends C(""){constructor(){super(...arguments),this.bindBridge=new T(this,x),this.dialog=!1,this.open=()=>{this.disabled?M.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!x.bridge.account}render(){return l`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${m(this.dialog,()=>l`<create-social-dialog @close="${this.close}"></create-social-dialog>`)}`}};q([c()],E.prototype,"dialog",2);E=q([S("bind-social-btn")],E);
