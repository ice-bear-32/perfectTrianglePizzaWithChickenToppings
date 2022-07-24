const scripts = document.querySelectorAll("script");
const hasRouterScript = scripts.find(script => script.src.endsWith("js/managers/pages/pageRouter.js"));
if(!hasRouterScript)
{
   const routerScript = document.createElement("script");
   routerScript.src = "js/managers/pages/pageRouter.js";
   document.querySelector("head").appendChild(routerScript);
}

const hasProtectionScript = scripts.find(script => script.src.endsWith("js/main/disableElementSourceHotKeys.js"));
if(!hasProtectionScript)
{
   const protectionScript = document.createElement("script");
   protectionScript.src = "js/main/disableElementSourceHotKeys.js";
   document.querySelector("head").appendChild(protectionScript);
}
