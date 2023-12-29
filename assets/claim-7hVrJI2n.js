import{N as C,a as b,t as q,n as N,g as E,c as W,T as v,b as y}from"./index-25wVZvKj.js";import{x as o,e as U,g as J,d as x,t as $,w as G,y as K,z as H,A as X,B,D as z,b as A,c as w,m as I,f as l}from"./vendor-27d7NQgn.js";const F=function(s){let{status:e,statusText:t}=s;if(s.ok)return s;t||(t+=e);let r=new Error(t);throw Object.assign(r,{raw:s,code:e,message:t}),r},Q=function(s){const e=s.headers.get("content-type");return/^image\//.test(e)?s.blob():/^(text)\//.test(e)?s.text():s.json().catch(function(t){throw t}).then(function(t){const r=t.data??t.result??t,a=t.error_code??r.error_code??r.code??r.error??t.code??(r.errors?"Errors":void 0)??s.status;if(a&&![200].includes(a)){const i=r.error_message||r.error_msg||r.message||r.msg||t.msg||t.message||t.data||(r.errors??[]).map(n=>n.message).join(`

`);throw Object.assign(new Error(a),{code:a,message:i,raw:s})}return r})},R=async function(s,e={}){const t={method:"GET",headers:{accept:"application/json, */*"},mode:"cors",credentials:"same-origin"};return Object.assign(e,t,{...e}),e.headers&&Object.assign(e.headers,t.headers,{...e.headers}),fetch(s,e).then(F).then(Q).catch(function(r){throw r})},Y=s=>!/^(?:[a-z+]+:)?\/\//.test(s),Z=s=>Y(s)?location.origin+(/^\//.test(s)?"":location.pathname):s,D=function(s,e={}){const t=new URL(s,Z(s));for(let r in e)t.searchParams.set(r,e[r]);return t.toString()};class tt{constructor(){this.fetch=R}get(e,t={},r){return R(D(e,t),r)}post(e,t={},{method:r="POST",form:a=!1,search:i=!1,headers:n={}}={}){const c=a?new URLSearchParams(t).toString():JSON.stringify(t);return R(i?D(e,t):e,{method:r,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json",...n},body:c})}delete(e,t={},r={}){return this.post(e,t,{...r,method:"DELETE"})}}const et=new tt,T={main:{"0x1":"https://api.studio.thegraph.com/query/","0xaa36a7":"https://api.studio.thegraph.com/query/","0x5":"https://api.studio.thegraph.com/query/"},MediaBoard:{"0xfa2":"https://api.thegraph.com/subgraphs/name/pho360360/riffianboard","0xdddd":"https://api.thegraph.com/subgraphs/name/pho360360/riffianboard"}},st=s=>{let e=T[s][C.chainId];return e||(console.error(`Not available for selected network(chain id ${C.chainId}). Fallback to default chainid`),e=T[s][C.defaultChainId]),e},P=async(s="main",e,t,r)=>et.post(st(s),{query:e,variables:t,operationName:r}),j=async(s=!1)=>E("MediaBoard",{account:s?void 0:await W()}),$t=async(s,e)=>{const t=await j(!0),r="getRetreatPrice",a={},i=[s,e];return await b(a,t,r,i),await t[r](...i)},St=async(s,e)=>{const t=await j(!0),r="userSubjectVotes",a={},i=[s,e];return await b(a,t,r,i),await t[r](...i)},_t=async(s,e)=>{const t=await j(),r="retreat",a={},i=[s,e];await b(a,t,r,i);const n=t[r](...i);return new q(n,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:N(),overrides:a}})},kt=async s=>{let e=`{
      userSubjectVotes(where:{holding_gt:0,user:"${s.toLowerCase()}"}) {
        holding
        votes
        subject {
          id
          name
          image
          uri
          supply
          creator{
            address
          }
        }
      }
    }`;return await P("MediaBoard",e)},rt='.skeleton{display:inline-flex;height:100%;width:100%;flex-direction:column;gap:1rem}.p{height:100%;width:6rem;overflow:hidden;border-radius:.375rem;height:1em;background:#dee2e6}.p:after{content:"";display:block;height:100%;width:100%;background:linear-gradient(90deg,#fff0 8%,#fffc 36%,#fff0 66%) 0% 0% / 1200px;animation:skeleton 3s ease-in-out infinite}.p:nth-child(2){width:9rem}.p:nth-child(3){width:12rem}@keyframes skeleton{0%{background-position:-1200px 0}to{background-position:1200px 0}}';var at=Object.defineProperty,it=Object.getOwnPropertyDescriptor,S=(s,e,t,r)=>{for(var a=r>1?void 0:r?it(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&at(e,t,a),a};let g=class extends v(rt){constructor(){super(...arguments),this.expect=!1,this.num=1,this.class=""}get groups(){return new Array(this.num)}render(){return this.expect?o`<slot></slot>`:o`<div class="skeleton ${U(this.$c([this.class]))}">${J(this.groups,()=>o`<div class="p"></div>`)}</div>`}};S([x({type:Boolean})],g.prototype,"expect",2);S([x({type:Number})],g.prototype,"num",2);S([x({type:String})],g.prototype,"class",2);g=S([$("loading-skeleton")],g);var nt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,M=(s,e,t,r)=>{for(var a=r>1?void 0:r?ot(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&nt(e,t,a),a};let O=class extends v(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return o`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return o`<i class="mdi mdi-loading mr-1"></i><slot>Loading...</slot>`}}};M([x({type:String})],O.prototype,"type",2);O=M([$("loading-icon")],O);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends K{constructor(){super(...arguments),this._$Cq=new H(this),this._$CK=new X}render(e,t){return B}update(e,[t,r]){if(this.isConnected||this.disconnected(),t===this._$CX)return;this._$CX=t;let a=0;const{_$Cq:i,_$CK:n}=this;return z(t,async c=>{for(;n.get();)await n.get();const d=i.deref();if(d!==void 0){if(d._$CX!==t)return!1;r!==void 0&&(c=r(c,a)),d.commitValue(c,a),a++}return!0}),B}commitValue(e,t){this.setValue(e)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const lt=G(ct),_=async()=>E("MediaBoard",{account:await W()}),dt=async()=>{const s=await _(),e="claimReward",t={},r=[m()];await b(t,s,e,r);const a=s[e](...r);return new q(a,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"ClaimAlbumRewards",title:"Claim Album Rewards",ts:N(),overrides:t}})},ut=async s=>{const e=await _(),t=await m(),r="userWeeklyVotes",a=[s,t];let i=await e[r](...a);const n="weeklyVotes",c=[t];let d=await e[n](...c);return d==0n?0:await L()*i/d},L=async()=>{const s=await _(),e="weeklyReward",t=[m()];return await s[e](...t)};var h=0n;const ht=async()=>await P("MediaBoard",`{
      statistic(id:"riffian") {
        week
      }
    }`),pt=async s=>{let e=`{
      weeklyStatistic(id:"${s}") {
        volumeVote
      }
    }`;return await P("MediaBoard",e)},m=async()=>{if(h!=0n)return h;const s=7n*24n*60n*60n;try{let r=await(await _())["startTimeStamp"](),a=BigInt(new Date().getTime())/1000n;h=a-(a-r)%s}catch{let t=await ht(),r=BigInt(new Date().getTime())/1000n;h=BigInt(t.statistic.week),h=r-(r-h)%s}return h};var wt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,p=(s,e,t,r)=>{for(var a=r>1?void 0:r?gt(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&wt(e,t,a),a};const V=()=>({tx:""});let u=class extends v(""){constructor(){super(...arguments),this.bindBridge=new A(this,y),this.userWeeklyReward=-1,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=V(),this.resetState=()=>{this.err=V(),this.pending=!1,this.success=!1,this.userWeeklyReward=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(s={})=>this.err=Object.assign({},this.err,s)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{this.userWeeklyReward=await ut(y.bridge.account)}catch(s){let e=s.message||s.code;this.updateErr({tx:e})}finally{}}async claim(){this.pending=!0;try{this.tx=await dt(),this.success=await this.tx.wait()}catch(s){console.log(s);let e=s.message||s.code;if(s.code===4001||s.code==="INVALID_ARGUMENT")return this.updateErr({tx:e}),this.close()}finally{this.pending=!1}}render(){return o`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Claim Rewards</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md">${w(!(this.userWeeklyReward>=0),()=>o`<div class="my-4"><loading-icon></loading-icon></div>`)} ${w(this.userWeeklyReward>=0&&!this.pending,()=>o`<p class="font-bold">Reward Value</p><p class="text-xl text-sky-500">${I(this.userWeeklyReward,18)} FTM</p><ui-button ?disabled="${this.userWeeklyReward<=0}" class="m-1" @click="${this.claim}">CLAIM</ui-button>`)}${w(this.pending,()=>o`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your claim request has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};p([l()],u.prototype,"userWeeklyReward",2);p([l()],u.prototype,"tx",2);p([l()],u.prototype,"success",2);p([l()],u.prototype,"pending",2);p([l()],u.prototype,"rewards",2);p([l()],u.prototype,"err",2);u=p([$("claim-reward-dialog")],u);const mt=".text-highlight{color:var(--colorHighlight)}";var ft=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,k=(s,e,t,r)=>{for(var a=r>1?void 0:r?yt(e,t):e,i=s.length-1,n;i>=0;i--)(n=s[i])&&(a=(r?n(e,t,a):n(a))||a);return r&&a&&ft(e,t,a),a};let f=class extends v(mt){constructor(){super(...arguments),this.bindBridge=new A(this,y),this.rewards=0n,this.pending=!0,this.dialog=!1,this.timeCountDown=async function*(){const s=7n*24n*60n*60n;let e=await m(),t=0n;do{let r=BigInt(new Date().getTime())/1000n;t=e+s-r;let a=t/86400n,i=(t-a*86400n)/3600n,n=(t-a*86400n-i*3600n)/60n,c=t-a*86400n-i*3600n-n*60n;yield a.toString()+"D "+i.toString().padStart(2,"0")+"H "+n.toString().padStart(2,"0")+"M "+c.toString().padStart(2,"0"),await new Promise(d=>setTimeout(d,1e3))}while(t>1)},this.open=()=>this.dialog=!0,this.close=()=>this.dialog=!1}get disabled(){return!y.bridge.account}connectedCallback(){super.connectedCallback(),this.weeklyRewards()}async weeklyRewards(){try{this.pending=!0;try{this.rewards=await L()}catch{let e=await pt(await m());this.rewards=BigInt(e.weeklyStatistic.volumeVote)*4n/100n}this.pending=!1}catch(s){console.error("claim",s)}}render(){return o`<div class="text-right"><div class="font-light text-2xl text-highlight">${w(this.pending,()=>o`<i class="text-lg mdi mdi-loading"></i>`,()=>o`<ui-button icon class="ml-1 mx-auto sm" @click="${this.open}" ?disabled="${this.disabled}" title="Claim"><i class="mdi mdi-hand-coin-outline"></i></ui-button>${I(this.rewards,18)}`)}</div><div class="font-light text-green-500 mt-2">${lt(this.timeCountDown())}</div></div>${w(this.dialog,()=>o`<claim-reward-dialog @close="${this.close}"></claim-reward-dialog>`)}`}};k([l()],f.prototype,"rewards",2);k([l()],f.prototype,"pending",2);k([l()],f.prototype,"dialog",2);f=k([$("claim-rewards")],f);export{m as a,_t as b,kt as c,P as g,lt as h,$t as r,St as u};
