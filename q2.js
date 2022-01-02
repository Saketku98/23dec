alert("This program prints all even Number less than or Equal to N")                
let n=prompt("Enter the Number")
let allEven=[]
for(let i=1;i<=parseInt(n);i++){

    if(i%2===0){
        console.log(i);
        allEven.push(i)
    }

}
alert(allEven)