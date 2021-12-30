var canvas =new fabric.Canvas('mycanvas') ;
player_x=200;
player_y=200;

block_image_width=30;
block_image_height=30;

var player_object="" ;
var block_image_object="";

function  player_update (){
    fabric.Image.fromURL("player.png",function(Img) {
       player_object=Img;

       player_object.scaleToWidth(150)
       player_object.scaleToHeight(150) 
       player_object.set({
            left:player_x,
            top:player_y
        })
        canvas.add(player_object)
    });

}

function  new_image (get_image){
    fabric.Image.fromURL(get_image,function(Img) {
      block_image_object=Img;

       block_image_object.scaleToWidth(block_image_width)
       block_image_object.scaleToHeight(block_image_height) 
       block_image_object.set({
            left:player_x,
            top:player_y
        })
        canvas.add(block_image_object)
    });

}

    
window.addEventListener('keydown',mykeydown)

function mykeydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)

    if (e.shiftKey==true && keyPressed=='80' ){
        block_image_width +=10;
        block_image_height +=10; 
        document.getElementById("Current_width").innerHTML=block_image_width ;
        document.getElementById("Current_height").innerHTML=block_image_height ;
    }
    if (e.shiftKey==true && keyPressed=='77' ){
        block_image_width -=10;
        block_image_height -=10; 
        document.getElementById("Current_width").innerHTML=block_image_width ;
        document.getElementById("Current_height").innerHTML=block_image_height ;
    }

    if(keyPressed=='37'){
        left()
    }
    if(keyPressed=='38'){
        up()
    }
    if(keyPressed=='39'){
        right()
    }
    if(keyPressed=='40'){
        down()
    }
    if(keyPressed=='87'){
        new_image('wall.jpg')
    }
    if(keyPressed=='71'){
        new_image('ground.png')
    }
    if(keyPressed=='76'){
        new_image('light_green.png')
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg')
    }
    if(keyPressed=='82'){
        new_image('roof.jpg')
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png')
    }
    if(keyPressed=='68'){
        new_image('dark_green.png')
    }
    if(keyPressed=='85'){
        new_image('unique.png')
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg')
    }
}

function up(){

    if (player_y>0){
        player_y -=block_image_height;
        canvas.remove(player_object);
        player_update()
    }
    
}
function down (){

    if (player_y<300){
        player_y +=block_image_height;
        canvas.remove(player_object);
        player_update()
    }
    
}
function left(){

    if (player_x>=0){
        player_x -=block_image_width;
        canvas.remove(player_object);
        player_update()
    }
    
}
function right(){

    if (player_x<500){
        player_x +=block_image_width;
        canvas.remove(player_object);
        player_update()
    }
    
}