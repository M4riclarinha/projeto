function toggMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/fehdubs.jpg")

  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/matosu.jpg")
  }
}
