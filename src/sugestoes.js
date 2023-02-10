
export default function Sugestoes(){
    const itens = [ {img:"assets/img/bad.vibes.memes.svg", name:"bad.vibes.memes.svg", reason:"Segue você"},
     {img:"assets/img/chibirdart.svg", name:"chibirdart", reason:"Segue você"},
     {img:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", reason:"Novo no Instagram"},
     {img:"assets/img/adorable_animals.svg", name:"adorable_animals", reason:"Segue você"},
     {img:"assets/img/smallcutecats.svg", name:"smallcutecats", reason:"Segue você"}]
    return(
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {itens.map((item)=>  <Sugestao img={item.img} name={item.name} reason={item.reason}/> )}
          
          </div>   
    )
}
function Sugestao(props){
    return(
    <div class="sugestao">
            <div class="usuario">
              <img src={props.img} alt={props.name}/>
              <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}