(self.webpackChunk=self.webpackChunk||[]).push([[9376],{9376:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>h});var t=o(5166),n=(0,t.withScopeId)("data-v-e20b28ee");(0,t.pushScopeId)("data-v-e20b28ee");var s={class:"mb-4"},l={class:"mb-4"},r=(0,t.createVNode)("small",{class:"mt-1 font-thin text-gray-400"},"* Image should be minimum 1920x1080 px. Maximun file size: 10MB/10240KB.",-1),i={class:"mb-4"},m={class:"w-2/3"},d=(0,t.createVNode)("small",{class:"mt-1 font-thin text-gray-400"},"*Thumbnail should be minimum 425x240 px. Maximun file size: 5MB/5120KB.",-1),c={class:"mb-4"},u={class:"text-right mt-5"},p=(0,t.createTextVNode)("Save");(0,t.popScopeId)();var g=n((function(e,a,o,g,f,h){var b=(0,t.resolveComponent)("jet-label"),v=(0,t.resolveComponent)("jet-text-input"),V=(0,t.resolveComponent)("jet-input-error"),k=(0,t.resolveComponent)("jet-multiple-image-input"),C=(0,t.resolveComponent)("jet-image-input"),N=(0,t.resolveComponent)("jet-file-input"),w=(0,t.resolveComponent)("jet-button");return(0,t.openBlock)(),(0,t.createBlock)("form",{onSubmit:a[2]||(a[2]=(0,t.withModifiers)((function(){return h.save&&h.save.apply(h,arguments)}),["prevent"]))},[(0,t.createVNode)("div",s,[(0,t.createVNode)(b,{for:"feedback",value:"Feedback"}),(0,t.createVNode)(v,{id:"feedback",type:"text",class:"mt-1 block w-full",modelValue:f.form.feedback,"onUpdate:modelValue":a[1]||(a[1]=function(e){return f.form.feedback=e}),ref:"feedback",autocomplete:"feedback",rows:"3"},null,8,["modelValue"]),(0,t.createVNode)(V,{message:f.form.errors.feedback,class:"mt-2"},null,8,["message"])]),(0,t.createVNode)("div",l,[(0,t.createVNode)(b,{value:"Images",class:"mb-2"}),(0,t.createVNode)(k,{medias:e.$page.props.previewDesign.mediaCollection,onChange:h.handleImagesChange},null,8,["medias","onChange"]),r,(0,t.createVNode)(V,{message:f.form.errors.images,class:"mt-2"},null,8,["message"]),((0,t.openBlock)(!0),(0,t.createBlock)(t.Fragment,null,(0,t.renderList)(f.form.images,(function(e,a){return(0,t.openBlock)(),(0,t.createBlock)(V,{key:a,message:f.form.errors["images.".concat(a)],class:"mt-2"},null,8,["message"])})),128))]),(0,t.createVNode)("div",i,[(0,t.createVNode)(b,{value:"Thumbnail",class:"mb-2"}),(0,t.createVNode)("div",m,[(0,t.createVNode)(C,{url:e.$page.props.previewDesign.thumbnailMediaUrl,onChange:h.handleThumbnailChange,height:"200px"},null,8,["url","onChange"])]),d,(0,t.createVNode)(V,{message:f.form.errors.thumbnail,class:"mt-2"},null,8,["message"])]),(0,t.createVNode)("div",c,[(0,t.createVNode)(b,{value:"Downloadable",class:"mb-2"}),(0,t.createVNode)(N,{url:e.$page.props.previewDesign.downloadableMediaUrl,onChange:h.handleFileChange},null,8,["url","onChange"]),(0,t.createVNode)(V,{message:f.form.errors.downloadable,class:"mt-2"},null,8,["message"])]),(0,t.createVNode)("div",u,[(0,t.createVNode)(w,{class:{"opacity-25":f.form.processing},disabled:f.form.processing},{default:n((function(){return[p]})),_:1},8,["class","disabled"])])],32)}));const f={data:function(){return{form:this.$inertia.form({feedback:this.$page.props.previewDesign.feedback,thumbnail:null,images:null,downloadable:null,_method:"put"})}},methods:{save:function(){this.form.post(route("preview-designs.update",this.$page.props.previewDesign.id))},handleImagesChange:function(e){this.form.images=e},handleThumbnailChange:function(e){this.form.thumbnail=e},handleFileChange:function(e){this.form.downloadable=e}}};f.render=g,f.__scopeId="data-v-e20b28ee";const h=f}}]);