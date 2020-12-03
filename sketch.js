//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
function preload()
{
  //load images here
  function preload(){
    dog = loadImage("..dogImg.png");
    dog1_img = loadImage("..dogImg1.png");
    
  }
}

function setup() {
  createCanvas(500, 500);
     dog = createSprite(100,200);
  dog.addImage("dog",dog);
  foodStock =database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foods=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
