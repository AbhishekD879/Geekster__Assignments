// let newLetter=document.createElement("h3")
// console.log(newLetter)
// let newText=document.createTextNode("A")
// let contactlist=document.getElementsByClassName("contact__list")[0];

// let letter=contactlist.appendChild("A")
// letter.appendChild(newText)
alert("All function Work,Wait for Data To be Fetched")
let nameArray=[]
let randomNames= async()=>{
    
    let names= await fetch('https://randomuser.me/api/?results=130').catch((err)=>console.log(err))
    let data= await names.json()
   
    data.results.forEach((eachPersone)=>{
        nameArray.push(eachPersone.name.first +" " + eachPersone.name.last)
    })
   nameArray.sort()
   
   return nameArray
}
let alphabetArray=['A', 'B', 'C', 'D',' E', 'F',' G',' H', 'I', 'J', 'K', 'L', 'M',' N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']
randomNames().then((resp) => {
   
    // whatever you want to do with the data should go inside this
    alphabetArray.forEach((alphabet,index)=>{

        let newLetter=document.createElement("h3")
    
        let newText=document.createTextNode(alphabet)
        let contactlist=document.getElementsByClassName("contact__list")[0];
        let letter=contactlist.appendChild(newLetter)
        letter.appendChild(newText);

       let nameArrayOfAlphabet= resp.filter((val)=>{if(val[0]==alphabet){
            return val;
        }})
       
        nameArrayOfAlphabet.forEach((val)=>{
            
            let contact__wrapper=document.createElement("div");
               contact__wrapper.className="contact__wrapper";
               letter.insertAdjacentElement("afterend",contact__wrapper)
            let contact=document.createElement("div");
               contact.className="contact";
            let avatar=document.createElement("div");
                avatar.className="avatar";
            let alphaEachContactName=document.createElement("p");
            contact__wrapper.appendChild(contact);
            contact.appendChild(avatar)
            contact.appendChild(alphaEachContactName)
            var fullName = val.split(' '),
            firstName = fullName[0],
            lastName = fullName[fullName.length - 1];
            avatar.innerText=`${firstName[0]}${lastName[0]}`
            alphaEachContactName.innerText=val
            
            

        })

    })
});

let Addcontact=document.getElementsByClassName("AddContact")[0];
Addcontact.addEventListener('click',()=>{
    console.log("hi");
    let input=document.getElementsByClassName("AddContact__input")[0]
    input.style.display="flex";
});

let closeAddcontact__btn=document.getElementsByClassName("closeAddcontact__btn")[0]
closeAddcontact__btn.addEventListener("click",()=>{
    let input=document.getElementsByClassName("AddContact__input")[0]
    input.style.display="none";
})

let Addcontact__btn=document.getElementsByClassName("Addcontact__btn")[0]
Addcontact__btn.addEventListener('click',()=>{
    let input=document.getElementById("input__Contact").value;
    nameArray.push(input)
    let contactlist=document.getElementsByClassName("contact__list")[0];
    contactlist.innerHTML="";
    display(nameArray)
    let inputcon=document.getElementsByClassName("AddContact__input")[0]
    inputcon.style.display="none";
});
//  function for rerendering the display with updated  list after adding new contact
let display=(resp)=>{
   
      
        alphabetArray.forEach((alphabet,index)=>{
    
            let newLetter=document.createElement("h3")
        
            let newText=document.createTextNode(alphabet)
            let contactlist=document.getElementsByClassName("contact__list")[0];
            let letter=contactlist.appendChild(newLetter)
            letter.appendChild(newText);
    
           let nameArrayOfAlphabet= resp.filter((val)=>{if(val[0]==alphabet){
                return val;
            }})
           
            nameArrayOfAlphabet.forEach((val)=>{
                
                let contact__wrapper=document.createElement("div");
                   contact__wrapper.className="contact__wrapper";
                   letter.insertAdjacentElement("afterend",contact__wrapper)
                let contact=document.createElement("div");
                   contact.className="contact";
                let avatar=document.createElement("div");
                    avatar.className="avatar";
                let alphaEachContactName=document.createElement("p");
                contact__wrapper.appendChild(contact);
                contact.appendChild(avatar)
                contact.appendChild(alphaEachContactName)
                var fullName = val.split(' '),
                firstName = fullName[0],
                lastName = fullName[fullName.length - 1];
                avatar.innerText=`${firstName[0]}${lastName[0]}`
                alphaEachContactName.innerText=val
                
                
    
            })
    
        })
    }
// Search Function invoked when searching===
let search=(resp,alp)=>{
    

    alp.forEach((alphabet,index)=>{
    
        let newLetter=document.createElement("h3")
    
        let newText=document.createTextNode(alphabet)
        let contactlist=document.getElementsByClassName("contact__list")[0];
        let letter=contactlist.appendChild(newLetter)
        letter.appendChild(newText);

       let nameArrayOfAlphabet= resp.filter((val)=>{if(val[0]==alphabet){
            return val;
        }})
       
        nameArrayOfAlphabet.forEach((val)=>{
            
            let contact__wrapper=document.createElement("div");
               contact__wrapper.className="contact__wrapper";
               letter.insertAdjacentElement("afterend",contact__wrapper)
            let contact=document.createElement("div");
               contact.className="contact";
            let avatar=document.createElement("div");
                avatar.className="avatar";
            let alphaEachContactName=document.createElement("p");
            contact__wrapper.appendChild(contact);
            contact.appendChild(avatar)
            contact.appendChild(alphaEachContactName)
            var fullName = val.split(' '),
            firstName = fullName[0],
            lastName = fullName[fullName.length - 1];
            avatar.innerText=`${firstName[0]}${lastName[0]}`
            alphaEachContactName.innerText=val
            
            

        })

    })

}

// Searching ===>
let searchbar=document.getElementById("searchBar")
searchbar.addEventListener('change',(event)=>{
    
    var searchable =event.target.value;
    
   if(searchable=""){
       return
   } else{

    let filteredNameArry= nameArray.filter((val)=>{
        searchable =event.target.value;
        
        if(val.toUpperCase().includes(searchable.toUpperCase())){
            
            return val;
        }
    });
    
    let contactlist=document.getElementsByClassName("contact__list")[0];
    contactlist.innerHTML="";
    search(filteredNameArry,[searchable[0].toUpperCase()]);
   }
});
//  Canceling the Search=====>
let cancel__Search=document.getElementById("cancle__search")

cancel__Search.addEventListener('click',()=>{
    searchbar.value=""
    let contactlist=document.getElementsByClassName("contact__list")[0];
    contactlist.innerHTML="";
    display(nameArray)
})
    
// logoc design for creating new element===>
/**
code for creating new element
*/