import{_ as O}from"./kTRkUURj.js";import{a7 as S,d as D,W as h,X as z,M as K,K as Q,E as y,a1 as W,D as f,o as l,c as m,e as a,t as n,b as s,f as d,i as c,Q as $,R,a as x,w as _,U as T,h as X,j as G,k as J,S as Y}from"./DCAQRH-d.js";import{_ as Z}from"./BJjQN9bq.js";const ee=S("/images/ht-logo.png"),se={class:"max-w-lg mx-auto my-16 lg:my-24"},te={class:"flex flex-col items-center"},oe={class:"text-xl font-semibold lg:text-3xl"},re={key:0,class:"my-2 text-center"},ae={key:1,class:"my-2 text-center"},ne={key:0,for:"email"},le=["placeholder"],ie={key:1,class:"text-sm text-gray-500"},ue={key:2},me={for:"username"},de=["placeholder"],ce={for:"password"},ge=["innerHTML"],pe=["innerHTML"],fe=D({__name:"LoginAndRegister",setup(ve){const{t:r}=h(),b=z(),k=K(),{loginUser:V,isPending:U,registerUser:q,sendResetPasswordEmail:A}=Q(),p=y({email:"",password:"",username:""}),t=y("login"),v=y(""),i=y("");W(b,()=>{b.query.action==="forgotPassword"?t.value="forgotPassword":b.query.action==="register"?t.value="register":t.value="login"},{immediate:!0});const L=async o=>{const{success:e,error:g}=await V(o);switch(g){case"invalid_username":i.value=r("messages.error.invalidUsername");break;case"incorrect_password":i.value=r("messages.error.incorrectPassword");break;default:i.value=g;break}e&&(i.value="",v.value=r("messages.account.loggingIn"))},C=async o=>{if(t.value==="register"){const{success:e,error:g}=await q(o);e?(i.value="",v.value=r("messages.account.accountCreated")+" "+r("messages.account.loggingIn"),setTimeout(()=>{L(o)},2e3)):i.value=g}else t.value==="forgotPassword"?M(o):L(o)},M=async o=>{const{success:e,error:g}=await A(o.email);e?(i.value="",v.value=r("messages.account.ifRegistered")):i.value=g},w=o=>{t.value=o,o==="forgotPassword"?k.push({query:{action:"forgotPassword"}}):o==="register"?k.push({query:{action:"register"}}):k.push({query:{}})},j=f(()=>{if(t.value==="login")return r("messages.account.loginToAccount");if(t.value==="register")return r("messages.account.accountRegister");if(t.value==="forgotPassword")return r("messages.account.forgotPassword")}),B=f(()=>{if(t.value==="login")return r("messages.account.login");if(t.value==="register")return r("messages.account.register");if(t.value==="forgotPassword")return r("messages.account.sendPasswordResetEmail")}),E=f(()=>t.value==="register"?r("messages.billing.email"):r("messages.account.emailOrUsername")),N=f(()=>t.value==="login"?r("messages.account.emailOrUsername"):r("messages.account.username")),F=f(()=>r("messages.account.password")),P=f(()=>({email:"johndoe@email.com",username:t.value==="login"?"johndoe@email.com":"johndoe",password:"********"}));return(o,e)=>{const g=O,H=J,I=Z;return l(),m("div",se,[a("div",te,[e[10]||(e[10]=a("img",{src:ee,alt:"Logo",class:"object-contain h-20 mb-4"},null,-1)),a("h1",oe,n(s(j)),1),s(t)==="login"?(l(),m("div",re,[d(n(o.$t("messages.account.noAccount"))+" ",1),a("a",{class:"font-semibold cursor-pointer text-brand-gold",onClick:e[0]||(e[0]=u=>w("register"))},n(o.$t("messages.account.accountRegister")),1),e[8]||(e[8]=d(". "))])):c("",!0),s(t)==="register"?(l(),m("div",ae,[d(n(o.$t("messages.account.hasAccount"))+" ",1),a("a",{class:"font-semibold cursor-pointer text-brand-gold",onClick:e[1]||(e[1]=u=>w("login"))},n(o.$t("messages.general.please"))+" "+n(o.$t("messages.account.accountLogin")),1),e[9]||(e[9]=d(" . "))])):c("",!0)]),a("form",{class:"mt-6",onSubmit:e[5]||(e[5]=G(u=>C(s(p)),["prevent"]))},[s(t)==="register"||s(t)==="forgotPassword"?(l(),m("label",ne,[d(n(s(E))+" ",1),e[11]||(e[11]=a("span",{class:"text-red-500"},"*",-1)),e[12]||(e[12]=d()),e[13]||(e[13]=a("br",null,null,-1)),$(a("input",{id:"email","onUpdate:modelValue":e[2]||(e[2]=u=>s(p).email=u),placeholder:s(P).email,autocomplete:"email",type:"text",required:""},null,8,le),[[R,s(p).email]])])):c("",!0),s(t)==="forgotPassword"?(l(),m("p",ie,n(o.$t("messages.account.enterEmailOrUsernameForReset")),1)):c("",!0),s(t)!=="forgotPassword"?(l(),m("div",ue,[a("label",me,[d(n(s(N))+" ",1),e[14]||(e[14]=a("span",{class:"text-red-500"},"*",-1)),e[15]||(e[15]=d()),e[16]||(e[16]=a("br",null,null,-1)),$(a("input",{id:"username","onUpdate:modelValue":e[3]||(e[3]=u=>s(p).username=u),placeholder:s(P).username,autocomplete:"username",type:"text",required:""},null,8,de),[[R,s(p).username]])]),a("label",ce,[d(n(s(F))+" ",1),e[17]||(e[17]=a("span",{class:"text-red-500"},"*",-1)),e[18]||(e[18]=d()),e[19]||(e[19]=a("br",null,null,-1)),x(g,{id:"password",className:"border rounded-lg w-full p-3 px-4 bg-white",modelValue:s(p).password,"onUpdate:modelValue":e[4]||(e[4]=u=>s(p).password=u),placeholder:s(P).password,autocomplete:s(t)==="login"?"current-password":"new-password",required:!0},null,8,["modelValue","placeholder","autocomplete"])])])):c("",!0),x(T,{name:"scale-y",mode:"out-in"},{default:_(()=>[s(v)?(l(),m("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:s(v)},null,8,ge)):c("",!0)]),_:1}),x(T,{name:"scale-y",mode:"out-in"},{default:_(()=>[s(i)?(l(),m("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:s(i)},null,8,pe)):c("",!0)]),_:1}),x(I,{class:"flex items-center justify-center gap-4 mt-4 text-lg"},{default:_(()=>[s(U)?(l(),X(H,{key:0,stroke:"4",size:"16",color:"#fff"})):c("",!0),a("span",null,n(s(B)),1)]),_:1})],32),s(t)==="login"?(l(),m("div",{key:0,class:"my-8 text-center cursor-pointer hover:text-brand-gold",onClick:e[6]||(e[6]=u=>w("forgotPassword"))},n(o.$t("messages.account.forgotPassword")),1)):c("",!0),s(t)==="forgotPassword"?(l(),m("div",{key:1,class:"my-8 text-center cursor-pointer",onClick:e[7]||(e[7]=u=>w("login"))},n(o.$t("messages.account.backToLogin")),1)):c("",!0)])}}}),ke=Object.assign(Y(fe,[["__scopeId","data-v-e25d9f10"]]),{__name:"LoginAndRegister"});export{ke as default};
