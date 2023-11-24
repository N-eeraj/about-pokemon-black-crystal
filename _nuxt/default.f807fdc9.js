import{_ as h}from"./nuxt-link.0f2e2e9d.js";import{_ as i,p as L,o as n,c,b as l,w as x,a as _,i as d,t as v,k as S,u as w,r as B,f as b,e as I,x as N,F as m,g as k,h as g,n as q,d as H,s as A,v as C,z as F}from"./entry.db873682.js";import{_ as M,a as R}from"./pokemon-logo.00776a0d.js";const E={class:"nav-item"},P=["src","alt"],T={class:"link-text"},V={__name:"Item",props:{to:{type:String,required:!0},text:{type:String,required:!0},icon:{type:String,required:!0}},setup(t){const s=t,o=S(),e=L(()=>`${o.public.baseURL}/icons/navigation/${s.icon}.svg`);return(a,u)=>{const r=h;return n(),c("li",E,[l(r,{to:t.to,class:"nav-link"},{default:x(()=>[_("img",{src:d(e),alt:d(e),class:"link-icon"},null,8,P),_("span",T,v(t.text),1)]),_:1},8,["to"])])}}},z=i(V,[["__scopeId","data-v-35c9a5a4"]]),U=()=>{const t=w(),s=B(null),o=()=>{const{clientHeight:e,classList:a}=s.value;window.pageYOffset<e&&t.path==="/"?a.add("at-top"):a.remove("at-top")};return b(()=>{o(),window.addEventListener("scroll",o),I(()=>t.path,o)}),N(()=>{window.removeEventListener("scroll",()=>{})}),s},j=[{to:"/",text:"Home",icon:"home"},{to:"/help",text:"Help",icon:"help"},{to:"/info",text:"Info",icon:"info"}];const D={class:"nav-list"},O={__name:"Bar",setup(t){const s=U();return(o,e)=>{const a=z;return n(),c("nav",{ref_key:"navBar",ref:s,class:"nav-bar at-top"},[_("ul",D,[(n(!0),c(m,null,k(d(j),({to:u,text:r,icon:p},f)=>(n(),g(a,{to:u,text:r,icon:p,key:f,class:q(p)},null,8,["to","text","icon","class"]))),128))])],512)}}},Y=i(O,[["__scopeId","data-v-431f3019"]]);const G={class:"link-item"},J={__name:"Link",props:{link:{type:String,required:!0},text:{type:String,required:!0}},setup(t){return(s,o)=>{const e=h;return n(),c("li",G,[l(e,{to:t.link,class:"link"},{default:x(()=>[H(v(t.text),1)]),_:1},8,["to"])])}}},K=i(J,[["__scopeId","data-v-fe4f9939"]]),Q=[[{link:"/info",text:"Info"},{link:"/help",text:"Help"},{link:"/",text:"Home"},{link:"/#about-game",text:"About"}],[{link:"/#pokemon",text:"Pokémon"},{link:"/#multiplayer",text:"Multiplayer"},{link:"/#story-mode",text:"Story Mode"},{link:"/#arcade-mode",text:"Arcade Mode"}]];const y=t=>(A("data-v-153ca439"),t=t(),C(),t),W={class:"footer-section"},X={class:"title"},Z=y(()=>_("img",{src:R,alt:"Pokémon",class:"logo"},null,-1)),tt=y(()=>_("h3",{class:"game-name"}," Black Crystal ",-1)),et=y(()=>_("span",null," Play now ",-1)),nt={__name:"Section",setup(t){return(s,o)=>{const e=M,a=K;return n(),c("footer",W,[_("div",X,[Z,tt,l(e,{link:"https://n-eeraj.github.io/pokemon-black-crystal",external:"",class:"play-now-btn"},{default:x(()=>[et]),_:1})]),(n(!0),c(m,null,k(d(Q),(u,r)=>(n(),c("ul",{class:"link-group",key:r},[(n(!0),c(m,null,k(u,({link:p,text:f},$)=>(n(),g(a,{link:p,text:f,key:`${r}.${$}`},null,8,["link","text"]))),128))]))),128))])}}},ot=i(nt,[["__scopeId","data-v-153ca439"]]);const st={};function ct(t,s){const o=Y,e=ot;return n(),c(m,null,[l(o),_("main",null,[F(t.$slots,"default")]),l(e)],64)}const lt=i(st,[["render",ct]]);export{lt as default};
