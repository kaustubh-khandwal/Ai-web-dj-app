L_theme = "";
Light_them = "";
song_status = "";
leftwristX= 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload() {
    L_theme = loadSound("L theme.mp3");
    Light_theme = loadSound("Light theme.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,200)

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)

    poseNet.on("pose",gotPoses)
}

function modelloaded() {
    console.log("poseNet is now intialized")
}

function draw() {
    image(video,0,0,600,500)

    
    fill("#FF0000")
    stroke("#8B0000")
    
    song_status = L_theme.isPlaying();
    if (scoreleftwrist > 0.2) {
        circle(leftwristX,leftwristY,20)
        Light_theme.stop()
    }

    if (song_status == false) {
        L_theme.play()
        document.getElementById("song_name").innerHTML = "L's theme";
    }
}

function play() {
    L_theme.play()
    Light_theme.play()
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        scoreleftwrist = results[0].keypoints[9].score;
        console.log("scoreleftwrist = " + scoreleftwrist)

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY)

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY)
    }
}
