let listaDeUsuarios = []
let isLista = false;


 function Usuario(id, nome, telefone, senha){
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.senha = senha;
  }

let req = () => {    
    let request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:8080/pedidos')
    request.onload = () => {
        
        let data = JSON.parse(request.responseText)
        criarUsuario(data)
        listarUsuarios(listaDeUsuarios)
    }
    request.send()
}

let criarUsuario = (data) =>{ 
        data.forEach(element => {
        usuario = new Usuario(element.usuario.id,element.usuario.nome,element.usuario.telefone,element.usuario.senha)
        if(estaNaLista(listaDeUsuarios, usuario.id)== false || listaDeUsuarios.length == 0) listaDeUsuarios.push(usuario)
    })
}

let estaNaLista = (listaDeUsuarios, id) =>{
    isLista = false
    listaDeUsuarios.forEach(usuario =>{
        if(usuario.id == id) isLista = true;
    })
    return isLista
}

let listarUsuarios = (listaDeUsuarios) => {
    let divUsuarios = document.getElementById('div')
    htmltxt = " "
    listaDeUsuarios.forEach(usuariotxt =>{
        htmltxt+=`<h1>${usuariotxt.nome}<h1>`
    })
    divUsuarios.innerHTML+=htmltxt
}

Usuario.prototype.toString = function usuarioToString() {
    let u = `Nome:${usuario.nome}`
    return u
}