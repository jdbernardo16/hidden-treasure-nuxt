import{T as Ue,M as Be,L as qe,H as Ve}from"./BJFTS0Nf.js";import{d as z,N as ie,X as xe,ac as ze,o as s,h as C,w as P,a as $,f as E,t as p,b as e,i as b,s as $e,D as A,c as r,e as t,F as R,r as M,g as ke,E as O,p as Se,v as He,S as X,q as Te,_ as ce,V as Ne,Y as De,x as V,u as Ce,W as Ie,a1 as Fe,k as Oe,U as te,j as oe,Q as se,T as ne,ag as We,R as le,ah as Ke,a6 as Ae,G as Ge,B as Ye,n as Qe,ai as Je,I as Xe}from"./D1kYD-Ce.js";import{b as Ze,i as et,c as tt,S as be,a as we}from"./DIZKa40N.js";import{N as st}from"./B7Y62qQh.js";import{S as W,a as re}from"./DzcZclhK.js";import{_ as nt}from"./Dalpdz56.js";import{u as ot}from"./B09egupF.js";import{_ as at}from"./C3wdLDpV.js";import"./BPh7Klj2.js";import"./CtcDms87.js";import"./BnTTpeJr.js";function ye(l){let{swiper:n,extendParams:f,on:h}=l;f({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let g=!1,w=!1;n.thumbs={swiper:null};function v(){const c=n.thumbs.swiper;if(!c||c.destroyed)return;const i=c.clickedIndex,o=c.clickedSlide;if(o&&o.classList.contains(n.params.thumbs.slideThumbActiveClass)||typeof i>"u"||i===null)return;let _;c.params.loop?_=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):_=i,n.params.loop?n.slideToLoop(_):n.slideTo(_)}function y(){const{thumbs:c}=n.params;if(g)return!1;g=!0;const i=n.constructor;if(c.swiper instanceof i)n.thumbs.swiper=c.swiper,Object.assign(n.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(n.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.thumbs.swiper.update();else if(et(c.swiper)){const o=Object.assign({},c.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.thumbs.swiper=new i(o),w=!0}return n.thumbs.swiper.el.classList.add(n.params.thumbs.thumbsContainerClass),n.thumbs.swiper.on("tap",v),!0}function d(c){const i=n.thumbs.swiper;if(!i||i.destroyed)return;const o=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():i.params.slidesPerView;let _=1;const a=n.params.thumbs.slideThumbActiveClass;if(n.params.slidesPerView>1&&!n.params.centeredSlides&&(_=n.params.slidesPerView),n.params.thumbs.multipleActiveThumbs||(_=1),_=Math.floor(_),i.slides.forEach(x=>x.classList.remove(a)),i.params.loop||i.params.virtual&&i.params.virtual.enabled)for(let x=0;x<_;x+=1)tt(i.slidesEl,`[data-swiper-slide-index="${n.realIndex+x}"]`).forEach(k=>{k.classList.add(a)});else for(let x=0;x<_;x+=1)i.slides[n.realIndex+x]&&i.slides[n.realIndex+x].classList.add(a);const m=n.params.thumbs.autoScrollOffset,u=m&&!i.params.loop;if(n.realIndex!==i.realIndex||u){const x=i.activeIndex;let k,j;if(i.params.loop){const I=i.slides.filter(U=>U.getAttribute("data-swiper-slide-index")===`${n.realIndex}`)[0];k=i.slides.indexOf(I),j=n.activeIndex>n.previousIndex?"next":"prev"}else k=n.realIndex,j=k>n.previousIndex?"next":"prev";u&&(k+=j==="next"?m:-1*m),i.visibleSlidesIndexes&&i.visibleSlidesIndexes.indexOf(k)<0&&(i.params.centeredSlides?k>x?k=k-Math.floor(o/2)+1:k=k+Math.floor(o/2)-1:k>x&&i.params.slidesPerGroup,i.slideTo(k,c?0:void 0))}}h("beforeInit",()=>{const{thumbs:c}=n.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const i=Ze(),o=()=>{const a=typeof c.swiper=="string"?i.querySelector(c.swiper):c.swiper;if(a&&a.swiper)c.swiper=a.swiper,y(),d(!0);else if(a){const m=`${n.params.eventsPrefix}init`,u=x=>{c.swiper=x.detail[0],a.removeEventListener(m,u),y(),d(!0),c.swiper.update(),n.update()};a.addEventListener(m,u)}return a},_=()=>{if(n.destroyed)return;o()||requestAnimationFrame(_)};requestAnimationFrame(_)}else y(),d(!0)}),h("slideChange update resize observerUpdate",()=>{d()}),h("setTransition",(c,i)=>{const o=n.thumbs.swiper;!o||o.destroyed||o.setTransition(i)}),h("beforeDestroy",()=>{const c=n.thumbs.swiper;!c||c.destroyed||w&&c.destroy()}),Object.assign(n.thumbs,{init:y,update:d})}var rt={};const lt=z({__name:"SEOHead",props:{info:{type:Object,required:!0}},setup(l){var U;const n=$e(),{wooNuxtSEO:f,isDev:h,stripHtml:g}=ie(),{path:w}=xe(),v=n.public.SITE_URL,y=l.info.name,d=`${v}${w}`,c=rt.SITE_TITLE??"WooNuxt",i=ze(),o=((U=l.info.image)==null?void 0:U.sourceUrl)??"/images/placeholder.jpg",_=i.getSizes(o,{width:1200,height:630}).src,a=i.getSizes(o,{width:1600,height:900}).src,m=B=>B.startsWith("http")?B:`${v}${B}`,u=m(_),x=m(a),k=l.info.shortDescription||l.info.description?g(l.info.shortDescription||""):g(l.info.description||""),j=(f==null?void 0:f.find(B=>B.provider==="facebook"))??null,I=(f==null?void 0:f.find(B=>B.provider==="twitter"))??null;return(B,q)=>{const Y=Ue,L=Be,ae=qe,Q=Ve;return s(),C(Q,null,{default:P(()=>{var Z,J;return[$(Y,null,{default:P(()=>[E(p(e(y)),1)]),_:1}),e(k)?(s(),C(L,{key:0,name:"description",hid:"description",content:e(k)},null,8,["content"])):b("",!0),$(L,{name:"image",hid:"image",content:e(u)},null,8,["content"]),$(L,{property:"og:site_name",hid:"og:site_name",content:e(c)},null,8,["content"]),$(L,{property:"og:url",hid:"og:url",content:d}),l.info.name?(s(),C(L,{key:1,property:"og:title",hid:"og:title",content:l.info.name},null,8,["content"])):b("",!0),e(k)?(s(),C(L,{key:2,property:"og:description",hid:"og:description",content:e(k)},null,8,["content"])):b("",!0),$(L,{property:"og:image",hid:"og:image",content:e(u)},null,8,["content"]),(Z=e(j))!=null&&Z.url?(s(),C(L,{key:3,property:"article:publisher",hid:"article:publisher",content:e(j).url},null,8,["content"])):b("",!0),$(L,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),(J=e(I))!=null&&J.handle?(s(),C(L,{key:4,name:"twitter:site",hid:"twitter:site",content:e(I).handle},null,8,["content"])):b("",!0),l.info.name?(s(),C(L,{key:5,name:"twitter:title",hid:"twitter:title",content:l.info.name},null,8,["content"])):b("",!0),e(k)?(s(),C(L,{key:6,name:"twitter:description",hid:"twitter:description",content:e(k)},null,8,["content"])):b("",!0),$(L,{name:"twitter:image",hid:"twitter:image",content:e(x)},null,8,["content"]),$(L,{name:"twitter:url",hid:"twitter:url",content:d}),$(ae,{rel:"canonical",hid:"canonical",href:"https://hiddentreasuresagency.com/product"})]}),_:1})}}}),it=Object.assign(lt,{__name:"SEOHead"}),ct={class:"flex text-sm leading-none text-gray-400 gap-1 items-center"},ut={class:"flex"},dt={key:1,class:"text-white line-clamp-1"},mt={key:2},pt=z({__name:"Breadcrumb",props:{product:{}},setup(l){var w;const n=$e(),f=((w=n==null?void 0:n.public)==null?void 0:w.PRODUCT_CATEGORY_PERMALINK)||"/product-category/",h=A(()=>{var v;return(v=l.product.productCategories)==null?void 0:v.nodes[0]}),g=A(()=>{var v,y;return[{name:"Products",slug:"/products"},{name:(v=h.value)==null?void 0:v.name,slug:`${String(f)}${(y=h.value)==null?void 0:y.slug}`},{name:l.product.name}]});return(v,y)=>{const d=ke;return s(),r("div",ct,[t("span",ut,[$(d,{to:"/",class:"hover:text-brand-gold line-clamp-1"},{default:P(()=>[E(p(v.$t("messages.general.home")),1)]),_:1}),y[0]||(y[0]=t("span",null," /",-1))]),(s(!0),r(R,null,M(e(g),(c,i)=>(s(),r("span",{class:"flex",key:c.name||i},[c.slug?(s(),C(d,{key:0,to:decodeURIComponent(c.slug),class:"hover:text-brand-gold line-clamp-1"},{default:P(()=>[E(p(c.name),1)]),_:2},1032,["to"])):(s(),r("span",dt,p(c.name),1)),i+1<e(g).length?(s(),r("span",mt," /")):b("",!0)]))),128))])}}}),ht=Object.assign(pt,{__name:"Breadcrumb"}),_t={class:"relative w-full"},gt={class:"main-slider mb-4 w-full"},ft={class:"aspect-[1/1] relative overflow-hidden rounded bg-neutral-700 p-4"},vt={class:"thumb-slider w-full"},bt=z({__name:"ImageSlider",props:{mainImage:{type:Object,required:!0},gallery:{type:Object,required:!0},node:{type:Object,required:!0},activeVariation:{type:Object,required:!1}},setup(l){const{FALLBACK_IMG:n}=ie(),f=l,h=A(()=>({sourceUrl:f.mainImage.sourceUrl||n,title:f.mainImage.title,altText:f.mainImage.altText,databaseId:f.mainImage.databaseId})),g=A(()=>[h.value,...f.gallery.nodes].filter((d,c,i)=>c===i.findIndex(o=>(o==null?void 0:o.databaseId)===(d==null?void 0:d.databaseId)))),w=O(null),v=O(0),y=d=>{w.value=d};return Se(()=>{v.value=0}),(d,c)=>{const i=He;return s(),r("div",_t,[t("div",gt,[$(e(we),{modules:[e(ye),e(st)],thumbs:{swiper:w.value},navigation:!0,class:"w-full"},{default:P(()=>[(s(!0),r(R,null,M(e(g),(o,_)=>(s(),C(e(be),{key:_},{default:P(()=>[t("div",ft,[$(i,{src:o.sourceUrl,alt:`Product Image ${_+1}`,class:"h-full w-full object-contain",fetchpriority:"high",quality:"80",format:"webp",placeholder:"","placeholder-class":"blur-xl"},null,8,["src","alt"])])]),_:2},1024))),128))]),_:1},8,["modules","thumbs"])]),t("div",vt,[$(e(we),{modules:[e(ye)],"slides-per-view":5,"space-between":10,"watch-slides-progress":!0,onSwiper:y},{default:P(()=>[(s(!0),r(R,null,M(e(g),(o,_)=>(s(),C(e(be),{key:_,class:"aspect-[1/1] cursor-pointer overflow-hidden border-neutral-500 rounded-lg border-2 transition-all p-1 bg-neutral-800"},{default:P(()=>[$(i,{src:o.sourceUrl,alt:`Thumbnail ${_+1}`,class:"h-full w-full rounded object-contain",fetchpriority:"high",quality:"80",format:"webp",placeholder:"","placeholder-class":"blur-xl"},null,8,["src","alt"])]),_:2},1024))),128))]),_:1},8,["modules"])])])}}}),wt=Object.assign(X(bt,[["__scopeId","data-v-3d30a9d9"]]),{__name:"ImageSlider"}),yt={class:"inline-flex items-center"},xt={key:0,class:"text-xs ml-1 text-gray-500"},$t=z({__name:"StarRating",props:{rating:{type:Number,default:0},count:{type:Number,default:null},hideCount:{type:Boolean,default:!1},size:{type:Number,default:14}},setup(l){return(n,f)=>{const h=ce;return s(),r("div",yt,[(s(),r(R,null,M(5,g=>$(h,{key:g,name:"ion:star",size:l.size+"",class:"mr-[2px]",style:Te({color:l.rating<g?"#ccc":"#FBBE24"})},null,8,["size","style"])),64)),l.count!==null&&!l.hideCount?(s(),r("span",xt,"("+p(l.count)+")",1)):b("",!0)])}}}),ue=Object.assign($t,{__name:"StarRating"}),kt={key:0,class:"text-green-600"},St={key:1,class:"text-red-600"},Tt={key:2,class:"text-yellow-600"},Ct={key:3,class:"text-gray-600"},It=z({__name:"StockStatus",props:{stockStatus:{type:String,required:!1}},setup(l){return(n,f)=>l.stockStatus===e(W).IN_STOCK?(s(),r("span",kt,p(n.$t("messages.shop.inStock")),1)):l.stockStatus===e(W).OUT_OF_STOCK?(s(),r("span",St,p(n.$t("messages.shop.outOfStock")),1)):l.stockStatus===e(W).ON_BACKORDER?(s(),r("span",Tt,p(n.$t("messages.shop.onBackorder")),1)):(s(),r("span",Ct,"Loading"))}}),Ot=Object.assign(It,{__name:"StockStatus"}),At={class:"relative inline-block group"},Lt={class:"absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-white text-sm rounded px-2 py-2 transition-opacity duration-300 whitespace-nowrap"},Pt=z({__name:"Tooltip",props:{text:{type:String,required:!0}},setup(l){return(n,f)=>(s(),r("div",At,[Ne(n.$slots,"default"),t("div",Lt,[E(p(l.text)+" ",1),f[0]||(f[0]=t("div",{class:"absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-8 border-transparent border-t-black border-t-opacity-80"},null,-1))])]))}}),jt=Object.assign(Pt,{__name:"Tooltip"}),Rt={key:0,class:"flex flex-col gap-1 justify-between"},Mt={key:0,class:"grid gap-2"},Et={class:"text-sm"},Ut={key:0,class:"text-gray-400"},Bt={class:"flex gap-2"},qt=["for"],Vt=["id","checked","name","value"],zt=["title"],Ht={key:1,class:"grid gap-2"},Nt={class:"text-sm"},Dt={key:0,class:"text-gray-400"},Ft={class:"flex gap-2"},Wt=["for"],Kt=["id","checked","name","value"],Gt=["title"],Yt={key:2,class:"grid gap-2"},Qt={class:"text-sm"},Jt={key:0,class:"text-gray-400"},Xt=["id","name"],Zt={disabled:"",hidden:""},es=["value","innerHTML","selected"],ts={key:3,class:"grid gap-2"},ss={class:"text-sm"},ns={key:0,class:"text-gray-400"},os={class:"flex gap-2"},as=["for"],rs=["id","checked","name","value"],ls=["title"],is=z({__name:"AttributeSelections",props:{attributes:{},defaultAttributes:{}},emits:["attrs-changed"],setup(l,{emit:n}){const f=n,h=O([]),g=(d,c)=>{var i,o;return(i=d==null?void 0:d.terms)!=null&&i.nodes?(o=d.terms.nodes.find(_=>_.slug===c.value))==null?void 0:o.name:c.value||""},w=()=>{const d=l.attributes.map(c=>{const i=document.querySelector(`.name-${c.name.toLowerCase()}:checked`),o=document.querySelector(`#${c.name}`),_=c.name.charAt(0).toLowerCase()+c.name.slice(1),a=(i==null?void 0:i.value)??(o==null?void 0:o.value)??"";return{name:_,value:a}});h.value=d,f("attrs-changed",d)},v=()=>{var d,c;(d=l.defaultAttributes)!=null&&d.nodes&&((c=l.defaultAttributes)==null||c.nodes.forEach(i=>{var a;const o=document.querySelector(`.name-${(a=i.name)==null?void 0:a.toLowerCase()}[value="${i.value}"]`);o&&(o.checked=!0);const _=document.querySelector(`#${i.name}`);_&&(_.value=i.value||"")}))},y=d=>`name-${d.toLowerCase()}`;return De(()=>{v(),w()}),(d,c)=>{const i=jt;return d.attributes?(s(),r("div",Rt,[(s(!0),r(R,null,M(d.attributes,(o,_)=>{var a;return s(),r("div",{key:_,class:"flex flex-wrap py-2 relative justify-between"},[o.scope=="LOCAL"?(s(),r("div",Mt,[t("div",Et,[E(p(o.label)+" ",1),e(h).length&&e(h)[_]?(s(),r("span",Ut,": "+p(g(o,e(h)[_])),1)):b("",!0)]),t("div",Bt,[(s(!0),r(R,null,M(o.options,(m,u)=>(s(),r("span",{key:u},[t("label",{for:`${m}_${u}`},[t("input",{id:`${m}_${u}`,ref_for:!0,ref:o.name,class:V(["hidden",`name-${o.name.toLowerCase()}`]),checked:u==0,type:"radio",name:o.name,value:m,onChange:w},null,42,Vt),t("span",{class:V(["radio-button",`picker-${m}`]),title:`${o.name}: ${m}`},p(m),11,zt)],8,qt)]))),128))])])):o.name=="pa_color"||o.name=="color"?(s(),r("div",Ht,[t("div",Nt,[E(p(d.$t("messages.general.color"))+" ",1),e(h).length?(s(),r("span",Dt,p(g(o,e(h)[_])),1)):b("",!0)]),t("div",Ft,[(s(!0),r(R,null,M(o.terms.nodes,(m,u)=>(s(),r("span",{key:u},[$(i,{text:m.name},{default:P(()=>[t("label",{for:`${m.slug}_${u}`},[t("input",{id:`${m.slug}_${u}`,ref_for:!0,ref:o.name,class:V(["hidden",y(o.name)]),checked:u==0,type:"radio",name:o.name,value:m.slug,onChange:w},null,42,Kt),t("span",{class:V(["color-button",`color-${m.slug}`]),title:`${o.name}: ${m}`},null,10,Gt)],8,Wt)]),_:2},1032,["text"])]))),128))])])):o.terms.nodes&&((a=o.terms.nodes)==null?void 0:a.length)>8?(s(),r("div",Yt,[t("div",Qt,[E(p(o.label)+" ",1),e(h).length?(s(),r("span",Jt,p(g(o,e(h)[_])),1)):b("",!0)]),t("select",{id:o.name,ref_for:!0,ref:o.name,name:o.name,required:"",class:"border-white shadow",onChange:w},[t("option",Zt,p(d.$t("messages.general.choose"))+" "+p(decodeURIComponent(o.label)),1),(s(!0),r(R,null,M(o.terms.nodes,(m,u)=>(s(),r("option",{key:u,value:m.slug,innerHTML:m.name,selected:u==0},null,8,es))),128))],40,Xt)])):(s(),r("div",ts,[t("div",ss,[E(p(o.label)+" ",1),e(h).length?(s(),r("span",ns,": "+p(g(o,e(h)[_])),1)):b("",!0)]),t("div",os,[(s(!0),r(R,null,M(o.terms.nodes,(m,u)=>(s(),r("span",{key:u},[t("label",{for:`${m.slug}_${u}`},[t("input",{id:`${m.slug}_${u}`,ref_for:!0,ref:o.name,class:V(["hidden",y(o.name)]),checked:u==0,type:"radio",name:o.name,value:m.slug,onChange:w},null,42,rs),t("span",{class:V(["radio-button",`picker-${m.slug}`]),title:`${o.name}: ${m.slug}`},p(m.name),11,ls)],8,as)]))),128))])]))])}),128))])):b("",!0)}}}),cs=Object.assign(is,{__name:"AttributeSelections"}),us={__name:"AddToCartButton",props:{disabled:{type:Boolean,default:!1}},setup(l){const{cart:n}=Ce(),f=O(!1),{t:h}=Ie(),g=A(()=>f.value?h("messages.shop.adding"):h("messages.shop.addToCart")),w=()=>{window.gtag&&window.gtag("event","conversion",{send_to:"AW-16839371435/DzyfCO376pYaEKvV0d0-"})};return Fe(n,v=>{f.value=!1}),(v,y)=>{const d=Oe,c=nt;return s(),C(c,{type:"submit",variant:"secondary",class:V([{disabled:l.disabled},"flex items-center space-x-4 justify-center"]),disabled:l.disabled,onClick:y[0]||(y[0]=i=>{f.value=!0,w()})},{default:P(()=>[t("span",null,p(e(g)),1),e(f)?(s(),C(d,{key:0,stroke:"4",size:"12",color:"#fff"})):b("",!0)]),_:1},8,["class","disabled"])}}},ds=X(us,[["__scopeId","data-v-00746b2e"]]),ms=z({__name:"WishlistButton",props:{product:{}},setup(l){const{addToWishlist:n,removeFromWishlist:f,isInList:h}=ot(),g=A(()=>l.product.databaseId?h(l.product.databaseId):!1),w=()=>g.value&&l.product.databaseId?f(l.product.databaseId):n(l.product);return(v,y)=>{const d=ce;return s(),r("button",{type:"button",class:"cursor-pointer flex mt-4 text-sm text-white gap-2 items-center transition hover:text-brand-gold",onClick:w},[e(g)?(s(),C(d,{key:0,name:"ion:heart",size:"18",class:"text-red-400"})):(s(),C(d,{key:1,name:"ion:heart-outline",size:"18"})),t("span",null,p(e(g)?v.$t("messages.shop.wishlistRemove"):v.$t("messages.shop.wishlistAdd")),1)])}}}),ps=Object.assign(ms,{__name:"WishlistButton"}),hs={key:1,class:"flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"},_s=["href"],gs=["href"],fs=["href"],vs=z({__name:"ShareButton",props:{product:{type:Object,required:!0}},setup(l){const n=l,f=O(!1),h=A(()=>`https://twitter.com/intent/tweet?text=${n.product.name}&url=${window.location.href}`),g=A(()=>`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`),w=A(()=>`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${n.product.image.sourceUrl}&description=${n.product.name}`),v=()=>{f.value=!0};return(y,d)=>(s(),C(te,{name:"fade",mode:"out-in"},{default:P(()=>[e(f)?(s(),r("div",hs,[t("a",{href:e(h),target:"_blank",title:"Share on Twitter"},d[1]||(d[1]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})],-1)]),8,_s),t("a",{href:e(g),target:"_blank",title:"Share on Facebook"},d[2]||(d[2]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z","fill-rule":"evenodd"})],-1)]),8,gs),t("a",{href:e(w),target:"_blank",title:"Share on Pinterest"},d[3]||(d[3]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"})],-1)]),8,fs)])):(s(),r("button",{key:0,type:"button",class:"flex items-center gap-2 mt-4 text-sm text-white cursor-pointer transition hover:text-brand-gold",onClick:v},[d[0]||(d[0]=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"},[t("circle",{cx:"128",cy:"256",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"384",cy:"112",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"384",cy:"400",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"})],-1)),t("span",null,p(y.$t("messages.general.share")),1)]))]),_:1}))}}),bs=Object.assign(vs,{__name:"ShareButton"}),ws={key:0,class:"font-semibold text-2xl text-gray-900"},ys={key:1,class:"font-semibold text-2xl text-gray-900"},xs={key:2,class:"my-2"},$s={class:"text-sm"},ks={class:"my-4 bars"},Ss={class:"flex text-sm gap-1 items-center"},Ts={class:"flex-1 relative"},Cs={class:"w-full text-gray-500"},Is={class:"p-5 mt-3 grid gap-2 border rounded-lg"},Os={class:"block text-center mb-1.5"},As={class:"text-center text-sm block relative m-auto"},Ls={class:"gap-1 flex justify-center mt-2 relative"},Ps=["onMouseover"],js=["value"],Rs={class:"w-full col-span-full"},Ms={for:"content",class:"text-sm mb-0.5"},Es={class:"w-full col-span-full"},Us={for:"author",class:"text-sm mb-0.5"},Bs=["innerHTML"],qs=["innerHTML"],Vs={class:"w-full col-span-full text-center mt-3"},zs={class:"flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400",type:"submit"},Hs={__name:"ReviewsScore",props:{reviews:{type:Object,default:null},productId:{type:Number,default:null},size:{type:Number,default:21}},setup(l){const n=l,f=A(()=>{const m=[0,0,0,0,0];n.reviews.edges.forEach(x=>{m[x.rating-1]+=1});const u=m.reduce((x,k)=>x+k,0);return m.map((x,k)=>{const j=x/u*100;return{count:x,percentage:j,rating:k+1}}).reverse()}),h=O(!1),g=O(0),w=O(null),v=O(null),y=O(null),d=O(""),c=O(""),i=O(!1);function o(m){g.value=m}function _(){g.value=0}async function a(){var u;const m={commentOn:n.productId,author:y.value.split("@")[0],content:v.value,rating:w.value,authorEmail:y.value};try{i.value=!0,await Ke(m),c.value="Your review is awaiting approval",setTimeout(()=>{c.value="",h.value=!1},4e3)}catch(x){d.value=(u=x==null?void 0:x.gqlErrors)==null?void 0:u[0].message,setTimeout(()=>{d.value=""},5e3)}finally{i.value=!1}}return(m,u)=>{const x=ue,k=ce,j=Oe;return s(),r("div",null,[l.reviews.edges.length?(s(),r("h4",ws,p(m.$t("messages.shop.customerReviews")),1)):(s(),r("h4",ys,p(m.$t("messages.shop.noReviews")),1)),l.reviews.edges.length?(s(),r("div",xs,[$(x,{rating:l.reviews.averageRating,"hide-count":!0,class:"text-sm mr-2"},null,8,["rating"]),t("span",$s,p(m.$t("messages.general.basedOn"))+" "+p(l.reviews.edges.length)+" "+p(m.$t("messages.shop.reviews")),1)])):b("",!0),t("div",ks,[(s(!0),r(R,null,M(e(f),I=>(s(),r("div",{key:I,class:"flex gap-4 items-center"},[t("div",Ss,[E(p(I.rating)+" ",1),$(k,{class:"text-yellow-400",name:"ion:star"})]),t("div",Ts,[u[4]||(u[4]=t("div",{class:"rounded-full bg-gray-200 h-2.5 w-full"},null,-1)),t("div",{class:"rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute",style:Te({width:I.percentage+"%"})},null,4)])]))),128))]),u[8]||(u[8]=t("div",{class:"mt-10 text-xl mb-2 text-gray-900"},"Share your thoughts",-1)),u[9]||(u[9]=t("div",{class:"text-sm mb-4"}," If you have used this product, we would love to hear about your experience. ",-1)),t("button",{onClick:u[0]||(u[0]=I=>h.value=!e(h)),class:"border rounded-lg text-center w-full p-2"},p(e(h)?m.$t("messages.shop.close"):m.$t("messages.shop.writeReview")),1),$(te,{class:"ease-in-out transform transition-all",name:"scale-y"},{default:P(()=>[e(h)?(s(),r("form",{key:0,onSubmit:oe(a,["prevent"]),class:"writeReview"},[t("div",Cs,[t("div",Is,[t("div",Os,[t("label",As,[E(p(m.$t("messages.shop.rateReview"))+" ",1),u[5]||(u[5]=t("span",{class:"text-red-500"},"*",-1))]),t("div",Ls,[(s(),r(R,null,M(5,I=>t("label",{key:I,class:V(["grid p-1 rounded",e(w)<I&&I>e(g)?"disable-star":"checked-star"]),onMouseover:U=>o(I),onMouseout:_},[se(t("input",{type:"radio",class:"overflow-hidden appearance-none opacity-0 absolute",name:"rating",value:I,"onUpdate:modelValue":u[1]||(u[1]=U=>ne(w)?w.value=U:null),required:""},null,8,js),[[We,e(w)]]),$(k,{name:"ion:star",size:l.size+""},null,8,["size"])],42,Ps)),64))])]),t("div",Rs,[t("label",Ms,[E(p(m.$t("messages.shop.rateContent"))+" ",1),u[6]||(u[6]=t("span",{class:"text-red-500"},"*",-1))]),se(t("textarea",{class:"w-full",id:"content",placeholder:"Great Quality","onUpdate:modelValue":u[2]||(u[2]=I=>ne(v)?v.value=I:null),required:""},null,512),[[le,e(v)]])]),t("div",Es,[t("label",Us,[E(p(m.$t("messages.shop.rateEmail"))+" ",1),u[7]||(u[7]=t("span",{class:"text-red-500"},"*",-1))]),se(t("input",{class:"w-full",id:"author",placeholder:"example@example.com",type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","onUpdate:modelValue":u[3]||(u[3]=I=>ne(y)?y.value=I:null),required:""},null,512),[[le,e(y)]])]),$(te,{name:"scale-y",mode:"out-in"},{default:P(()=>[e(d)?(s(),r("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:e(d)},null,8,Bs)):b("",!0)]),_:1}),$(te,{name:"scale-y",mode:"out-in"},{default:P(()=>[e(c)?(s(),r("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:e(c)},null,8,qs)):b("",!0)]),_:1}),t("div",Vs,[t("button",zs,[e(i)?(s(),C(j,{key:0,stroke:"4",size:"16",color:"#78350F"})):b("",!0),t("span",null,p(m.$t("messages.shop.submit")),1)])])])])],32)):b("",!0)]),_:1})])}}},Ns=X(Hs,[["__scopeId","data-v-14947df7"]]),Ds={class:"flex flex-wrap gap-32 items-start"},Fs={class:"flex max-w-sm gap-4 prose"},Ws={key:0,class:"divide-y flex-1"},Ks={class:"flex gap-4 items-center"},Gs=["src"],Ys={class:"grid gap-1"},Qs={class:"text-sm"},Js={class:"font-semibold"},Xs={class:"italic text-gray-400"},Zs=["innerHTML"],en={__name:"ProductReviews",props:{product:{type:Object,default:null}},setup(l){return(n,f)=>{var w;const h=Ns,g=ue;return s(),r("div",Ds,[t("div",Fs,[l.product.reviews?(s(),C(h,{key:0,reviews:l.product.reviews,productId:l.product.databaseId},null,8,["reviews","productId"])):b("",!0)]),(w=l.product.reviews)!=null&&w.edges&&l.product.reviews.edges.length?(s(),r("div",Ws,[(s(!0),r(R,null,M(l.product.reviews.edges,v=>(s(),r("div",{key:v.id,class:"my-2 py-8"},[t("div",Ks,[v.node.author.node.avatar?(s(),r("img",{key:0,src:v.node.author.node.avatar.url,class:"rounded-full h-12 w-12"},null,8,Gs)):b("",!0),t("div",Ys,[t("div",Qs,[t("span",Js,p(v.node.author.node.name),1),t("span",Xs," – "+p(new Date(v.node.date).toLocaleString(n.$t("messages.general.langCode"),{month:"long",day:"numeric",year:"numeric"})),1)]),$(g,{rating:v.rating,"hide-count":!0,class:"text-sm"},null,8,["rating"])])]),t("div",{class:"mt-4 text-gray-700 italic prose-sm",innerHTML:v.node.content},null,8,Zs)]))),128))])):b("",!0)])}}},tn={class:"border-b flex gap-8 tabs"},sn={class:"tab-contents"},nn=["innerHTML"],on=z({__name:"ProductTabs",props:{product:{type:Object,required:!0}},setup(l){const{storeSettings:n}=Ae(),f=l.product.description?0:1,h=O(f);return(g,w)=>{const v=en;return s(),r("div",null,[t("nav",tn,[l.product.description?(s(),r("button",{key:0,type:"button",class:V(e(h)===0?"active":""),onClick:w[0]||(w[0]=oe(y=>h.value=0,["prevent"]))},p(g.$t("messages.shop.productDescription")),3)):b("",!0),e(n).showReviews?(s(),r("button",{key:1,type:"button",class:V(e(h)===1?"active":""),onClick:w[1]||(w[1]=oe(y=>h.value=1,["prevent"]))},p(g.$t("messages.shop.reviews"))+" ("+p(l.product.reviewCount)+") ",3)):b("",!0)]),t("div",sn,[e(h)===0&&l.product.description?(s(),r("div",{key:0,class:"font-light mt-8 prose text-white wysiwyg whitespace-pre-wrap",innerHTML:l.product.description},null,8,nn)):b("",!0),e(h)===1?(s(),C(v,{key:1,product:l.product},null,8,["product"])):b("",!0)])])}}}),an=Object.assign(X(on,[["__scopeId","data-v-e4ba81a4"]]),{__name:"ProductTabs"}),rn={class:"bg-brand-dark1"},ln={class:"max-w-[1000px] m-auto relative py-6 px-4 lg:px-0"},cn={key:0},un={class:"flex flex-col gap-10 md:flex-row md:justify-between lg:gap-10"},dn={class:"w-full md:w-1/2"},mn={class:"lg:max-w-md xl:max-w-lg md:py-2 w-full"},pn={class:"flex justify-between mb-4 items-start"},hn={class:"flex-1"},_n={class:"flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold text-white"},gn={key:0,class:"flex items-center text-white space-x-2 mb-4"},fn={class:"text-brand-gold text-2xl"},vn={class:"line-through text-gray-400 text-xl"},bn={key:1,class:"flex items-center text-white space-x-2 mb-4"},wn={class:"text-brand-gold text-2xl"},yn={class:"grid gap-2 my-8 text-sm empty:hidden"},xn={key:0,class:"flex items-center gap-2"},$n={class:"text-neutral-300"},kn={key:1,class:"flex items-center gap-2"},Sn={class:"text-neutral-300"},Tn=["innerHTML"],Cn={key:1,class:"fixed bottom-0 left-0 flex items-center w-full gap-4 p-4 mt-12 bg-brand-dark1 md:static md:bg-transparent bg-opacity-90 md:p-0 z-40"},In=["href"],On={key:0},An={class:"grid gap-2 my-8 text-sm"},Ln={class:"flex items-center gap-2"},Pn={class:"text-gray-400"},jn={class:"product-categories"},Rn={class:"flex flex-wrap gap-4"},Mn={key:1,class:"my-32"},En={key:2,class:"my-32"},Un={class:"mb-4 text-xl font-semibold text-brand-gold"},Bn=z({__name:"[slug]",async setup(l){var J,de,me,pe,he,_e,ge,fe;let n,f;const h=xe(),{storeSettings:g}=Ae(),{arraysEqual:w,formatArray:v,checkForVariationTypeOfAny:y}=ie(),{addToCart:d,isUpdatingCart:c}=Ce(),{t:i}=Ie(),o=h.params.slug,{data:_}=([n,f]=Ge(()=>Xe("getProduct",{slug:o})),n=await n,f(),n);if(!((J=_.value)!=null&&J.product))throw Ye({statusCode:404,statusMessage:i("messages.shop.productNotFound")});const a=O((de=_==null?void 0:_.value)==null?void 0:de.product),m=O(1),u=O(null),x=O([]),k=A(()=>y(a.value)),j=O(),I=A(()=>{var S;return((S=a.value)==null?void 0:S.type)===re.SIMPLE}),U=A(()=>{var S;return((S=a.value)==null?void 0:S.type)===re.VARIABLE}),B=A(()=>{var S;return((S=a.value)==null?void 0:S.type)===re.EXTERNAL}),q=A(()=>u.value||a.value),Y=A(()=>{var S;return{productId:(S=q.value)==null?void 0:S.databaseId,quantity:m.value}}),L=S=>{var T,H,D;a.value.stockStatus=S.stockStatus??((T=a.value)==null?void 0:T.stockStatus),(D=(H=S.variations)==null?void 0:H.nodes)==null||D.forEach((K,N)=>{var G,ee;(ee=(G=a.value)==null?void 0:G.variations)!=null&&ee.nodes[N]&&(a.value.variations.nodes[N].stockStatus=K.stockStatus)})};Qe({title:(me=a.value)==null?void 0:me.name,ogTitle:(pe=a.value)==null?void 0:pe.name,description:((he=a.value)==null?void 0:he.description)||((_e=a.value)==null?void 0:_e.shortDescription),ogDescription:((ge=a.value)==null?void 0:ge.description)||((fe=a.value)==null?void 0:fe.shortDescription)}),Se(async()=>{var S;try{const{product:T}=await Je({slug:o});T&&L(T)}catch(T){const H=(S=T==null?void 0:T.gqlErrors)==null?void 0:S[0].message;H&&console.error(H)}window.scrollTo(0,0)});const ae=S=>{var D,K;if(!a.value.variations)return;j.value=S.map(N=>({attributeName:N.name,attributeValue:N.value}));const T=JSON.parse(JSON.stringify(S)),H=(D=a.value.variations)==null?void 0:D.nodes.filter(N=>{if(N.attributes)return k.value.forEach(G=>T[G].value=""),w(v(N.attributes.nodes),v(T))});H[0]&&(u.value=H[0]),Y.value.variationId=((K=u.value)==null?void 0:K.databaseId)??null,Y.value.variation=u.value?j.value:null,x.value=S},Q=A(()=>{var S,T;return U.value?((S=u.value)==null?void 0:S.stockStatus)||W.OUT_OF_STOCK:((T=q.value)==null?void 0:T.stockStatus)||W.OUT_OF_STOCK}),Z=A(()=>I.value?!q.value||Q.value===W.OUT_OF_STOCK||c.value:!q.value||Q.value===W.OUT_OF_STOCK||!u.value||c.value);return(S,T)=>{var ve;const H=it,D=ht,K=wt,N=ue,G=Ot,ee=cs,Le=ds,Pe=ke,je=ps,Re=bs,Me=an,Ee=at;return s(),r("div",rn,[t("div",ln,[e(a)?(s(),r("div",cn,[$(H,{info:e(a)},null,8,["info"]),e(g).showBreadcrumbOnSingleProduct?(s(),C(D,{key:0,product:e(a),class:"mb-6"},null,8,["product"])):b("",!0),t("div",un,[t("div",dn,[$(K,{"main-image":e(a).image,gallery:e(a).galleryImages,node:e(q)},null,8,["main-image","gallery","node"])]),t("div",mn,[t("div",pn,[t("div",hn,[t("h1",_n,p(e(q).name),1),e(q).salePrice?(s(),r("div",gn,[t("p",fn,p(e(q).salePrice),1),t("p",vn,p(e(q).regularPrice),1)])):(s(),r("div",bn,[t("p",wn,p(e(q).regularPrice),1)])),e(g).showReviews?(s(),C(N,{key:2,rating:e(a).averageRating||0,count:e(a).reviewCount||0},null,8,["rating","count"])):b("",!0)])]),t("div",yn,[e(B)?b("",!0):(s(),r("div",xn,[t("span",$n,p(S.$t("messages.shop.availability"))+": ",1),$(G,{stockStatus:e(Q),onUpdated:L},null,8,["stockStatus"])])),e(g).showSKU&&e(a).sku?(s(),r("div",kn,[t("span",Sn,p(S.$t("messages.shop.sku"))+": ",1),t("span",null,p(e(a).sku||"N/A"),1)])):b("",!0)]),t("div",{class:"mb-8 font-light prose text-white wysiwyg whitespace-pre-wrap",innerHTML:e(a).shortDescription||e(a).description},null,8,Tn),T[4]||(T[4]=t("hr",null,null,-1)),t("form",{onSubmit:T[1]||(T[1]=oe(F=>e(d)(e(Y)),["prevent"]))},[e(U)&&e(a).attributes&&e(a).variations?(s(),C(ee,{key:0,class:"mt-4 mb-8",attributes:e(a).attributes.nodes,defaultAttributes:e(a).defaultAttributes,variations:e(a).variations.nodes,onAttrsChanged:ae},null,8,["attributes","defaultAttributes","variations"])):b("",!0),e(U)||e(I)?(s(),r("div",Cn,[e(a).productCategories.nodes[0].slug!=="sports-cards"?se((s(),r("input",{key:0,"onUpdate:modelValue":T[0]||(T[0]=F=>ne(m)?m.value=F:null),type:"number",min:"1","aria-label":"Quantity",class:"bg-transparent border rounded-lg flex text-left text-white p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"},null,512)),[[le,e(m)]]):b("",!0),$(Le,{class:V(["flex-1 w-full md:max-w-xs",{loading:e(c)}]),disabled:e(Z)},null,8,["disabled","class"])])):b("",!0),e(B)&&e(a).externalUrl?(s(),r("a",{key:2,href:e(a).externalUrl,target:"_blank",class:"rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none"},p(((ve=e(a))==null?void 0:ve.buttonText)||"View product"),9,In)):b("",!0)],32),e(g).showProductCategoriesOnSingleProduct&&e(a).productCategories?(s(),r("div",On,[t("div",An,[t("div",Ln,[t("span",Pn,p(S.$t("messages.shop.category",2))+":",1),t("div",jn,[(s(!0),r(R,null,M(e(a).productCategories.nodes,F=>(s(),C(Pe,{key:F.slug,to:`/product-category/${decodeURIComponent(F.slug)}`,class:"hover:text-brand-gold text-white",title:F.name},{default:P(()=>[E(p(F.name),1),T[2]||(T[2]=t("span",{class:"comma"},", ",-1))]),_:2},1032,["to","title"]))),128))])])]),T[3]||(T[3]=t("hr",null,null,-1))])):b("",!0),t("div",Rn,[$(je,{product:e(a)},null,8,["product"]),$(Re,{product:e(a)},null,8,["product"])])])]),e(a).description||e(a).reviews?(s(),r("div",Mn,[$(Me,{product:e(a)},null,8,["product"])])):b("",!0),e(a).related&&e(g).showRelatedProducts?(s(),r("div",En,[t("div",Un,p(S.$t("messages.shop.youMayLike")),1),$(Ee,{products:e(a).related.nodes,class:"grid-cols-2 md:grid-cols-4 lg:grid-cols-4"},null,8,["products"])])):b("",!0)])):b("",!0)])])}}}),Qn=X(Bn,[["__scopeId","data-v-3fae04da"]]);export{Qn as default};
