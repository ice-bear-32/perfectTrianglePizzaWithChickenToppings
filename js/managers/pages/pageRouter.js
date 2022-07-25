const files = [{
      route: "#",
      routeName: "index",
      src: "js/managers/pages/index.html.js"
   }];
const route = location.href.includes("#") ? location.href.split("#")[1] : "";
const routeSrc = files.find(file => file.route == "#"+route).src;
const routeFileScript = document.createElement("script");
routeFileScript.src = routeSrc;
document.querySelector("head").appendChild(routeFileScript);
if(files.find(file => file.route == "#"+route).routeName == "index") {
   indexRoute()
}
