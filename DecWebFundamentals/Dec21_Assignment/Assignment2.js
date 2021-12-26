/**
  Q2.Check whether the given chracter is a vowel or not. (Also check for capital characters).

  ## Test Cases====>
  *                 if char=A then vowel else consonant
                    if char=p then vowel else consonant
                    if char=Ahhs then vowel else consonant
                    if char=mmm then vowel else consonant
                    if char=qqq then vowel else consonant
                
  ## Approach=====>
  *                  if char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || 
                       char="a" || char == "e" || char == "i" || char == "o" || char == "u" || 
                    print char is vowel   
                    else 
                        print consonant
    
  ## Approach=====>
  *                  if("aeiouAEIOU.indexOf(char) !=-1") then print vowel else print consonant
   
  ## Approach=====>
  *                  if("aeiouAEIOU".contain(char)) then print vowel else print consonant
                    
  ## Approach=====>
  *                 ['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0).toLowerCase()) then print vowel else print consonant                  


  ## Solution ====>

 */

  let char=prompt("Please enter the Character")

  if(['a', 'e', 'i', 'o', 'u'].includes(char.charAt(0).toLowerCase())){
    alert("Character "+ char  + "is Vowel")
  }else{
      alert("Character "+ char  + "is Consonant")
  }