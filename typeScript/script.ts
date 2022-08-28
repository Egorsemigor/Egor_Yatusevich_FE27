//map
function customMap(cb){

  let result = [];
  
  for(let i = 0; i < this.length; i++){
      result.push(cb(this[i], i, this))
  }
   return result;
  
  }
  
  
  Array.prototype.customMap = customMap;
  
  // // let arr = [1,2,3,4];
  
  // const arrMap = arr.customMap((el, index) =>{
  // return el += el;
  // })
  // console.log(arrMap)
  
  //filter
  function customFilter(arr){
      let filtered = [];
      for (let i = 0; i < this.length; i++){
          const filteredArr = arr(this[i], i, this)
          if(filteredArr) {
              filtered.push(this[i]);
          }
      }
  return filtered;
  }
  
  Array.prototype.customFilter = customFilter;
  
  // const letters = ['a','a', 'a', 's','f','g','h'];
  
  // const filteredResult = letters.customFilter((el, index, array) => {
  //     return el === 'a'
  // })
  
  // console.log(filteredResult);
  
  //reduce
  
  function customReduce (cb, initialValue){
      let acc;
      let curr;
  
      if(!this.length && !initialValue){
          throw new Error ('sdfghjm')
          //map
function customMap(cb){

  let result = [];
  
  for(let i = 0; i < this.length; i++){
      result.push(cb(this[i], i, this))
  }
   return result;
  
  }
  
  
  Array.prototype.customMap = customMap;
  
  // // let arr = [1,2,3,4];
  
  // const arrMap = arr.customMap((el, index) =>{
  // return el += el;
  // })
  // console.log(arrMap)
  
  //filter
  function customFilter(arr){
      let filtered = [];
      for (let i = 0; i < this.length; i++){
          const filteredArr = arr(this[i], i, this)
          if(filteredArr) {
              filtered.push(this[i]);
          }
      }
  return filtered;
  }
  
  Array.prototype.customFilter = customFilter;
  
  // const letters = ['a','a', 'a', 's','f','g','h'];
  
  // const filteredResult = letters.customFilter((el, index, array) => {
  //     return el === 'a'
  // })
  
  // console.log(filteredResult);
  
  //reduce
  
  function customReduce (cb, initialValue){
      let acc;
      let curr;
  
      if(!this.length && !initialValue){
          throw new Error ('sdfghjm')
          console.log(array);

    //task_5
    console.log(array[0][1].teachers)
    array.sort(function(a,b){
        return a[1].teachers - b[1].teachers;
    })
    console.log(array.reverse());

