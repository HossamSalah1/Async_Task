



function addAsync(a,b){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(a + b);
        }, 1000);

    })
    
}
addAsync(5, 2).then(resultAsync => {
    console.log(resultAsync);
});

function addSync(a,b){

    return a + b;

}
let result=addSync(2,5);
console.log(result);


