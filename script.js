
 let formulario =document.querySelector('#formcadastro')

 
 formulario.onsubmit = function(evento){
  evento.preventDefault()
    
  let inputemail = document.forms['formcadastro']['email']


  if (!inputemail.value){
      
      inputemail.classList.add('inputerror')
  
      let span=inputemail.nextSibling.nextSibling
      span.innerText='Digite o nome corretamente'
  
  } else{
  
      inputemail.classList.remove('inputerror')
  
      let span = inputemail.nextSibling.nextSibling
      span.innerText=''
  }

      
    let inputfirstname = document.forms['formcadastro']['firstname']
  
  
    if (!inputfirstname.value){
        
        inputfirstname.classList.add('inputerror')
    
        let span= inputfirstname.nextSibling.nextSibling
        span.innerText='Digite o nome corretamente'
    
    } else{
    
        inputfirstname.classList.remove('inputerror')
    
        let span = inputfirstname.nextSibling.nextSibling
        span.innerText=''
    }
    
    let inputlastname = document.forms['formcadastro'] ['lastname']

    if (!inputlastname.value){

        inputlastname.classList.add('inputerror')

        let span =inputlastname.nextSibling.nextSibling
        span.innerText ='Digite seu sobrenome'

    } else {

        inputlastname.classList.remove('inputerror')

        let span = inputlastname.nextSibling.nextSibling
        span.innerText=''
    }
    




 }  