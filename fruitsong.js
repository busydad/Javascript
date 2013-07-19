var fruit = ["Apples", "Bananas", "Apeles", "Banaenaes", "Eeples", "Benenees", "Ipples", "Bininies", "Oples", "Bononos", "Uuples", "Bununus"];

 for (var i = 0; i < fruit.length; i+= 2){

  if (i===0){ 
    var eat = " eat "; 
  }

  else if (i===2){
    eat = " ate "; 
  }
     
  else if (i===4){
     eat = " eet "; 
  }

  else if (i===6){
     eat = " ite "; 
  } 

  else if (i===8){
   eat = " oat "; 
  } 

  else { 
   eat = " uut ";
  } 

  console.log("I like to" + eat + eat + eat + fruit[i] + " and " + fruit[i+1]);
}