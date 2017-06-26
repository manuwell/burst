function click(el){
  let $el = document.querySelector(el)

  if($el){
    $el.click()
  }
}

let handler = new KeyHandler({debug: true})
handler
  .bind("d", ()=> click("#transactions-add-button-bar .expense a"))
  .bind("r", ()=> click("#transactions-add-button-bar .revenue a"))
  .bind("t", ()=> click("#transactions-add-button-bar .transfers a"))

setTimeout(()=>{
  window.addEventListener("keypress", (e)=> handler.handle(e) )
}, 4000)


