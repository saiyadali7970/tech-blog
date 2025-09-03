import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Blog - Web Development & Technology",
  description:
    "Explore the latest in web development, programming, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '!function(){"use strict";const s={SESSION_TIMEOUT:18e5,LOADING_TIMEOUT:4e3,TENANT_ID:"OjLnZkZyY9F0Epp9eyGT",API_BASE_URL:"https://script-manager-501622810668.asia-south1.run.app",HIDE_ELEMENTS:["body"],ANALYTICS_SCRIPT_URL:"https://crowai-mi.web.app/m.js"};let r=!1,a=!1,t=!1,o=null,c=null,d=null;function u(){return"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function l(){return d&&d.enabled}function e(){return u()}function I(){let t,n=!1;try{(t=localStorage.getItem("ca_uid"))||(t=u(),localStorage.setItem("ca_uid",t),n=!0)}catch(e){window._crowAI_userId||(window._crowAI_userId=u(),n=!0),t=window._crowAI_userId}return{userId:t,isFirstVisit:n}}function i(){try{return localStorage.getItem("ca_sid")}catch(e){return window._crowAI_sessionId}}function _(t){try{localStorage.setItem("ca_sid",t)}catch(e){window._crowAI_sessionId=t}}function w(){try{var e=localStorage.getItem("ca_sid"),t=localStorage.getItem("ca_act");return e?!!t&&Date.now()-parseInt(t)<s.SESSION_TIMEOUT:!1}catch(e){return!1}}function p(){var t=Date.now();try{localStorage.setItem("ca_act",t.toString())}catch(e){window._crowAI_lastActivity=t}}function m(){var e=u(),{userId:t,isFirstVisit:n}=I(),i={session_id:e,user_id:t,tenant_id:s.TENANT_ID,first_visit:n,screen_resolution:screen.width+"x"+screen.height,page_url:window.location.href};return c={sessionId:e,userId:t,tenantId:s.TENANT_ID,isFirstVisit:n,screenResolution:screen.width+"x"+screen.height,createdAt:Date.now(),apiPayload:i},_(e),p(),c}function h(){var e,t,n;return c?(p(),{success:!0,sessionData:c}):(e=i(),t=w(),e&&t?(p(),{userId:t,isFirstVisit:n}=I(),{success:!0,sessionData:c={sessionId:e,userId:t,tenantId:s.TENANT_ID,isFirstVisit:n,screenResolution:screen.width+"x"+screen.height,createdAt:Date.now(),apiPayload:{session_id:e,user_id:t,tenant_id:s.TENANT_ID,first_visit:n,screen_resolution:screen.width+"x"+screen.height,page_url:window.location.href}}}):{success:!0,sessionData:m()})}function A(e){l()?a&&!t&&g():r&&a&&!t&&g()}function g(){var e;t||(t=!0,o&&(clearTimeout(o),o=null),(e=document.getElementById("crowai-antiflicker"))&&e.parentNode&&e.parentNode.removeChild(e))}function T(){var e=h();if(e.success){var e=e.sessionData,t=window.location.href,t={tenant_id:s.TENANT_ID,session_id:e.sessionId,page_url:t,is_first_visit:e.isFirstVisit};l()&&(t.test_mode=!0,d.testId&&(t.test_id=d.testId),d.variantId&&(t.variant_id=d.variantId),d.eventActive&&(t.event_active=!0));const n=new AbortController,i=setTimeout(()=>n.abort(),s.LOADING_TIMEOUT);fetch(s.API_BASE_URL+"/api/testdata",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:n.signal}).then(e=>(clearTimeout(i),e.json())).then(t=>{if(a=!0,t.success&&t.assigned_variant){var e,n,t=t.assigned_variant;try{if(t.code&&t.code.trim()&&((e=document.createElement("script")).type="text/javascript",e.text=t.code,document.head.appendChild(e)),t.event_script&&t.event_script.trim()){let e=!0;(e=l()?d.eventActive:e)&&((n=document.createElement("script")).type="text/javascript",n.text=t.event_script,document.head.appendChild(n))}}catch(e){}}A("abtest-success")}).catch(e=>{clearTimeout(i),a=!0,A("abtest-error")})}else a=!0,A("session-error")}function n(){var e,t,n,i;d=(n="true"===(e=new URLSearchParams(window.location.search)).get("testmode"),t=e.get("test_id"),i=e.get("variant_id"),e="active"===e.get("event"),n?{enabled:!0,testId:t,variantId:i,eventActive:e}:{enabled:!1,testId:null,variantId:null,eventActive:!1}),window.crowAI_utils.isTestMode=l(),-1<window.location.href.indexOf("__crowai_disable__")||(n=new URL(s.ANALYTICS_SCRIPT_URL).origin,(t=document.createElement("link")).rel="dns-prefetch",t.href=n,(i=document.createElement("link")).rel="preconnect",i.href=n,(n=document.getElementsByTagName("head")[0])&&(n.appendChild(t),n.appendChild(i)),performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0]||((e=document.createElement("style")).setAttribute("id","crowai-antiflicker"),e.setAttribute("type","text/css"),t=s.HIDE_ELEMENTS.map(e=>e+" { opacity: 0 !important; visibility: hidden !important; transition: none !important; }").join("\n"),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),(t=document.getElementsByTagName("head")[0])&&t.appendChild(e)),o=setTimeout(function(){r=r||!0,a=a||!0,g()},s.LOADING_TIMEOUT),h(),!l()||d.eventActive?((n=document.createElement("script")).async=!0,n.src=s.ANALYTICS_SCRIPT_URL,n.onload=function(){r=!0,A("analytics-success")},n.onerror=function(){r=!0,A("analytics-error")},(i=document.getElementsByTagName("head")[0])&&i.appendChild(n)):(r=!0,A("analytics-skipped-no-events")),T())}window.crowAI_utils=window.crowAI_utils||{},window.crowAI_utils.generateUUID=u,window.crowAI=window.crowAI||function(){(window.crowAI.q=window.crowAI.q||[]).push(arguments)},window.crowAI.session={getId:i,setId:_,getUserId:I,getTenantId:()=>s.TENANT_ID,updateActivity:p,isValid:w,generateId:e,ensureSessionStructure:h,getCurrentSessionData:()=>c,createSessionStructure:m},window.crowAI.loading={isFinished:()=>t,isAnalyticsLoaded:()=>r,isAbTestLoaded:()=>a,finish:()=>g()},window.crowAI.test={loadVariant:T,getCurrentVariant:()=>window.crowAI.currentVariant,isTestMode:l,getTestConfig:()=>d},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()}();',
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
