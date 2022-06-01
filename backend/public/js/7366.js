(self.webpackChunk=self.webpackChunk||[]).push([[7366],{7366:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>B});var r=o(5166),a=(0,r.withScopeId)("data-v-28f76c58");(0,r.pushScopeId)("data-v-28f76c58");var n=(0,r.createTextVNode)("Character Of Design"),s=(0,r.createTextVNode)("Change your character of design content."),c=(0,r.createTextVNode)("Add Design Character"),i={key:0,class:"overflow-x-auto"},l={class:"w-full divide-y divide-gray-200"},d=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"w-52 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Image"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Name"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Deposit Amount"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase"},"Action")])],-1),u={class:"bg-white divide-y divide-gray-200"},p={class:"px-4 py-4"},m={class:"flex justify-center bg-gray-100 py-4 items-center"},g={class:"px-4 py-4"},f={class:"px-4 py-4"},h={class:"px-4 py-4 text-right text-sm font-medium whitespace-nowrap"},y=(0,r.createVNode)("i",{class:"ti-pencil-alt"},null,-1),V=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),N={key:1,class:"flex justify-center items-center text-gray-600 h-32"},C=(0,r.createVNode)("span",null,"No Character Of Design Content Added",-1),x=(0,r.createTextVNode)("Add Design"),v={class:"mt-4"},k={class:"my-4"},b={class:"mt-4"},w=(0,r.createVNode)("small",{class:"mt-1 font-thin text-gray-400"},"* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.",-1),D=(0,r.createTextVNode)("Cancel"),A=(0,r.createTextVNode)("Save");(0,r.popScopeId)();var I=a((function(e,t,o,I,j,B){var M=(0,r.resolveComponent)("jet-button"),S=(0,r.resolveComponent)("jet-danger-button"),$=(0,r.resolveComponent)("jet-card-section"),_=(0,r.resolveComponent)("jet-label"),U=(0,r.resolveComponent)("jet-input"),T=(0,r.resolveComponent)("jet-input-error"),O=(0,r.resolveComponent)("jet-select"),z=(0,r.resolveComponent)("jet-image-input"),F=(0,r.resolveComponent)("jet-secondary-button"),K=(0,r.resolveComponent)("jet-dialog-modal");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)($,{onSubmitted:B.save},{title:a((function(){return[n]})),description:a((function(){return[s]})),action:a((function(){return[(0,r.createVNode)(M,{type:"button",onClick:B.addDesign},{default:a((function(){return[c]})),_:1},8,["onClick"])]})),card:a((function(){var t;return[e.$page.props.designCharacter&&null!==(t=e.$page.props.designCharacter)&&void 0!==t&&t.length?((0,r.openBlock)(),(0,r.createBlock)("div",i,[(0,r.createVNode)("table",l,[d,(0,r.createVNode)("tbody",u,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(e.$page.props.designCharacter,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:t},[(0,r.createVNode)("td",p,[(0,r.createVNode)("div",m,[(0,r.createVNode)("img",{class:"h-16 w-32 object-contain",src:e.primaryMediaUrl,alt:""},null,8,["src"])])]),(0,r.createVNode)("td",g,(0,r.toDisplayString)(e.category.name),1),(0,r.createVNode)("td",f,(0,r.toDisplayString)(e.depositAmount),1),(0,r.createVNode)("td",h,[(0,r.createVNode)(M,{type:"button",class:"mr-2",onClick:function(e){return B.editDesign(t)}},{default:a((function(){return[y]})),_:2},1032,["onClick"]),(0,r.createVNode)(S,{onClick:function(t){return B.destroy(e.id)}},{default:a((function(){return[V]})),_:2},1032,["onClick"])])])})),128))])])])):((0,r.openBlock)(),(0,r.createBlock)("div",N,[C]))]})),_:1},8,["onSubmitted"]),(0,r.createVNode)(K,{show:j.showDialog,onClose:B.closeModal},{title:a((function(){return[x]})),content:a((function(){return[(0,r.createVNode)("div",v,[(0,r.createVNode)(_,{for:"depositAmount",value:"Deposit Amount"}),(0,r.createVNode)(U,{type:"number",class:"mt-1 block w-full",ref:"depositAmount",modelValue:j.form.depositAmount,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.form.depositAmount=e})},null,8,["modelValue"]),(0,r.createVNode)(T,{message:j.form.errors.depositAmount,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",k,[(0,r.createVNode)(_,{for:"name",value:"Category"}),(0,r.createVNode)(O,{modelValue:j.form.categoryId,"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.form.categoryId=e}),options:e.$page.props.categories},null,8,["modelValue","options"]),(0,r.createVNode)(T,{message:j.form.errors.categoryId,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",b,[(0,r.createVNode)(_,{for:"image",value:"Image"}),(0,r.createVNode)(z,{url:j.form.primaryMediaUrl,onChange:B.handleImageChange},null,8,["url","onChange"]),w,(0,r.createVNode)(T,{message:j.form.errors.image,class:"mt-2"},null,8,["message"])])]})),footer:a((function(){return[(0,r.createVNode)(F,{onClick:B.closeModal},{default:a((function(){return[D]})),_:1},8,["onClick"]),(0,r.createVNode)(M,{class:["ml-2",{"opacity-25":j.form.processing}],disabled:j.form.processing,onClick:B.save},{default:a((function(){return[A]})),_:1},8,["class","disabled","onClick"])]})),_:1},8,["show","onClose"])])}));const j={name:"design-character",data:function(){return{form:this.$inertia.form({id:null,depositAmount:null,categoryId:null,image:null,primaryMediaUrl:null}),showDialog:!1,edit:!1}},methods:{addDesign:function(){this.edit=!1,this.form.reset(),this.showDialog=!0},closeModal:function(){this.showDialog=!1},handleImageChange:function(e){this.form.image=e},save:function(){var e=this;this.edit?this.form.post(route("appearance.designs.designs-character.update",this.form.id),{onSuccess:function(){e.edit=!1,e.closeModal(),e.form.reset()}}):this.form.post(route("appearance.designs.design-character"),{onSuccess:function(){e.closeModal(),e.form.reset()}})},editDesign:function(e){this.showDialog=!0,this.edit=!0,this.form.id=this.$page.props.designCharacter[e].id,this.form.depositAmount=this.$page.props.designCharacter[e].depositAmount,this.form.categoryId=this.$page.props.designCharacter[e].categoryId,this.form.primaryMediaUrl=this.$page.props.designCharacter[e].primaryMediaUrl},destroy:function(e){this.deleteResource(route("appearance.designs.designs-character.delete",e))}}};j.render=I,j.__scopeId="data-v-28f76c58";const B=j}}]);