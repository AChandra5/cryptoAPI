const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false" //API url stroed in variable
const getApi = async () =>{
    const response = await fetch(apiUrl) //data is in json format
    var data = await response.json(); //converted to object
    console.log(data)


    //same data fetching using .then
    /*
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then((data)=>{return data.json()})
    */

    let tableData = ""
    let img = document.createElement("img")
    document.body.appendChild(img) //creating image element and appending it to the page.
    data.map((items)=>{
        tableData += `<tr>
        <td><img src="${items.image}" alt="" className="src" width="25" height="25">${items.name}</td>
        <td>${items.symbol.toUpperCase()}</td>
        <td>$${items.current_price.toLocaleString()}</td>
        <td>$${Number(items.total_supply).toLocaleString()}</td>
        <td id =${items.id} style="color:red">${Math.round(items.price_change_percentage_24h * 100)/100}%  </td>
        <td>Mkt cap: $${Number(items.fully_diluted_valuation).toLocaleString()} </td>

      </tr>`
    })

    
    document.getElementById("table-body").innerHTML=tableData //rendering the data to the  html table


}
getApi()

