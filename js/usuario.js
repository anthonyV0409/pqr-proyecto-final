fetch("https://anthonyv0409.github.io/json/data.json")
.then(response=>response.json())
.then(datos=>{
    console.log(datos[0])
    for(i=0;i<3;i++){
        if(datos[i].Tipo_de_usuario=="estudiante"){
            document.getElementById('Nombre').value = datos[i].Nombre;
            document.getElementById('Apellido').value = datos[i].Apellido;
            document.getElementById('Correo').value = datos[i].Correo;
            document.getElementById('Cargo').value = datos[i].Tipo_de_usuario;
            document.getElementById('Celular').value = datos[i].Celular;
            document.getElementById('cedula').value = datos[i].Cedula;
        }
        
    }        
        
    
})