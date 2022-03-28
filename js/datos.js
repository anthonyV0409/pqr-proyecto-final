miStorage = window.localStorage
listaresul = []
const Operusuario = () => {
    var nombre = document.getElementById("Nombre").value;
    var apelld = document.getElementById("Apellidos").value;
    var gene = document.getElementById("Genero").value
    var ide = document.getElementById("number").value;
    var correo = document.getElementById("Correo").value;
    var telefono = document.getElementById("cell").value;
    var fenacimi = document.getElementById("nac").value;
    let informa = {
        nomb: nombre,
        apell: apelld,
        genero: gene,
        cedu: ide,
        corr: correo,
        telef: telefono,
        fecnaci: fenacimi
    }
    listaresul.push(informa)
    miStorage.removeItem("Informacion de usuarios")
    miStorage.setItem("Informacion de usuarios", JSON.stringify(listaresul))
    let tablaref = document.getElementById("usuarios")
    let newtablarow = tablaref.insertRow(-1)
    let newtablarefcell = newtablarow.insertCell(0)
    newtablarefcell.textContent = nombre
    newtablarefcell = newtablarow.insertCell(1)
    newtablarefcell.textContent = apelld
    newtablarefcell = newtablarow.insertCell(2)
    newtablarefcell.textContent = gene
    newtablarefcell = newtablarow.insertCell(3)
    newtablarefcell.textContent = ide
    newtablarefcell = newtablarow.insertCell(4)
    newtablarefcell.textContent = correo
    newtablarefcell = newtablarow.insertCell(5)
    newtablarefcell.textContent = telefono
    newtablarefcell = newtablarow.insertCell(6)
    newtablarefcell.textContent = fenacimi

    let newdeletoption = newtablarow.insertCell(7)
    let deletoption = document.createElement("button")

    deletoption.textContent = "Eliminar"
    newdeletoption.appendChild(deletoption)

    deletoption.addEventListener("click", (event) => {
        console.log(event);
        event.target.parentNode.parentNode.remove()
    })
}

miStorage = window.localStorage
listaresul = []
const Operasistente = () => {
    var nombre = document.getElementById("Nombre").value;
    var apelld = document.getElementById("Apellidos").value;
    var gene = document.getElementById("Genero").value
    var ide = document.getElementById("number").value;
    var correo = document.getElementById("Correo").value;
    var telefono = document.getElementById("cell").value;
    var fenacimi = document.getElementById("nac").value;
    let informa = {
        nomb: nombre,
        apell: apelld,
        genero: gene,
        cedu: ide,
        corr: correo,
        telef: telefono,
        fecnaci: fenacimi
    }
    listaresul.push(informa)
    miStorage.removeItem("Informacion de usuarios")
    miStorage.setItem("Informacion de usuarios", JSON.stringify(listaresul))
    let tablaref = document.getElementById("asistente")
    let newtablarow = tablaref.insertRow(-1)
    let newtablarefcell = newtablarow.insertCell(0)
    newtablarefcell.textContent = nombre
    newtablarefcell = newtablarow.insertCell(1)
    newtablarefcell.textContent = apelld
    newtablarefcell = newtablarow.insertCell(2)
    newtablarefcell.textContent = gene
    newtablarefcell = newtablarow.insertCell(3)
    newtablarefcell.textContent = ide
    newtablarefcell = newtablarow.insertCell(4)
    newtablarefcell.textContent = correo
    newtablarefcell = newtablarow.insertCell(5)
    newtablarefcell.textContent = telefono
    newtablarefcell = newtablarow.insertCell(6)
    newtablarefcell.textContent = fenacimi

    let newdeletoption = newtablarow.insertCell(7)
    let deletoption = document.createElement("button")

    deletoption.textContent = "Eliminar"
    newdeletoption.appendChild(deletoption)

    deletoption.addEventListener("click", (event) => {
        console.log(event);
        event.target.parentNode.parentNode.remove()
    })
}