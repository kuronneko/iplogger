import{l as w,p as v,q as x,j as p,o as f,c as y,b as d,w as o,v as r,x as m,a as s,T as u,n as b,h as _,r as l,f as g,A as $}from"./app.10f2c8f8.js";const k={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},B=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),C=[B],W={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:n}){const t=e;w(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const a=()=>{t.closeable&&n("close")},c=i=>{i.key==="Escape"&&t.show&&a()};v(()=>document.addEventListener("keydown",c)),x(()=>{document.removeEventListener("keydown",c),document.body.style.overflow=null});const h=p(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(i,T)=>(f(),y($,{to:"body"},[d(u,{"leave-active-class":"duration-200"},{default:o(()=>[r(s("div",k,[d(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[r(s("div",{class:"fixed inset-0 transform transition-all",onClick:a},C,512),[[m,e.show]])]),_:1}),d(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[r(s("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",_(h)])},[e.show?l(i.$slots,"default",{key:0}):g("",!0)],2),[[m,e.show]])]),_:3})],512),[[m,e.show]])]),_:3})]))}},E={class:"px-6 py-4"},S={class:"text-lg"},M={class:"mt-4"},N={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},j={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:n}){const t=()=>{n("close")};return(a,c)=>(f(),y(W,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:t},{default:o(()=>[s("div",E,[s("div",S,[l(a.$slots,"title")]),s("div",M,[l(a.$slots,"content")])]),s("div",N,[l(a.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{W as _,j as a};
