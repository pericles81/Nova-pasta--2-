const vetor = []

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
        vetor.length = 0
        res.removeChild(novoBtn)
        resNum.innerHTML = ''
        quantidade.value = ''
        quantidade.focus()
        limite.value = ''
    })
}



function sortearNumeros(){
    const a = Number(quantidade.value)
    const b = Number(limite.value)

    for(i = 0; i < b; i++){ 
        const aleatorio = Math.floor(Math.random() * a ) + 1 
        vetor.push(aleatorio)
    }
    
    imprimir()
}

function imprimir(){
    vetor.map((e)=>{
        const p = document.createElement('p')
        p.innerHTML = e
        resNum.appendChild(p)
    })
}
