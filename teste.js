

class editor {
    constructor(){
        this.texto= document.getElementById('texto')
        this.render=  document.getElementById('div1')
        this.array = []
        
    }
    atualiza(){
        
        this.render.innerHTML = this.texto.value
        
    }
    static carregaDado(){

        let select = a.texto.value;
        let inicio = a.texto.selectionStart;
        let fim = a.texto.selectionEnd;
        let comeco =  select.slice(0, inicio) 
        let meio = select.slice(inicio, fim)  
        let final = select.slice(fim, select.length)
        let valor = {
        comeco,meio,final
        }

    return  valor
        
    }
    
}

const a = new editor()
a.texto.addEventListener('keyup', (e) =>{ 
    a.atualiza()
    
    
})



function bold(n){
    let valor =editor.carregaDado()
    a.array.push(a.texto.value)
    
    console.log(a.array)
    if(typeof n !=='string'){
        switch(n){
        
            case 1: a.texto.value= `${valor.comeco} <b>${valor.meio}</b> ${valor.final}`
            break
            case 2: a.texto.value=`${valor.comeco} <i>${valor.meio}</i> ${valor.final}`
            break
            case 3: a.texto.value=`${valor.comeco} <u>${valor.meio}</u> ${valor.final}`
            break
            case 4: a.texto.value=`${valor.comeco} <h4>${valor.meio}</h4> ${valor.final}`
            break
            case 5: a.texto.value=`${valor.comeco}<ul><li>${valor.meio}</li></ul> ${valor.final}`
            break
            case 6: a.texto.value=`${valor.comeco} <a href="LINK AQUI">${valor.meio}</a> ${valor.final}`
            break
            case 7: a.texto.value=`${valor.comeco} <s>${valor.meio}</s> ${valor.final}`
            break
            case 8: a.texto.value=`${valor.comeco}    <li>${valor.meio}</li>   ${valor.final}`
            break
            case 9: a.texto.value=`${valor.comeco} <p>${valor.meio}</p> ${valor.final}`
            break
            case 10: a.texto.value=`${valor.comeco} ${valor.meio}</br> ${valor.final}`
            break
            case 11: a.texto.value='Errei'
            break
    
            default: alert('Algo errado aconteceu')
    }
    
    }
    
}


function aplicar() {
    let valor = editor.carregaDado()
    let fontes = document.querySelectorAll('.valores')
    let cor =fontes[2].value
    let font = fontes[1].value
    let tam = fontes[0].value
    
    if(!font) return a.texto.value= `${valor.comeco} <span style="color:${cor} ; font-size:${tam}pt;">
    ${valor.meio}</span> ${valor.final}`

    return  a.texto.value=`${valor.comeco} <span style="font-family:${font}; color:${cor} ; font-size:${tam}pt;">
    ${valor.meio}</span> ${valor.final}`
       
}


function retira(){
    const check = document.querySelector('#check')
    check.checked = false
}

function volta(){
    console.log(a.array[0], a.array.length)
    if(a.array.length>0){
        a.texto.value = a.array[a.array.length-1]
        a.array.pop()
    }
    
}



