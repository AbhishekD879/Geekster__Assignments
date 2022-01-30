let addtask=document.getElementsByClassName("add")[0]
let newtask=document.getElementsByClassName("newtask")[0]
let box=document.getElementById("todocontainer")
let itemsArrayControlData=[]
let itemsupdatedArray;
addtask.addEventListener('click',(event)=>{
    event.preventDefault()
    
    if(newtask.value.length!=0){
        itemsArrayControlData.push(newtask.value)
        let newItem=document.createElement("div")
        newItem.classList.add("item")
        let newItemcheck=document.createElement("input")
        newItemcheck.type="checkbox";
        // newItemcheck.classList.add("checkeer")
        let _2xbtn=document.createElement("button")
        _2xbtn.className="_2xbtn"
        _2xbtn.textContent="2x";
        
        let newItemName=document.createElement("p");
        
        newItemName.innerText=newtask.value;
        newItemName.style.overflowY="hidden"
        box.insertAdjacentElement("afterbegin",newItem)
        newItemName.setAttribute("contenteditable","true")
        newItem.appendChild(newItemcheck);
        newItem.appendChild(newItemName);
        newItem.appendChild(_2xbtn)
        _2xbtn.addEventListener('click',()=>{
            newItemName.textContent=newItemName.textContent+" "+newItemName.textContent
        })
        newtask.value=""
        reRender();
        
    }

})

function reRender(){
    itemsupdatedArray=document.querySelectorAll("div.item");

    if(itemsupdatedArray.length!=0){
        for(let i=0;i<itemsupdatedArray.length;i++){
            itemsupdatedArray[i].childNodes[1].addEventListener('input',()=>{
                console.log("h1");
                let changedItem=itemsupdatedArray[i].childNodes[1].innerText
                itemsArrayControlData.splice(i,1,changedItem)
            })
            itemsupdatedArray[i].childNodes[0].addEventListener('change',()=>{
                if(itemsupdatedArray[i].childNodes[0].checked){
                    itemsArrayControlData.splice(itemsArrayControlData.indexOf(itemsupdatedArray[i].childNodes[1].innerText),1)
                    console.log(itemsArrayControlData);
                    
                    setTimeout(()=>{
                       
                        itemsupdatedArray[i].remove()
                       
                      
                       
                    },200)
                }
            })
        }
    }
}



   

   


