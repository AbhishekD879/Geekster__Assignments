let sizeOfArray=document.getElementsByClassName('sizeOfmatrix')[0]

let sizeOfmatrixSubmit=document.getElementsByClassName('sizeOfmatrixSubmit')[0]
let matrixContainer=document.getElementsByClassName('matrixContainer')[0];
sizeOfmatrixSubmit.addEventListener('click',(event)=>{
    
    event.preventDefault()
    matrixContainer.innerHTML=""
    matrixContainer.style.gridTemplateColumns=`repeat(${sizeOfArray.value},1fr)`
    matrixContainer.style.gridTemplateRows=`repeat(${sizeOfArray.value},1fr)`
    for(let i=0 ;i<Number(sizeOfArray.value);i++){
        
        for(let j=0 ;j<Number(sizeOfArray.value);j++){

            let cell=document.createElement("div")
            cell.className="cell"
            matrixContainer.appendChild(cell)
            cell.setAttribute("contenteditable", true)
        }
    //    let nextline=document.createElement("br")
    //    matrixContainer.appendChild(nextline)
        
    }

})

let calculate=document.getElementsByClassName('calculate')[0]

    calculate.addEventListener('click',()=>{
        let twoDmatrix = new Array(Number(sizeOfArray.value));

            for (var i = 0; i < twoDmatrix.length; i++) {
                twoDmatrix[i] = new Array(Number(sizeOfArray.value));
                }
        
        let tempArray=[]
        let cells=document.querySelectorAll('.cell')
        cells.forEach((cell)=>{
            tempArray.push(Number(cell.textContent))
        })
        console.log(tempArray);

        let count=0
         for(let i=0;i<Number(sizeOfArray.value);i++){
             for(let j=0;j<Number(sizeOfArray.value);j++){
                twoDmatrix[i][j]=tempArray[count]
                count++
             }
             
         }
         
         let LeftDiagonal__Sum__outputBox=document.getElementsByClassName('LeftDiagonal__Sum__outputBox')[0];
         LeftDiagonal__Sum__outputBox.textContent=leftDiagonalSum(twoDmatrix)
         let RightDiagonal__Sum__outputBox=document.getElementsByClassName('RightDiagonal__Sum__outputBox')[0];
         RightDiagonal__Sum__outputBox.textContent=rightDiagonalSum(twoDmatrix)
    })

    function leftDiagonalSum(matrix){
        let sum=0
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix.length;j++){

                if(j===i) sum += matrix[i][j];

            }
        }
        return sum;
    }

    function rightDiagonalSum(matrix){
        let sum=0
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix.length;j++){

                if(j+i===matrix.length-1) sum += matrix[i][j];

            }
        }
        return sum;
    }
