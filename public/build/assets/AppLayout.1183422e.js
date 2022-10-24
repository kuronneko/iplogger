import{o,e as a,a as e,d as j,j as x,k as T,l as D,h as i,n as f,f as p,t as y,m as k,p as F,q as E,r as g,s as C,v as M,x as B,b as d,w as n,T as V,c as _,L as S,H as I,g as c,F as $,i as z,y as A}from"./app.50ed3763.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";const H={},R={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-16 h-16 text-gray-800"},q=e("path",{"fill-rule":"evenodd",d:"M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z","clip-rule":"evenodd"},null,-1),U=[q];function G(l,r){return o(),a("svg",R,U)}const J=O(H,[["render",G]]),K={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},W={class:"w-0 flex-1 flex items-center min-w-0"},X={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Z=[Y],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(l){const r=j(!0),s=x(()=>{var t;return((t=T().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=T().props.value.jetstream.flash)==null?void 0:t.banner)||""});return D(h,async()=>{r.value=!0}),(t,b)=>(o(),a("div",null,[r.value&&i(h)?(o(),a("div",{key:0,class:f({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",K,[e("div",Q,[e("div",W,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),a("svg",X,Z)):p("",!0),i(s)=="danger"?(o(),a("svg",ee,se)):p("",!0)],2),e("p",oe,y(i(h)),1)]),e("div",re,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:b[0]||(b[0]=k(u=>r.value=!1,["prevent"]))},ae,2)])])])],2)):p("",!0)]))}},le={class:"relative"},P={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=j(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};F(()=>document.addEventListener("keydown",h)),E(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[r.width.toString()]),b=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(u,m)=>(o(),a("div",le,[e("div",{onClick:m[0]||(m[0]=L=>C(s)?s.value=!i(s):s=!i(s))},[g(u.$slots,"trigger")]),M(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=L=>C(s)?s.value=!1:s=!1)},null,512),[[B,i(s)]]),d(V,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[M(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(b)]]),style:{display:"none"},onClick:m[2]||(m[2]=L=>C(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(u.$slots,"content")],2)],2),[[B,i(s)]])]),_:3})]))}},de={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ue=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",de,[g(r.$slots,"default")])):l.as=="a"?(o(),a("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ue)):(o(),_(i(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:n(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},N={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-neutral-800 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-neutral-900 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),_(i(S),{href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))}},v={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-neutral-500 text-base font-medium text-neutral-800 bg-neutral-100 focus:outline-none focus:text-neutral-900 focus:bg-neutral-200 focus:border-neutral-800 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),a("div",null,[l.as=="button"?(o(),a("button",{key:0,class:f([i(s),"w-full text-left"])},[g(h.$slots,"default")],2)):(o(),_(i(S),{key:1,href:l.href,class:f(i(s))},{default:n(()=>[g(h.$slots,"default")]),_:3},8,["href","class"]))]))}},ce={class:"min-h-screen bg-gray-100"},he={class:"bg-white border-b border-gray-100"},pe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},ge={class:"flex"},me={class:"shrink-0 flex items-center"},ve={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},_e={class:"hidden sm:flex sm:items-center sm:ml-6"},be={class:"ml-3 relative"},ye={class:"inline-flex rounded-md"},we={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},xe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ke={class:"w-60"},$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Se=e("div",{class:"border-t border-gray-100"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),je=["onSubmit"],Le={class:"flex items-center"},Te={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Me=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Be=[Me],ze={class:"ml-3 relative"},Ae={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},De={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Fe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ee=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-100"},null,-1),Ie=["onSubmit"],Oe={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Re={class:"pt-2 pb-3 space-y-1"},qe={class:"pt-4 pb-1 border-t border-gray-200"},Ue={class:"flex items-center px-4"},Ge={key:0,class:"shrink-0 mr-3"},Je=["src","alt"],Ke={class:"font-medium text-base text-gray-800"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),et=e("div",{class:"border-t border-gray-200"},null,-1),tt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),st=["onSubmit"],ot={class:"flex items-center"},rt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},nt=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),at=[nt],it={key:0,class:"bg-white shadow"},lt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ct={__name:"AppLayout",props:{title:String},setup(l){const r=j(!1),s=t=>{A.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{A.Inertia.post(route("logout"))};return(t,b)=>(o(),a("div",null,[d(i(I),{title:l.title},null,8,["title"]),d(ie),e("div",ce,[e("nav",he,[e("div",pe,[e("div",fe,[e("div",ge,[e("div",me,[d(i(S),{href:t.route("dashboard")},{default:n(()=>[d(J,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ve,[d(N,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"]),d(N,{href:t.route("logger.index"),active:t.route().current("logger.index")},{default:n(()=>[c(" Logger ")]),_:1},8,["href","active"])])]),e("div",_e,[e("div",be,[t.$page.props.jetstream.hasTeamFeatures?(o(),_(P,{key:0,align:"right",width:"60"},{trigger:n(()=>[e("span",ye,[e("button",we,[c(y(t.$page.props.user.current_team.name)+" ",1),xe])])]),content:n(()=>[e("div",ke,[t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:0},[$e,d(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),_(w,{key:0,href:t.route("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href"])):p("",!0),Se,Ce,(o(!0),a($,null,z(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(w,{as:"button"},{default:n(()=>[e("div",Le,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",Te,Be)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,je))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",ze,[d(P,{align:"right",width:"48"},{trigger:n(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),a("button",Ae,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Pe)])):(o(),a("span",Ne,[e("button",De,[c(y(t.$page.props.user.name)+" ",1),Fe])]))]),content:n(()=>[Ee,d(w,{href:t.route("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(w,{key:0,href:t.route("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href"])):p("",!0),Ve,e("form",{onSubmit:k(h,["prevent"])},[d(w,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Oe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:b[0]||(b[0]=u=>r.value=!r.value)},[(o(),a("svg",He,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Re,[d(v,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[c(" Dashboard ")]),_:1},8,["href","active"]),d(v,{href:t.route("logger.index"),active:t.route().current("logger.index")},{default:n(()=>[c(" Logger ")]),_:1},8,["href","active"])]),e("div",qe,[e("div",Ue,[t.$page.props.jetstream.managesProfilePhotos?(o(),a("div",Ge,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Je)])):p("",!0),e("div",null,[e("div",Ke,y(t.$page.props.user.name),1),e("div",Qe,y(t.$page.props.user.email),1)])]),e("div",We,[d(v,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:n(()=>[c(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(v,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:n(()=>[c(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[d(v,{as:"button"},{default:n(()=>[c(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:1},[Ye,Ze,d(v,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:n(()=>[c(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),_(v,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:n(()=>[c(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),et,tt,(o(!0),a($,null,z(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(m=>s(u),["prevent"])},[d(v,{as:"button"},{default:n(()=>[e("div",ot,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",rt,at)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,st))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),a("header",it,[e("div",lt,[g(t.$slots,"header")])])):p("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ct as _};
