document.querySelector('img').onclick = function(e) {
    const pilt = e.target.cloneNode(true)
    const body = document.querySelector('body')
    body.appendChild(pilt)
}
