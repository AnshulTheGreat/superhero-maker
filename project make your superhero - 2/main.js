console.log("Controls : increase size : shift + p|decrese size : shift + m|left hand : l | right hand : r | legs : shift + l | face : f | body : b | Final Output : shift + f | NOTE - there are no body and leg images of thor as i could'nt find any")

var canvas = new fabric.Canvas('myCanvas');

block_img_height = 70;
block_img_width = 70;

player_x = 10;
player_y = 10;

player_object = "";
block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == '80'){
        console.log("shift+p pressed");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
  
    }

    if(e.shiftKey == true && keypressed == '77'){
        console.log("shift+p pressed");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
  
    }

    if(keypressed == '70'){
        new_img('thor_face.png');
        new_img('hulk_face.png');
        new_img('ironman_face.png');
        new_img('spiderman_face.png');
        console.log("f");
    }

    if(keypressed == '66'){
        
        new_img('hulk_body.png');
        new_img('ironman_body.png');
        new_img('spiderman_body.png');
        console.log("b");
    }

    if(keypressed == '76'){
        new_img('thor_left_hand.png');
        new_img('hulk_left_hand.png');
        new_img('ironman_left_hand.png');
        new_img('spiderman_left_hand.png');
        console.log("l");
    }
    
    if(keypressed == '82'){
        new_img('thor_right_hand.png');
        new_img('hulk_right_hand.png');
        new_img('ironman_right_hand.png');
        new_img('spiderman_right_hand.png');
        console.log("r");
    }

    if(e.shiftKey == true && keypressed == '76'){
        concole.log("shift l")
        
        new_img('hulk_legs.png');
        new_img('ironman_legs.png');
        new_img('spiderman_legs.png');
    }

    if(e.shiftKey == true && keypressed == '76'){
        concole.log("shift l")
        new_img('Final_Output.png');
    }

}