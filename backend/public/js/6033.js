(self.webpackChunk=self.webpackChunk||[]).push([[6033,7826,3332],{7826:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>m});var r=o(5166),a=(0,r.withScopeId)("data-v-340faa06");(0,r.pushScopeId)("data-v-340faa06");var n=(0,r.createTextVNode)("Custom Page Banner"),s=(0,r.createTextVNode)("Change custom page banner section settings."),l={class:"col-span-6 sm:col-span-4"},c=(0,r.createVNode)("small",{class:"mt-1 font-thin text-gray-400"},"* Image should be minimum 1920x1080 px. Maximum file size: 100MB/102400KB.",-1),i=(0,r.createTextVNode)("Saved."),d=(0,r.createTextVNode)("Save");(0,r.popScopeId)();var u=a((function(e,t,o,u,p,m){var f=(0,r.resolveComponent)("jet-label"),g=(0,r.resolveComponent)("jet-image-input"),h=(0,r.resolveComponent)("jet-input-error"),v=(0,r.resolveComponent)("jet-action-message"),V=(0,r.resolveComponent)("jet-button"),N=(0,r.resolveComponent)("jet-form-section");return(0,r.openBlock)(),(0,r.createBlock)(N,{onSubmitted:m.save},{title:a((function(){return[n]})),description:a((function(){return[s]})),form:a((function(){var t;return[(0,r.createVNode)("div",l,[(0,r.createVNode)(f,{for:"banner",value:"Banner"}),(0,r.createVNode)(g,{url:null===(t=e.$page.props.banner)||void 0===t?void 0:t.primaryMediaUrl,onChange:m.handlePosterChange},null,8,["url","onChange"]),c,(0,r.createVNode)(h,{message:p.form.errors.banner,class:"mt-2"},null,8,["message"])])]})),actions:a((function(){return[(0,r.createVNode)(v,{on:p.form.recentlySuccessful,class:"mr-3"},{default:a((function(){return[i]})),_:1},8,["on"]),(0,r.createVNode)(V,{class:{"opacity-25":p.form.processing},disabled:p.form.processing},{default:a((function(){return[d]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])}));const p={data:function(){return{form:this.$inertia.form({banner:null})}},methods:{save:function(){this.form.post(route("appearance.custom-orders.banner"))},handlePosterChange:function(e){this.form.banner=e}}};p.render=u,p.__scopeId="data-v-340faa06";const m=p},6033:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var r=o(5166),a=(0,r.withScopeId)("data-v-2f5cb50e");(0,r.pushScopeId)("data-v-2f5cb50e");var n={class:"mt-6"};(0,r.popScopeId)();var s=a((function(e,t,o,a,s,l){var c=(0,r.resolveComponent)("slider-section"),i=(0,r.resolveComponent)("custom-banner");return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[(0,r.createVNode)("div",null,[(0,r.createVNode)(c)]),(0,r.createVNode)("div",n,[(0,r.createVNode)(i)])],64)})),l=o(3332),c=o(7826);const i={components:{SliderSection:l.default,CustomBanner:c.default}};i.render=s,i.__scopeId="data-v-2f5cb50e";const d=i},3332:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var r=o(5166),a=(0,r.withScopeId)("data-v-0a1f3628");(0,r.pushScopeId)("data-v-0a1f3628");var n=(0,r.createTextVNode)("Slider Section"),s=(0,r.createTextVNode)("Change your Custom Order slider content."),l=(0,r.createTextVNode)("Add Slide"),c={key:0,class:"overflow-x-auto"},i={class:"w-full divide-y divide-gray-200"},d=(0,r.createVNode)("thead",{class:"bg-gray-50"},[(0,r.createVNode)("tr",null,[(0,r.createVNode)("th",{scope:"col",class:"w-52 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Image"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Title"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"},"Subtitle"),(0,r.createVNode)("th",{scope:"col",class:"px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase"},"Action")])],-1),u={class:"bg-white divide-y divide-gray-200"},p={class:"px-4 py-4"},m={class:"flex justify-center bg-gray-100 py-4 items-center"},f={class:"px-4 py-4"},g={class:"px-4 py-4"},h={class:"px-4 py-4 text-right text-sm font-medium whitespace-nowrap"},v=(0,r.createVNode)("i",{class:"ti-pencil-alt"},null,-1),V=(0,r.createVNode)("i",{class:"ti-trash"},null,-1),N={key:1,class:"flex justify-center items-center text-gray-600 h-32"},b=(0,r.createVNode)("span",null,"No Slider Added",-1),x=(0,r.createTextVNode)("Add Slider"),C={class:"mt-4"},y={class:"mt-4"},S={class:"mt-4"},k=(0,r.createVNode)("small",{class:"mt-1 font-thin text-gray-400"},"* Image should be minimum 1920x1080 px. Maximum file size: 10MB/10240KB.",-1),w=(0,r.createTextVNode)("Cancel"),B=(0,r.createTextVNode)("Save");(0,r.popScopeId)();var j=a((function(e,t,o,j,I,_){var T=(0,r.resolveComponent)("jet-button"),$=(0,r.resolveComponent)("jet-danger-button"),M=(0,r.resolveComponent)("jet-card-section"),D=(0,r.resolveComponent)("jet-label"),U=(0,r.resolveComponent)("jet-input"),A=(0,r.resolveComponent)("jet-input-error"),P=(0,r.resolveComponent)("jet-image-input"),z=(0,r.resolveComponent)("jet-secondary-button"),F=(0,r.resolveComponent)("jet-dialog-modal");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(M,{onSubmitted:_.save},{title:a((function(){return[n]})),description:a((function(){return[s]})),action:a((function(){return[(0,r.createVNode)(T,{type:"button",onClick:_.addSlide},{default:a((function(){return[l]})),_:1},8,["onClick"])]})),card:a((function(){var t;return[e.$page.props.slider&&null!==(t=e.$page.props.slider.slides)&&void 0!==t&&t.length?((0,r.openBlock)(),(0,r.createBlock)("div",c,[(0,r.createVNode)("table",i,[d,(0,r.createVNode)("tbody",u,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(e.$page.props.slider.slides,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("tr",{key:t},[(0,r.createVNode)("td",p,[(0,r.createVNode)("div",m,[(0,r.createVNode)("img",{class:"h-16 w-32 object-contain",src:e.url,alt:""},null,8,["src"])])]),(0,r.createVNode)("td",f,(0,r.toDisplayString)(e.title),1),(0,r.createVNode)("td",g,(0,r.toDisplayString)(e.subtitle),1),(0,r.createVNode)("td",h,[(0,r.createVNode)(T,{type:"button",class:"mr-2",onClick:function(e){return _.editSlide(t)}},{default:a((function(){return[v]})),_:2},1032,["onClick"]),(0,r.createVNode)($,{onClick:function(e){return _.deleteSlide(t)}},{default:a((function(){return[V]})),_:2},1032,["onClick"])])])})),128))])])])):((0,r.openBlock)(),(0,r.createBlock)("div",N,[b]))]})),_:1},8,["onSubmitted"]),(0,r.createVNode)(F,{show:I.showDialog,onClose:_.closeModal},{title:a((function(){return[x]})),content:a((function(){return[(0,r.createVNode)("div",C,[(0,r.createVNode)(D,{for:"title",value:"Title"}),(0,r.createVNode)(U,{type:"text",class:"mt-1 block w-full",ref:"title",modelValue:I.form.title,"onUpdate:modelValue":t[1]||(t[1]=function(e){return I.form.title=e})},null,8,["modelValue"]),(0,r.createVNode)(A,{message:I.form.errors.title,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",y,[(0,r.createVNode)(D,{for:"subtitle",value:"Subtitle"}),(0,r.createVNode)(U,{type:"text",class:"mt-1 block w-full",ref:"subtitle",modelValue:I.form.subtitle,"onUpdate:modelValue":t[2]||(t[2]=function(e){return I.form.subtitle=e})},null,8,["modelValue"]),(0,r.createVNode)(A,{message:I.form.errors.subtitle,class:"mt-2"},null,8,["message"])]),(0,r.createVNode)("div",S,[(0,r.createVNode)(D,{for:"image",value:"Image"}),(0,r.createVNode)(P,{url:I.form.imageUrl,onChange:_.handleImageChange},null,8,["url","onChange"]),k,(0,r.createVNode)(A,{message:I.form.errors.image,class:"mt-2"},null,8,["message"])])]})),footer:a((function(){return[(0,r.createVNode)(z,{onClick:_.closeModal},{default:a((function(){return[w]})),_:1},8,["onClick"]),(0,r.createVNode)(T,{class:["ml-2",{"opacity-25":I.form.processing}],disabled:I.form.processing,onClick:_.save},{default:a((function(){return[B]})),_:1},8,["class","disabled","onClick"])]})),_:1},8,["show","onClose"])])}));const I={data:function(){return{form:this.$inertia.form({id:null,title:null,subtitle:null,image:null,imageUrl:null}),showDialog:!1,edit:!1}},methods:{addSlide:function(){this.edit=!1,this.form.reset(),this.showDialog=!0},save:function(){var e=this;this.edit?this.form.post(route("appearance.custom-orders.slider.edit",this.form.id),{onSuccess:function(){e.edit=!1,e.closeModal(),e.form.reset()}}):this.form.post(route("appearance.custom-orders.slider"),{onSuccess:function(){e.closeModal(),e.form.reset()}})},handleImageChange:function(e){this.form.image=e},closeModal:function(){this.showDialog=!1},editSlide:function(e){this.showDialog=!0,this.edit=!0,this.form.id=this.$page.props.slider.slides[e].id,this.form.title=this.$page.props.slider.slides[e].title,this.form.subtitle=this.$page.props.slider.slides[e].subtitle,this.form.imageUrl=this.$page.props.slider.slides[e].url},deleteSlide:function(e){this.form.delete(route("appearance.custom-orders.slider.delete",this.$page.props.slider.slides[e].id))}}};I.render=j,I.__scopeId="data-v-0a1f3628";const _=I}}]);