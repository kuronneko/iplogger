import{j as u,v as n,z as l,h as d,o as p,e as i,s as f}from"./app.edf02c9b.js";const h=["value"],m={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(t,{emit:s}){const r=t,e=u({get(){return r.checked},set(o){s("update:checked",o)}});return(o,a)=>n((p(),i("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>f(e)?e.value=c:null),type:"checkbox",value:t.value,class:"rounded border-gray-300 text-neutral-600 shadow-sm focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50"},null,8,h)),[[l,d(e)]])}};export{m as _};