const Oper = () => {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;
    
    localStorage.setItem("users", user);
    localStorage.setItem("passe",pass)
    usuario_passstora = window.localStorage
    entro = null
   
    fetch("https://anthonyv0409.github.io/json/data.json")
        .then(response => response.json())
        .then(datos => {
            console.log(datos[0])
            for (i = 0; i < 3; i++) {
                if (datos[i].usuario == user) {
                    if (datos[i].contraseña == pass) {
                        if (datos[i].Tipo_de_usuario == "Admin") {
                            window.location.href = "../html/administrador.html"
                        } else {
                            if (datos[i].Tipo_de_usuario == "estudiante") {
                                window.location.href = "../html/Usuarios.html"
                            } else {
                                window.location.href = "../html/asistente.html"
                                entro = true

                            }
                        }
                    }
                }
            }
            
            
        })
        
}