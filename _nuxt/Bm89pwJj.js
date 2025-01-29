import{d as N,W as R,a6 as U,D as v,b as C,o as $,c as V,t as I,i as M,S as D,X as z,E as q,a1 as A,h as E,w as F,e as l,a as S,v as T,g as W}from"./DCAQRH-d.js";import{_ as H}from"./DbvrHJ0G.js";const L={key:0,class:"red-badge"},Q=N({__name:"SaleBadge",props:{node:{type:Object,required:!0}},setup(e){const{t:c}=R(),{storeSettings:n}=U(),P=v(()=>{var m,p,h,t;if(!((m=e.node)!=null&&m.rawSalePrice)||!((p=e.node)!=null&&p.rawRegularPrice))return"";const g=parseFloat((h=e.node)==null?void 0:h.rawSalePrice),i=parseFloat((t=e.node)==null?void 0:t.rawRegularPrice);return Math.round((g-i)/i*100)+" %"}),u=v(()=>e.node.rawSalePrice&&n.saleBadge!=="hidden"),d=v(()=>(n==null?void 0:n.saleBadge)==="percent"?P.value:c("messages.shop.onSale")?c("messages.shop.onSale"):"Sale");return(g,i)=>C(u)?($(),V("span",L,I(C(d)),1)):M("",!0)}}),X=Object.assign(D(Q,[["__scopeId","data-v-6ccfbd89"]]),{__name:"SaleBadge"}),G={class:"relative bg-transparent aspect-[284/488]"},J={class:"w-full h-full border-4 transition group-hover/product:scale-105 rounded-lg overflow-hidden shadow-lg"},K={class:"mb-4 border-b-2 pb-4 border-brand-gold"},Y={class:"text-white line-clamp-2 min-h-12"},B=280,Z=N({__name:"ProductCard",props:{node:{type:Object,required:!0},index:{type:Number,default:1}},setup(e){var i,m,p,h;const c=z();U();const n=e,P=Math.round(B*(488/284)),u=q((i=c.query)==null?void 0:i.filter),d=q(((h=(p=(m=u.value)==null?void 0:m.split("pa_color[")[1])==null?void 0:p.split("]")[0])==null?void 0:h.split(","))||[]);A(()=>c.query,()=>{var t,a,o;u.value=c.query.filter,d.value=((o=(a=(t=u.value)==null?void 0:t.split("pa_color[")[1])==null?void 0:a.split("]")[0])==null?void 0:o.split(","))||[]});const g=v(()=>{var t,a,o,s;return((a=(t=n.node)==null?void 0:t.image)==null?void 0:a.producCardSourceUrl)||((s=(o=n.node)==null?void 0:o.image)==null?void 0:s.sourceUrl)||"/images/placeholder.jpg"});return v(()=>{var t,a,o,s,x,b;if(d.value.length){const r=(a=(t=n.node)==null?void 0:t.variations)==null?void 0:a.nodes.filter(f=>{var j;const w=(j=f.attributes)==null?void 0:j.nodes.some(_=>d.value.some(y=>{var k;return(k=_==null?void 0:_.value)==null?void 0:k.includes(y)})),O=d.value.some(_=>{var y;return(y=f.slug)==null?void 0:y.includes(_)});return w||O});if(r!=null&&r.length)return((s=(o=r[0])==null?void 0:o.image)==null?void 0:s.producCardSourceUrl)||((b=(x=r[0])==null?void 0:x.image)==null?void 0:b.sourceUrl)||g.value}return g.value}),(t,a)=>{const o=X,s=T,x=H,b=W;return e.node.slug?($(),E(b,{key:0,to:`/product/${decodeURIComponent(e.node.slug)}`,title:e.node.name,class:"cursor-pointer space-y-6 group/product relative"},{default:F(()=>{var r,f,w;return[l("div",null,[S(o,{node:e.node,class:"absolute top-2 right-2"},null,8,["node"]),l("div",G,[l("div",J,[S(s,{alt:((r=e.node.image)==null?void 0:r.altText)||e.node.name||"Product image",title:((f=e.node.image)==null?void 0:f.title)||e.node.name,src:((w=e.node.image)==null?void 0:w.sourceUrl)||"/images/placeholder.jpg",loading:e.index<=3?"eager":"lazy",class:"w-full h-full object-cover",quality:"80",format:"webp",size:B,width:B,height:C(P),placeholder:"","placeholder-class":"blur-xl"},null,8,["alt","title","src","loading","height"])])])]),l("div",null,[l("div",K,[l("div",null,[l("p",Y,I(e.node.name),1)])]),S(x,{class:"text-sm","sale-price":e.node.salePrice,"regular-price":e.node.regularPrice},null,8,["sale-price","regular-price"]),a[0]||(a[0]=l("div",{class:"cursor-pointer px-2 py-1.5 border border-brand-gold text-white text-xs w-full lg:text-left text-center lg:w-fit hover:bg-brand-gold transition"}," View ",-1))])]}),_:1},8,["to","title"])):M("",!0)}}}),ae=Object.assign(Z,{__name:"ProductCard"});export{ae as _};
