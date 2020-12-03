/*var button = document.getElementById('button');
button.addEventListener('click',() =>{
    var male = document.getElementById('mal').value;
    var female = document.getElementById('femal').value;

    //name-alert


    if(male == "" && female == ""){
        alert("Please Enter Your  Name & Your Crush Name");
    }
    else if(female == ""){
        alert("Please Enter Your Crush Name");
    }
    else  if(male == ""){
        alert("Please Enter Your Name");
    }

    //removing spaces in input
    male = male.replace(/\s+/g, "");
    female = female.replace(/\s+/g, "");

    //convert string into array
    male = male.split('');
    female = female.split('');

    //variables
    var i,j, count=0,a,b;

    //length
    a = male.length ,b = female.length;


    //flames logic
    if(a<b){
       for(i = 0; i < a;i++){
        for(j=0; j< b ;j++){
            if(male[i] == female[j]){
                console.log(male[i]);
                count++;
                 female.splice(j,1)
                console.log(female);
                break;
            }
        }      
       }
     }
     else{
        for(i = 0; i < b;i++){
            for(j=0; j< a ;j++){
                if(female[i] == male[j]){
                    count++;
                    male.splice(j,1);
                    break;
                }
            }      
           }
     }
  

     //output
   console.log(a);
   console.log(b);
   var c ,realCount = 0, d, flames = "flames";
   c = a + b -2*count;
   console.log(c);
   flames = flames.split("");
   console.log(flames);
  
      
            realCount = c-1;
       for(i=0; i< 5; i++){
           
          
        flames.splice(realCount,1)
        console.log(flames)
        var rem = flames.slice(realCount,flames.length);
         flames.splice(realCount,flames.length)
        rem.reverse();
        console.log(flames)
        console.log(rem)
        for(j=0;j<rem.length;j++){
            flames.unshift(rem[j]);
        }
        console.log(flames)
       
     }
 
       
       
  
}); */
var button = document.getElementById('button');
button.addEventListener('click',() =>{
    var male = document.getElementById('mal').value;
    var female = document.getElementById('femal').value;
    let flamesObj = {
      "f": "Oops! It is better to be friends",
      "l": "Congrats! You are lovers",
      "a": "He/She is affectionate on you",
      "m": "Congrats! You will marry him/her soon!",
      "e": "Enemies",
      "s": "Sister/Brother",
   }

    //name-alert


    if(male == "" && female == ""){
        alert("Please Enter Your  Name & Your Crush Name");
    }
    else if(female == ""){
        alert("Please Enter Your Crush Name");
    }
    else  if(male == ""){
        alert("Please Enter Your Name");
    }

    //removing spaces in input
    male = male.replace(/\s+/g, "");
    female = female.replace(/\s+/g, "");

    //convert string into array
    male = male.split('');
    female = female.split('');

    //variables
    var i,j, count=0,a,b;

    //length
    a = male.length ,b = female.length;


    //flames logic
    if(a<b){
       for(i = 0; i < a;i++){
        for(j=0; j< b ;j++){
            if(male[i] == female[j]){
                console.log(male[i]);
                count++;
                 female.splice(j,1)
                console.log(female);
                break;
            }
        }      
       }
     }
     else{
        for(i = 0; i < b;i++){
            for(j=0; j< a ;j++){
                if(female[i] == male[j]){
                    count++;
                    male.splice(j,1);
                    break;
                }
            }      
        }
     }

   let flames = ["f", "l", "a", "m", "e", "s"];
    let nonMatchingCount = a + b -2*count;
   if(nonMatchingCount == 0){
       alert("You are not eligible for FLAMES");
   }
   else{
   let removalCount = nonMatchingCount;
   let removalIndex;
   while(flames.length !== 1) {
    let remainder = removalCount % flames.length;
    if(remainder == 0) {
      removalIndex = flames.length - 1;
    } else {
      removalIndex = remainder - 1;
    }
    let remainingArr = flames.slice(removalIndex+1, flames.length);
    flames.splice(removalIndex, flames.length);
    flames.unshift(remainingArr);
    console.log(flames);
    flames = flames.flat();
    console.log(flames);
   }
   console.log(flamesObj[(flames[0])]);
   alert(flamesObj[(flames[0])])
}

});