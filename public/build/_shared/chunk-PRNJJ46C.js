import{d as g,g as s,h as l,i as v}from"/build/_shared/chunk-2ADOHOB6.js";v();var e=g(s()),M=e.createContext(void 0),N=()=>{let c=e.useContext(M);if(!c)throw new Error("You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue.");return c},G=c=>{let[a,t]=e.useState(c.initialTheme),r=h=>{t(h)};return e.createElement(M.Provider,{value:{theme:a,updateTheme:r}},c.children)};v();var H="/build/_assets/game-COU6NQ35.png";var V="/build/_assets/launch-Q2SHHKB7.png";var C="/build/_assets/bookmark-V76FVPJS.png";var L="/build/_assets/memory-RFIFC7HR.png";var w="/build/_assets/invoice-ASYB6UL2.png";var f="/build/_assets/pomodoro-5X7SIOCR.png";var B="/build/_assets/weather-KIFYQBNS.png";v();v();v();v();var o=g(s());v();var p=g(s()),d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=p.default.createContext&&p.default.createContext(d);var i=function(){return i=Object.assign||function(c){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var h in a)Object.prototype.hasOwnProperty.call(a,h)&&(c[h]=a[h])}return c},i.apply(this,arguments)},I=function(c,a){var t={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&a.indexOf(r)<0&&(t[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,r=Object.getOwnPropertySymbols(c);h<r.length;h++)a.indexOf(r[h])<0&&Object.prototype.propertyIsEnumerable.call(c,r[h])&&(t[r[h]]=c[r[h]]);return t};function F(c){return c&&c.map(function(a,t){return o.default.createElement(a.tag,i({key:t},a.attr),F(a.child))})}function n(c){return function(a){return o.default.createElement(W,i({attr:i({},c.attr)},a),F(c.child))}}function W(c){var a=function(t){var r=c.attr,h=c.size,u=c.title,y=I(c,["attr","size","title"]),x=h||t.size||"1em",z;return t.className&&(z=t.className),c.className&&(z=(z?z+" ":"")+c.className),o.default.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,y,{className:z,style:i(i({color:c.color||t.color},t.style),c.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),u&&o.default.createElement("title",null,u),c.children)};return m!==void 0?o.default.createElement(m.Consumer,null,function(t){return a(t)}):a(d)}function A(c){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(c)}function S(c){return n({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(c)}function Z(c){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(c)}function b(c){return n({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(c)}function R(c){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(c)}var u1="1200",x1="630",M1="Devato | Shopify Development",H1="Devato | Blog",V1="summary_large_image",C1="Flo S",L1="https://www.devato.de/",w1="https://www.devato.de/blog",f1="@flostanglmeier",B1="https://twitter.com/FloStanglmeier",F1="Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer",A1="Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer",S1="Wir sind deine zuverl\xE4ssige Shopify Agentur f\xFCr die Entwicklung von Shopify-Websites und -Apps, sowie f\xFCr die Optimierung von E-Commerce Shops.",Z1="Shopify Development von Experten: Alles rund um ECommerce Optimierung und Software Engineering f\xFCr Shopify-Websites und -Apps.",b1="https://www.alissanguyen.dev/images/preview.jpg",R1="https://www.alissanguyen.dev/images/blogpreview.jpg",y1=[{href:"/",displayName:"Home"},{href:"/blog",displayName:"Blog & Case Studies"},{href:"/#portfolio",displayName:"Services"},{href:"/#projects",displayName:"Projekte"},{href:"/#contact",displayName:"Kontakt"}],k1=[{href:"/blog",displayName:"Blog & Case Studies"},{href:"/#portfolio",displayName:"Services"},{href:"/#projects",displayName:"Projekte"},{href:"/#contact",displayName:"Kontakt"}];var P1=[{name:"Facebook",className:"icon facebook relative bg-white text-black hover:text-white",icon:()=>l.createElement(A,null),externalUrl:"https://www.facebook.com/alissa.1404"},{name:"Twitter",className:"icon twitter text-black hover:text-white",icon:()=>l.createElement(R,null),externalUrl:"https://twitter.com/alissang_dev"},{name:"Instagram",className:"icon instagram text-black hover:text-white",icon:()=>l.createElement(Z,null),externalUrl:"https://www.instagram.com/alissang1211/"},{name:"Github",className:"icon github text-black hover:text-white",icon:()=>l.createElement(S,null),externalUrl:"https://github.com/alissanguyen"},{name:"Linkedin",className:"icon linkedin text-black hover:text-white",icon:()=>l.createElement(b,null),externalUrl:"https://www.linkedin.com/in/alissa-nguyen-dev/"}],D1="contact-form",T1=[{id:"algorithms",name:"algorithms"},{id:"tutorials",name:"tutorials"},{id:"frontEnd",name:"front-end"},{id:"backEnd",name:"backend"},{id:"css",name:"css"},{id:"html",name:"html"},{id:"javascript",name:"javascript"},{id:"performance",name:"performance"},{id:"personal",name:"personal"},{id:"productivity",name:"productivity"},{id:"react",name:"react"},{id:"remix",name:"remix"},{id:"typescript",name:"typescript"},{id:"git",name:"git"},{id:"resources",name:"resources"},{id:"testing",name:"testing"},{id:"general",name:"general"},{id:"security",name:"security"},{id:"hosting",name:"hosting"},{id:"databases",name:"databases"},{id:"shopify",name:"shopify"}];var E1="relative max-w-screen-lg w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0",U1=[{id:"a",name:"Javascript",icon:"/images/tech/javascript.svg"},{id:"b",name:"Typescript",icon:"/images/tech/typescript.svg"},{id:"c",name:"React.js",icon:"/images/tech/react.svg"},{id:"d",name:"HTML",icon:"/images/tech/html.svg"},{id:"e",name:"CSS",icon:"/images/tech/css.svg"},{id:"g",name:"C#",icon:"/images/tech/C.svg"},{id:"k",name:"Framework",icon:"/images/tech/NET.svg"},{id:"n",name:"Tensorflow",icon:"/images/tech/tensorflow.svg"},{id:"o",name:"Python",icon:"/images/tech/Python.svg"},{id:"p",name:"Node.js",icon:"/images/tech/nodejs.svg"},{id:"q",name:"Shopify",icon:"/images/tech/shopify.svg"},{id:"r",name:"Woo Commerce",icon:"/images/tech/woocom.svg"}];var q1=["FRONTEND - Die richtige Technologie unterst\xFCtzt Ihr Vorhaben und optimiert wichtige Aspekte wie Performance und Sicherheit. Durch ein tiefes technisches Verst\xE4ndnis der Technologien k\xF6nnen Sie Ihre Projekte effizienter gestalten und schneller entwickeln. Wir nutzen Javascript, Typescript und React f\xFCr unsere Front-End Projekte.","BACKEND - Ein resilentes Backend System ist der Grundstein f\xFCr einen automatisierten Online Store. Sei es die Automation der Bestellung beim Supplier oder die Integration von innovativen Machine Learning Systemen - Die Experten von Devato entwickeln eine individuelle L\xF6sung f\xFCr Ihr Unternehmen. ","Durch jahrelange Erfahrung mit diversen E-Commerce Plattformen und Shop Systemen k\xF6nnen wir Sie sowohl bei der Optimierung von Conversion Rates und allgemeinen KPI's helfen, als auch bei der Migration von ganzen Stores auf eine neue Plattform. "],I1=[{name:"Unimals",description:"Unimals verkauft Artikel die der Kunde selbst gestalten kann. Neben einer ausgiebigen Analyse der bestehenden Prozesse, wurde eine gr\xFCndliche Optimierung der generellen Schnittstellen vorgenommen. Ferner mussten alle Bestellungen im Backend automatisch an die Supplier API gesendet werden.",gitRepo:"https://github.com/alissanguyen/lunar",website:"https://www.unimals.de/",img:"/images/projects/unimals.png"},{name:"HelloBello",description:"Migration von WooCommerce zu Shopify auf Basis eines integrierten Subscription (Abo) Modelles.",gitRepo:"https://github.com/alissanguyen/league-demo",website:"https://www.hellobello.at/",img:"/images/projects/HelloBello.png"},{name:"LiWanda",description:"A responsive website with animations and futuristic design.",gitRepo:"https://github.com/alissanguyen/atom",website:"https://atom.alissanguyen.dev",img:"/images/projects/atom.jpg"}];var W1=[{icon:H,name:"Glass Gaming",description:"A demo UI for gamers to track gaming progress with inneumorphism design.",gitRepo:"https://github.com/alissanguyen/glass-gaming-website",website:"https://glassgaming.alissanguyen.dev"},{icon:V,name:"Launch Countdown",description:"A demo launch countdown page with animations.",gitRepo:"https://github.com/alissanguyen/launch-countdown",website:"https://launch.alissanguyen.dev"},{icon:C,name:"Bookmark Page Demo",description:"A demo landing page for a bookmark tool.",gitRepo:"https://github.com/alissanguyen/demo-bookmark-page",website:"https://bookmark.alissanguyen.dev"},{icon:L,name:"Memory Game",description:"A memory game website.",gitRepo:"https://github.com/alissanguyen/memory-game",website:"https://memory.alissanguyen.dev/"},{icon:w,name:"Invoice App Demo",description:"A demo UI for invoices management.",gitRepo:"https://github.com/alissanguyen/invoice-app-demo",website:"https://invoices.alissanguyen.dev"},{icon:f,name:"Pomodoro Timer App",description:"A pomodoro inspired timer with mobile-first design.",gitRepo:"https://github.com/alissanguyen/pomodoro-app",website:"https://pomodoro.alissanguyen.dev/"},{icon:B,name:"Weatherly",description:"A 5-day weather website that includes forecast for every 3 hours.",gitRepo:"https://github.com/alissanguyen/weatherly",website:"https://weatherly.alissanguyen.dev/"}],N1=[{index:1,title:"WooCoomerce to Shopify",description:"Migration von Shops kann aufw\xE4ndig sein. Wir helfen Ihnen damit.",image:"/images/facts/bg_services.jpg",color:"sky",imgDescription:"Pic of cat"},{index:2,title:"Subscription Integration",description:"Abo Modelle in Shopify Stores integrieren und verwalten.",image:"/images/facts/bg_services.jpg",color:"blue",imgDescription:"Pic of Harvard"},{index:3,title:"Conversion Optimierung",description:"Nachweisliche Steigerung Ihrer KPI's durch strategische Optimierung.",image:"/images/facts/bg_services.jpg",color:"indigo",imgDescription:"Pic of snake"},{index:4,title:"Third Party Integration",description:"Drittanbieter Applikationen einfach und sicher in Shopify implementieren.",image:"/images/facts/bg_services.jpg",color:"violet",imgDescription:"Illustration"},{index:5,title:"Shopify Daten Export & Pipeline",description:"Shopify sammelt wertvolle E_Commerce Daten die wir f\xFCr Sie in bestehende Dashboards integrieren.",image:"/images/facts/bg_services.jpg",color:"purple",imgDescription:"Pic of math on chalkboard"},{index:6,title:"Analytics & Artificial Intelligence",description:"Als Experten f\xFCr E-Commerce Analytics und KI entwickeln wir innovative L\xF6sungen.",image:"/images/facts/bg_services.jpg",color:"fuchsia",imgDescription:"Pic of mayonnaise"},{index:7,title:"Chat Bot und On-Site Apps",description:"Durch Chatbots und ander On-Site Apps bieten Sie Ihren Kunden mehr als die Konkurrenz",image:"/images/facts/bg_services.jpg",color:"pink",imgDescription:"Pic of piano"},{index:8,title:"CRM Integration & Custom Backend Development",description:"Wir l\xF6sen die technisch komplexesten Shopify Probleme.",image:"/images/facts/bg_services.jpg",color:"rose",imgDescription:"Pic of a dad (not my dad)"}],G1="Navbar";export{N as a,G as b,n as c,u1 as d,x1 as e,M1 as f,H1 as g,V1 as h,C1 as i,L1 as j,w1 as k,f1 as l,B1 as m,F1 as n,A1 as o,S1 as p,Z1 as q,b1 as r,R1 as s,y1 as t,k1 as u,P1 as v,D1 as w,T1 as x,E1 as y,U1 as z,q1 as A,I1 as B,W1 as C,N1 as D,G1 as E};
