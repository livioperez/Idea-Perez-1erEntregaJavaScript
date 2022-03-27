let entrada = prompt("Ingrese (1) para Administracion (2) Para Soporte Tecnico");
if (entrada == 1) {
    alert("Derivando a Administracion");
    alert("Estamos ocupados, Pruebe otra opcion")
    admin();
}else if (entrada == 2) {
    alert("Derivando Soporte Tecnico");
    servicio();
}
 else {
    alert("ERROR"); 
}





function eleccion(){
    let entrada = prompt("Seguimos intentando?");
    if ((entrada == "no" ) || (entrada == "No" ) || (entrada == "NO" )) {
        alert("Nos vemos la proxima!"); 
    }

    else if ((entrada == "si" ) || (entrada == "Si" ) || (entrada == "SI" )){
        admin()
    }
    else if(entrada == ""){
        alert("Ingrese una opcion valida");
        eleccion();
    }
}

function elecion2(){
    let entrada = prompt("Se soluciono el problema? SI - NO");
    if ((entrada == "no" ) || (entrada == "No" ) || (entrada == "NO" )) {
        alert("Le enviaremos a un tecnico a su domicilio. ");
        datoContacto();
       }

    else if ((entrada == "si" ) || (entrada == "Si" ) || (entrada == "SI" )){
        alert("Nos alegra que se haya solucionado el problema!!!")
    }
}

function datoContacto(){    
    let = tuCel = parseInt(prompt("brindenos un numero de contacto"));
    if(tuCel == ""){
        alert("Ingresar dato valido");    
        datoContacto();
    }       
    else {
        alert(`Nos comunicaremos a "${tuCel} a la brevedad, disculpe las molestias ocacionadas" `);
    }
}



function admin(){
      alert("Vamos a elegir otra opcion")    
    let entrada = prompt("Ingrese nuevamente (1) para Administracion o (2) Para Soporte Tecnico");    
    if (entrada == 1){
        
        alert( "Lamentablemente no hay personal para atenderlo"); 
        alert("Sorry , we are out of service") ; 
        admin();       
    }
    else if (entrada == 2) {
        alert("Escogiste Soporte Tecnico");
        servicio();
    }
     else if ((entrada != 1 ) || (entrada != 2 )) {
        alert("Ingresa una opcion valida"); 
    }
    
}
function servicio(){
    alert("Vas a hablar con Roman, pero antes te pedimos un dato");
    let nombre = prompt("Ingrese su Nombre");
    //nuevo intento
        if (nombre == ""){
            alert("Ingrese un nombre valido");
            servicio()
        }

         else{
        alert(`Hola "${nombre}" soy Roman, estoy aca para ayudarte \n Te brindo 2 opciones`);
        let soporte = prompt("Sin Internet ingresa: ( 1 ) \n Sin cable ingresa: ( 2 )");
        //vemos si funciona
        if (soporte == 1) {
            alert("Desenchufa el modem por 1 minuto y volve a enchufar");

            elecion2();
            
        }else if (soporte == 2) {
            alert("No te preocupes, en 10 minutos volveras a tener Cable");   
            eleccion();        
        }
         else {
            alert("ERROR"); 
        }
    }
    }