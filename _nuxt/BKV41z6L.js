const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B3ml1aCO.js","./9ayp5iZD.js","./entry.BTpGUNVk.css"])))=>i.map(i=>d[i]);
import{d as F,o as f,h as U,w as g,c as C,r as N,b as a,e,a as s,t as p,f as j,y as se,F as V,v as q,S as J,E as A,a4 as oe,s as ee,ae,j as ne,a8 as le,a9 as re,a6 as ce,G as K,p as Q,H as ie,m as de,n as ue,T as pe,I as X,g as _e}from"./9ayp5iZD.js";import{_ as te}from"./DHVNhVWH.js";import{P as me,A as Z}from"./CCyDKThc.js";import{A as fe}from"./DGJ_4X9-.js";import{S as ge,a as he}from"./BPQjGVh7.js";import{_ as xe}from"./Ngw14UWR.js";import{_ as we}from"./Dc-duW1v.js";import{P as be}from"./BczajdXj.js";import{a as ve,_ as ye}from"./C2SwTFbo.js";import{_ as Se}from"./B41Ao1Ou.js";import"./zqv5COSY.js";import"./DYgA58Qu.js";import"./BxxOx0FS.js";const $e={class:"h-full relative"},ke={class:"overlay bg-gradient-to-t from-black w-full h-full absolute top-0 left-0 flex px-20 items-center"},Ae={class:"max-w-full md:max-w-[573px] space-y-8"},Ce={class:"artegra text-brand-gold text-[2rem] md:text-[4rem] leading-tight slider-title whitespace-pre-wrap"},Ee={class:"text-white text-xl md:text-2xl leading-snug slider-description whitespace-pre-wrap"},Pe={class:"slider-button"},Te=F({__name:"ShopSlider",props:{items:{type:Object}},setup(m){const i=[fe,me];return(_,v)=>{const E=q,y=te;return f(),U(a(he),{modules:i,"slides-per-view":1,"space-between":100,direction:"horizontal",pagination:!0,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,speed:1e3,class:"shop-swiper h-full"},{default:g(()=>{var l;return[(f(!0),C(V,null,N((l=m.items)==null?void 0:l.slider_banner,o=>(f(),U(a(ge),null,{default:g(()=>{var h;return[e("div",$e,[s(E,{class:"w-full h-full object-cover",src:(h=o==null?void 0:o.image)==null?void 0:h.url,alt:"package",loading:"eager"},null,8,["src"]),e("div",ke,[e("div",Ae,[e("h1",Ce,p(o==null?void 0:o.title),1),e("p",Ee,p(o==null?void 0:o.description),1),e("div",Pe,[s(y,{onClick:v[0]||(v[0]=x=>("navigateTo"in _?_.navigateTo:a(se))("/products")),variant:"secondary"},{default:g(()=>[j(p(o==null?void 0:o.button_text),1)]),_:2},1024)])])])])]}),_:2},1024))),256))]}),_:1})}}}),je=Object.assign(J(Te,[["__scopeId","data-v-6bc7f69b"]]),{__name:"ShopSlider"}),Ie={class:"rounded-[2rem]"},Me={class:"flex items-center w-full bg-black"},Oe={class:"w-5/12 h-[500px]"},Re={class:"w-7/12 p-6 h-full block"},Ve={class:"text-center text-white mb-6"},Be={class:"font-bold text-2xl mb-2"},De={class:"flex justify-end w-full"},Le={class:"w-full flex justify-end"},Ue={class:"text-white text-xs text-center"},Ne={class:"flex items-center justify-end"},Fe=F({__name:"SubscriptionModal",props:{id:{type:String},show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0},cstmClass:{type:String,default:"rounded-none"},item:{type:Object,default:null},cms:{type:Object,default:null}},emits:["close"],setup(m,{emit:i}){const _=ee(),v=_.public.API_BASE_URL,E=le({loader:()=>re(()=>import("./B3ml1aCO.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(r=>r.VueRecaptcha),loadingComponent:()=>"<div>Loading...</div>",delay:4e3}),y=i,l=A({"your-name":"","your-email":"","your-subject":"New Subscription"}),o=A(!1);A(null);const h=A(!1),x=A(!1),w=oe({}),S=()=>{h.value=!0},B=()=>{l.recaptcha_response=!1},D=async()=>{o.value=!0;const r=new FormData;Object.entries(l.value).forEach(([t,c])=>{r.append(t,c)}),r.append("_wpcf7","1191"),r.append("_wpcf7_version","5.8.5"),r.append("_wpcf7_locale","en_US"),r.append("_wpcf7_unit_tag","wpcf7-f1191-o1"),r.append("_wpcf7_container_post","0");try{const t=await $fetch(`${v}/wp-json/contact-form-7/v1/contact-forms/1191/feedback`,{method:"POST",body:r});t.status==="validation_failed"?t.invalid_fields.forEach(c=>{w[c.field]=c.message}):(y("update:show",!1),setTimeout(()=>{x.value=!0},500),Object.keys(l.value).forEach(c=>{l.value[c]=""}),Object.keys(w).forEach(c=>delete w[c]))}catch(t){console.error("Error submitting the form:",t),alert("Failed to submit the form. Please try again.")}finally{o.value=!1}},L=()=>{x.value=!1},z=_.public.SITE_KEY;return(r,t)=>{const c=q,P=ye,T=te,d=Se,u=ve;return f(),C(V,null,[s(d,{show:m.show,"max-width":m.maxWidth,onClose:t[3]||(t[3]=b=>r.$emit("close"))},{default:g(()=>{var b,$,I,M,O;return[e("div",Ie,[s(a(ae),{onClick:t[0]||(t[0]=()=>y("update:show",!1)),class:"w-5 h-5 text-brand-gold absolute top-4 right-4 cursor-pointer"}),e("div",Me,[e("div",Oe,[s(c,{class:"w-full h-full object-cover",src:($=(b=m.cms)==null?void 0:b.image)==null?void 0:$.url,alt:"shop banner",loading:"lazy",format:"webp"},null,8,["src"])]),e("div",Re,[e("div",Ve,[e("p",Be,p((I=m.cms)==null?void 0:I.title),1),e("p",null,p((M=m.cms)==null?void 0:M.description),1)]),e("form",{onSubmit:ne(D,["prevent"]),class:"space-y-4"},[s(P,{type:"text",modelValue:l.value["your-name"],"onUpdate:modelValue":t[1]||(t[1]=k=>l.value["your-name"]=k),error:a(w)["your-name"],name:"your-name",id:"your-name",placeholder:"Enter your name here",label:"Full Name"},null,8,["modelValue","error"]),s(P,{type:"email",modelValue:l.value["your-email"],"onUpdate:modelValue":t[2]||(t[2]=k=>l.value["your-email"]=k),error:a(w)["your-email"],name:"your-email",id:"your-email",placeholder:"Enter email address here",label:"Email Address"},null,8,["modelValue","error"]),e("div",De,[s(a(E),{sitekey:a(z),onVerify:S,onExpired:B,ref:"grecaptcha",class:"w-fit"},null,8,["sitekey"])]),e("div",Le,[s(T,{class:"w-full",disabled:!h.value},{default:g(()=>t[5]||(t[5]=[j(" SUBSCRIBE ")])),_:1},8,["disabled"])]),e("p",Ue,p((O=m.cms)==null?void 0:O.footer_text),1)],32)])])])]}),_:1},8,["show","max-width"]),s(u,{show:x.value,onClose:t[4]||(t[4]=b=>x.value=!1),title:"Subscribed!",description:"Subscription has been successfully submitted"},{button:g(()=>[e("div",Ne,[s(T,{onClick:L,"design-color":"text-white"},{default:g(()=>t[6]||(t[6]=[j(" Confirm ")])),_:1})])]),_:1},8,["show"])],64)}}}),qe=Object.assign(Fe,{__name:"SubscriptionModal"}),ze={class:"w-full h-[calc(100vh-82px)] bg-black"},He={class:"bg-brand-dark1"},We={class:"max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 pt-20 pb-10"},Ye={class:"flex items-center justify-between"},Ge={class:"text-lg artegra md:text-4xl text-brand-gold"},Ke={class:"flex items-center space-x-2 text-brand-gold"},Qe={class:"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8"},Xe={class:"bg-brand-dark1"},Ze={class:"max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"},Je={class:"w-14"},et={class:"space-y-3 w-[calc(100%-80px)]"},tt={class:"text-xl font-semibold"},st={class:"bg-brand-dark1"},ot={class:"max-w-full md:max-w-[1440px] m-auto px-4 md:px-10 py-10"},at={class:"flex items-center justify-between"},nt={class:"text-lg artegra md:text-4xl text-brand-gold"},lt={class:"flex items-center space-x-2 text-brand-gold"},rt=F({__name:"index",async setup(m){var c,P,T;let i,_;const{siteName:v,description:E,shortDescription:y,siteImage:l}=ce(),{data:o}=([i,_]=K(()=>X("getProductCategories",{first:6})),i=await i,_(),i),h=((P=(c=o.value)==null?void 0:c.productCategories)==null?void 0:P.nodes)||[],{data:x}=([i,_]=K(()=>X("getProducts",{orderby:be.POPULARITY})),i=await i,_(),i),w=((T=x.value.products)==null?void 0:T.nodes)||[],S=A(!1),B=()=>{const d=localStorage.getItem("lastModalShowTime");if(!d)return!0;const u=new Date(d).getTime();return new Date().getTime()-u>=18e5},D=()=>{localStorage.setItem("lastModalShowTime",new Date().toISOString())};Q(()=>{B()&&(S.value=!0,D())});const L=w.filter(d=>d.terms.nodes.some(u=>u.taxonomyName==="product_visibility"&&u.slug==="featured"));ie({script:[{innerHTML:`
            gtag('event', 'conversion', {'send_to': 'AW-16839371435/DzyfCO376pYaEKvV0d0-'});
            `}]});const r=ee().public.API_BASE_URL,{data:t}=de(`${r}/wp-json/wp/v2/pages`,{query:{slug:"consignment",_fields:"acf",acf_format:"standard"},transform:d=>{var u;return((u=d[0])==null?void 0:u.acf)||null}},"$iZ8ywwdQVQ");return ue({title:"Shop",ogTitle:v,description:E,ogDescription:y,ogImage:l,twitterCard:"summary_large_image"}),Q(()=>{window.scrollTo(0,0)}),(d,u)=>{var k,H,W,Y,G;const b=je,$=_e,I=xe,M=q,O=we;return f(),C("main",null,[e("section",ze,[s(b,{items:(k=a(t))==null?void 0:k.frame_1},null,8,["items"])]),e("section",He,[e("div",We,[e("div",Ye,[e("h2",Ge,p((W=(H=a(t))==null?void 0:H.frame_2)==null?void 0:W.header),1),e("div",Ke,[s($,{to:"/categories"},{default:g(()=>[j(p(d.$t("messages.general.viewAll")),1)]),_:1}),s(a(Z),{class:"w-5 h-5"})])]),e("div",Qe,[(f(!0),C(V,null,N(a(h),(n,R)=>(f(),U(I,{key:R,class:"w-full",node:n},null,8,["node"]))),128))])])]),e("section",Xe,[e("div",Ze,[(f(!0),C(V,null,N((G=(Y=a(t))==null?void 0:Y.frame_2)==null?void 0:G.items,n=>{var R;return f(),C("div",{key:n.title,class:"flex items-center space-x-6 px-6 py-8 bg-[#535353] text-brand-gold rounded-lg"},[e("div",Je,[s(M,{src:(R=n==null?void 0:n.icon)==null?void 0:R.url,alt:"icon",width:"56",height:"56",loading:"eager",format:"webp",quality:"90"},null,8,["src"])]),e("div",et,[e("h2",tt,p(n==null?void 0:n.title),1),e("p",null,p(n==null?void 0:n.description),1)])])}),128))])]),e("section",st,[e("div",ot,[e("div",at,[e("h2",nt,p(d.$t("messages.shop.popularProducts")),1),e("div",lt,[s($,{to:"/products"},{default:g(()=>[j(p(d.$t("messages.general.viewAll")),1)]),_:1}),s(a(Z),{class:"w-5 h-5"})])]),s(O,{products:a(L),class:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8"},null,8,["products"])])]),s(qe,{show:a(S),"onUpdate:show":u[0]||(u[0]=n=>pe(S)?S.value=n:null),cms:a(t).subscription_modal},null,8,["show","cms"])])}}}),vt=J(rt,[["__scopeId","data-v-7b856764"]]);export{vt as default};
