let inp = document.querySelector(`.inp1`)
let on = document.querySelector(`.click`)
let h1 = document.querySelector(`.h1`)
let plus = document.querySelector(`.plus`)
let minus = document.querySelector(`.minus`)
let color = document.querySelector(`.color`)


on.addEventListener('click',()=>{
  h1.textContent = inp.value
})

plus.addEventListener(`click`,()=>{
    h1.textContent ++
})

minus.addEventListener(`click`,()=>{
    h1.textContent --
})

color.addEventListener('input', () => {
    h1.style.color = color.value;
})



