"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56251],{283698:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},780678:(e,t,n)=>{n.d(t,{Z:()=>a,v:()=>i});let i=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function a(){if(!i())return[];try{let e=await navigator.getInstalledRelatedApps();return e}catch(e){return[]}}},413764:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(785893);let a=({size:e})=>(0,i.jsxs)("svg",{height:e,style:{display:"block"},viewBox:"-3 -3 82 82",width:e,children:[(0,i.jsx)("circle",{cx:"38",cy:"38",fill:"white",r:"40"}),(0,i.jsx)("path",{d:"M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",fill:"#fb7072",fillRule:"evenodd"})]})},430322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i=n(667294),a=n(883119),r=n(283698),l=n(968121),o=n(898781),s=n(124580),p=n(780280),d=n(223815),c=n(867820),u=n(50286),m=n(965900),_=n(785893);let w=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}},v=()=>{if(document.body){let{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}};function y({accessibilityModalLabel:e,align:t="center",allowClickAndDrag:n,allowScroll:y=!1,children:g,closeOnOutsideClick:h=!0,footer:f,heading:x,isOpen:b,mobileAccessibilityCloseIconLabel:I,mobileHideCloseIcon:P,mobileIsFooter:T,mobileIsFullscreen:k,mobileIsSlideUp:j,onDismiss:D,subHeading:S,type:A,zIndex:Z}){let C=(0,o.ZP)(),{isRTL:L}=(0,p.B)(),E=(0,i.useRef)(!1),[M,z]=(0,i.useState)(!1),{setAppFocusState:R}=(0,m.I)(),O=(0,u.ZP)();return((0,i.useEffect)(()=>(E.current=(0,r.Z)(()=>{E.current&&z(!0)}),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&E.current&&(window.cancelAnimationFrame(E.current),E.current=null)}),[]),(0,i.useEffect)(()=>(b?(s.Z.pause(),R(!1),(0,c.My)(`mweb_unauth.mobile_modal.${A||"unknown_type"}.did_mount.is_open.true`)):(s.Z.resume(),R(!0)),()=>{b&&(s.Z.resume(),R(!0),(0,c.My)(`mweb_unauth.mobile_modal.${A||"unknown_type"}.did_mount.is_open.false`))}),[R,b]),(0,i.useEffect)(()=>{let e=b&&!y;return e&&w(),()=>{e&&v()}},[b,y]),b)?(0,_.jsx)(d.Z,{allowClickAndDrag:n,children:(0,_.jsx)(a.mh,{children:(0,_.jsxs)(a.xu,{"aria-label":e,display:"inlineBlock",position:"relative",role:"dialog",zIndex:Z||l.ZM,children:[(0,_.jsx)(a.iP,{accessibilityLabel:C.bt("Máscara do modal de inscrição em dispositivo móvel", "Mobile Signup Modal Mask", "mweb.signup_modal.mask", undefined, true),onTap:({event:e})=>{e.clientX&&e.clientY&&(0,c.tj)(`mweb_unauth.mobile_modal.wash_tap.${A||"unknown_type"}.with_dismissal`,{x:e.clientX,y:e.clientY}),h&&D()},tapStyle:"none",children:(0,_.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, .5)",touchAction:"none",transitionProperty:"opacity",transitionTimingFunction:"ease-out"}},height:"100%",left:!0,position:"fixed",top:!0,width:"100%",zIndex:new a.Ry(1)})}),(0,_.jsxs)(a.xu,{color:"default",dangerouslySetInlineStyle:j?(0,l.Vf)({isFullscreen:k,isTablet:"tablet"===O,isShowing:M,isRelatedInterestsModal:"related_interests_modal"===A}):(0,l.JN)({variant:k?"fullscreen":"tablet"===O?"tablet":T?"footer":"signup"===A?"signup":void 0}),"data-test-id":"mobile-signup-mask",position:"fixed",children:[(0,_.jsxs)(a.kC,{alignItems:"center",gap:{row:2,column:0},justifyContent:"start",width:"100%",children:[I&&!P?(0,_.jsx)(a.xu,{"data-test-id":"mobile-modal-cancel-button",padding:2,children:(0,_.jsx)(a.hU,{accessibilityLabel:I,icon:"cancel",iconColor:"darkGray",onClick:D,padding:4,size:"sm"})}):null,x?(0,_.jsx)(a.kC.Item,{flex:"grow",children:(0,_.jsx)(a.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:(0,_.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:I&&!P?{marginRight:L?-10:50,marginLeft:L?50:-10}:{}},"data-test-id":"mobile-modal-heading",children:[k?x:(0,_.jsx)(a.xv,{align:t,size:"400",weight:"bold",children:x}),S?(0,_.jsx)(a.xv,{align:t,children:S}):null]})})}):null]}),(0,_.jsxs)(a.xu,{overflow:"auto",children:[g,f]})]})]})})}):null}},499128:(e,t,n)=>{n.d(t,{UZ:()=>p,Vg:()=>s,ZP:()=>d});var i=n(667294),a=n(883119),r=n(50286),l=n(829407),o=n(785893);let s=200,p=({deviceType:e,hiding:t,visible:n})=>{let i="desktop"===e,a=0,r=i?"translateY(200px)":"translateY(-200px)",l="opacity 0.1s ease-in-out",o="hidden";return n&&!t&&(a=1,r="translateY(0)",l="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",o="visible"),n&&t&&(r="scale(1.1)",l="opacity transform 0.2s"),{opacity:a,pointerEvents:"auto",position:"relative",marginTop:i?10:0,transform:r,transition:l,visibility:o}};function d({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:n,primaryAction:d,dismissButton:c,helperLink:u,thumbnail:m,type:_,dataTestId:w,duration:v=2e3,onHide:y,href:g,onClick:h,openNewPage:f,imageUrl:x}){let b;let I=(0,r.ZP)(),[P,T]=(0,i.useState)(!1),[k,j]=(0,i.useState)(!1),D=(0,i.useRef)(),S=()=>{T(!0),D.current=setTimeout(y,s)},A=()=>{D.current=setTimeout(S,v)},Z=()=>{D.current&&clearTimeout(D.current)};(0,l.Z)(()=>(setTimeout(()=>j(!0),100),A(),Z)),x&&(b={image:(0,o.jsx)(a.Ee,{alt:"string"==typeof n?n:`${n[0]} ${n[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:x})});let C=(0,o.jsx)(a.FN,{_dangerouslySetPrimaryAction:t,_dangerouslySetThumbnail:e,dismissButton:c,helperLink:u,primaryAction:d,text:n,thumbnail:b??m,type:_}),{marginTop:L,opacity:E,pointerEvents:M,position:z,transform:R,transition:O,visibility:U}=p({deviceType:I,hiding:P,visible:k});return(0,o.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transform:R,transition:O,visibility:U,pointerEvents:M}},"data-test-id":w??"toast",display:"flex",marginTop:L,onMouseEnter:Z,onMouseLeave:A,opacity:E,position:z,children:g?(0,o.jsx)(a.Tg,{href:g,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{g.startsWith("#")&&(e.preventDefault(),t()),h?.(e)},rounding:"pill",target:f?"blank":null,children:C}):C})}},356997:(e,t,n)=>{n.d(t,{qE:()=>o,u_:()=>s.ZP});var i=n(883119),a=n(785893);let r=(e,t)=>{let n=e?.includes("images/user/default");return!!(n&&t)};function l({accessibilityLabel:e,name:t,outline:n,size:l,src:o,verified:s}){return(0,a.jsx)(i.qE,{accessibilityLabel:e,name:t,outline:n,size:l,src:r(o,t)?void 0:o,verified:s})}l.displayName="Avatar";let o=l;var s=n(121151);n(499128)},444445:(e,t,n)=>{n.d(t,{$H:()=>l,$q:()=>g,D6:()=>p,KN:()=>f,Lo:()=>a,P2:()=>w,Wv:()=>h,ZZ:()=>c,g5:()=>u,jC:()=>o,lX:()=>_,nW:()=>m,oX:()=>v,qG:()=>y,tG:()=>r,yF:()=>i,yc:()=>d,yt:()=>s});let i=236,a=2*i/3,r=175,l=24,o=4,s=8,p=2,d=2,c=14,u=16,m=12,_=16,w=24,v=16,y=-1,g=(e=!1,t=!1)=>e?t?_:m:w,h=({contentVisibleItemCount:e,gap:t,width:n})=>e||n?(n-(e-1)*t)/e:i,f=(e,t,n,i,a=c)=>{let r=e+a,l=`
@media (min-width: ${t*r}px) and (max-width: ${(n+1)*r-1}px) {
  ${i}
}
`;return l}},8320:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(667294),a=n(883119),r=n(63552),l=n(785893);let o=40,s=70,p={__style:{borderRadius:"4px",padding:"10px 14px"}},d={__style:{borderWidth:"1px",borderStyle:"solid",borderColor:"white"}},c={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},u=e=>({__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...e}}),m=e=>"transparent"===e||"dark"===e?"inverse":"primary"===e?"light":"default",_=({color:e,icon:t})=>t?c:"transparent"===e?{__style:{...p.__style,...d.__style}}:p,w=({accessibilityLabel:e,color:t,customStyles:n,forwardedRef:p,icon:d,inline:c=!1,minHeight:w=o,minWidth:v=s,onTouch:y,pressState:g,shape:h,text:f})=>{let[x,b]=(0,i.useState)(!1),I=m(t),P=_({color:t,icon:d}),T=(0,l.jsx)(a.xu,{onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),position:"relative",children:(0,l.jsx)(a.xu,{color:"primary"===t&&x?"errorBase":t,dangerouslySetInlineStyle:"pill"===h?u(n):P,display:c?"inlineBlock":"flex",justifyContent:"center",minHeight:w,minWidth:v,children:(0,l.jsxs)(a.kC,{alignItems:"center",justifyContent:"center",children:[d&&(0,l.jsx)(a.xu,{paddingX:"check"===d?2:0,children:(0,l.jsx)(a.JO,{accessibilityLabel:e,color:I,icon:d,inline:!0,size:"check"===d?16:20})}),(0,l.jsx)(a.xv,{color:I,inline:!0,lineClamp:1,size:"300",weight:"bold",children:f})]})})});return y?(0,l.jsx)(r.Z,{onTouch:y,pressState:g||"none",rounding:"pill"===h?"pill":2,children:(0,l.jsx)(a.xu,{ref:p,children:T})}):T}},57791:(e,t,n)=>{n.d(t,{MZ:()=>L,di:()=>M,Ai:()=>E});var i=n(667294),a=n(616550),r=n(883119),l=n(780678),o=n(112690),s=n(926275),p=n(53987),d=n(773285),c=n(383690),u=n(30287),m=n(780280),_=n(844974),w=n(339363),v=n(867820),y=n(19121),g=n(598615),h=n(296679),f=n(938917),x=n(8320),b=n(250059),I=n(48714),P=n(149230),T=n(43760);let k=({children:e,external:t,externalQueryParams:n,target:i,href:r,features:l})=>{let o=(0,a.k6)();if(!r)return null;let s=(0,b.Z)(r);return e({navigate:e=>{e.preventDefault(),(0,P.Z)({url:s})||t?"undefined"!=typeof window&&window.Windows?(0,T.Z)(s):(0,I.Gj)(s,{queryParams:n,features:l}):(0,I.G3)({event:e,href:r,history:o,target:"blank"===i?"blank":null})}})};var j=n(785893),D=n(329900),S=n(948376),A=n(698330);let Z=e=>"string"==typeof e?e:`${e.pathname||""}${e.search?`?${e.search}`:""}`,C=(e,t=!1)=>function({isAppUpsellDisabled:n,...x}){let{children:b,clientTrackingParams:I,deeplinkUri:P,external:T,onTouch:k,refresh:C,to:L,viewParameter:E,viewType:M}=x,z=(0,f.Z)(),[R,O]=(0,i.useState)(!1),[U,W]=(0,i.useState)(!1),[H,B]=(0,i.useState)(!1),{isAuth:N}=(0,y.Z)(),{userAgent:{platform:F},locale:$}=(0,m.B)(),q=(0,A.Tt)(),G=(0,o.Z)(),{checkExperiment:Y}=(0,d.F)(),X=(0,a.TH)(),J=(0,c.Z)();(0,i.useEffect)(()=>{(async function(){if((0,l.v)()){B(!0);let e=await (0,l.Z)();e.length>0&&W(!0)}})()},[]),(0,i.useEffect)(()=>{N||"true"===(0,w.qn)("hasAppInstalledWasLogged")||((0,v.My)(`unauth.app_upsell.has_app.${U.toString()}`),(0,w.Nh)("hasAppInstalledWasLogged","true"))},[U,N]);let V=()=>{G({event_type:1701,view_type:M,view_parameter:E}),R&&O(!1)};return(0,j.jsxs)(r.xu,{"data-test-id":"deeplink-wrapper",children:[R&&(0,j.jsx)(h.Z,{app_upsell_type:"deep-link-app-upsell-modal",clientTrackingParams:I,deepLinkUri:P,isOpen:!0,onDismiss:()=>{G({component:14157,element:10308,event_type:10220,view_type:M||202,view_parameter:E,aux_data:{app_upsell_type:"deep-link-app-upsell-modal"}})},onOpenInApp:()=>{(0,_.Nh)("deeplinkBehavior","branchfallback"),V()},shouldTrackDismiss:!0,to:L,viewParameter:E,viewType:M}),(0,j.jsx)(D.Z,{children:i=>(0,j.jsx)(e,{...x,onTouch:e=>{let a=z&&!n&&N&&!T&&!C&&!(0,u.FP)(window)&&!("ios"===F&&($||"").startsWith("ar"))&&(0,S.kp)((0,s.Z)(q?.created_at));if(a){let t=!0,n=!1,a="string"==typeof P&&(P||"").startsWith("/pin/")&&((0,p.uM)(X)||(0,p.am)(X)||(0,p.C$)(X));a?H&&U&&P&&"android"===F&&Y("mweb_auth_deep_link_app_installed_user").anyEnabled&&(J(),t=!1):(t=!1,n=!0),t?(e.stopPropagation(),e.preventDefault(),O(!0)):n||(e.stopPropagation(),e.preventDefault(),G({component:14347,element:13582,event_type:3830,view_type:20,view_parameter:3844,aux_data:{upsell_reason:"deep-link-app-upsell-modal"}}),i(P??(0,g.B)(X,"android"===F),"deep-link-app-upsell-modal"))}else"branchfallback"!==(0,_.qn)("deeplinkBehavior")||(0,w.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,w.Nh)("fallbackAttempt",1),i(P,"deep-link-app-upsell-modal",`${window.location.origin}${Z(L)}`),V());!(t&&a)&&k&&k(e)},children:b})})]})},L=C(({accessibilityLabel:e,children:t,external:n,externalQueryParams:i,features:a,inline:l=!1,newTab:o,nofollow:s,onTouch:p,onBlur:d,onFocus:c,pressState:u,rounding:m,to:_})=>(0,j.jsx)(k,{external:n,externalQueryParams:i,features:a,href:_,target:o?"blank":null,children:({navigate:n})=>(0,j.jsx)(r.rU,{accessibilityLabel:e,display:l?"inlineBlock":"block",href:(0,b.Z)(_),onBlur:d?({event:e})=>d(e):void 0,onClick:({event:e,dangerouslyDisableOnNavigation:t})=>{t(),p?.(e),e.defaultPrevented||n(e)},onFocus:c?({event:e})=>c(e):void 0,rel:s?"nofollow":"none",rounding:m,tapStyle:(Array.isArray(u)?u:[u]).includes("compress")?"compress":"none",underline:"none",children:t})})),E=C(({external:e,externalQueryParams:t,newTab:n,onTouch:i,to:a,...r})=>(0,j.jsx)(k,{external:e,externalQueryParams:t,href:a,target:n?"blank":null,children:({navigate:e})=>(0,j.jsx)(x.Z,{onTouch:t=>{i?.(t),t.defaultPrevented||e(t)},...r})})),M=C(x.Z,!0)},329900:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(407043),a=n(773285),r=n(780280),l=n(619277),o=n(948376),s=n(780678),p=n(826067),d=n(67347);let c="http://play.google.com/store/apps/details?id=com.pinterest",u=["access_token","new_password","new_password_confirm","password","next"],m=(e,t)=>t?(0,p.ru)(e,{invite_code:t}):e,_=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?m(e,n):"ios"===t||"ipad"===t?m(e.iOS,n):"android"===t?m(e.android,n):null},w=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:i,unauthId:a,app_upsell_type:r})=>({deeplink_path:_(e,n,t),current_page_url:(0,p.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:a,utm_source:140,utm_medium:2152,app_upsell_type:r,...i?{af_r:i}:null}),v=({deeplinkUri:e,invite_code:t,platform:n,unauthId:i,app_upsell_type:a})=>{let r=JSON.stringify({deeplink_path:_(e,n,t),current_page_url:(0,p.Gw)("undefined"!=typeof window?window.location.href:"",u),install_id:i}),l=(0,p.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:r,app_upsell_type:a});return{referrer:l}},y=({unauthId:e,app_upsell_type:t})=>{let n=(0,p.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t});return{referrer:encodeURI(n)}},g=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,logContextEvent:a,platform:r,redirectToLite:l,unauthId:o,userAgent:u,app_upsell_type:m})=>{if(a?.({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}}),t){let _=w({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:i,platform:r,unauthId:o,userAgent:u,app_upsell_type:m});if((0,d.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:r}}),i&&(0,d.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,d.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!o}}),l){(0,d.nP)("mweb.deeplink.lite_link",{sampleRate:1}),a?.({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}});let e=y({unauthId:o,app_upsell_type:m});window.location.href=(0,p.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===r){let e=v({deeplinkUri:t,invite_code:i,platform:r,unauthId:o,app_upsell_type:m});(0,s.v)()?(0,s.Z)().then(t=>{if(t.length>0){let e=(0,p.ru)(window.location.href,_);a?.({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}});let t=window.open(e);t||a?.({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}})}else a?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}}),window.location.href=(0,p.ru)(c,e)}).catch(()=>{(0,d.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(a?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}}),window.location.href=(0,p.ru)(c,e))}else{if((0,d.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===r&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,p.ru)("https://pinterest.com/pinterest-predicts",_);return}a?.({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:m}}),window.location.href=(0,p.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",_)}}};var h=n(785893);function f({children:e,invite_code:t}){let{isAuthenticated:n,isBot:l,unauthId:s,userAgent:{platform:p,raw:d}}=(0,r.B)(),{logContextEvent:c}=(0,i.v)(),{checkExperiment:u}=(0,a.F)(),m=async(e,i,a)=>{c({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:i}}),g({isAuthenticated:n,checkExperiment:u,deeplinkUri:e,fallbackUrl:a,invite_code:t,logContextEvent:c,platform:p,redirectToLite:(0,o.Rp)({isBot:l,platform:p,userAgent:d}),unauthId:s,userAgent:d,app_upsell_type:i})};return e(m)}let x=e=>(0,h.jsx)(l.ty,{children:t=>(0,h.jsx)(f,{...e,invite_code:t})});x.displayName="DeepLinkNavigator";let b=x},861411:(e,t,n)=>{n.d(t,{fv:()=>h,fS:()=>T,Hs:()=>x,Mv:()=>y,uc:()=>g,dL:()=>v,qS:()=>f,Y4:()=>P,HE:()=>I,Cy:()=>b});var i=n(667294),a=n(973935),r=n(407043),l=n(124580),o=n(785893);function s(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class p extends i.Component{constructor(...e){super(...e),s(this,"observe",()=>{try{if(this.node=(0,a.findDOMNode)(this),this.node instanceof HTMLElement){let{pinIdStr:e,newsIdStr:t}=this.props.eventData;l.Z.start(this.node).onExitViewport(this.logImpression).setDebugId(e||t||"unknown")}}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),s(this,"logImpression",e=>{this.props.logImpression({viewData:this.props.viewData||{},viewType:this.props.viewType,viewParameter:this.props.viewParameter,eventType:this.props.eventType,impressionType:this.props.impressionType,auxData:this.props.auxData,component:this.props.component,objectIdStr:this.props.objectIdStr,eventData:{endTime:e.endTime,time:e.startTime,...this.props.eventData}})})}componentDidMount(){this.props.isPaused||this.observe()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.observe()}componentWillUnmount(){this.node instanceof HTMLElement&&l.Z.stop(this.node)}render(){return i.Children.only(this.props.children)}}function d(e){let{logImpression:t}=(0,r.v)();return(0,o.jsx)(p,{...e,logImpression:t})}var c=n(337815),u=n(773285),m=n(780280),_=n(807609);function w({auxData:e,component:t,eventData:n,eventType:a,impressionType:o,isPaused:s,objectIdStr:p,viewData:d,viewType:w,viewParameter:v}){let y=(0,i.useRef)(null),{logImpression:g}=(0,r.v)(),h=(0,_.Z)(),f=(0,m.B)(),x=f.isAuthenticated,{checkExperiment:b}=(0,u.F)(),I=b(x?"web_use_intersection_observer_for_getboundingclientrect_auth":"web_use_intersection_observer_for_getboundingclientrect_unauth").anyEnabled,P=(0,i.useCallback)(()=>{try{if(y.current instanceof HTMLElement){let{pinIdStr:i,newsIdStr:r}=n;l.Z.start(y.current).onExitViewport(i=>{if(y.current&&I){let r=new IntersectionObserver(([l])=>{g({viewData:d||{},viewType:w,viewParameter:v,eventType:a,impressionType:o,auxData:e,component:t,objectIdStr:p,eventData:{endTime:i.endTime,time:i.startTime,pinCellWidth:l.boundingClientRect.width||0,pinCellHeight:l.boundingClientRect.height||0,windowWidth:window?.innerWidth,windowHeight:window?.innerHeight,...n}}),y.current&&r.unobserve(y.current)});y.current&&r.observe(y.current)}else g({viewData:d||{},viewType:w,viewParameter:v,eventType:a,impressionType:o,auxData:e,component:t,objectIdStr:p,eventData:{endTime:i.endTime,time:i.startTime,pinCellWidth:y.current?.getBoundingClientRect().width||0,pinCellHeight:y.current?.getBoundingClientRect().height||0,windowWidth:window?.innerWidth,windowHeight:window?.innerHeight,...n}});let{attributionSourceId:r,campaignId:l,isPromoted:s,link:u,adDestinationUrl:m,domain:_,advertiserId:x}=n;"pinImpressions"===o&&s&&!h&&window.document.featurePolicy?.allowsFeature("attribution-reporting")&&(0,c.YS)(o,s,r??null,u,l,{appType:f.appTypeDetailed,osType:(0,c.eF)(f.userAgent.osName??"Unknown")},x??null,_,m)}).setDebugId(i||r||"unknown")}}catch{window.console.error('Can only track impressions for type "HTMLElement"')}},[y.current]);return(0,i.useEffect)(()=>{s||P();let{current:e}=y;return()=>{e instanceof HTMLElement&&l.Z.stop(e)}},[s,P]),y}let v=e=>{let t=w({eventData:{...e.impressionData||{},pinIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:18,impressionType:"pinImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},y=e=>{let t=w({eventData:{newsIdStr:e.notificationId,newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},auxData:e.auxData||{},eventType:4111,impressionType:"notificationDetailImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3082});return e.children({impressionTrackerRef:t})},g=e=>{let t=w({eventData:{newsIdStr:e.notificationId,newsType:e.newsType},auxData:e.auxData||{},eventType:4110,impressionType:"notificationFeedImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3081});return e.children({impressionTrackerRef:t})},h=e=>{let t=w({eventData:{...e.impressionData||{},articleIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:3829,impressionType:"articleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},f=e=>{let t=w({eventData:{...e.impressionData||{},storyIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:170,impressionType:"storyImpression",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},x=e=>(0,o.jsx)(d,{auxData:e.auxData||{},component:e.component,eventData:{...e.impressionData||{},storyIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},eventType:170,impressionType:"storyImpression",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewParameter:e.viewParameter,viewType:e.viewType||1,children:e.children}),b=e=>{let t=w({eventData:{...e.impressionData||{},userIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3704,impressionType:"userImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},I=e=>{let t=w({eventData:{...e.impressionData||{},topicIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3703,impressionType:"topicImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},P=e=>{let t=w({eventData:{...e.impressionData||{},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:8569,impressionType:"todayArticleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},T=e=>{let t=w({eventData:{...e.impressionData||{},boardIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:3700,impressionType:"boardImpressions",loggingId:e.loggingId,viewType:e.viewType||1,viewParameter:e.viewParameter,viewData:e.viewData});return e.children({impressionTrackerRef:t})}},63552:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(883119),a=n(785893);function r({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:r,rounding:l,fullWidth:o=!1,pressState:s="none",accessibilityLabel:p,role:d}){let c=(Array.isArray(s)?s:[s]).includes("compress");return(0,a.jsx)(i.iP,{accessibilityLabel:p,fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:r&&(({event:e})=>r(e)),role:d,rounding:l,tapStyle:c?"compress":"none",children:e})}},999023:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(667294),a=n(112690),r=n(867820);let l=e=>Object.keys(e).reduce((t,n)=>(void 0===e[n]&&delete t[n],t),{...e}),o=({viewType:e,viewParameter:t,viewData:n,auxData:i,objectIdStr:a,component:o,clientTrackingParams:s,element:p},d)=>{let c=l({event_type:13,view_type:e,view_parameter:t,view_data:n,aux_data:i,object_id_str:a,component:o,clientTrackingParams:s,element:p});-1===Object.keys(c).indexOf("view_type")&&(0,r.My)("mweb.logging.null_view_type"),d(c)};function s(e){let{auxData:t,clientTrackingParams:n,children:r,component:l,element:s,objectIdStr:p,viewData:d,viewParameter:c,viewType:u}=e,m=(0,a.Z)(),_=JSON.stringify(t),w=JSON.stringify(d);return(0,i.useEffect)(()=>{o(e,m)},[m,_,n,l,s,p,w,c,u]),i.Children.only(r)}},598615:(e,t,n)=>{n.d(t,{B:()=>w,Z:()=>v});var i=n(667294),a=n(616550),r=n(407043),l=n(385740),o=n(53987),s=n(780280),p=n(867820),d=n(52022),c=n(938917),u=n(329900),m=n(67347),_=n(785893);let w=(e,t)=>"/"===e.pathname?"/":(0,o.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function v({children:e,componentType:t,app_upsell_type:n}){let o=(0,a.TH)(),{flushContextEvents:v,logContextEvent:y}=(0,r.v)(),{viewType:g,viewParameter:h}=(0,l.SU)(),f=(0,d.Z)(),{userAgent:{platform:x}}=(0,s.B)();(0,i.useEffect)(()=>{f({action:"view",item:"download-button",within:n})},[o,n,f]);let b=(0,i.useRef)(!1);(0,i.useEffect)(()=>{g&&202!==g?(y({component:t||13106,element:10308,event_type:9976,view_type:g,view_parameter:h,aux_data:{app_upsell_type:n,app_upsell_is_dupe:b.current}}),b.current=!0):(0,m.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:t,view_type:g,view_parameter:h,app_upsell_type:n,app_upsell_is_dupe:b.current}})},[t,y,h,g,n]);let I=(0,c.Z)();return(0,i.useEffect)(()=>{I||(0,p.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[I,n]),(0,_.jsx)(u.Z,{children:i=>e({handleOpenApp:e=>{f({action:"click",item:"download-button",within:n}),(0,p.NC)("press_open_app",!0),y({component:t||13106,element:10308,event_type:102,view_type:g||202,view_parameter:h,aux_data:{app_upsell_type:n}}),y({component:t||13106,element:10308,event_type:9977,view_type:g||202,view_parameter:h,aux_data:{app_upsell_type:n}}),v(!0),i&&(y({component:t||13106,element:10308,event_type:1701,view_type:g||202,view_parameter:h,aux_data:{app_upsell_type:n}}),i(e?.deepLinkUri??w(o,"android"===x),n))}})})}},296679:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(883119),a=n(413764),r=n(430322),l=n(898781),o=n(287072),s=n(780280),p=n(50286),d=n(598615),c=n(664166),u=n(948376),m=n(785893);let _=({deepLinkUri:e,isOpen:t,onDismiss:n,onOpenInApp:c,to:_,app_upsell_type:w})=>{let v=(0,l.ZP)(),y=(0,p.Wb)(),{isBot:g,userAgent:{platform:h,raw:f}}=(0,s.B)(),x=(0,u.Rp)({isBot:g,platform:h,userAgent:f}),b=(0,o.Z)({href:_??""}),I=y?60:40;return(0,m.jsx)(r.default,{accessibilityModalLabel:"",closeOnOutsideClick:!1,isOpen:t,mobileHideCloseIcon:!0,onDismiss:()=>{},type:"app_upsell_v1",zIndex:new i.Ry(101),children:(0,m.jsx)(d.Z,{app_upsell_type:w,componentType:14157,children:({handleOpenApp:t})=>(0,m.jsxs)(i.xu,{"data-test-id":"appUpsell-iframe",padding:3,children:[(0,m.jsx)(i.xu,{display:"inlineBlock",position:"absolute",children:(0,m.jsx)(i.xu,{"data-test-id":"appUpsell-continue",children:(0,m.jsx)(i.hU,{accessibilityLabel:v.bt("fechar plano de fundo de ícones", "close icon background", "accesibility label for close icon on a overlay", undefined, true),icon:"cancel",iconColor:"gray",onClick:({event:e})=>{n({event:e}),b&&!e.defaultPrevented&&b({event:e})},size:"lg"})})}),(0,m.jsxs)(i.xu,{paddingX:2,paddingY:6,children:[(0,m.jsx)(i.xu,{display:"flex",justifyContent:"center",paddingY:2,children:x?(0,m.jsx)(a.Z,{size:I}):(0,m.jsx)(i.JO,{accessibilityLabel:"Pinterest App",color:"brandPrimary",icon:"pinterest",size:I})}),(0,m.jsxs)(i.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[(0,m.jsx)(i.xu,{paddingY:2,children:(0,m.jsx)(i.X6,{align:"center",size:"400",children:x?v.bt("Experimente o Pinterest Lite", "Try Pinterest Lite", "mweb.app_upsell.lite_app_upsell_title", undefined, true):v.bt("O Pinterest é melhor no aplicativo", "Pinterest is better on the app", "mweb.unauth.app_upsell.app_value_prop2", undefined, true)})}),(0,m.jsx)(i.xv,{align:"center",size:"300",children:x?v.bt("Uma forma de descobrir novas ideias que não ocupa espaço", "A space-saving way to discover new ideas", "mweb.app_upsell.lite_app_value_prop", undefined, true):v.bt("Continue no aplicativo para ter a experiência completa", "Continue in the app for the full experience", "mweb.app_upsell.description4", undefined, true)}),(0,m.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:8,children:(0,m.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:()=>{t({deepLinkUri:e}),c()},size:"lg",text:v.bt("Abrir o aplicativo", "Open app", "mweb.app_upsell.app_upsell_button_text1", undefined, true)})})]})]})]})})})};function w({clientTrackingParams:e,deepLinkUri:t,isOpen:n,onDismiss:i,onOpenInApp:a,shouldTrackDismiss:r,to:l,viewParameter:o,viewType:s,app_upsell_type:p}){return(0,m.jsx)(c.Z,{clientTrackingParams:e,viewParameter:o,viewType:s,children:(0,m.jsx)(_,{app_upsell_type:p,deepLinkUri:t,isOpen:n,onDismiss:e=>{r&&(0,c.y)(),i(e)},onOpenInApp:()=>{(0,c.y)(),a()},to:l})})}},664166:(e,t,n)=>{n.d(t,{Z:()=>c,y:()=>d});var i=n(667294),a=n(30287),r=n(844974),l=n(339363),o=n(807609),s=n(999023),p=n(785893);let d=()=>{(0,r.Nh)("appUpsell",Date.now()),(0,r.qn)("firstUpsellTime")||(0,r.Nh)("firstUpsellTime",Date.now()),(0,l.Nh)("showedAppUpsellCurrentSession",!0)};function c({children:e,clientTrackingParams:t,viewParameter:n,viewType:r}){let l=(0,o.Z)();return l||(0,a.FP)(window)?null:(0,p.jsx)(s.Z,{clientTrackingParams:t,component:13106,viewParameter:n,viewType:r,children:(0,p.jsx)(i.Fragment,{children:e})})}},938917:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(702664);let a=()=>(0,i.useSelector)(({session:{canUseNativeApp:e}})=>e)},948376:(e,t,n)=>{n.d(t,{G3:()=>d,Rp:()=>p,kp:()=>o});var i=n(202139),a=n(844974),r=n(339363);let l=14*i.F4,o=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,a.qn)("appUpsell")),n=Number((0,a.qn)("firstUpsellTime")),i=!!(0,r.qn)("showedAppUpsellCurrentSession");return{currentTime:e,firstUpsellTime:n,lastUpsellTime:t,showedAppUpsellCurrentSession:i}}();return e?function(e,t,n){let{currentTime:i,firstUpsellTime:r,lastUpsellTime:o,showedAppUpsellCurrentSession:s}=e;return(n=n||l,!r||i<r+t)?!s:i-o>n&&((0,a.L_)("firstUpsellTime"),!0)}(n,i.F4):function(e,t){let{currentTime:n,lastUpsellTime:i}=e;return t=t||l,!i||n-i>t}(n,t)},s=e=>{e=e.toLowerCase();let t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},p=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},d=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},927383:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(898781),a=n(50286),r=n(987318),l=n(945698);let o=()=>{let e=(0,i.ZP)(),t=(0,a.HG)(),{viewer:n,loginForMore:o,limitedLoginModalSubheader:s,limitedLoginModalNextLocation:p}=(0,r.H)(),d="LIMITED_LOGIN"===n.type;return d?({modalHeader:n,nextLocation:i})=>a=>{let r=null;a&&(a.nativeEvent&&a.nativeEvent instanceof Event?r=a:a.event&&(r=a.event)),r&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),o?.setVisible(!0),s?.setText(n||(t?l.hr(e):l.Wh(e))),i&&p?.setRoute(i)}:({fn:e})=>e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56251.pt_BR-7b5f29c296568742.mjs.map