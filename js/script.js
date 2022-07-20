function postarComentario() {
    var nome        = document.getElementById('nome').value;
    var comentario  = document.getElementById('comentario').value;
    var postagem    = document.getElementById('comentarios');
    var corTexto    = document.getElementById('cor-texto').value;
    var corFundo    = document.getElementById('cor-fundo').value;


    // += faz com o que os comsntrios ficam um encima do outro, o <strong> deixa em negrito, nesse caso o nome do usuario nos comentarios  fica em negrito.
    postagem.innerHTML += '<div class="postagem" style="color; ' + corTexto + '; background-color: ' + corFundo + ';"><strong>' + nome + '</strong><hr /><br />' + comentario + '</div>';

    document.getElementById('nome').value       ='';
    document.getElementById('comentario').value ='';
}