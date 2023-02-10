import { useState } from "react"

export default function Usuario(props){
  const [nomeDoUsuario, setNomeDoUsuario] = useState("")
  const [imagemPerfil, setImagemPerfil] = useState("")
  
  let frase = !nomeDoUsuario ? "anonymous" : nomeDoUsuario
  let url = !imagemPerfil ? "assets/img/catanacomics.svg" : imagemPerfil
  function trocarNome(){
    const novoNome = prompt("Qual eh o seu nome?").trim();
    if(novoNome.length > 0){
    setNomeDoUsuario(novoNome)
  }
  }
  function trocarImagemPerfil(){
    const novaImagem = prompt("Insira url da nova imagem").trim();
    if(novaImagem.length > 0){
    setImagemPerfil(novaImagem)
  }
  }
    return(
        <div class="usuario">
          <img data-test="profile-image" onClick={trocarImagemPerfil}src={url} alt={props.alt}/>
          <div class="texto" data-test="name">
            <span>
              <strong>{frase}</strong>
              <ion-icon data-test="edit-name" name="pencil" onClick={trocarNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}
