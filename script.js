console.log ("to funcionando")

const data = [ 
    {
        image: "https://picsum.photos/300/300",
        description: "I'm a random image from Picsum Photos!"
    },

    {
        image: "https://picsum.photos/301/300",
        description: "I'm a random image from Picsum Photos!"
    },

    {
        image: "https://picsum.photos/302/300",
        description: "I'm a random image from Picsum Photos!"
    },

    {
        image: "https://picsum.photos/303/300",
        description: "I'm a random image from Picsum Photos!"
    },

    {
        image: "https://picsum.photos/304/300",
        description: "I'm a random image from Picsum Photos!"
    },

    {
        image: "https://picsum.photos/305/300",
        description: "I'm a random image from Picsum Photos!"
    }
]

const container = document.getElementById("cards.container")

function loadPage() {
    
    
    const cardHTML = data.map(card => `
        <div class="card">
        <img src=${card.image} alt="" class="card-image">
        <p>${card.description}</p>
        <button class="button">Saiba Mais</button>
        </div>
        
        `).join("")
        
        container.innerHTML = cardHTML;
}