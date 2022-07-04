let explist = {}

explist.mkdocs = `<h1>MKDocs</h1>
<svg xmlns="http://www.w3.org/2000/svg" class="exp-logo-float" data-exp="mkdocs" viewBox="0 0 89 89"> <path d="M3.136,17.387l0,42.932l42.932,21.467l-42.932,-64.399Z"></path> <path d="M21.91,8l42.933,64.398l-18.775,9.388l-42.932,-64.399l18.774,-9.387Z" style="fill-opacity: 0.5"></path> <path d="M67.535,17.387l-27.262,18.156l21.878,32.818l5.384,2.691l0,-53.665Z"></path> <path d="M67.535,17.387l0,53.666l18.774,-9.388l0,-53.665l-18.774,9.387Z" style="fill-opacity: 0.25"></path> </svg>
Experienced in writing technical documentation, auto-generated code documentation and guides using the poplular <a href="https://www.mkdocs.org/" target="_blank">MKDocs</a>
static site generator. As of lately, been using the <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank">Material for MKDocs</a> theme to add search, custom theming, and more.
</div>`

explist.python = `<h1>Python</h1>
<img src="./images/python.png"  class="exp-logo-float" data-exp="python" alt="">
2.5+ years developing with <a href="https://www.python.org/" target="_blank">Python</a>. Includes backend development with a specific focus on API development, forensics, data wrangling, automation, database management, authentication and more.
</div>`

explist.containers = `<h1>Containers</h1>
<img src="./images/docker.png"  class="exp-logo-float" data-exp="containers" alt="">
Experienced with <a href="https://www.docker.com/" target="_blank">Docker</a>/<a href="https://podman.io/" target="_blank">Podman</a>, virtual machines and <a href="https://kubernetes.io/" target="_blank">Kubernetes</a>*. Created and managed docker dev environment for team and aided in Kubernetes based development. Personally uses <a href="https://virt-manager.org/" target="_blank">virt-machine</a>, podman, docker and <a href="https://www.virtualbox.org/" target="_blank">virtual box</a> for personal projects.
*"Dangerous" with Kubernetes but still learning ;)
</div>`

explist.fastapi = `<h1>APIs</h1>
<img src="./images/fastapi.png"  class="exp-logo-float" data-exp="fastapi" alt="">
1.5+ Years using <a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a> to build REST API's quickly. Utilized <a href="https://swagger.io/" target="_blank">OpenAPI standards and auto-generated Swagger documentation </a> to enable quick adoption and usage of APIs. Setup and configured <a href="https://konghq.com/" target="_blank">Kong API gateway</a> to manage microservices and external access.
</div>`

explist.linux = `<h1>Linux/Unix</h1>
<img src="./images/linux.png"  class="exp-logo-float" data-exp="linux" alt="">
Well versed in Linux development environments and desktop environments. Personally I run a dual boot setup with Ubuntu and Windows. Not afraid to get hands on with a Linux command line or desktop environment. I've manually installed Arch btw ;) (*Following a step by step guide of course). Distro hopper and Linux tinkerer in my free time.
</div>`

explist.repair = `<h1>Tech Repair</h1>
<img src="./images/fixit.png"  class="exp-logo-float" data-exp="repair" alt="">
I enjoy messing with hardware and peforming common tech repairs occasionally in my free time. Recently, I did a screen replacement for an Iphone 11 but, my repair and maintenance experience spans laptops, desktops, mobile and gaming consoles. I get a lot of great info, repair guides and higher quality parts from <a href="https://www.ifixit.com/" target="_blank">iFixit</a>.
</div>`

explist.react = `<h1>React</h1>
<img src="./images/react.png"  class="exp-logo-float" data-exp="repair" alt="">
I have currently been learning <a href="https://reactjs.org/" target="_blank">React</a> in my spare time. Will likely switch over to  <a href="https://svelte.dev/" target="_blank">Svelte</a> and see how it compares once I get my head around React. Even though I still think a lot of frontend tech is overenginneered, I understand its relevance and usage in today's market.
</div>`

explist.frontend = `<h1>Frontend</h1>
<img src="./images/frontend.png"  class="exp-logo-float" data-exp="repair" alt="">
sass css js bootstrap
</div>`

explist.java = `<h1>Java</h1>
<img src="./images/java.png"  class="exp-logo-float" data-exp="repair" alt="">
java 2+ years. First programming language
</div>`

explist.cplus = `<h1>C++</h1>
<img src="./images/c++.png"  class="exp-logo-float" data-exp="repair" alt="">
2.5+ years first in depth programming language
</div>`

explist.cloud = `<h1>Cloud</h1>
<img src="./images/cloud.png"  class="exp-logo-float" data-exp="repair" alt="">
AWS cloud environments including. AWS S3, dynamodb, EC2. Have played around with lambda and lightsail. GCP cloud compute and related service setup for dockerized external web application
</div>`

explist.it = `<h1>IT</h1>
<img src="./images/it.png"  class="exp-logo-float" data-exp="repair" alt="">
Wasted sanity and time fixing Windows after it bricks itself. Raspiberry pi and related projects. NAS setup, etc.
</div>`

var expicons = document.getElementsByClassName("exp-logo")
var select_exp = function(){
    var selected = document.getElementById("selected-exp")
    selected.removeAttribute("id")
    selected.classList.remove("selected-exp")
    this.classList.add("selected-exp")
    this.id = "selected-exp"

    document.getElementById("exp-desc").innerHTML=explist[this.dataset.exp]
}

for (var i = 0; i < expicons.length; i++){
    expicons[i].addEventListener('click', select_exp, false)
}