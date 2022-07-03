let explist = {}

explist.mkdocs = `<h1>MKDocs</h1>
Experience writing technical documentation, auto-generated code documentation and guides using the poplular <a href="https://www.mkdocs.org/" target="_blank">MKDocs</a>
static site generator. As of lately, been using the <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MKDocs</a> theme to add search, custom themeing, and much more.
</div>`

explist.python = `<h1>Python</h1>
Experience writing technical documentation, auto-generated code documentation and guides using the poplular <a href="https://www.mkdocs.org/" target="_blank">MKDocs</a>
static site generator. As of lately, been using the <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MKDocs</a> theme to add search, custom themeing, and much more.
</div>`


var expicons = document.getElementsByClassName("exp-logo")
var select_exp = function(){
    console.log(this.dataset.exp)
    for (var i = 0; i < expicons.length; i++){
        expicons[i].classList.remove("selected-exp")
    }
    this.classList.add("selected-exp")

    document.getElementById("exp-desc").innerHTML=explist[this.dataset.exp]
}

for (var i = 0; i < expicons.length; i++){
    expicons[i].addEventListener('click', select_exp, false)
}