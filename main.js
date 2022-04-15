L_theme = "";
Light_them = "";
function preload() {
    L_theme = loadSound("L theme.mp3");
    Light_theme = loadSound("Light theme.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,200)

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,600,500)
}

function play() {
    L_theme.play()
    Light_theme.play()
}
