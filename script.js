
const a =window.document.getElementById('circulo')          //1

/********************************************************/

a.addEventListener('click',clicar)                      // 2 
a.addEventListener('mouseenter',entrar)             
a.addEventListener('mouseout',sair)                  


/*********************************************************/
function clicar(){                                      //3 
                                                     
a.innerText='Ops!' 
a.style.color='black'
a.innerHTML= ' 2 click por gentileza'
a.style.background='red'
}

function entrar(){                          
a.innerHTML ='apenas 1 click já!'
a.style.color='black'
a.style.background='darkgreen'
}

function sair(){          
a.innerText='aproxime o mouse por favor!'
a.style.color='white'
a.style.background='blue'
}
                                                /*evento atribuido ao retangulo*/
const b = window.document.getElementById('retangulo')               
b.addEventListener('dblclick', dpclick)    
b.addEventListener('mouseenter',entrar)                  
                                                       
function dpclick(){                                      
    b.innerText='Olá Curioso!!'
    b.innerText += '@Project'
    b.style.background='red'
    b.style.fontSize='60px'
    b.style.fontFamily='Arial'
}



