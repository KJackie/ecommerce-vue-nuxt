(self.webpackChunk=self.webpackChunk||[]).push([[3809],{3809:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var o=r(5166),a={class:"max-w-5xl divide-y divide-gray-200"},c={class:"flex justify-between py-3 rounded-md"},d={class:"truncate text-90 font-normal text-2xl"},s={class:"items-center"},l=(0,o.createVNode)("i",{class:"ti-arrow-left"},null,-1),n=(0,o.createVNode)("i",{class:"ti-trash"},null,-1),i={class:"max-w-5xl divide-y divide-gray-200"},m={class:"bg-white mb-6 py-4 px-6 rounded-md"},p={class:"flex border-b border-40 -mx-6 px-6"},x=(0,o.createVNode)("div",{class:"w-1/4 py-4"},[(0,o.createVNode)("h4",{class:"font-normal text-80"},"ID")],-1),N={class:"w-3/4 py-4 break-words"},V={class:"text-90"},u={class:"flex border-b border-40 -mx-6 px-6"},v=(0,o.createVNode)("div",{class:"w-1/4 py-4"},[(0,o.createVNode)("h4",{class:"font-normal text-80"},"Customer")],-1),b={class:"w-3/4 py-4 break-words"},y={class:"text-90"},f={class:"flex border-b border-40 -mx-6 px-6"},w=(0,o.createVNode)("div",{class:"w-1/4 py-4"},[(0,o.createVNode)("h4",{class:"font-normal text-80"},"Product")],-1),h={class:"w-3/4 py-4 break-words"},k={class:"text-90"},g={class:"flex border-b border-40 -mx-6 px-6"},C=(0,o.createVNode)("div",{class:"w-1/4 py-4"},[(0,o.createVNode)("h4",{class:"font-normal text-80"},"Comment")],-1),D={class:"w-3/4 py-4 break-words"},S={class:"text-90"},j={class:"flex -mx-6 px-6"},A=(0,o.createVNode)("div",{class:"w-1/4 py-4"},[(0,o.createVNode)("h4",{class:"font-normal text-80"},"Commented At")],-1),B={class:"w-3/4 py-4 break-words"},_={class:"text-90"};const F={name:"comment-show",props:{comment:Object},methods:{destroy:function(e){this.deleteResource(route("comments.destroy",e))}},render:function(e,t,r,F,I,O){var P=(0,o.resolveComponent)("inertia-link"),R=(0,o.resolveComponent)("jet-danger-button");return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[(0,o.createVNode)("div",null,[(0,o.createVNode)("div",a,[(0,o.createVNode)("div",c,[(0,o.createVNode)("div",null,[(0,o.createVNode)("h1",d,"Comment Details : "+(0,o.toDisplayString)(r.comment.id),1)]),(0,o.createVNode)("div",s,[(0,o.createVNode)(P,{class:"btn btn-primary mr-2",href:e.route("comments.index")},{default:(0,o.withCtx)((function(){return[l]})),_:1},8,["href"]),(0,o.createVNode)(R,{onClick:t[1]||(t[1]=function(e){return O.destroy(r.comment.id)})},{default:(0,o.withCtx)((function(){return[n]})),_:1})])])])]),(0,o.createVNode)("div",i,[(0,o.createVNode)("div",m,[(0,o.createVNode)("div",p,[x,(0,o.createVNode)("div",N,[(0,o.createVNode)("p",V,(0,o.toDisplayString)(r.comment.id),1)])]),(0,o.createVNode)("div",u,[v,(0,o.createVNode)("div",b,[(0,o.createVNode)("p",y,(0,o.toDisplayString)(r.comment.customer.name),1)])]),(0,o.createVNode)("div",f,[w,(0,o.createVNode)("div",h,[(0,o.createVNode)("p",k,(0,o.toDisplayString)(r.comment.commentable.name),1)])]),(0,o.createVNode)("div",g,[C,(0,o.createVNode)("div",D,[(0,o.createVNode)("p",S,(0,o.toDisplayString)(r.comment.comment),1)])]),(0,o.createVNode)("div",j,[A,(0,o.createVNode)("div",B,[(0,o.createVNode)("p",_,(0,o.toDisplayString)(r.comment.commentedAt),1)])])])])],64)}},I=F}}]);