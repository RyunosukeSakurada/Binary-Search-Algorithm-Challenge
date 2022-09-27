var doSearch = function(array, target) {
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
      var pivot = Math.floor((left + right)/2);
      if(array[pivot] === target) {
        return pivot;
      }else if(array[pivot] < target){
        left = pivot + 1;
      }else {
        right = pivot - 1;
      }
  }

    return -1;
  };