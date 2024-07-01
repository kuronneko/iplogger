import{o as a,e as c,b as d,h as n,c as g,w as i,F as h,f as m,a as t,g as s,t as o,H as u,L as l}from"./app.c383d679.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{h as p}from"./moment.9709ab41.js";const b={},y={src:"/img/icon.png",alt:"Laravel Logo"};function x(e,r){return a(),c("img",y)}const _=f(b,[["render",x]]),k={key:0,class:"absolute top-0 right-0 px-6 py-4 sm:block"},w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},v={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},S={class:"p-6 sm:px-20"},V=t("div",{class:"mt-8 text-2xl"}," Garbage information recollector. ",-1),L=t("div",{class:"mt-6 text-gray-500"}," An IP logger application records IP addresses of devices connecting to a network or website, capturing details like timestamps and device types. It provides geolocation mapping, a user dashboard for viewing and filtering logs, and generates reports. Key features include alerts for suspicious activity, data export, and integration with other tools. Ensuring data security and legal compliance, it is used for website analytics, security monitoring, compliance, and network management. ",-1),N={class:"flex justify-center mt-6"},B={class:"block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},A=t("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},"Your Network Properties",-1),Y={class:"font-normal text-gray-700 dark:text-gray-400"},D=t("span",{class:"font-bold"},"Date/Time: ",-1),I=t("span",{class:"font-bold"},"IP Address: ",-1),M=t("span",{class:"font-bold"},"Country: ",-1),P=t("span",{class:"font-bold"},"Browser: ",-1),R=t("span",{class:"font-bold"},"Operating System: ",-1),j=t("span",{class:"font-bold"},"User Agent: ",-1),C=t("span",{class:"font-bold"},"Host Name: ",-1),H={class:"flex justify-center mt-2 text-gray-500 p-6 sm:px-20"},$=t("span",{class:"ml-1"},"and start using our services!",-1),E=t("div",{class:"p-6 sm:px-20 bg-white border-b border-gray-200"},null,-1),W={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String,date:String,userAgent:String,location:Object,browser:String,browserVersion:String,platform:String,platformVersion:String,host:String},setup(e){return(r,F)=>(a(),c(h,null,[d(n(u),{title:"Welcome"}),e.canLogin?(a(),c("div",k,[r.$page.props.user?(a(),g(n(l),{key:0,href:r.route("dashboard"),class:"text-md text-gray-700 dark:text-gray-500"},{default:i(()=>[s(" Dashboard")]),_:1},8,["href"])):(a(),c(h,{key:1},[d(n(l),{href:r.route("login"),class:"text-md text-gray-700 dark:text-gray-500"},{default:i(()=>[s("Log in ")]),_:1},8,["href"]),e.canRegister?(a(),g(n(l),{key:0,href:r.route("register"),class:"ml-4 text-md text-gray-700 dark:text-gray-500"},{default:i(()=>[s(" Register")]),_:1},8,["href"])):m("",!0)],64))])):m("",!0),t("div",w,[t("div",v,[t("div",S,[t("div",null,[d(_,{class:"block h-12 w-auto"})]),V,L]),t("div",N,[t("a",B,[A,t("div",Y,[t("p",null,[D,s(o(n(p)(e.date).format("MMMM Do YYYY, h:mm:ss a")),1)]),t("p",null,[I,s(o(e.location.ip),1)]),t("p",null,[M,s(o(e.location.countryName)+", "+o(e.location.cityName),1)]),t("p",null,[P,s(o(e.browser)+" ("+o(e.browserVersion)+")",1)]),t("p",null,[R,s(o(e.platform)+" "+o(e.platformVersion),1)]),t("p",null,[j,s(o(e.userAgent),1)]),t("p",null,[C,s(o(e.host),1)])])])]),t("div",H,[e.canRegister?(a(),g(n(l),{key:0,href:r.route("register"),class:"ml-4 font-bold"},{default:i(()=>[s("Sing Up")]),_:1},8,["href"])):m("",!0),s(),$]),E])])],64))}};export{W as default};
