function sum(a){
    let temp=0;
    for(let i=0;i<a.length;++i)
         temp+=a[i];
        return temp;
}

function test_sum(callback){
    let array=[];
    for(let i=0;i<5;++i){
        array[i]=Math.floor(Math.random()*(10-0+1)+0);
    }
    console.log(array);
    let result=callback(array);
    console.log(result);
    
}

for(let i=0;i<5;++i){
    test_sum(sum);
}
