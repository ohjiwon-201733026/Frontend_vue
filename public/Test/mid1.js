let random=[];
const MIN=1,MAX=100;
for(let i=0;i<100;++i){
    random[i]=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}

let sum=0;
sum=random.reduce((a,b)=>a+b);
let average=sum/100;
console.log(average.toFixed(1));