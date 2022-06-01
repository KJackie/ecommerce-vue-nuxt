(self.webpackChunk=self.webpackChunk||[]).push([[235],{235:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>j});var r=o(5166),l=(0,r.withScopeId)("data-v-37a2afeb");(0,r.pushScopeId)("data-v-37a2afeb");var s={class:"mr-0 lg:mr-8"},n=(0,r.createVNode)("h1",{class:"mb-2 font-bold text-2xl"},"Vehicles Model",-1),c={class:"mb-4 flex justify-end items-center"},a=(0,r.createTextVNode)("Add Vehicle Model"),i={class:"bg-white rounded-md shadow overflow-x-auto"},d={key:0,class:"w-full divide-y divide-gray-200"},p=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "}," ID "),(0,r.createVNode)("th",{scope:"col",class:"\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "}," Name "),(0,r.createVNode)("th",{scope:"col",class:"\r\n                px-6\r\n                py-3\r\n                text-left text-xs\r\n                font-medium uppercase\r\n                text-gray-500\r\n                ml-6uppercase\r\n              "}," Description "),(0,r.createVNode)("th")])],-1),u={class:"bg-white divide-y divide-gray-200"},m={class:"px-6 py-4 whitespace-nowrap"},f={class:"px-6 py-4 whitespace-nowrap"},h={class:"px-6 py-4 whitespace-nowrap"},v={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium uppercase"},V=(0,r.createVNode)("i",{class:"ti-pencil-alt"},null,-1),N=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),g={key:1,class:"flex justify-center items-center text-gray-600 h-32"},y=(0,r.createVNode)("span",null,"No Feature Added",-1),x=(0,r.createTextVNode)("Add Vehicle Model"),k={class:"my-4"},w={class:"mb-4"},b=(0,r.createTextVNode)("Cancel"),C=(0,r.createTextVNode)("Save");(0,r.popScopeId)();var M=l((function(e,t,o,M,D,j){var B,S=(0,r.resolveComponent)("jet-button"),$=(0,r.resolveComponent)("jet-danger-button"),_=(0,r.resolveComponent)("jet-label"),I=(0,r.resolveComponent)("jet-input"),T=(0,r.resolveComponent)("jet-input-error"),A=(0,r.resolveComponent)("jet-text-input"),R=(0,r.resolveComponent)("jet-secondary-button"),F=(0,r.resolveComponent)("jet-dialog-modal");return(0,r.openBlock)(),(0,r.createBlock)("div",s,[n,(0,r.createVNode)("div",c,[(0,r.createVNode)(S,{class:"mt-2",type:"button",onClick:j.addModel},{default:l((function(){return[a]})),_:1},8,["onClick"])]),(0,r.createVNode)("div",i,[e.$page.props.vehicle.vehicleModels&&null!==(B=e.$page.props.vehicle.vehicleModels)&&void 0!==B&&B.length?((0,r.openBlock)(),(0,r.createBlock)("table",d,[p,(0,r.createVNode)("tbody",u,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(e.$page.props.vehicle.vehicleModels,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:t},[(0,r.createVNode)("td",m,(0,r.toDisplayString)(e.id),1),(0,r.createVNode)("td",f,(0,r.toDisplayString)(e.name),1),(0,r.createVNode)("td",h,(0,r.toDisplayString)(e.description),1),(0,r.createVNode)("td",v,[(0,r.createVNode)(S,{type:"button",class:"mr-2",onClick:function(e){return j.editResource(t)}},{default:l((function(){return[V]})),_:2},1032,["onClick"]),(0,r.createVNode)($,{onClick:function(t){return j.destroyModel(e.id)}},{default:l((function(){return[N]})),_:2},1032,["onClick"])])])})),128))])])):((0,r.openBlock)(),(0,r.createBlock)("div",g,[y]))]),(0,r.createVNode)(F,{show:D.showDialog,onClose:j.closeModal},{title:l((function(){return[x]})),content:l((function(){return[(0,r.createVNode)("div",k,[(0,r.createVNode)(_,{for:"name",value:"Model Name"}),(0,r.createVNode)(I,{type:"text",class:"mt-1 block w-full",ref:"name",modelValue:D.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return D.form.name=e})},null,8,["modelValue"]),(0,r.createVNode)(T,{message:D.form.errors.name,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",w,[(0,r.createVNode)(_,{for:"description",value:"Description"}),(0,r.createVNode)(A,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:D.form.description,"onUpdate:modelValue":t[2]||(t[2]=function(e){return D.form.description=e}),ref:"description",autocomplete:"description",rows:"6"},null,8,["modelValue"]),(0,r.createVNode)(T,{message:D.form.errors.description,class:"mt-2"},null,8,["message"])])]})),footer:l((function(){return[(0,r.createVNode)(R,{onClick:j.closeModal},{default:l((function(){return[b]})),_:1},8,["onClick"]),(0,r.createVNode)(S,{class:["ml-2",{"opacity-25":D.form.processing}],disabled:D.form.processing,onClick:j.save},{default:l((function(){return[C]})),_:1},8,["class","disabled","onClick"])]})),_:1},8,["show","onClose"])])}));const D={name:"model-add",data:function(){return{form:this.$inertia.form({vehicleId:this.$page.props.vehicle.id,name:null,description:null}),showDialog:!1}},methods:{addModel:function(){this.edit=!1,this.form.reset(),this.showDialog=!0},closeModal:function(){this.showDialog=!1},save:function(){var e=this;this.edit?this.form.put(route("vehicle-model.update",this.form.id),{onSuccess:function(){e.edit=!1,e.closeModal(),e.form.reset()}}):this.form.post(route("vehicle-model.store"),{onSuccess:function(){e.closeModal(),e.form.reset()}})},editResource:function(e){this.showDialog=!0,this.edit=!0,this.form.id=this.$page.props.vehicle.vehicleModels[e].id,this.form.name=this.$page.props.vehicle.vehicleModels[e].name,this.form.description=this.$page.props.vehicle.vehicleModels[e].description},destroyModel:function(e){this.deleteResource(route("vehicle-model.destroy",e))}}};D.render=M,D.__scopeId="data-v-37a2afeb";const j=D}}]);