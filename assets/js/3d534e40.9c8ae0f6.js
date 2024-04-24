"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),d=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=d(r),u=a,m=s["".concat(g,".").concat(u)]||s[u]||p[u]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={title:"aggregateRecord"},c="aggregateRecord",i={unversionedId:"api/methods/aggregateRecord",id:"api/methods/aggregateRecord",title:"aggregateRecord",description:"Reads aggregated result according to requested read criteria, for e.g, data origin filter and within a time range. Some record types do not support aggregation.",source:"@site/docs/api/methods/09-aggregateRecord.md",sourceDirName:"api/methods",slug:"/api/methods/aggregateRecord",permalink:"/react-native-health-connect/docs/api/methods/aggregateRecord",draft:!1,editUrl:"https://github.com/matinzd/react-native-health-connect/tree/main/docs/docs/api/methods/09-aggregateRecord.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"aggregateRecord"},sidebar:"tutorialSidebar",previous:{title:"readRecord",permalink:"/react-native-health-connect/docs/api/methods/readRecord"},next:{title:"deleteRecordsByTimeRange",permalink:"/react-native-health-connect/docs/api/methods/deleteRecordsByTimeRange"}},g={},d=[],l={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregaterecord"},(0,a.kt)("inlineCode",{parentName:"h1"},"aggregateRecord")),(0,a.kt)("p",null,"Reads aggregated result according to requested read criteria, for e.g, data origin filter and within a time range. Some record types do not support aggregation."),(0,a.kt)("h1",{id:"method"},"Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"aggregateRecord<T extends AggregateResultRecordType>(\n    request: AggregateRequest<T>\n): Promise<AggregateResult<T>>\n")),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { aggregateRecord } from \'react-native-health-connect\';\n\nconst aggregateSampleData = () => {\n  aggregateRecord({\n    recordType: \'ActiveCaloriesBurned\',\n    timeRangeFilter: {\n      operator: \'between\',\n      startTime: \'2023-01-09T12:00:00.405Z\',\n      endTime: \'2023-01-09T23:53:15.405Z\',\n    },\n  }).then((result) => {\n    console.log(\'Aggregated record: \', { result }); // Aggregated record:  {"result": {"dataOrigins": ["com.healthconnectexample"], "inCalories": 15000000, "inJoules": 62760000.00989097, "inKilocalories": 15000, "inKilojoules": 62760.00000989097}}\n  });\n};\n')))}s.isMDXComponent=!0}}]);