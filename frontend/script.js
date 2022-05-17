const headerComponent = `
    <header class="header">
        <h3>Best Beers</h3>
        <button class="material-symbols-outlined">menu</button>
    </header>
    
`
const mainComponent = `<div id="main"></div>`

const cardComponent = ({title, sub, text}, index) => `
    <div class="card">
        <div class="numCirlce">${index + 1}</div>
        <p class="title">${title}</p>
        <p class="sub">${sub}</p>
        <p class="text">${text}</p>
        <button class="detBtn">
            details<span class="material-symbols-outlined arrow">arrow_right_alt</span>
        </button>
    </div>
`


window.addEventListener("load", () => {
    console.log(beers);
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", headerComponent)
    rootElement.insertAdjacentHTML("beforeend", mainComponent)
    const main = document.getElementById("main")
    const cards = beers.cards.map((card, index) => cardComponent(card, index)).join("") // ez a join kell a "," szarság kiküszöböléséhez
    console.log(cards)
    main.insertAdjacentHTML("beforeend", cards) 
    

    
})

