var combSort = function(arr){

 var swapped = true;
 //Comb sort additional params
 var gap = arr.length;
 var shrink = 1.3;
 
    // Repeat this loop until we have not had to swap values
    while (swapped && gap !== 1){
      swapped = false;
      //Decrease gap after each iteration by dividing on shrink
      gap = gap/shrink
      gap = Math.ceil(gap)
      
      // Iterate through the array as in bubble, but compare elements with distance = gap
      for(var i = 0; i + gap <= arr.length; i++){
        // If a given value is more than the next, swap them
        if (arr[i] > arr[i+gap]){
          swapped = true;
          var tmp = arr[i];
          arr[i] = arr[i+gap];
          arr[i+gap] = tmp;
        }
      }
      
 
      
    }
    return arr;

};
