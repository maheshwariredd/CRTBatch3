
//let n = 100
//for (let i=0 ; i <= n ; i++){
  //  console.log(i);

   // if(i%2==0){
        //console.log(i + "this is an even nuber");
   // }
    //else{
       // console.log(i + "this is odd number");
   // }
//}

// print square stars

// Dimensions of the matrix
// Function to print a 5 x 5 matrix
// Size of the matrix (5 x 5)
  
    //for (let i=0 ; i<=5 ; i++){
      //for (let j =0 ; j <=5 ; j++){
        //document.write("*");
      //}
      //document.write("<br>")
    //}

    //for (let i=0 ; i<=5 ; i++){
      //for (let j =0 ; j <=5 ; j++){
        //if(i>=j){
          //document.write("*")

        //}
      //}
      //document.write("<br>")
   // }

    for (let i=0 ; i<=5 ; i++){
      for (let j =0 ; j <=5 ; j++){
        if(i==j || i+j == 6){
          document.write("*")

        }
      }
      document.write("<br>")
    }