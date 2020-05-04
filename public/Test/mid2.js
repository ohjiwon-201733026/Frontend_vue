let random=[];
const MIN=1,MAX=100;
for(let i=0;i<100;++i){
    random[i]=Math.floor(Math.random()*(MAX-MIN+1)+MIN);
}

random.sort((a,b)=>b-a);
console.log(random);