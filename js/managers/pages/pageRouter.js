const files = [{
      route: "#",
      routeName: "index",
      src: "js/managers/pages/index.html.js"
   }];
const route = location.href.includes("#") ? location.href.split("#")[1] : "";
const routeSrc = files.find(file => file.route == "#"+route).src;
const routeFileScript = document.createElement("script");
fetch(routeSrc).then(res => {
   return res.text()
}).then(body => {
   routeFileScript.innerHTML = body;
   document.querySelector("body").appendChild(routeFileScript);
})
