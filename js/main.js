const scripts = document.querySelectorAll("script");
let hasRouterScript = false;
scripts.forEach(script => {
   if(script.src.endsWith("pageRouter.js")) hasRouterScript = true;
})
if(!hasRouterScript)
{
   const routerScript = document.createElement("script");
   routerScript.src = "js/managers/pages/pageRouter.js";
   document.querySelector("head").appendChild(routerScript);
}

let hasProtectionScript = false;
scripts.forEach(script => {
   if(script.src.endsWith("disableElementSourceHotKeys.js")) hasProtectionScript = true;
})
if(!hasProtectionScript)
{
   const protectionScript = document.createElement("script");
   protectionScript.src = "js/main/disableElementSourceHotKeys.js";
   document.querySelector("head").appendChild(protectionScript);
}
