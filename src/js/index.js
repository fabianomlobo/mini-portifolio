const aba1 = document.querySelector('.aba1')
const aba2 = document.querySelector('.aba2')
const informacao1 = document.querySelector ('.informacao1')
const informacao2 = document.querySelector ('.informacao2')
aba1.addEventListener('click', function(){   
    informacao1.style.display = 'block'
    informacao2.style.display = 'none'
    aba1.classList.add('selecionado')
    aba2.classList.remove('selecionado')    
})
aba2.addEventListener('click', function(){    
    informacao1.style.display = 'none'
    informacao2.style.display = 'block'
    aba1.classList.remove('selecionado')
    aba2.classList.add('selecionado')    
})





