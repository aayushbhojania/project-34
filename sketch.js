//Create variables here
var dog,happydog,database;
var foodS,foodstock;
function preload()
{
  //load images here
  dogImage = loadImage("images/Dog.png")
  hdogImage = loadImage("images/happydog.png")
 
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.scale = 0.15
  dog.addImage(dogImage);
 
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
     x=0; 
    }
    else{
       x=x-1; 
      }
       database.ref('/').update({
          Food:x 
        })
}


  function draw() {  
   background(46,139,87);
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(hdogImage);
   }
  drawSprites();
  //add styles here
     fill ("black");
     text("Note : Press UP_ARROW Key to feed Drago milk",200,50);

     }



