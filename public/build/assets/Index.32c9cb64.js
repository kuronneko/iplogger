import{o as d,e as h,L,y as m,O as a,c as _,w as n,a as t,m as $,b as i,P as C,g as B,f as M,i as V,F as j,t as f}from"./app.dd69a4f9.js";import{_ as I}from"./AppLayout.ebab51b9.js";import{_ as Y}from"./PrimaryButton.4159e7df.js";import{_ as D}from"./DangerButton.d3d2d52f.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import{P as A}from"./Paginator.09a93d05.js";import{h as g}from"./moment.9709ab41.js";import"./TermsOfService.ab4c05d3.js";import"./AuthenticationCardLogo.17ed5ccc.js";const P={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}},S=["value"];function N(e,o,l,y,c,r){return d(),h("input",{class:"border-gray-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm",value:l.modelValue,onInput:o[0]||(o[0]=p=>e.$emit("update:modelValue",p.target.value)),ref:"input"},null,40,S)}const O=w(P,[["render",N]]),H={props:{loggers:Object,logger:Object,search:String},data(){return{form:{search:this.search},moment:g}},components:{AppLayout:I,JetPrimaryButton:Y,JetDangerButton:D,JetInput:O,Paginator:A,Link:L},methods:{showLogger:function(e){this.$swal({position:"center",color:"#00000",confirmButtonColor:"#212529",width:600,background:"#fff",title:"Logger Detail",html:`
                <div align='left'>
                    <table>
                        <thead>
                        </thead>
                        <tbody class='divide-y divide-gray-200'>
                        <tr>
                            <td class='font-bold px-6 py-2'>Date/Time</td>
                            <td>${g(e.updated_at).format("MMMM Do YYYY, h:mm:ss a")}</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>IP Address</td>
                            <td>${e.ip}</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>Country</td>
                            <td>${e.country}, ${e.city}</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>Browser</td>
                            <td>${e.browser} (${e.browser_version})</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>Operating System</td>
                            <td>${e.platform} ${e.platform_version}</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>User Agent</td>
                            <td>${e.agent}</td>
                        </tr>
                        <tr>
                            <td class='font-bold px-6 py-2'>Host Name</td>
                            <td>${e.host}</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
                `})},deleteLogger:function(e){this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",background:"#fff",color:"#00000",width:400,position:"center",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#212529",confirmButtonText:"Yes, delete it!"}).then(o=>{o.isConfirmed&&(m.Inertia.delete(route("logger.destroy",e)),this.$swal({position:"center",color:"#00000",width:400,background:"#fff",icon:"success",title:"Logger deleted successfully",showConfirmButton:!1,timer:1500}))})},searchLogger:function(){this.form.search!==""&&m.Inertia.get(route("logger.index",this.form))},clearKeyDown:function(){this.form.search==""&&m.Inertia.get(route("logger.index"))},clear:function(){this.form.search="",m.Inertia.get(route("logger.index"))}}},K=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Logger ",-1),T={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},J={class:"bg-white overflow-hidden shadow-sm sm:rounded-md"},z={class:"p-4 sm:px-6"},F=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})],-1),U={class:"py-3"},E={class:"overflow-x-auto w-full"},q={class:"mx-auto max-w-7x1 w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"},G=t("thead",{class:"bg-gray-800"},[t("tr",{class:"text-white text-left"},[t("th",{class:"font-semibold text-sm uppercase px-6 py-4"}," Date/Time "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4"}," IP Address "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4"}," Country "),t("th",{class:"font-semibold text-sm uppercase px-6 py-4"}," Options")])],-1),Q={class:"divide-y divide-gray-200"},R={class:"px-6 py-4"},W={class:"flex items-center space-x-3"},X={class:"px-6 py-4"},Z={class:""},tt={class:"px-6 py-4"},et={class:""},ot={class:"px-6 py-4"},st=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})],-1),rt=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1);function nt(e,o,l,y,c,r){const p=a("jet-input"),u=a("jet-primary-button"),x=a("jet-danger-button"),v=a("paginator"),b=a("AppLayout");return d(),_(b,{title:"Logger"},{header:n(()=>[K]),default:n(()=>[t("div",T,[t("div",J,[t("div",z,[t("form",{method:"get",class:"flex mt-2",onSubmit:o[3]||(o[3]=$((...s)=>r.searchLogger&&r.searchLogger(...s),["prevent"]))},[i(p,{modelValue:c.form.search,"onUpdate:modelValue":o[0]||(o[0]=s=>c.form.search=s),id:"search",class:"w-full",onKeydown:o[1]||(o[1]=C(s=>r.clearKeyDown(),["delete"])),placeholder:"Search by IP or Location",type:"text"},null,8,["modelValue"]),i(u,{type:"submit",class:"ml-1"},{default:n(()=>[B("Search ")]),_:1}),e.$page.props.search?(d(),_(u,{key:0,onClick:o[2]||(o[2]=s=>r.clear()),class:"ml-1"},{default:n(()=>[F]),_:1})):M("",!0)],32),t("div",U,[t("div",E,[t("table",q,[G,t("tbody",Q,[(d(!0),h(j,null,V(l.loggers.data,s=>(d(),h("tr",{key:s.id},[t("td",R,[t("div",W,[t("div",null,[t("p",null,f(c.moment(s.updated_at).format("MMMM Do YYYY, h:mm:ss a")),1)])])]),t("td",X,[t("p",Z,f(s.ip),1)]),t("td",tt,[t("p",et,f(s.country+", "+s.city),1)]),t("td",ot,[i(u,{onClick:k=>r.showLogger(s),class:"ml-1"},{default:n(()=>[st]),_:2},1032,["onClick"]),i(x,{onClick:k=>r.deleteLogger(s),class:"ml-1"},{default:n(()=>[rt]),_:2},1032,["onClick"])])]))),128))])])])]),i(v,{class:"mt-3",paginator:l.loggers},null,8,["paginator"])])])])]),_:1})}const ht=w(H,[["render",nt]]);export{ht as default};
