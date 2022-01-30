let tableCreator=(arr)=>{
    let tbody=document.getElementById('tbody')
    arr.forEach((currency)=>{
        let newrow=document.createElement('tr')
        let child=`<td>${currency.symbol}</td>
                   <td>${currency.volume}</td>
                   <td>${currency.count}</td>
                   <td>${currency.openPrice}</td>
                   <td>${currency.weightedAvgPrice}</td>`
        newrow.innerHTML=child
        tbody.appendChild(newrow)           
        console.log(currency);
    })

}

fetch('https://api2.binance.com/api/v3/ticker/24hr').then((obj)=>{
    console.log(obj);
   return obj.json()
}).then((data)=>{
    console.log(data);
    tableCreator(data)
}).catch((err)=>console.log(err))


