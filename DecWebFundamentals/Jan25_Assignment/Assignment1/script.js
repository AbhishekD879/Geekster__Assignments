let tableCreator=(arr)=>{
    let tbody=document.getElementById('main')
    arr.forEach((currency)=>{
        let newrow=document.createElement('div')
        newrow.className="card"
        let child=`
        <div class="card__top">
          <h3>${currency.symbol}</h3>
        </div>
        <div class="card__bottom">
          <div class="card__bottom__top">
            <div class="card__bottom__top__items">
              <p>Volume</p>
              <p>${currency.volume}</p>
            </div>
            <div class="card__bottom__top__items">
              <p>Count</p>
              <p>${currency.count}</p>
            </div>
            <div class="card__bottom__top__items">
              <p>OpenPrice</p>
              <p>${currency.openPrice}</p>
            </div>
            <div class="card__bottom__top__items">
              <p>WeightedAvgPrice</p>
              <p>${currency.weightedAvgPrice}</p>
            </div>
          </div>
        </div>
      
      `
        newrow.innerHTML=child
        tbody.appendChild(newrow)           
        console.log(currency);
    })

}

fetch("https://api2.binance.com/api/v3/ticker/24hr").then((obj)=>{
    return obj.json()
}).then(data=>{
    
    tableCreator(data)
})
