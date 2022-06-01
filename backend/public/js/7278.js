(self.webpackChunk=self.webpackChunk||[]).push([[7278],{7278:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>v});var r=t(5166),a=(0,r.withScopeId)("data-v-23e2d2a2");(0,r.pushScopeId)("data-v-23e2d2a2");var n=(0,r.createTextVNode)("Edit Color"),c={class:"mb-4"},s={class:"mb-4"},l={class:"flex items-center"},d=(0,r.createVNode)("span",{class:"ml-2 text-sm text-gray-600"},"Is Gradient",-1),m={key:0,class:"mb-4"},i={key:1,class:"mb-4"},u=(0,r.createTextVNode)("Cancel"),f=(0,r.createTextVNode)("Update");(0,r.popScopeId)();var p=a((function(e,o,t,p,h,V){var v=(0,r.resolveComponent)("jet-label"),N=(0,r.resolveComponent)("jet-input"),g=(0,r.resolveComponent)("jet-input-error"),b=(0,r.resolveComponent)("jet-checkbox"),k=(0,r.resolveComponent)("jet-image-input"),C=(0,r.resolveComponent)("inertia-link"),x=(0,r.resolveComponent)("jet-button"),y=(0,r.resolveComponent)("form-view");return(0,r.openBlock)(),(0,r.createBlock)(y,{onSubmitted:V.save},{title:a((function(){return[n]})),form:a((function(){return[(0,r.createVNode)("div",c,[(0,r.createVNode)(v,{for:"name",value:"Name"}),(0,r.createVNode)(N,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:h.form.name,"onUpdate:modelValue":o[1]||(o[1]=function(e){return h.form.name=e}),ref:"name",autocomplete:"name"},null,8,["modelValue"]),(0,r.createVNode)(g,{message:h.form.errors.name,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",s,[(0,r.createVNode)("label",l,[(0,r.createVNode)(b,{checked:h.form.isGradient,"onUpdate:checked":o[2]||(o[2]=function(e){return h.form.isGradient=e})},null,8,["checked"]),d])]),h.form.isGradient?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)("div",m,[(0,r.createVNode)(v,{for:"code",value:"Code"}),(0,r.createVNode)(N,{id:"code",type:"color",class:"mt-1 block w-16 h-16",modelValue:h.form.code,"onUpdate:modelValue":o[3]||(o[3]=function(e){return h.form.code=e}),ref:"code",autocomplete:"code"},null,8,["modelValue"]),(0,r.createVNode)(g,{message:h.form.errors.code,class:"mt-2"},null,8,["message"])])),h.form.isGradient?((0,r.openBlock)(),(0,r.createBlock)("div",i,[(0,r.createVNode)(v,{for:"image",value:"Image"}),(0,r.createVNode)(k,{url:t.color.primaryMediaUrl,onChange:V.handleImageChange,class:"w-64"},null,8,["url","onChange"]),(0,r.createVNode)(g,{message:h.form.errors.image,class:"mt-2"},null,8,["message"])])):(0,r.createCommentVNode)("",!0)]})),actions:a((function(){return[(0,r.createVNode)(C,{href:e.route("colors.index"),class:"btn btn-secondary mr-4"},{default:a((function(){return[u]})),_:1},8,["href"]),(0,r.createVNode)(x,{class:{"opacity-25":h.form.processing},disabled:h.form.processing},{default:a((function(){return[f]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])})),h=(0,t(1151).pm)();const V={props:{color:Object},data:function(){return{form:this.$inertia.form({name:this.color.name,code:this.color.code,isGradient:this.color.isGradient,image:null,_method:"put"})}},methods:{handleImageChange:function(e){this.form.image=e},save:function(){this.form.post(route("colors.update",this.color.id),{onSuccess:function(){return h.success("Updated successfully")}})}}};V.render=p,V.__scopeId="data-v-23e2d2a2";const v=V}}]);