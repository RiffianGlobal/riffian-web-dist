import{N as S,a as x,t as D,n as q,g as N,c as V,T as b,b as g}from"./index-1BFxvM1k.js";import{H as E,x as o,g as L,q as K,d as v,c as $,I as J,K as G,M as H,N as U,O as B,P as X,a as W,n as w,y as I,h as c}from"./vendor-SdI0Ipg6.js";const j={main:{"0x1":"https://api.studio.thegraph.com/query/","0xaa36a7":"https://api.studio.thegraph.com/query/","0x5":"https://api.studio.thegraph.com/query/"},MediaBoard:{"0xfa2":"https://api.thegraph.com/subgraphs/name/pho360360/riffianboard","0xdddd":"https://graph.testnet.doid.tech/subgraphs/name/riffian/board"}},F=e=>{let t=j[e][S.chainId];return t||(console.error(`Not available for selected network(chain id ${S.chainId}). Fallback to default chainid`),t=j[e][S.defaultChainId]),t},O=async(e="main",t,s,a)=>E.post(F(e),{query:t,variables:s,operationName:a}),P=async(e=!1)=>N("MediaBoard",{account:e?void 0:await V()}),gt=async(e,t)=>{const s=await P(!0),a="getRetreatPrice",r={},i=[e,t];return await x(r,s,a,i),await s[a](...i)},mt=async(e,t)=>{const s=await P(!0),a="userSubjectVotes",r={},i=[e,t];return await x(r,s,a,i),await s[a](...i)},yt=async(e,t)=>{const s=await P(),a="retreat",r={},i=[e,t];await x(r,s,a,i);const n=s[a](...i);return new D(n,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"RetreatSubject",title:"Retreat Subject",ts:q(),overrides:r}})},ft=async e=>{let t=`{
      userSubjectVotes(where:{holding_gt:0,user:"${e.toLowerCase()}"}) {
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
    }`;return await O("MediaBoard",t)},Q='.skeleton{display:inline-flex;height:100%;width:100%;flex-direction:column;gap:1rem}.p{height:100%;width:6rem;overflow:hidden;border-radius:.375rem;height:1em;background:#22243c}.p:after{content:"";display:block;height:100%;width:100%;background:linear-gradient(90deg,#fff0 8%,#fffc 36%,#fff0 66%) 0% 0% / 1200px;animation:skeleton 3s ease-in-out infinite}.p:nth-child(2){width:9rem}.p:nth-child(3){width:12rem}@keyframes skeleton{0%{background-position:-1200px 0}to{background-position:1200px 0}}';var Y=Object.defineProperty,z=Object.getOwnPropertyDescriptor,_=(e,t,s,a)=>{for(var r=a>1?void 0:a?z(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&Y(t,s,r),r};let m=class extends b(Q){constructor(){super(...arguments),this.expect=!1,this.num=1,this.class=""}get groups(){return new Array(this.num)}render(){return this.expect?o`<slot></slot>`:o`<div class="skeleton ${L(this.$c([this.class]))}">${K(this.groups,()=>o`<div class="p"></div>`)}</div>`}};_([v({type:Boolean})],m.prototype,"expect",2);_([v({type:Number})],m.prototype,"num",2);_([v({type:String})],m.prototype,"class",2);m=_([$("loading-skeleton")],m);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,A=(e,t,s,a)=>{for(var r=a>1?void 0:a?tt(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&Z(t,s,r),r};let R=class extends b(""){constructor(){super(...arguments),this.type="inline"}render(){switch(this.type){case"block":return o`<div class="block mx-auto my-8 text-center text-xl"><i class="mdi mdi-loading mx-1"></i></div>`;default:return o`<i class="mdi mdi-loading mr-1"></i><slot>Loading...</slot>`}}};A([v({type:String})],R.prototype,"type",2);R=A([$("loading-icon")],R);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class et extends G{constructor(){super(...arguments),this._$Cq=new H(this),this._$CK=new U}render(t,s){return B}update(t,[s,a]){if(this.isConnected||this.disconnected(),s===this._$CX)return;this._$CX=s;let r=0;const{_$Cq:i,_$CK:n}=this;return X(s,async u=>{for(;n.get();)await n.get();const h=i.deref();if(h!==void 0){if(h._$CX!==s)return!1;a!==void 0&&(u=a(u,r)),h.commitValue(u,r),r++}return!0}),B}commitValue(t,s){this.setValue(t)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const st=J(et),C=async()=>N("MediaBoard",{account:await V()}),rt=async()=>{const e=await C(),t="claimReward",s={},a=[y()];await x(s,e,t,a);const r=e[t](...a);return new D(r,{errorCodes:"MediaBoard",allowAlmostSuccess:!0,seq:{type:"ClaimAlbumRewards",title:"Claim Album Rewards",ts:q(),overrides:s}})},at=async e=>{const t=await C(),s=await y(),a="userWeeklyVotes",r=[e,s];let i=await t[a](...r);const n="weeklyVotes",u=[s];let h=await t[n](...u);return h==0n?0:await M()*i/h},M=async()=>{const e=await C(),t="weeklyReward",s=[y()];return await e[t](...s)};var p=0n;const it=async()=>await O("MediaBoard",`{
      statistic(id:"riffian") {
        week
      }
    }`),nt=async e=>{let t=`{
      weeklyStatistic(id:"${e}") {
        volumeVote
      }
    }`;return await O("MediaBoard",t)},y=async()=>{if(p!=0n)return p;const e=7n*24n*60n*60n;try{let a=await(await C())["startTimeStamp"](),r=BigInt(new Date().getTime())/1000n;p=r-(r-a)%e}catch{let s=await it(),a=BigInt(new Date().getTime())/1000n;p=BigInt(s.statistic.week),p=a-(a-p)%e}return p};var ot=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,d=(e,t,s,a)=>{for(var r=a>1?void 0:a?ct(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&ot(t,s,r),r};const T=()=>({load:"",tx:""});let l=class extends b(""){constructor(){super(...arguments),this.bindBridge=new W(this,g),this.userWeeklyReward=-1,this.tx=null,this.success=!1,this.pending=!1,this.pendingTx=!1,this.rewards=!1,this.err=T(),this.ts=0,this.resetState=()=>{this.err=T(),this.pending=!1,this.pendingTx=!1,this.success=!1,this.userWeeklyReward=-1,this.ts=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(e={})=>this.err=Object.assign({},this.err,e)}get bridge(){return g.bridge}get emptyRewards(){return this.ts&&!(this.userWeeklyReward>0)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){this.pending=!0;try{this.userWeeklyReward=await at(g.bridge.account)}catch(e){let t=e.message||e.code;this.updateErr({load:t})}finally{this.ts++,this.pending=!1}}async claim(){this.pendingTx=!0;try{this.tx=await rt(),this.success=await this.tx.wait()}catch(e){console.log(e);let t=e.message||e.code;if(e.code===4001||e.code==="INVALID_ARGUMENT")return this.updateErr({tx:t}),this.close();/(Week not past)/.test(t)&&this.updateErr({tx:"Week is not past, please try later."})}finally{this.pendingTx=!1}}render(){return o`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="w-full mr-2 text-base">Claim Rewards</p><div class="w-full h-[5.6rem] flex flex-col justify-center items-center self-center">${w(this.emptyRewards,()=>o`No rewards to claim yet.`,()=>o`${w(this.pending,()=>o`<div class="my-4"><loading-icon></loading-icon></div>`,()=>o`${w(this.pendingTx,()=>o`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your claim request has been submitted."}}}"></tx-state>`,()=>o`<div class="text-base inline-flex items-center"><span class="text-2xl text-yellow-500 mr-2">${I(this.userWeeklyReward,18)}</span> rewards to claim.</div>${w(this.err.tx,()=>o`<div class="mt-1.5 text-red-500 text-sm opacity-70">${this.err.tx}</div>`)}`)}`)}`)}</div><div slot="bottom">${w(this.ts&&!this.emptyRewards,()=>o`<div class="flex justify-center items-center mx-4 py-4 border-t border-transparent" style="border-color:rgba(255,255,255,.12)"><ui-button ?disabled="${this.pendingTx}" ?pending="${this.pendingTx}" @click="${this.claim}">Claim<i class="mdi ${this.pending?"mdi-loading":""}"></i></ui-button></div>`)}</div></ui-dialog>`}};d([c()],l.prototype,"userWeeklyReward",2);d([c()],l.prototype,"tx",2);d([c()],l.prototype,"success",2);d([c()],l.prototype,"pending",2);d([c()],l.prototype,"pendingTx",2);d([c()],l.prototype,"rewards",2);d([c()],l.prototype,"err",2);d([c()],l.prototype,"ts",2);l=d([$("claim-reward-dialog")],l);const lt=".text-highlight{color:var(--colorHighlight)}";var dt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,k=(e,t,s,a)=>{for(var r=a>1?void 0:a?ht(t,s):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&dt(t,s,r),r};let f=class extends b(lt){constructor(){super(...arguments),this.bindBridge=new W(this,g),this.rewards=0n,this.pending=!0,this.dialog=!1,this.timeCountDown=async function*(){const e=7n*24n*60n*60n;let t=await y(),s=0n;do{let a=BigInt(new Date().getTime())/1000n;s=t+e-a;let r=s/86400n,i=(s-r*86400n)/3600n,n=(s-r*86400n-i*3600n)/60n,u=s-r*86400n-i*3600n-n*60n;yield`${r?r.toString()+"D:":""}`+i.toString().padStart(2,"0")+"H:"+n.toString().padStart(2,"0")+"m:"+u.toString().padStart(2,"0")+"s",await new Promise(h=>setTimeout(h,1e3))}while(s>1)},this.open=()=>this.dialog=!0,this.close=()=>this.dialog=!1}get disabled(){return!g.bridge.account}connectedCallback(){super.connectedCallback(),this.weeklyRewards()}async weeklyRewards(){var e;try{this.pending=!0;try{this.rewards=await M()}catch{let s=await nt(await y());this.rewards=BigInt(((e=s.weeklyStatistic)==null?void 0:e.volumeVote)??0)*4n/100n}this.pending=!1}catch(t){console.error("claim",t)}}render(){return o`<div class="text-right"><div class="font-light text-2xl text-highlight">${w(this.pending,()=>o`<i class="text-lg mdi mdi-loading"></i>`,()=>o`<ui-button icon class="ml-1 mx-auto sm" @click="${this.open}" ?disabled="${this.disabled}" title="Claim"><i class="mdi mdi-hand-coin-outline"></i></ui-button>${I(this.rewards,18)}`)}</div><div class="text-green-500 mt-2">${st(this.timeCountDown())}</div></div>${w(this.dialog,()=>o`<claim-reward-dialog @close="${this.close}"></claim-reward-dialog>`)}`}};k([c()],f.prototype,"rewards",2);k([c()],f.prototype,"pending",2);k([c()],f.prototype,"dialog",2);f=k([$("claim-rewards")],f);export{y as a,yt as b,ft as c,O as g,st as h,gt as r,mt as u};
