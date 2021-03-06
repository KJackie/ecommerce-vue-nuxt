(self.webpackChunk=self.webpackChunk||[]).push([[4263],{9473:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o(5166),a=(0,r.withScopeId)("data-v-21fddc14");(0,r.pushScopeId)("data-v-21fddc14");var c={xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s=(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},null,-1);(0,r.popScopeId)();var n=a((function(e,t,o,a,n,l){return(0,r.openBlock)(),(0,r.createBlock)("svg",c,[s])}));const l={};l.render=n,l.__scopeId="data-v-21fddc14";const d=l},3414:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o(5166),a=(0,r.withScopeId)("data-v-0b215928");(0,r.pushScopeId)("data-v-0b215928");var c={xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s=(0,r.createVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},null,-1);(0,r.popScopeId)();var n=a((function(e,t,o,a,n,l){return(0,r.openBlock)(),(0,r.createBlock)("svg",c,[s])}));const l={};l.render=n,l.__scopeId="data-v-0b215928";const d=l},4263:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C});var r=o(5166),a=(0,r.createVNode)("h1",{class:"mb-5 font-bold text-2xl"},"Comments",-1),c={class:"mb-4 flex justify-between items-center"},s={class:"bg-white rounded-md shadow overflow-x-auto"},n={key:0,class:"w-full divide-y divide-gray-200"},l=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," ID "),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Customer "),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Product "),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Comment "),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Commented At "),(0,r.createVNode)("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"}," Action ")])],-1),d={class:"bg-white divide-y divide-gray-200"},p={class:"px-6 py-4 whitespace-nowrap"},i={class:"px-6 py-4 whitespace-nowrap"},u=(0,r.createVNode)("td",{class:"px-6 py-4 whitespace-nowrap"},null,-1),m={style:{"max-width":"300px"},class:"px-6 py-4 whitespace-nowrap truncate"},x={class:"px-6 py-4 whitespace-nowrap"},h={class:"px-6 py-4 whitespace-nowrap flex"},f=(0,r.createVNode)("i",{class:"ti-eye"},null,-1),w=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),y={key:1,class:"flex justify-center items-center text-gray-600 h-32"},v=(0,r.createVNode)("span",null,"No Comments Added",-1);var k=o(3493),V=o.n(k),N=o(9473),g=o(3414);const b={components:{ActiveIcon:N.Z,InactiveIcon:g.Z},props:{comments:Object,query:Object},data:function(){return{filters:{search:this.query.search,answered:this.query.answered},answerOptions:[{value:1,name:"Answered"},{value:0,name:"Unaswered"}]}},watch:{filters:{handler:V()((function(){this.getResults("comments.index")}),150),deep:!0}},methods:{destroy:function(e){this.deleteResource(route("comments.destroy",e))}},render:function(e,t,o,k,V,N){var g=(0,r.resolveComponent)("jet-input"),b=(0,r.resolveComponent)("inertia-link"),C=(0,r.resolveComponent)("jet-danger-button"),B=(0,r.resolveComponent)("jet-pagination");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[a,(0,r.createVNode)("div",c,[(0,r.createVNode)(g,{id:"name",type:"text",class:"mt-1 block w-64",modelValue:V.filters.search,"onUpdate:modelValue":t[1]||(t[1]=function(e){return V.filters.search=e}),ref:"name",autocomplete:"name"},null,8,["modelValue"])]),(0,r.createVNode)("div",s,[o.comments.data.length?((0,r.openBlock)(),(0,r.createBlock)("table",n,[l,(0,r.createVNode)("tbody",d,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.comments.data,(function(t,o){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:o},[(0,r.createVNode)("td",p,(0,r.toDisplayString)(t.id),1),(0,r.createVNode)("td",i,(0,r.toDisplayString)(t.customer.name),1),u,(0,r.createVNode)("td",m,(0,r.toDisplayString)(t.comment),1),(0,r.createVNode)("td",x,(0,r.toDisplayString)(t.commentedAt),1),(0,r.createVNode)("td",h,[(0,r.createVNode)("div",null,[(0,r.createVNode)(b,{class:"btn btn-primary mr-2",href:e.route("comments.show",t.id)},{default:(0,r.withCtx)((function(){return[f]})),_:2},1032,["href"]),(0,r.createVNode)(C,{onClick:function(e){return N.destroy(t.id)}},{default:(0,r.withCtx)((function(){return[w]})),_:2},1032,["onClick"])])])])})),128))])])):((0,r.openBlock)(),(0,r.createBlock)("div",y,[v]))]),(0,r.createVNode)(B,{class:"mt-6",links:o.comments.links},null,8,["links"])])}},C=b}}]);