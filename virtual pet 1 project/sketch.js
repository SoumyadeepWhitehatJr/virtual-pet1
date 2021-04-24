//Create variables here
var dog,happyDog,database,foodS,foodStock
var happyDogImage
var dogImage

function preload()
{
happyDogImage=loadImage("happydog.png")
 dogImage=loadImage("Dog.png")


}

function setup() {
  database=firebase.database()
	createCanvas(500, 500)

  dog=createSprite(250,250)

  dog.addImage(dogImage)
  dog.scale=0.1

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

  
      
}


function draw() {  
  background("red")
  
  if (keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImage)
    
      }
  
  drawSprites();
  //add styles here
  
  textSize(20)
  text("Food:"+foodS,200,200)
  

}

function readStock(data){

foodS=data.val();

}
function writeStock(x){
if(x<0){

  x=20
}else{x=x-1}
database.ref('/').update({

Food:x

})

}
