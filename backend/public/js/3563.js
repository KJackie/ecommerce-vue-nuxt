(self.webpackChunk=self.webpackChunk||[]).push([[3563],{3563:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>V});var n=o(5166),l=(0,n.withScopeId)("data-v-1fc2e510");(0,n.pushScopeId)("data-v-1fc2e510");var a=(0,n.createTextVNode)("Custom Design"),r=(0,n.createTextVNode)("Change home page custom design section content."),s={class:"col-span-6 sm:col-span-4"},c={class:"col-span-6 sm:col-span-4"},i={class:"col-span-6 sm:col-span-4"},u={class:"col-span-6 sm:col-span-4"},d=(0,n.createVNode)("small",{class:"mt-1 font-thin text-gray-400 "},"* Image should be minimum 800x450 px. Maximum file size: 5MB/5120KB.",-1),m=(0,n.createTextVNode)("Saved Successfully."),p=(0,n.createTextVNode)("Save");(0,n.popScopeId)();var f=l((function(e,t,o,f,v,V){var b=(0,n.resolveComponent)("jet-label"),g=(0,n.resolveComponent)("jet-input"),h=(0,n.resolveComponent)("jet-input-error"),N=(0,n.resolveComponent)("jet-text-input"),C=(0,n.resolveComponent)("jet-image-input"),x=(0,n.resolveComponent)("jet-action-message"),S=(0,n.resolveComponent)("jet-button"),k=(0,n.resolveComponent)("jet-form-section");return(0,n.openBlock)(),(0,n.createBlock)(k,{onSubmitted:V.save},{title:l((function(){return[a]})),description:l((function(){return[r]})),form:l((function(){var o;return[(0,n.createVNode)("div",s,[(0,n.createVNode)(b,{for:"title",value:"Title"}),(0,n.createVNode)(g,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:v.form.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.form.title=e}),ref:"title",autocomplete:"title"},null,8,["modelValue"]),(0,n.createVNode)(h,{message:v.form.errors.title,class:"mt-2"},null,8,["message"])]),(0,n.createVNode)("div",c,[(0,n.createVNode)(b,{for:"subtitle",value:"Subtitle"}),(0,n.createVNode)(g,{id:"subtitle",type:"text",class:"mt-1 block w-full",modelValue:v.form.subtitle,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.form.subtitle=e}),ref:"subtitle",autocomplete:"subtitle"},null,8,["modelValue"]),(0,n.createVNode)(h,{message:v.form.errors.subtitle,class:"mt-2"},null,8,["message"])]),(0,n.createVNode)("div",i,[(0,n.createVNode)(b,{for:"description",value:"Description"}),(0,n.createVNode)(N,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:v.form.description,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.form.description=e}),ref:"description",autocomplete:"description"},null,8,["modelValue"]),(0,n.createVNode)(h,{message:v.form.errors.description,class:"mt-2"},null,8,["message"])]),(0,n.createVNode)("div",u,[(0,n.createVNode)(b,{for:"banner",value:"Banner"}),(0,n.createVNode)(C,{url:null===(o=e.$page.props.custom)||void 0===o?void 0:o.primaryMediaUrl,onChange:V.handleBannerChange},null,8,["url","onChange"]),d,(0,n.createVNode)(h,{message:v.form.errors.banner,class:"mt-2"},null,8,["message"])])]})),actions:l((function(){return[(0,n.createVNode)(x,{on:v.form.recentlySuccessful,class:"mr-3"},{default:l((function(){return[m]})),_:1},8,["on"]),(0,n.createVNode)(S,{class:{"opacity-25":v.form.processing},disabled:v.form.processing},{default:l((function(){return[p]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])}));const v={data:function(){var e,t,o,n,l,a;return{form:this.$inertia.form({title:null===(e=this.$page.props.custom)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.title,subtitle:null===(o=this.$page.props.custom)||void 0===o||null===(n=o.data)||void 0===n?void 0:n.subtitle,description:null===(l=this.$page.props.custom)||void 0===l||null===(a=l.data)||void 0===a?void 0:a.description,banner:null})}},methods:{save:function(){this.form.post(route("appearance.home.custom"))},handleBannerChange:function(e){this.form.banner=e}},mounted:function(){}};v.render=f,v.__scopeId="data-v-1fc2e510";const V=v}}]);