const inc=()=>{
    let add = document.getElementById("sum").innerHTML;
     add++;
     
     document.getElementById("sum").innerHTML=add;
          
} 
 
 
 
 const dec=()=>{
     let decs= document.getElementById("sum").innerHTML;
     if(decs>0)
      decs--;
      document.getElementById("sum").innerHTML=decs;
          
 }


 AOS.init();
 
 