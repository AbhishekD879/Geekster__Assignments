
    
   

    let sumbitBtn=document.getElementsByClassName("submitBtn")[0]
    sumbitBtn.addEventListener('click',(event)=>{
        event.preventDefault()

        let outputCanvas=document.getElementsByClassName("output")[0]
        let patternType=document.querySelectorAll(".radio__input")
        let n=document.getElementsByClassName("Ninput")[0].value
        n=Number(n)
        let pattern=" "

        let invertedhalfPyramid=(n)=>{

            for(let i = n; i >= 1; i--)
            {
                for(let j = 1; j <= i; ++j)
                    {
                        pattern += " * ";
                    }
                    pattern += " <br> ";
            }
            outputCanvas.innerHTML=pattern
        }

        let halfPyramid=(n)=>{
           
            for(var i=1; i<=n; i++){
                for(var j=1; j<i+1; j++){
                   pattern += " * ";
                }
                pattern += " <br> ";
            }
            
            outputCanvas.innerHTML=pattern
        }

        let invertedHallow=(n)=>{
            let i,j,k=0
            for (i = 0; i < n; i++)
                {
                    pattern += " * ";
                }
                for(i=n; i>=1;--i)
                {
                for(j=0; j < n-i; ++j)
                while (k != (2 * i - 1)) {
                if (k == 0 || k == 2 * i - 2)
                pattern += " * ";
                else
                pattern += "&nbsp";
                k++;
                
                }
                k = 0;
                pattern += " <br> ";
                }
            outputCanvas.innerHTML=pattern      
        }

        let fullPyramid=(n)=>{
            let i,j,k=0
            for(i = 1; i <= n; ++i, k = 0)
                {
                for(j = 1; j <= n-i; ++j)
                {
                    pattern += "&nbsp";
                }

                while(k != 2 * i-1)
                {
                    pattern += " * ";
                ++k;
                }
                pattern += " <br> ";
                }

                outputCanvas.innerHTML=pattern      
        }

        let invertedFullPyramid=(n)=>{
            let i,j,k=0
            for(i=n; i>=1; i--)
            {
            for(j=0; j < n-i; ++j)
            {
                pattern += "&nbsp";
            }
            
            for(j=i; j <= 2*i-1; ++j)
            {
                pattern += " * ";
            }
            
            for(j=0; j < i-1; ++j)
            {
                pattern += " * ";
            }
            
            pattern += " <br> ";
            }
            outputCanvas.innerHTML=pattern 
        }

        let HollowFullPyramid=(n)=>{
            let i,j,k=0
            for (i = 1; i <= n; i++)
                {
                for (j = i; j < n; j++) {
                    pattern += "&nbsp";
                }
                while (k != (2 * i-1)) {
                if (k == 0 || k == 2 * i-2)
                pattern += " * ";
                else
                pattern += "&nbsp";
                k++;
                ;
                }
                k = 0;
                pattern += " <br> "; // print next row
                }
                for (i = 0; i < 2 * n-1; i++) {
                    pattern += " * ";
                }

                outputCanvas.innerHTML=pattern 
        }

        if(document.getElementById('Half_Pyramid').checked){
            outputCanvas.style.textAlign="left";
            outputCanvas.innerHTML=""
            halfPyramid(n)
        }else if(document.getElementById('Inverted_half_Pyramid').checked){
            outputCanvas.style.textAlign="left";
            outputCanvas.innerHTML=""
            invertedhalfPyramid(n);
        }else if(document.getElementById('Inverted__Hollow__Half').checked){
            outputCanvas.style.textAlign="left";
            outputCanvas.innerHTML=""
            invertedHallow(n)
        }else if(document.getElementById('Full__Pyramid').checked){
            outputCanvas.innerHTML=""
            outputCanvas.style.textAlign="center";
            fullPyramid(n)
        }else if(document.getElementById('Inverted_Full_Pyramid').checked){
            outputCanvas.innerHTML=""
            outputCanvas.style.textAlign="center";
            invertedFullPyramid(n)
        }else if(document.getElementById('Full__Hallow__Pyramid').checked){
            outputCanvas.innerHTML=""
            outputCanvas.style.textAlign="center";
            HollowFullPyramid(n)
        }

        
        
        
        

        
        
        
        console.log(patternType);
        // patternType.forEach((pattern)=>{
            
        //     switch(pattern.value){
        //         case "Half_Pyramid":
        //             outputCanvas.innerHTML=""
        //             halfPyramid(n)
        //             break;
        //         case "Inverted_half_Pyramid":
        //             outputCanvas.innerHTML=""
        //             invertedhalfPyramid(n)
        //             break;
        //     }
            
        //     console.log(pattern.value);
        // });
        
    })


