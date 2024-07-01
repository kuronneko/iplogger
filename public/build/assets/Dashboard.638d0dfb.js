import{D as xe,d as R,E as be,l as j,s as q,G as W,I as Re,j as $,J as Ce,K as we,h as v,M as X,N as Y,C as ee,L as Le,y as M,O as w,o as L,c as I,w as C,a as y,b,g as O,f as P,e as U,m as ke,n as Ee,i as Se,F as Oe,t as Ve}from"./app.10f2c8f8.js";import{_ as Pe}from"./AppLayout.9803e948.js";import{_ as Te}from"./PrimaryButton.5db22199.js";import{P as Ie}from"./Paginator.1955ee4e.js";import{a as je,_ as Ue}from"./TextInput.7e2d7161.js";import{_ as Ae}from"./InputLabel.700e69af.js";import{_ as ze}from"./FormSection.37f9cfce.js";import{S as Be}from"./SectionBorder.00855387.js";import Fe from"./DeleteAllLog.36d4b2f8.js";import De from"./ExportAllLog.a1f588fa.js";import Ne from"./ImportAllLog.36d7bddb.js";import{_ as Me}from"./_plugin-vue_export-helper.cdc0426e.js";import"./TermsOfService.dff499a7.js";import"./AuthenticationCardLogo.c3c0c6a8.js";import"./SectionTitle.fba31382.js";import"./ActionSection.e3b05ddd.js";import"./DangerButton.227ac814.js";import"./DialogModal.430c0bcb.js";import"./SecondaryButton.0d891ee4.js";function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,n)=>(t.includes(n)||(r[n]=v(e[n])),r),{})}function z(e){return typeof e=="function"}function Ge(e){return Ce(e)||we(e)}function le(e,t,r){let n=e;const s=t.split(".");for(let l=0;l<s.length;l++){if(!n[s[l]])return r;n=n[s[l]]}return n}function G(e,t,r){return $(()=>e.some(n=>le(t,n,{[r]:!1})[r]))}function re(e,t,r){return $(()=>e.reduce((n,s)=>{const l=le(t,s,{[r]:!1})[r]||[];return n.concat(l)},[]))}function ie(e,t,r,n){return e.call(n,v(t),v(r),n)}function ue(e){return e.$valid!==void 0?!e.$valid:!e}function qe(e,t,r,n,s,l,g){let{$lazy:i,$rewardEarly:f}=s,d=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const p=R(!!n.value),o=R(0);r.value=!1;const a=j([t,n].concat(d,h),()=>{if(i&&!n.value||f&&!m.value&&!r.value)return;let c;try{c=ie(e,t,u,g)}catch(x){c=Promise.reject(x)}o.value++,r.value=!!o.value,p.value=!1,Promise.resolve(c).then(x=>{o.value--,r.value=!!o.value,l.value=x,p.value=ue(x)}).catch(x=>{o.value--,r.value=!!o.value,l.value=x,p.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:p,$unwatch:a}}function Ze(e,t,r,n,s,l,g,i){let{$lazy:f,$rewardEarly:d}=n;const u=()=>({}),m=$(()=>{if(f&&!r.value||d&&!i.value)return!1;let h=!0;try{const p=ie(e,t,g,l);s.value=p,h=ue(p)}catch(p){s.value=p}return h});return{$unwatch:u,$invalid:m}}function We(e,t,r,n,s,l,g,i,f,d,u){const m=R(!1),h=e.$params||{},p=R(null);let o,a;e.$async?{$invalid:o,$unwatch:a}=qe(e.$validator,t,m,r,n,p,s,e.$watchTargets,f,d,u):{$invalid:o,$unwatch:a}=Ze(e.$validator,t,r,n,p,s,f,d);const c=e.$message;return{$message:z(c)?$(()=>c(te({$pending:m,$invalid:o,$params:te(h),$model:t,$response:p,$validator:l,$propertyPath:i,$property:g}))):c||"",$params:h,$pending:m,$invalid:o,$response:p,$unwatch:a}}function He(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=v(e),r=Object.keys(t),n={},s={},l={};let g=null;return r.forEach(i=>{const f=t[i];switch(!0){case z(f.$validator):n[i]=f;break;case z(f):n[i]={$validator:f};break;case i==="$validationGroups":g=f;break;case i.startsWith("$"):l[i]=f;break;default:s[i]=f}}),{rules:n,nestedValidators:s,config:l,validationGroups:g}}function Je(){}const Ke="__root";function ce(e,t,r){if(r)return t?t(e()):e();try{var n=Promise.resolve(e());return t?n.then(t):n}catch(s){return Promise.reject(s)}}function Qe(e,t){return ce(e,Je,t)}function Xe(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function Ye(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}function et(e,t,r,n,s,l,g,i,f){const d=Object.keys(e),u=n.get(s,e),m=R(!1),h=R(!1),p=R(0);if(u){if(!u.$partial)return u;u.$unwatch(),m.value=u.$dirty.value}const o={$dirty:m,$path:s,$touch:()=>{m.value||(m.value=!0)},$reset:()=>{m.value&&(m.value=!1)},$commit:()=>{}};return d.length?(d.forEach(a=>{o[a]=We(e[a],t,o.$dirty,l,g,a,r,s,f,h,p)}),o.$externalResults=$(()=>i.value?[].concat(i.value).map((a,c)=>({$propertyPath:s,$property:r,$validator:"$externalResults",$uid:`${s}-externalResult-${c}`,$message:a,$params:{},$response:null,$pending:!1})):[]),o.$invalid=$(()=>{const a=d.some(c=>v(o[c].$invalid));return h.value=a,!!o.$externalResults.value.length||a}),o.$pending=$(()=>d.some(a=>v(o[a].$pending))),o.$error=$(()=>o.$dirty.value?o.$pending.value||o.$invalid.value:!1),o.$silentErrors=$(()=>d.filter(a=>v(o[a].$invalid)).map(a=>{const c=o[a];return W({$propertyPath:s,$property:r,$validator:a,$uid:`${s}-${a}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(o.$externalResults.value)),o.$errors=$(()=>o.$dirty.value?o.$silentErrors.value:[]),o.$unwatch=()=>d.forEach(a=>{o[a].$unwatch()}),o.$commit=()=>{h.value=!0,p.value=Date.now()},n.set(s,e,o),o):(u&&n.set(s,e,o),o)}function tt(e,t,r,n,s,l,g){const i=Object.keys(e);return i.length?i.reduce((f,d)=>(f[d]=Z({validations:e[d],state:t,key:d,parentKey:r,resultsCache:n,globalConfig:s,instance:l,externalResults:g}),f),{}):{}}function rt(e,t,r){const n=$(()=>[t,r].filter(o=>o).reduce((o,a)=>o.concat(Object.values(v(a))),[])),s=$({get(){return e.$dirty.value||(n.value.length?n.value.every(o=>o.$dirty):!1)},set(o){e.$dirty.value=o}}),l=$(()=>{const o=v(e.$silentErrors)||[],a=n.value.filter(c=>(v(c).$silentErrors||[]).length).reduce((c,x)=>c.concat(...x.$silentErrors),[]);return o.concat(a)}),g=$(()=>{const o=v(e.$errors)||[],a=n.value.filter(c=>(v(c).$errors||[]).length).reduce((c,x)=>c.concat(...x.$errors),[]);return o.concat(a)}),i=$(()=>n.value.some(o=>o.$invalid)||v(e.$invalid)||!1),f=$(()=>n.value.some(o=>v(o.$pending))||v(e.$pending)||!1),d=$(()=>n.value.some(o=>o.$dirty)||n.value.some(o=>o.$anyDirty)||s.value),u=$(()=>s.value?f.value||i.value:!1),m=()=>{e.$touch(),n.value.forEach(o=>{o.$touch()})},h=()=>{e.$commit(),n.value.forEach(o=>{o.$commit()})},p=()=>{e.$reset(),n.value.forEach(o=>{o.$reset()})};return n.value.length&&n.value.every(o=>o.$dirty)&&m(),{$dirty:s,$errors:g,$invalid:i,$anyDirty:d,$error:u,$pending:f,$touch:m,$reset:p,$silentErrors:l,$commit:h}}function Z(e){const t=Ye(function(){return N(),Xe(function(){if(c.$rewardEarly)return Q(),Qe(ee)},function(){return ce(ee,function(){return new Promise(_=>{if(!D.value)return _(!F.value);const S=j(D,()=>{_(!F.value),S()})})})})});let{validations:r,state:n,key:s,parentKey:l,childResults:g,resultsCache:i,globalConfig:f={},instance:d,externalResults:u}=e;const m=l?`${l}.${s}`:s,{rules:h,nestedValidators:p,config:o,validationGroups:a}=He(r),c=Object.assign({},f,o),x=s?$(()=>{const _=v(n);return _?v(_[s]):void 0}):n,T=Object.assign({},v(u)||{}),H=$(()=>{const _=v(u);return s?_?v(_[s]):void 0:_}),J=et(h,x,s,i,m,c,d,H,n),E=tt(p,x,m,i,c,d,H),K={};a&&Object.entries(a).forEach(_=>{let[S,k]=_;K[S]={$invalid:G(k,E,"$invalid"),$error:G(k,E,"$error"),$pending:G(k,E,"$pending"),$errors:re(k,E,"$errors"),$silentErrors:re(k,E,"$silentErrors")}});const{$dirty:B,$errors:me,$invalid:F,$anyDirty:ge,$error:pe,$pending:D,$touch:N,$reset:ve,$silentErrors:$e,$commit:Q}=rt(J,E,g),he=s?$({get:()=>v(x),set:_=>{B.value=!0;const S=v(n),k=v(u);k&&(k[s]=T[s]),q(S[s])?S[s].value=_:S[s]=_}}):null;s&&c.$autoDirty&&j(x,()=>{B.value||N();const _=v(u);_&&(_[s]=T[s])},{flush:"sync"});function ye(_){return(g.value||{})[_]}function _e(){q(u)?u.value=T:Object.keys(T).length===0?Object.keys(u).forEach(_=>{delete u[_]}):Object.assign(u,T)}return W(Object.assign({},J,{$model:he,$dirty:B,$error:pe,$errors:me,$invalid:F,$anyDirty:ge,$pending:D,$touch:N,$reset:ve,$path:m||Ke,$silentErrors:$e,$validate:t,$commit:Q},g&&{$getResultsForChild:ye,$clearExternalResults:_e,$validationGroups:K},E))}class nt{constructor(){this.storage=new Map}set(t,r,n){this.storage.set(t,{rules:r,result:n})}checkRulesValidity(t,r,n){const s=Object.keys(n),l=Object.keys(r);return l.length!==s.length||!l.every(i=>s.includes(i))?!1:l.every(i=>r[i].$params?Object.keys(r[i].$params).every(f=>v(n[i].$params[f])===v(r[i].$params[f])):!0)}get(t,r){const n=this.storage.get(t);if(!n)return;const{rules:s,result:l}=n,g=this.checkRulesValidity(t,r,s),i=l.$unwatch?l.$unwatch:()=>({});return g?l:{$dirty:l.$dirty,$partial:!0,$unwatch:i}}}const A={COLLECT_ALL:!0,COLLECT_NONE:!1},ne=Symbol("vuelidate#injectChildResults"),se=Symbol("vuelidate#removeChildResults");function st(e){let{$scope:t,instance:r}=e;const n={},s=R([]),l=$(()=>s.value.reduce((u,m)=>(u[m]=v(n[m]),u),{}));function g(u,m){let{$registerAs:h,$scope:p,$stopPropagation:o}=m;o||t===A.COLLECT_NONE||p===A.COLLECT_NONE||t!==A.COLLECT_ALL&&t!==p||(n[h]=u,s.value.push(h))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],g);function i(u){s.value=s.value.filter(m=>m!==u),delete n[u]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],i);const f=X(ne,[]);Y(ne,r.__vuelidateInjectInstances);const d=X(se,[]);return Y(se,r.__vuelidateRemoveInstances),{childResults:l,sendValidationResultsToParent:f,removeValidationResultsFromParent:d}}function de(e){return new Proxy(e,{get(t,r){return typeof t[r]=="object"?de(t[r]):$(()=>t[r])}})}let oe=0;function ae(e,t){var r;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,t=void 0);let{$registerAs:s,$scope:l=A.COLLECT_ALL,$stopPropagation:g,$externalResults:i,currentVueInstance:f}=n;const d=f||((r=xe())===null||r===void 0?void 0:r.proxy),u=d?d.$options:{};s||(oe+=1,s=`_vuelidate_${oe}`);const m=R({}),h=new nt,{childResults:p,sendValidationResultsToParent:o,removeValidationResultsFromParent:a}=d?st({$scope:l,instance:d}):{childResults:R({})};if(!e&&u.validations){const c=u.validations;t=R({}),be(()=>{t.value=d,j(()=>z(c)?c.call(t.value,new de(t.value)):c,x=>{m.value=Z({validations:x,state:t,childResults:p,resultsCache:h,globalConfig:n,instance:d,externalResults:i||d.vuelidateExternalResults})},{immediate:!0})}),n=u.validationsConfig||n}else{const c=q(e)||Ge(e)?e:W(e||{});j(c,x=>{m.value=Z({validations:x,state:t,childResults:p,resultsCache:h,globalConfig:n,instance:d!=null?d:{},externalResults:i})},{immediate:!0})}return d&&(o.forEach(c=>c(m,{$registerAs:s,$scope:l,$stopPropagation:g})),Re(()=>a.forEach(c=>c(s)))),$(()=>Object.assign({},v(m.value),p.value))}const fe=e=>{if(e=v(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length};function V(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n=>(n=v(n),!fe(n)||t.every(s=>s.test(n)))}V(/^[a-zA-Z]*$/);V(/^[a-zA-Z0-9]*$/);V(/^\d*(\.\d+)?$/);const ot=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;V(ot);function at(e){return typeof e=="string"&&(e=e.trim()),fe(e)}var lt={$validator:at,$message:"Value is required",$params:{type:"required"}};const it=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;var ut=V(it),ct={$validator:ut,$message:"The value is not a valid URL address",$params:{type:"url"}};V(/(^[0-9]*$)|(^-[0-9]+$)/);V(/^[-]?\d*(\.\d+)?$/);const dt={setup(){return{v$:ae()}},props:{user:Object},data(){return{url:this.setUrl(),shortUrl:this.setShortUrl(),redirect:this.user.setting.redirect,isLoading:!1}},validations(){return{redirect:{required:lt,url:ct,$autoDirty:!0}}},components:{DeleteAllLog:Fe,SectionBorder:Be,useVuelidate:ae,FormSection:ze,InputError:je,InputLabel:Ae,TextInput:Ue,AppLayout:Pe,PrimaryButton:Te,Paginator:Ie,Link:Le,ExportAllLog:De,ImportAllLog:Ne},methods:{generateShortUrl:function(e){e.setting.slug===null&&(M.Inertia.post(route("setting_generate_slug",e),{_method:"put"}),setTimeout(()=>{this.Toast().fire({icon:"success",title:"Short URL generated"}),this.shortUrl=this.setShortUrl()},500))},toggleSilenceMode:function(e){setTimeout(()=>{M.Inertia.post(route("setting_silence_mode",e),{_method:"put"}),e.setting.redirect===null&&(this.redirect="https://www.google.com"),this.user.setting.silence_mode==0?this.Toast().fire({icon:"success",title:"Silent mode ON"}):this.Toast().fire({icon:"success",title:"Silent mode OFF"})},500)},saveRedirect:function(e){this.v$.$touch(),!this.v$.$error&&e.setting.silence_mode==0&&(this.isLoading=!0,M.Inertia.post(route("setting_save_redirect",{user:e.id,redirect:this.redirect}),{_method:"put"}),setTimeout(()=>{this.Toast().fire({icon:"success",title:"Redirect URL saved"}),this.isLoading=!1},1e3))},setShortUrl(){if(this.user.setting.slug){let e=this.user.setting.slug,t=location.hostname;return"https"+"://"+t+"/"+e}else return""},setUrl(){let e=this.user.setting.uuid,t=location.hostname;return"https"+"://"+t+"/api/network/get/"+e},copyUrl(){navigator.clipboard&&(navigator.clipboard.writeText(this.url),console.log(this.url),this.Toast().fire({icon:"success",title:"URL Copied to your clipboard"}))},copyShortUrl(){navigator.clipboard&&(navigator.clipboard.writeText(this.shortUrl),console.log(this.shortUrl),this.Toast().fire({icon:"success",title:"Short URL Copied to your clipboard"}))},Toast(){return this.$swal.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:1700,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",this.$swal.stopTimer),e.addEventListener("mouseleave",this.$swal.resumeTimer)}})}}},ft=y("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),mt={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},gt={class:"col-span-6 sm:col-span-12"},pt={class:"flex"},vt={class:"col-span-6 sm:col-span-12"},$t={class:"flex"},ht={class:"col-span-6 sm:col-span-12"},yt=y("input",{type:"checkbox",value:"",id:"default-toggle",class:"sr-only peer"},null,-1),_t=y("div",{class:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"},null,-1),xt=y("span",{class:"ml-3 text-xs font-medium text-gray-900 dark:text-gray-300"},"Silent mode does not redirect when link is clicked",-1),bt=[yt,_t,xt],Rt=y("input",{type:"checkbox",value:"",id:"checked-toggle",class:"sr-only peer",checked:""},null,-1),Ct=y("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"},null,-1),wt=y("span",{class:"ml-3 text-xs font-medium text-gray-900 dark:text-gray-300"},"Silent mode does not redirect when link is clicked",-1),Lt=[Rt,Ct,wt],kt={class:"col-span-6 sm:col-span-12"},Et=y("svg",{class:"inline mr-2 w-3 h-3 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[y("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),y("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1);function St(e,t,r,n,s,l){const g=w("InputLabel"),i=w("TextInput"),f=w("PrimaryButton"),d=w("FormSection"),u=w("SectionBorder"),m=w("ExportAllLog"),h=w("ImportAllLog"),p=w("DeleteAllLog"),o=w("AppLayout");return L(),I(o,{title:"Dashboard"},{header:C(()=>[ft]),default:C(()=>[y("div",null,[y("div",mt,[b(d,null,{title:C(()=>[O(" IP Logger Settings ")]),description:C(()=>[O(" Update your account's information, and use the URL link to capture IPs. ")]),form:C(()=>[y("div",gt,[b(g,{for:"url",value:"URL"}),y("div",pt,[b(i,{readonly:"",modelValue:s.url,"onUpdate:modelValue":t[0]||(t[0]=a=>s.url=a),type:"text",class:"mt-1 block w-full",autocomplete:"url"},null,8,["modelValue"]),y("div",null,[b(f,{onClick:t[1]||(t[1]=a=>l.copyUrl()),class:"ml-1 py-3 mt-1"},{default:C(()=>[O("Copy ")]),_:1})])])]),y("div",vt,[b(g,{for:"shortUrl",value:"Short URL"}),y("div",$t,[b(i,{readonly:"",modelValue:s.shortUrl,"onUpdate:modelValue":t[2]||(t[2]=a=>s.shortUrl=a),type:"text",class:"mt-1 block w-full",autocomplete:"url"},null,8,["modelValue"]),y("div",null,[r.user.setting.slug===null?(L(),I(f,{key:0,onClick:t[3]||(t[3]=a=>l.generateShortUrl(r.user)),class:"ml-1 py-3 mt-1"},{default:C(()=>[O("Generate ")]),_:1})):P("",!0),r.user.setting.slug?(L(),I(f,{key:1,onClick:t[4]||(t[4]=a=>l.copyShortUrl()),class:"ml-1 py-3 mt-1"},{default:C(()=>[O("Copy ")]),_:1})):P("",!0)])])]),y("div",ht,[b(g,{for:"silence_mode",value:"Silent Mode",class:"mb-2"}),y("div",null,[r.user.setting.silence_mode==0?(L(),U("label",{key:0,"preserve-scroll":"",onClickOnce:t[5]||(t[5]=a=>l.toggleSilenceMode(r.user)),for:"default-toggle",class:"inline-flex relative items-center cursor-pointer"},bt,32)):P("",!0),r.user.setting.silence_mode==1?(L(),U("label",{key:1,"preserve-scroll":"",onClickOnce:t[6]||(t[6]=a=>l.toggleSilenceMode(r.user)),for:"checked-toggle",class:"inline-flex relative items-center cursor-pointer"},Lt,32)):P("",!0)])]),y("div",kt,[b(g,{for:"redirect",value:"Redirecto to"}),y("form",{onSubmit:t[8]||(t[8]=ke(a=>l.saveRedirect(r.user),["prevent"])),class:"flex"},[b(i,{modelValue:s.redirect,"onUpdate:modelValue":t[7]||(t[7]=a=>s.redirect=a),disabled:r.user.setting.silence_mode==1,id:"redirect",type:"text",class:Ee(["mt-1 block w-full",n.v$.redirect.$error===!0?"border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm":""])},null,8,["modelValue","disabled","class"]),y("div",null,[this.isLoading===!1?(L(),I(f,{key:0,disabled:r.user.setting.silence_mode==1,class:"ml-1 py-3 mt-1"},{default:C(()=>[O(" Save ")]),_:1},8,["disabled"])):P("",!0),this.isLoading===!0?(L(),I(f,{key:1,disabled:this.isLoading===!0,class:"ml-1 py-3 mt-1"},{default:C(()=>[Et,O(" Saving ")]),_:1},8,["disabled"])):P("",!0)])],32),(L(!0),U(Oe,null,Se(n.v$.redirect.$errors,a=>(L(),U("span",{class:"text-danger small",key:a.$uid},Ve(a.$message),1))),128))])]),_:1}),b(u),b(m,{class:"mt-10 sm:mt-0",user:r.user},null,8,["user"]),b(u),b(h,{class:"mt-10 sm:mt-0"}),b(u),b(p,{class:"mt-10 sm:mt-0"})])])]),_:1})}const Jt=Me(dt,[["render",St]]);export{Jt as default};
