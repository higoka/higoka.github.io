import{S as t,i as a,s as e,e as s,k as n,t as r,c,a as o,n as l,g as u,d as $,b as i,f as m,D as f,h as g,E as h,z as p,j as y,m as v,o as d,v as b,r as w,w as E,H as S}from"../chunks/vendor-dfaef48c.js";import{B as C,E as T,S as I,A as j,U as B,X as H}from"../chunks/currency-df4c89aa.js";async function k(t,a){const e=await async function(t){const a=await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${t}`);if(!a.ok)throw new Error(`failed to fetch currency (${t}) - ${a.status}`);return(await a.json()).data.rates.CHF}(t);return Math.round(e*a*100)/100}function A(t){let a,e,p,y,v,d,b,w,E,S,C,T,I,j,B=t[3].toLocaleString("de-DE",{style:"currency",currency:"CHF"})+"";return{c(){a=s("section"),e=s("div"),p=s("img"),v=n(),d=s("span"),b=s("strong"),w=r(t[1]),E=n(),S=s("p"),C=r(t[2]),T=n(),I=s("p"),j=r(B),this.h()},l(s){a=c(s,"SECTION",{class:!0});var n=o(a);e=c(n,"DIV",{class:!0});var r=o(e);p=c(r,"IMG",{src:!0,alt:!0}),v=l(r),d=c(r,"SPAN",{class:!0});var i=o(d);b=c(i,"STRONG",{class:!0});var m=o(b);w=u(m,t[1]),m.forEach($),E=l(i),S=c(i,"P",{class:!0});var f=o(S);C=u(f,t[2]),f.forEach($),i.forEach($),r.forEach($),T=l(n),I=c(n,"P",{class:!0});var g=o(I);j=u(g,B),g.forEach($),n.forEach($),this.h()},h(){p.src!==(y="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/"+t[0].toLowerCase()+".svg")&&i(p,"src",y),i(p,"alt",t[0]),i(b,"class","svelte-5ln0el"),i(S,"class","svelte-5ln0el"),i(d,"class","svelte-5ln0el"),i(e,"class","svelte-5ln0el"),i(I,"class","svelte-5ln0el"),i(a,"class","svelte-5ln0el")},m(t,s){m(t,a,s),f(a,e),f(e,p),f(e,v),f(e,d),f(d,b),f(b,w),f(d,E),f(d,S),f(S,C),f(a,T),f(a,I),f(I,j)},p(t,[a]){1&a&&p.src!==(y="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/svg/color/"+t[0].toLowerCase()+".svg")&&i(p,"src",y),1&a&&i(p,"alt",t[0]),2&a&&g(w,t[1]),4&a&&g(C,t[2]),8&a&&B!==(B=t[3].toLocaleString("de-DE",{style:"currency",currency:"CHF"})+"")&&g(j,B)},i:h,o:h,d(t){t&&$(a)}}}function D(t,a,e){let{currency:s="BTC"}=a,{title:n="Bitcoin"}=a,{amount:r=0}=a,c=0;return p((async()=>{e(3,c=await k(s,r))})),t.$$set=t=>{"currency"in t&&e(0,s=t.currency),"title"in t&&e(1,n=t.title),"amount"in t&&e(2,r=t.amount)},[s,n,r,c]}class x extends t{constructor(t){super(),a(this,t,D,A,e,{currency:0,title:1,amount:2})}}function L(t){let a,e,s,r,c,o,u,i,f,g,h,p;return a=new x({props:{title:"Bitcoin",currency:"BTC",amount:t[0]}}),s=new x({props:{title:"Ethereum",currency:"ETH",amount:t[1]}}),c=new x({props:{title:"Shiba Inu",currency:"SHIB",amount:t[2]}}),u=new x({props:{title:"Akita Inu",currency:"AKITA",amount:t[3]}}),f=new x({props:{title:"Tether",currency:"USDT",amount:t[4]}}),h=new x({props:{title:"Monero",currency:"XMR",amount:t[5]}}),{c(){y(a.$$.fragment),e=n(),y(s.$$.fragment),r=n(),y(c.$$.fragment),o=n(),y(u.$$.fragment),i=n(),y(f.$$.fragment),g=n(),y(h.$$.fragment)},l(t){v(a.$$.fragment,t),e=l(t),v(s.$$.fragment,t),r=l(t),v(c.$$.fragment,t),o=l(t),v(u.$$.fragment,t),i=l(t),v(f.$$.fragment,t),g=l(t),v(h.$$.fragment,t)},m(t,n){d(a,t,n),m(t,e,n),d(s,t,n),m(t,r,n),d(c,t,n),m(t,o,n),d(u,t,n),m(t,i,n),d(f,t,n),m(t,g,n),d(h,t,n),p=!0},p(t,[e]){const n={};1&e&&(n.amount=t[0]),a.$set(n);const r={};2&e&&(r.amount=t[1]),s.$set(r);const o={};4&e&&(o.amount=t[2]),c.$set(o);const l={};8&e&&(l.amount=t[3]),u.$set(l);const $={};16&e&&($.amount=t[4]),f.$set($);const i={};32&e&&(i.amount=t[5]),h.$set(i)},i(t){p||(b(a.$$.fragment,t),b(s.$$.fragment,t),b(c.$$.fragment,t),b(u.$$.fragment,t),b(f.$$.fragment,t),b(h.$$.fragment,t),p=!0)},o(t){w(a.$$.fragment,t),w(s.$$.fragment,t),w(c.$$.fragment,t),w(u.$$.fragment,t),w(f.$$.fragment,t),w(h.$$.fragment,t),p=!1},d(t){E(a,t),t&&$(e),E(s,t),t&&$(r),E(c,t),t&&$(o),E(u,t),t&&$(i),E(f,t),t&&$(g),E(h,t)}}}function M(t,a,e){let s,n,r,c,o,l;return S(t,C,(t=>e(0,s=t))),S(t,T,(t=>e(1,n=t))),S(t,I,(t=>e(2,r=t))),S(t,j,(t=>e(3,c=t))),S(t,B,(t=>e(4,o=t))),S(t,H,(t=>e(5,l=t))),[s,n,r,c,o,l]}export default class extends t{constructor(t){super(),a(this,t,M,L,e,{})}}
