module.exports = function longestConsecutiveLength(array) {
  const sequenceObj = new Set ();
  let length = 0;
  
  for (let i=0, len = array.length; i<len; i++){
    sequenceObj.add(array[i]);
  }
  
  for (let num=0, len = array.length; num < len; num++){
    //if element is the starting elem of a sequence
    if(!(sequenceObj.has(array[num]-1))) {
      //check for the next element in sequence
      let current = array[num];
      while (sequenceObj.has(current)){
        current++;
      }
      length = Math.max(length, current - array[num]);
    }
  }
    
  return length;
}