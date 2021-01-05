but1 = document.querySelector('#what')
info1 = document.querySelector('#inf1')
icon1  = document.querySelector('#icon1')

but2 = document.querySelector('#how')
info2 = document.querySelector('#inf2')
icon2  = document.querySelector('#icon2')

but3 = document.querySelector('#when')
info3 = document.querySelector('#inf3')
icon3  = document.querySelector('#icon3')

but4 = document.querySelector('#cancel')
info4 = document.querySelector('#inf4')
icon4  = document.querySelector('#icon4')

but5 = document.querySelector('#what2')
info5 = document.querySelector('#inf5')
icon5  = document.querySelector('#icon5')

botoes = [but1, but2, but3, but4, but5]

botoes.forEach(element => {
    element.addEventListener('click', ()=>{
        if (element.id === 'what'){
            showInfo(info1, icon1)
        } else if (element.id === 'how'){
            showInfo(info2, icon2)
        } else if (element.id === 'when'){
            showInfo(info3, icon3)
        } else if (element.id === 'cancel'){
            showInfo(info4, icon4)
        } else {
            showInfo(info5, icon5)
        }
    })
})

function showInfo(informacao, icone){
    if (informacao.style.display != "block"){
        informacao.style.display = "block"
        icone.setAttribute('class', 'fa fa-remove')
    } else {
        informacao.style.display = "none"
        icone.setAttribute('class', 'fa fa-plus')
    }
}
