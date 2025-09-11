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
              '<script>!function(){"use strict";const s=4e3,r="RqTjrnSvWbxVVJ0annhh",i=["body"];let o=!1,a=!1,e=!1,c=null,d=null,u=null;function l(){return"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}function w(){return u&&u.enabled}function t(){return l()}function m(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){return""}}function I(){let e,n=!1;try{(e=localStorage.getItem("ca_uid"))||(e=l(),localStorage.setItem("ca_uid",e),n=!0)}catch(t){window._crowAI_userId||(window._crowAI_userId=l(),n=!0),e=window._crowAI_userId}return{userId:e,isFirstVisit:n}}function p(){try{return localStorage.getItem("ca_sid")}catch(t){return window._crowAI_sessionId}}function _(e){try{localStorage.setItem("ca_sid",e)}catch(t){window._crowAI_sessionId=e}}function h(){try{var t=localStorage.getItem("ca_sid"),e=localStorage.getItem("ca_act");return t?!!e&&Date.now()-parseInt(e)<18e5:!1}catch(t){return!1}}function g(){var e=Date.now();try{localStorage.setItem("ca_act",e.toString())}catch(t){window._crowAI_lastActivity=e}}function x(){var t=l(),{userId:e,isFirstVisit:n}=I(),i=m(),s={session_id:t,user_id:e,tenant_id:r,first_visit:n,screen_resolution:screen.width+"x"+screen.height,timezone:i,page_url:window.location.href};return d={sessionId:t,userId:e,tenantId:r,isFirstVisit:n,timezone:i,screenResolution:screen.width+"x"+screen.height,createdAt:Date.now(),apiPayload:s},_(t),g(),d}function f(){var t,e,n;return d?(g(),{success:!0,sessionData:d}):(t=p(),e=h(),t&&e?(g(),{userId:e,isFirstVisit:n}=I(),{success:!0,sessionData:d={sessionId:t,userId:e,tenantId:r,isFirstVisit:n,timezone:m(),screenResolution:screen.width+"x"+screen.height,createdAt:Date.now(),apiPayload:{session_id:t,user_id:e,tenant_id:r,first_visit:n,screen_resolution:screen.width+"x"+screen.height,timezone:m(),page_url:window.location.href}}}):{success:!0,sessionData:x()})}function y(t){w()?a&&!e&&v():o&&a&&!e&&v()}function v(){var t;e||(e=!0,c&&(clearTimeout(c),c=null),(t=document.getElementById("crowai-antiflicker"))&&t.parentNode&&t.parentNode.removeChild(t))}function A(){var t=f();if(t.success){var t=t.sessionData,e=window.location.href,e={tenant_id:r,session_id:t.sessionId,page_url:e,is_first_visit:t.isFirstVisit};w()&&(e.test_mode=!0,u.testId&&(e.test_id=u.testId),u.variantId)&&(e.variant_id=u.variantId);const n=new AbortController,i=setTimeout(()=>n.abort(),s);fetch("https://script-manager-501622810668.asia-south1.run.app/api/testdata",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),signal:n.signal}).then(t=>(clearTimeout(i),t.json())).then(t=>{if(a=!0,t.success&&t.assigned_variant){var e,n,t=t.assigned_variant;try{t.code&&t.code.trim()&&((e=document.createElement("script")).type="text/javascript",e.text=t.code,document.head.appendChild(e)),t.event_script&&t.event_script.trim()&&!w()&&((n=document.createElement("script")).type="text/javascript",n.text=t.event_script,document.head.appendChild(n))}catch(t){}}y("abtest-success")}).catch(t=>{clearTimeout(i),a=!0,y("abtest-error")})}else a=!0,y("session-error")}function n(){var t,e,n;u=(t="true"===(e=new URLSearchParams(window.location.search)).get("testmode"),n=e.get("test_id"),e=e.get("variant_id"),t?{enabled:!0,testId:n,variantId:e}:{enabled:!1,testId:null,variantId:null}),-1<window.location.href.indexOf("__crowai_disable__")||(performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0]||((t=document.createElement("style")).setAttribute("id","crowai-antiflicker"),t.setAttribute("type","text/css"),n=i.map(t=>t+" { opacity: 0 !important; visibility: hidden !important; transition: none !important; }").join("\n"),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),(n=document.getElementsByTagName("head")[0])&&n.appendChild(t)),c=setTimeout(function(){o=o||!0,a=a||!0,v()},s),f(),w()?(o=!0,y("analytics-skipped-testmode")):((e=document.createElement("script")).async=!0,e.src="https://crowai-mi.web.app/m.js",e.onload=function(){o=!0,y("analytics-success")},e.onerror=function(){o=!0,y("analytics-error")},(n=document.getElementsByTagName("head")[0])&&n.appendChild(e)),A())}window.crowAI_utils=window.crowAI_utils||{},window.crowAI_utils.generateUUID=l,window.crowAI=window.crowAI||function(){(window.crowAI.q=window.crowAI.q||[]).push(arguments)},window.crowAI.session={getId:p,setId:_,getUserId:I,getTenantId:()=>r,updateActivity:g,isValid:h,generateId:t,ensureSessionStructure:f,getCurrentSessionData:()=>d,createSessionStructure:x},window.crowAI.loading={isFinished:()=>e,isAnalyticsLoaded:()=>o,isAbTestLoaded:()=>a,finish:()=>v()},window.crowAI.test={loadVariant:A,getCurrentVariant:()=>window.crowAI.currentVariant,isTestMode:w,getTestConfig:()=>u},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()}();</script>',
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
