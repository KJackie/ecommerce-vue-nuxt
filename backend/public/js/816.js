(self.webpackChunk=self.webpackChunk||[]).push([[816],{816:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var a=o(5166),n=(0,a.withScopeId)("data-v-2423dd9d");(0,a.pushScopeId)("data-v-2423dd9d");var r=(0,a.createVNode)("div",null,"Appearance",-1),d={class:"flex items-center justify-end mt-4"},c=(0,a.createTextVNode)("Save");(0,a.popScopeId)();var l=n((function(e,t,o,l,u,s){var m=(0,a.resolveComponent)("jet-label"),i=(0,a.resolveComponent)("jet-input"),p=(0,a.resolveComponent)("jet-button");return(0,a.openBlock)(),(0,a.createBlock)(a.Fragment,null,[r,(0,a.createVNode)("form",{onSubmit:t[2]||(t[2]=(0,a.withModifiers)((function(){return s.submit&&s.submit.apply(s,arguments)}),["prevent"]))},[(0,a.createVNode)("div",null,[(0,a.createVNode)(m,{for:"name",value:"Name"}),(0,a.createVNode)(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:u.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return u.form.name=e}),autofocus:"",autocomplete:"off"},null,8,["modelValue"])]),(0,a.createVNode)("div",d,[(0,a.createVNode)(p,{class:["ml-4",{"opacity-25":u.form.processing}],disabled:u.form.processing},{default:n((function(){return[c]})),_:1},8,["class","disabled"])])],32)],64)})),u=o(7676),s=o(3845),m=o(5130);const i={components:{JetInput:u.Z,JetLabel:s.Z,JetButton:m.Z},data:function(){return{form:this.$inertia.form({name:""})}},methods:{submit:function(){this.form.post(this.route("appearance.home"))}}};i.render=l,i.__scopeId="data-v-2423dd9d";const p=i}}]);