

//1 Inch to Feet
function inchToFitConvert(inchi){
    return feet = inchi/12;
       
    
 
    
}
var test =inchToFitConvert(12);
console.log(test);
//2 Feet to mile
function feetToMileConvert(feet){
    var mile = feet/5280;;
     return mile ;
}

console.log(feetToMileConvert(5280));


//3 Calcualte 
function needCubicFeet(chair,table,bed){
     var table,chair,bed,countCubic;
     chairCubic = chair *1;
     tableCubic = table*3;
     bedCubic = bed*5
     countCubic =(tableCubic+chairCubic+bedCubic);
     console.log(countCubic);
     
}needCubicFeet(5,2,1);


//4 Calculation
function karimShahebIt(building){
     var bricks,height1,height2,height3;
     height1 = building*15*1000;
     height2 = (building-10)*12*1000+(10*15*1000);
     height3 = (building-20)*10*1000+(10*12*1000)+(10*15*1000);

    if(building<=10){
     bricks =height1;
       
       
    }
    else if(building<=20){
        
     bricks = height2;
    }else{

      
     bricks = height3;
    }

   console.log('The Number of Bricks requird for a '+building+'-storey building: '+bricks+'.');
}
karimShahebIt(22);





//5 no solution

var friendName = ['Shakib','Rony','Rakib','Ashraful','Shohag','Ali'];
function bossomFriend(name){

     var len = name.length;
var i,j;
for(i=0;i<len-1;i++){
     for(j = 0;j<len-1;j++){
                    if(name[j].length>name[j+1].length){
                         var temp =name[j];
                         name[j] = name[j+1];
                          name[j+1] = temp;
               }
           

     }
    
} for(i=0;i<len;i++){
     console.log('My firend\'s  name is the shortest word: '+name[0]+ '(' + `${name[0].length}` +')' + '.');
}

}
bossomFriend(friendName);














// for(var i = 0;i<friendName.length-1;i++){

//      for(var j = 0;j<friendName.length-1;j++){
//           if(friendName[j]>friendName[j+1]){
//                var temp = friendName[j];
//                friendName[j] = friendName[j+1];
//                friendName[j+1] = temp;
//      }
 
//      }
     
     
//       for(i=0;i<friendName.length;i++){
//            console.log(friendName[i]);
//       }
//  }


// function bossomFriend(name){
   
//      for(var i = 0;i<name.length-1;i++){
//          if(name[i]>name[i+1]){
//           var temp = name[i];
//           name[i] = name[i+1];
//           name[i+1] = temp;
     
//          }
         
          
//      }
    
//      for(i=0;i<name.length;i++){
//           console.log(name);
//      }
// }

//  bossomFriend(friendName);


