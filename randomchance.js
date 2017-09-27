var quat;

function random(quat){
   while (quat !== 0) 
   {
        var win = (Math.floor(Math.random() * 100));
        console.log("you won " + win + " times"); 
        if(win==100){
            quat = quat + (Math.floor((Math.random() * 50) + 100 ));
            console.log("you have " + quat + "quaters");
            return quat;    
        }
        else {
            quat--;
         
        }
        
    }
  console.log("you have zero quaters");
}

random(70);