import{T as v,b as p,e as w}from"./index-25wVZvKj.js";import{u as $,r as _,b as j,c as P}from"./claim-7hVrJI2n.js";import{b as y,x as n,c as u,m as O,f as c,d as m,t as f,g as V,e as C}from"./vendor-27d7NQgn.js";var S=Object.defineProperty,E=Object.getOwnPropertyDescriptor,d=(t,s,r,i)=>{for(var e=i>1?void 0:i?E(s,r):s,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(i?l(s,r,e):l(e))||e);return i&&e&&S(s,r,e),e};const b=()=>({tx:""});let o=class extends v(""){constructor(){super(...arguments),this.bindBridge=new y(this,p),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=b(),this.resetState=()=>{this.err=b(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let t=await $(this.album,p.bridge.account);this.votes=t,this.price=await _(this.album,this.votes)}catch(t){let s=t.message||t.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await j(this.album,this.votes),this.success=await this.tx.wait()}catch(t){let s=t.message||t.code;if(t.code===4001)return this.updateErr({tx:s}),this.close()}finally{}}render(){return n`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${u(!this.price,()=>n`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${u(this.price&&!this.pending,()=>n`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${O(this.price,18)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${u(this.pending,()=>n`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};d([m({type:String})],o.prototype,"album",2);d([m({type:String})],o.prototype,"url",2);d([m({type:Number})],o.prototype,"votes",2);d([c()],o.prototype,"price",2);d([c()],o.prototype,"tx",2);d([c()],o.prototype,"success",2);d([c()],o.prototype,"pending",2);d([c()],o.prototype,"rewards",2);d([c()],o.prototype,"err",2);o=d([f("retreat-vote-dialog")],o);const D="li.header{margin-bottom:.5rem;font-weight:300;--tw-text-opacity: 1;color:#fafaf9;color:rgba(250,250,249,var(--tw-text-opacity));border-bottom:1px solid #898989}li.item:hover{--tw-bg-opacity: 1;background-color:#3f3f46;background-color:rgba(63,63,70,var(--tw-bg-opacity))}@media (min-width: 500px){.name{font-size:1.25rem;line-height:1.75rem}}.icon{font-size:1.875rem;line-height:2.25rem}@media (max-width: 500px){.icon{font-size:1.5rem;line-height:2rem}}";var T=Object.defineProperty,A=Object.getOwnPropertyDescriptor,g=(t,s,r,i)=>{for(var e=i>1?void 0:i?A(s,r):s,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(i?l(s,r,e):l(e))||e);return i&&e&&T(s,r,e),e};let h=class extends v(D){constructor(){super(...arguments),this.bindBridge=new y(this,p),this.userVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.init=async()=>{if(this.disabled)return;this.pending=!0;let t=await P(p.account);this.userVotes=t.userSubjectVotes,this.pending=!1},this.close=()=>this.dialog=!1}get disabled(){return!p.account}connectedCallback(){super.connectedCallback(),this.init(),p.bridge.subscribe(this.init)}getRandomInt(t){return Math.floor(Math.random()*t)}render(){return n`<div>${u(this.pending,()=>n`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-8"><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton><loading-skeleton num="3"></loading-skeleton></div></div>`)} ${u(!this.pending,()=>n`<ul role="list"><li class="flex header p-1"><div class="w-16">Collection</div><div class="flex-auto text-right pr-3">Author</div><div class="flex-none w-16 text-right">Tickets</div><div class="flex-none w-16 text-right">Holding</div>${u(this.pending,()=>n`<div><i class="text-sm mdi mdi-loading"></i><div></div></div>`)}</li>${V(this.userVotes,(t,s)=>n`<li class="flex py-2 items-center cursor-pointer ${C({"bg-zinc-800/50":s%2})}" @click="${()=>{this.disabled?w.emit("connect-wallet"):location.href="/track/"+t.subject.id}}"><div class="flex-initial flex"><div class="w-[4.6rem] h-[4.6rem] mr-4"><img-loader .src="${t.subject.image}"></img-loader></div><div><p class="name truncate mt-2">${t.subject.name}</p><span class="icon mt-1"><i class="mdi mdi-play-circle-outline"></i></span></div></div><div class="flex-auto text-right pr-3 text-lg"><ui-address .address="${t.subject.creator.address}" short avatar></ui-address></div><div class="flex-none w-16 text-2xl font-light text-right">${t.subject.supply}</div><div class="flex-none w-16 text-2xl font-light text-right">${t.holding}</div></li>`)}</ul>`)}</div>`}};g([c()],h.prototype,"userVotes",2);g([c()],h.prototype,"dialog",2);g([c()],h.prototype,"currentAlbum",2);g([c()],h.prototype,"pending",2);h=g([f("user-votes-list")],h);const k="";var z=Object.defineProperty,M=Object.getOwnPropertyDescriptor,R=(t,s,r,i)=>{for(var e=i>1?void 0:i?M(s,r):s,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(i?l(s,r,e):l(e))||e);return i&&e&&z(s,r,e),e};let x=class extends v(k){render(){return n`<div class="flex px-8 space-x-8 place-content-center"><div class="flex-initial w-[64rem]"><div class="h-20 pt-1 mb-8"><div class="font-bold text-xl">My Votes</div></div><div class="mt-0"><user-votes-list></user-votes-list></div></div></div>`}};x=R([f("user-votes")],x);export{x as ViewTop};
