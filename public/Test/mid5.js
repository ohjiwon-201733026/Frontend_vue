let array=[];
let MIN=1,MAX=100;
for(let i=0;i<100;++i){
    array[i]=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}
let even=array.filter((e)=>e%2==0);
let sum=even.reduce((a,b)=>a+b);

console.log(sum);