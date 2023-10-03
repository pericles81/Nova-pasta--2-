const vetor = new Set()


const numerosSorteados = document.getElementById('quantidade')
const listaNumeros = document.getElementById('limite')
const btn = document.getElementById('btn')
const res = document.getElementById('res')
const resNum = document.getElementById('resNum')

btn.addEventListener('click',()=>{
    sortearNumeros()
    controlarBtn()
})


function controlarBtn(){
    btn.disabled = true

    const novoBtn = document.createElement('button')
    novoBtn.innerText = 'Novo sorteio'
    res.appendChild(novoBtn)
    novoBtn.setAttribute('class','novoBtn')
    novoBtn.addEventListener('click',()=>{
        btn.disabled = false
        vetor.clear()
        res.removeChild(novoBtn)
        resNum.innerHTML = ''
        numerosSorteados.value = ''
        numerosSorteados.focus()
        listaNumeros.value = ''
    })
}



function sortearNumeros(){
    const a = Number(numerosSorteados.value)
    const b = Number(listaNumeros.value)

    for(i = 0; i < b; i++){
        
        const aleatorio = Math.floor(Math.random() * a ) + 1 
        vetor.add(aleatorio)
    }
    
    imprimir()
}

function imprimir(){
    vetor.forEach((e)=>{
        const p = document.createElement('p')
        p.innerHTML = e
        resNum.appendChild(p)
    })
}
