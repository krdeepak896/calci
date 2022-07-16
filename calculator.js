var x;
var y;
function change1(e){
    x=parseInt(e.target.value);
}
function change2(e){
y=parseInt(e.target.value);
}
function Add(){  
 document.getElementById('result').innerText = x+y;
}
function sub(){  
    document.getElementById('result').innerText = x-y;
   }
   function mul(){  
    document.getElementById('result').innerText = x*y;
   }
   function div(){ 
    if(y===0) {
        document.getElementById('result').innerText ='not define';
    }else{
    document.getElementById('result').innerText = x/y;
   }
}