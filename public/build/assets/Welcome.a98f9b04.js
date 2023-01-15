import{o as a,e as c,a as t,b as d,h as n,c as g,w as l,F as m,f as h,g as s,t as o,H as u,L as i}from"./app.dd69a4f9.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{h as p}from"./moment.9709ab41.js";const b={},_={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-16 h-16 text-gray-800"},x=t("path",{"fill-rule":"evenodd",d:"M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z","clip-rule":"evenodd"},null,-1),y=[x];function v(e,r){return a(),c("svg",_,y)}const w=f(b,[["render",v]]),k={key:0,class:"absolute top-0 right-0 px-6 py-4 sm:block"},S={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},V={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},L={class:"p-6 sm:px-20"},A=t("div",{class:"mt-8 text-2xl"}," Welcome to Kuro.IPLogger! ",-1),B=t("div",{class:"mt-6 text-gray-500"},[s(" Kuro.IPLogger! It is a web service that provides the possibility to create an account and generate a URL to capture user information IP. "),t("br"),s(" This application has some options to configure it. ")],-1),N={class:"flex justify-center mt-6"},I={class:"block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},M=t("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},"Your Network Properties",-1),P={class:"font-normal text-gray-700 dark:text-gray-400"},R=t("span",{class:"font-bold"},"Date/Time: ",-1),Y=t("span",{class:"font-bold"},"IP Address: ",-1),$=t("span",{class:"font-bold"},"Country: ",-1),C=t("span",{class:"font-bold"},"Browser: ",-1),D=t("span",{class:"font-bold"},"Operating System: ",-1),j=t("span",{class:"font-bold"},"User Agent: ",-1),H=t("span",{class:"font-bold"},"Host Name: ",-1),T={class:"flex justify-center mt-2 text-gray-500 p-6 sm:px-20"},U=t("span",{class:"ml-1"},"and start using our services!",-1),W=t("div",{class:"p-6 sm:px-20 bg-white border-b border-gray-200"},null,-1),E={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String,date:String,userAgent:String,location:Object,browser:String,browserVersion:String,platform:String,platformVersion:String,host:String},setup(e){return(r,z)=>(a(),c(m,null,[d(n(u),{title:"Welcome"}),e.canLogin?(a(),c("div",k,[r.$page.props.user?(a(),g(n(i),{key:0,href:r.route("dashboard"),class:"text-md text-gray-700 dark:text-gray-500"},{default:l(()=>[s(" Dashboard")]),_:1},8,["href"])):(a(),c(m,{key:1},[d(n(i),{href:r.route("login"),class:"text-md text-gray-700 dark:text-gray-500"},{default:l(()=>[s("Log in ")]),_:1},8,["href"]),e.canRegister?(a(),g(n(i),{key:0,href:r.route("register"),class:"ml-4 text-md text-gray-700 dark:text-gray-500"},{default:l(()=>[s(" Register")]),_:1},8,["href"])):h("",!0)],64))])):h("",!0),t("div",S,[t("div",V,[t("div",L,[t("div",null,[d(w,{class:"block h-12 w-auto"})]),A,B]),t("div",N,[t("a",I,[M,t("div",P,[t("p",null,[R,s(o(n(p)(e.date).format("MMMM Do YYYY, h:mm:ss a")),1)]),t("p",null,[Y,s(o(e.location.ip),1)]),t("p",null,[$,s(o(e.location.countryName)+", "+o(e.location.cityName),1)]),t("p",null,[C,s(o(e.browser)+" ("+o(e.browserVersion)+")",1)]),t("p",null,[D,s(o(e.platform)+" "+o(e.platformVersion),1)]),t("p",null,[j,s(o(e.userAgent),1)]),t("p",null,[H,s(o(e.host),1)])])])]),t("div",T,[e.canRegister?(a(),g(n(i),{key:0,href:r.route("register"),class:"ml-4 font-bold"},{default:l(()=>[s("Sing Up")]),_:1},8,["href"])):h("",!0),s(),U]),W])])],64))}};export{E as default};
