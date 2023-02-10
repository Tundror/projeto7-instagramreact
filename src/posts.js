import { Fragment, useState } from "react"

export default function Posts(){
    const itens = [{userimg:"assets/img/meowed.svg", useralt:"meowed", username:"meowed", img:"assets/img/gato-telefone.svg", alt:"gato-telefone", imglikes:"assets/img/respondeai.svg", altlikes:"respondeai", userLike:"respondeai", likeNumber:103  },
    {userimg:'assets/img/barked.svg', useralt:"barked", username:"barked", img:"assets/img/dog.svg", alt:"dog", imglikes:"assets/img/adorable_animals.svg", altlikes:"adorable_animals" , userLike:"adorable_animals", likeNumber:262  },
    {userimg:"assets/img/barked.svg", useralt:"barked", username:"barked", img:"assets/img/bennieandmaple.jpg", alt:"dog", imglikes:"assets/img/adorable_animals.svg" ,altlikes:"adorable_animals" ,userLike:"adorable_animals", likeNumber:999 }]
    return(
        <div class="posts">
            {itens.map((item)=>  <Post userimg={item.userimg} useralt={item.useralt} username={item.username} img={item.img} alt={item.alt} imglikes={item.imglikes} altlikes={item.altlikes} userLike={item.userLike} likeNumber={item.likeNumber}/>)}
        </div>
    )
}
function Post(props){
  const [like, setLike] = useState("")
  const [likeClass, setLikeClass] = useState("")
  const [bookmark, setBookmark] = useState("")
  const [bookmarkClass, setBookmarkClass] = useState("")
  const [numeroLikes, setNumeroLikes] = useState(props.likeNumber)
  
  let likeState = !like ? "heart-outline" : like
  let likeClassState = !likeClass ? "" : likeClass
  let bookmarkState = !bookmark ? "bookmark-outline" : bookmark
  let bookmarkClassState = !bookmarkClass ? "bookmark-outline" : bookmarkClass
  function likePost(){
    if(likeState==="heart-outline"){
      setNumeroLikes(numeroLikes + 1)
      setLike("heart")
      setLikeClass("vermelho")
    }
    else{
      setLike("heart-outline")
      setLikeClass("")
      setNumeroLikes(numeroLikes - 1)
    }
    }
    function savePost(){
      if(bookmarkState==="bookmark-outline"){
        setBookmark("bookmark")
        setBookmarkClass("preto")
      }
      else{
        setBookmark("bookmark-outline")
        setBookmarkClass("")
      }
      }
    function likePostImg(){
      if(likeState==="heart-outline"){
      setLike("heart")
      setLikeClass("vermelho")
      setNumeroLikes(numeroLikes + 1)
      }
    }
    return(
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.userimg} alt={props.useralt}/>
                {props.username}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img data-test="post-image" onDoubleClick={likePostImg} src={props.img} alt={props.alt}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" onClick={likePost} name={likeState} class={likeClassState}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" onClick={savePost} name={bookmarkState} class={bookmarkClassState}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imglikes} alt={props.altlikes}/>
                <div data-test="likes-number" class="texto">
                  Curtido por <strong>{props.userLike}</strong> e <strong>outras {numeroLikes} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}