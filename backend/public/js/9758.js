(self.webpackChunk=self.webpackChunk||[]).push([[9758],{9473:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(5166),r=(0,a.withScopeId)("data-v-21fddc14");(0,a.pushScopeId)("data-v-21fddc14");var s={xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c=(0,a.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},null,-1);(0,a.popScopeId)();var n=r((function(e,t,o,r,n,l){return(0,a.openBlock)(),(0,a.createBlock)("svg",s,[c])}));const l={};l.render=n,l.__scopeId="data-v-21fddc14";const d=l},3414:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(5166),r=(0,a.withScopeId)("data-v-0b215928");(0,a.pushScopeId)("data-v-0b215928");var s={xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c=(0,a.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},null,-1);(0,a.popScopeId)();var n=r((function(e,t,o,r,n,l){return(0,a.openBlock)(),(0,a.createBlock)("svg",s,[c])}));const l={};l.render=n,l.__scopeId="data-v-0b215928";const d=l},9758:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>I});var a=o(5166),r=(0,a.createVNode)("h1",{class:"mb-5 font-bold text-2xl"},"Messages",-1),s={class:"mb-4 flex justify-between items-center"},c={class:"mb-4"},n={class:"bg-white rounded-md shadow overflow-x-auto"},l={key:0,class:"w-full divide-y divide-gray-200"},d=(0,a.createVNode)("thead",{class:"bg-gray-50"},[(0,a.createVNode)("tr",null,[(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," ID "),(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Name "),(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Email "),(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Subject "),(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Answered "),(0,a.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Action ")])],-1),i={class:"bg-white divide-y divide-gray-200"},p={class:"px-6 py-4 whitespace-nowrap"},u={class:"px-6 py-4 whitespace-nowrap"},x={class:"px-6 py-4 whitespace-nowrap"},f={style:{"max-width":"300px"},class:"px-6 py-4 whitespace-nowrap truncate"},h={class:"px-6 py-4 whitespace-nowrap"},w=(0,a.createTextVNode)("Yes"),m=(0,a.createTextVNode)("No"),v={class:"px-6 py-4 whitespace-nowrap flex"},y=(0,a.createVNode)("i",{class:"ti-eye"},null,-1),k=(0,a.createVNode)("i",{class:"ti-trash"},null,-1),V={key:1,class:"flex justify-center items-center text-gray-600 h-32"},N=(0,a.createVNode)("span",null,"No Contacts Added",-1);var g=o(3493),b=o.n(g),B=o(9473),C=o(3414);const j={components:{ActiveIcon:B.Z,InactiveIcon:C.Z},props:{contacts:Object,query:Object},data:function(){return{filters:{search:this.query.search,answered:this.query.answered},answerOptions:[{value:1,name:"Answered"},{value:0,name:"Unaswered"}]}},watch:{filters:{handler:b()((function(){this.getResults("contacts.index")}),150),deep:!0}},methods:{destroy:function(e){this.deleteResource(route("contacts.destroy",e))}},render:function(e,t,o,g,b,B){var C=(0,a.resolveComponent)("jet-label"),j=(0,a.resolveComponent)("jet-select"),I=(0,a.resolveComponent)("jet-search"),S=(0,a.resolveComponent)("spna"),_=(0,a.resolveComponent)("inertia-link"),A=(0,a.resolveComponent)("jet-danger-button"),D=(0,a.resolveComponent)("jet-pagination");return(0,a.openBlock)(),(0,a.createBlock)("div",null,[r,(0,a.createVNode)("div",s,[(0,a.createVNode)(I,{modelValue:b.filters.search,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.filters.search=e}),onReset:e.reset},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)("div",c,[(0,a.createVNode)(C,{value:"Status",class:"mb-2"}),(0,a.createVNode)(j,{modelValue:b.filters.answered,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.filters.answered=e}),track:"value",options:b.answerOptions},null,8,["modelValue","options"])])]})),_:1},8,["modelValue","onReset"])]),(0,a.createVNode)("div",n,[o.contacts.data.length?((0,a.openBlock)(),(0,a.createBlock)("table",l,[d,(0,a.createVNode)("tbody",i,[((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(o.contacts.data,(function(t,o){return(0,a.openBlock)(),(0,a.createBlock)("tr",{key:o},[(0,a.createVNode)("td",p,(0,a.toDisplayString)(t.id),1),(0,a.createVNode)("td",u,(0,a.toDisplayString)(t.name),1),(0,a.createVNode)("td",x,(0,a.toDisplayString)(t.email),1),(0,a.createVNode)("td",f,(0,a.toDisplayString)(t.subject),1),(0,a.createVNode)("td",h,[(0,a.createVNode)("p",{class:[1==t.answered?"text-green-500":"text-red-500"]},[t.answered?((0,a.openBlock)(),(0,a.createBlock)(S,{key:0},{default:(0,a.withCtx)((function(){return[w]})),_:1})):((0,a.openBlock)(),(0,a.createBlock)(S,{key:1},{default:(0,a.withCtx)((function(){return[m]})),_:1}))],2)]),(0,a.createVNode)("td",v,[(0,a.createVNode)("div",null,[(0,a.createVNode)(_,{class:"btn btn-primary mr-2",href:e.route("contacts.show",t.id)},{default:(0,a.withCtx)((function(){return[y]})),_:2},1032,["href"]),(0,a.createVNode)(A,{onClick:function(e){return B.destroy(t.id)}},{default:(0,a.withCtx)((function(){return[k]})),_:2},1032,["onClick"])])])])})),128))])])):((0,a.openBlock)(),(0,a.createBlock)("div",V,[N]))]),(0,a.createVNode)(D,{class:"mt-6",links:o.contacts.links},null,8,["links"])])}},I=j}}]);