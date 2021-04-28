function setup(){
    canvas=createCanvas(300,300);
canvas.position(505,70);
video=createCapture(VIDEO);
video.hide();

}

function draw(){
    image(video,0,0,350,350);
}