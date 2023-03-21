// Define el objeto del blog
const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());

const blog = this.blogs.has(params.d || params.b || params.blog) ? this.blogs.get(params.d || params.b || params.blog) : this.blogs.get("nothing")

// if (!blog)
    // return;
  
const headerElement = document.querySelector('header')
  // Renderiza el título y la descripción del blog
  if (blog.logo){
  const logo = document.createElement('img')
  logo.src = blog.logo;
  headerElement.appendChild(logo)

}
  const titleElement = document.createElement('h1')
  titleElement.textContent = blog.title
  
  const descriptionElement = document.createElement('p')
  descriptionElement.textContent = blog.description
  
  headerElement.appendChild(titleElement)
  headerElement.appendChild(descriptionElement)
  
  // Renderiza los posts del blog
  const postsElement = document.querySelector('#posts')
  
  blog.fields.forEach((field) => {
    const postElement = document.createElement('div')
    postElement.classList.add('post')
  
    const titleElement = document.createElement('h2')
    titleElement.textContent = field.title
  
    const descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = field.description.replaceAll("<br>","<br></br>")
  
    postElement.appendChild(titleElement)
    postElement.appendChild(descriptionElement)
  
    if (field.href !== null){
        const ele = document.createElement("a")
        ele.href = field.href;
        if (field.img !== null) {
            const imgElement = document.createElement('img')
            imgElement.src = field.img
            ele.appendChild(imgElement)
            postElement.appendChild(ele)

          }

    } else {
        if (field.img !== null) {
            const imgElement = document.createElement('img')
            imgElement.src = field.img
        postElement.appendChild(imgElement)

          }
    }
    postsElement.appendChild(postElement)
  })
  
  // Renderiza la imagen del banner
  const bannerElement = document.querySelector('#banner')
  
  if (blog.img !== null) {
    const imgElement = document.createElement('img')
    imgElement.src = blog.img
    bannerElement.appendChild(imgElement)
  }
  