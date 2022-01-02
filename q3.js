alert("Prime Or Not")                    
let n=parseInt(prompt("Enter a number"))
let prime=true;
for(i=2;i<Math.sqrt(n);i++){
    if(n%i===0){ 
        prime=false
        break;
    }
}

if(prime){
    alert(n+" is  prime number");
}else{
    alert(n+" is not prime number");
}