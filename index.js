let menumobile = document.getElementById('mobilenav')
let mobilediv = document.getElementById('mobile-div')
let block_pag = document.getElementById('nav-block')
let contador = 0
let img_con = document.querySelector('#icone-alt')

function menuop() {
    block_pag.style.display = 'none'
    menumobile.style.display = 'flex'
    mobilediv.style.display = 'block'
    img_con.setAttribute('src', 'assets/marca-x (1).png')
    contador += 1
    if (contador >= 2) {
        block_pag.style.display = 'block'
        menumobile.style.display = 'none'
        mobilediv.style.display = 'none'
        contador = 0
        img_con.setAttribute('src', 'assets/menu-aberto.png')
    }
}