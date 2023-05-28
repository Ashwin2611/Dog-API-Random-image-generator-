const dogimagediv= document.getElementById('dogimage')
const button=document.getElementById('image')
function fake(){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message)
      dogimagediv.innerHTML = `<img src='${json.message}' height=400px width=500px/>`
    })
}
// button.onclick=()=>fake()

