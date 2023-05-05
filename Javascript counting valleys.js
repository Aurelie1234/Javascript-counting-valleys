function countingValleys(steps, path) {
    // Write your code here
let height=0;
  let heightArr=[];
  let count=0;


  for(let i=0; i<steps; i++){
    path[i]=="D"?height--:height++;
    heightArr.push(height);
    }
  
  for(let j=0; j<steps; j++){
     if(heightArr[j]==0 && heightArr[j-1]<0){
      count++; 
     }
   }


return count;
}
