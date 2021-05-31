(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[209],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(y,o(o({ref:e},u),{},{components:n})):i.createElement(y,o({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(t,e,n){"use strict";function i(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!i(t)}n.d(e,{b:function(){return i},Z:function(){return r}})},4996:function(t,e,n){"use strict";n.d(e,{C:function(){return a},Z:function(){return o}});var i=n(2263),r=n(3919);function a(){var t=(0,i.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return e+n;var u=n.startsWith(e)?n:e+n.replace(/^\//,"");return c?t+u:u}(a,n,t,e)}}}function o(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},5526:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(4996),s={id:"identity",title:"Set your Identity"},l={unversionedId:"identity",id:"identity",isDocsHomePage:!1,title:"Set your Identity",description:"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network.",source:"@site/docs/identity.md",sourceDirName:".",slug:"/identity",permalink:"/identity",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/identity.md",version:"current",frontMatter:{id:"identity",title:"Set your Identity"},sidebar:"sidebar",previous:{title:"Become a Validator",permalink:"/start_validating"},next:{title:"Claim your Staking Rewards",permalink:"/staking_claim_rewards"}},c=[{value:"01 Set identity",id:"01-set-identity",children:[]},{value:"02 Submit your identity for verification",id:"02-verify-identity",children:[]},{value:"03 Outcome of the verification procedure",id:"03-verification-outcome",children:[]}],u={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Account holders have the possibility to set their identity by prodiving specific information and storing it on-chain. Besides that, the identity information can optionally be submitted to the HydraDX registrars for verification. By setting and verifying their identity, validators and nominators help safeguard the trust in the network."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are participating as a HydraDX validator we ",(0,a.kt)("strong",{parentName:"p"},"highly recommend")," that you both set your identity and undergo the verification process. Verified validators appear more trustworthy and attract more nominations, thereby increasing their chances to be included in the set of active validators."))),(0,a.kt)("h2",{id:"01-set-identity"},"01 Set identity"),(0,a.kt)("p",null,"To set your identity, open Polkadot/apps (connected to ",(0,a.kt)("em",{parentName:"p"},"HydraDX Snakenet")," network) and navigate to ",(0,a.kt)("em",{parentName:"p"},"My accounts"),". Alternatively, you can follow this link:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts")),(0,a.kt)("p",null,"On the accounts page, locate the account holding your bonded HDX tokens. After that, click on the three dots next to the account (on the right side) and select ",(0,a.kt)("em",{parentName:"p"},"Set on-chain identity"),"."),(0,a.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-1.jpg")}),(0,a.kt)("p",null,"You will see a popup called ",(0,a.kt)("em",{parentName:"p"},"register identity"),". Here, you can enter the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"legal name"),(0,a.kt)("li",{parentName:"ul"},"email"),(0,a.kt)("li",{parentName:"ul"},"web address"),(0,a.kt)("li",{parentName:"ul"},"twitter"),(0,a.kt)("li",{parentName:"ul"},"riot name (in case you are using Matrix messaging)")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All this information is optional - feel free to only provide the details you choose. However, if you are running a validator node, we encourage you to set your email. This would allow us to contact you in case we encounter issues with your node."))),(0,a.kt)("p",null,"In the last field of the popup, you can see the amount of HDX you need to deposit to store your identity information. You will receive this deposit back once you decide to clear your identity at a later point."),(0,a.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-2.jpg")}),(0,a.kt)("p",null,"After filling out the information, click on ",(0,a.kt)("em",{parentName:"p"},"Set Identity")," and sign the transaction using the Polkadot.js browser extension. Once the transaction is confirmed, your identity is set."),(0,a.kt)("h2",{id:"02-verify-identity"},"02 Submit your identity for verification"),(0,a.kt)("p",null,"After you have set your identity, you can submit it to the network registrars for verification. To do so, open Polkadot/apps and navigate to ",(0,a.kt)("em",{parentName:"p"},"Developer")," > ",(0,a.kt)("em",{parentName:"p"},"Extrinsics"),". Alternatively, you can follow this link:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/extrinsics")),(0,a.kt)("p",null,"After selecting the relevant HydraDX account from the last step, you need to fill out the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"extrinsic"),": identity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"action"),": requestJudgement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"reg_index"),": here you need to enter the ID of the registrar that you choose to carry out the verification.",(0,a.kt)("br",{parentName:"li"}),"HydraDX has 2 registrars: Simon Kraus - HydraSik (ID: ",(0,a.kt)("strong",{parentName:"li"},"0"),") and Jimmy Tudeski - stakenode (ID: ",(0,a.kt)("strong",{parentName:"li"},"1"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max_fee"),": here you need to enter the maximum fee in HDX that you are willing to pay to the registrar for the verification. Only registrars with a fee below your max_fee will be eligible to carry out the verification.")),(0,a.kt)("p",null,"To submit your verification request, click on ",(0,a.kt)("em",{parentName:"p"},"Submit Transaction")," and sign the transaction."),(0,a.kt)("img",{alt:"authorize",src:(0,o.Z)("/identity/set-identity-3.jpg")}),(0,a.kt)("p",null,"Please note that the process of identity verification may take some time to complete. To see the status of your request, navigate to ",(0,a.kt)("strong",{parentName:"p"},"My accounts")," and hover the section displaying your identity - you will see a popup showing the current status."),(0,a.kt)("h2",{id:"03-verification-outcome"},"03 Outcome of the verification procedure"),(0,a.kt)("p",null,"After processing your verification request, the registrar will submit one of the following judgements which will become visible in your identity status:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unknown")," - default value, no judgement has been made yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reasonable")," - the provided information appears reasonable, however no in-depth checks were made."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KnownGood")," - the information is correct."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OutOfDate")," - the information was correct in the past but it is now out of date."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LowQuality")," - the information is unprecise but it can be fixed by updating it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Erroneous")," - the provided information is wrong and might indicate a malicious intent.")))}d.isMDXComponent=!0}}]);