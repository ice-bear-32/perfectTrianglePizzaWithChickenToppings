fetch("/page/page.index.html").then(res => {
   return res.text();
}).then(body => {
   const html = document.createElement("iframe");
   html.innerHTML = body;
   html.classList.add("window-page-html");
   document.querySelector("body").appendChild(html)
});
