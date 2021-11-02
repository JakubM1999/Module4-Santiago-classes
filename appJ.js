
let page = 1


async function get_items(){
    /*connect to api*/
    const conn = await fetch(`https://ecuaguia.com/iceland/api-get-items?page=${page}`);
    const response = await conn.json()
    console.log(response)

    

    // const item = {"id":10, "name":"Mierzejek"}
    response.forEach( item => {
            let final_price = item.price + (item.price * 24.50)/100
            final_price = final_price.toFixed(2)
            let div_item = /*html*/
                    `<div class="item">
                        <div>${item.id}</div>
                        <div>${item.name}</div>
                        <img src="https://ecuaguia.com/iceland/images/${item.image}">
                        <h1>${final_price} ISK</h1>
                    </div>`
                    
    document.querySelector("#items").insertAdjacentHTML("beforeend", div_item)
    })

    page ++

}


get_items()
