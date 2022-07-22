const HTMLData = fetch("/page/page.index.html").text()
window.reload()
document.write(HTMLData)
