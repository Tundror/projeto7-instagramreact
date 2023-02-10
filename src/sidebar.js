import Usuario from "./usuario.js";
import Sugestoes from "./sugestoes.js";
export default function Sidebar(){
    return(
    <div class="sidebar">
        <Usuario alt="imagem de perfil"/>
        <Sugestoes />
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}