let handPose;
let video;
let hands = [];
let pindexTipX;
let pindexTipY;
let pkeyPointX;
let pkeyPointY;

function preload(){
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  //Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function gotHands(results){
  hands = results;
}

function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < hands.length; i++){
    let hand = hands[i];

    for (let j = 0; j < hand.keypoints.length; j++){
    //   let keypoint = hand.keypoints[j];
    //   // fill(0, 255, 0);
    //   stroke(255, 255, 255);
    //   line(keypoint.x, keypoint.y, pkeyPointX, pkeyPointY);

    //   pkeyPointX = keypoint.x;
    //   pkeyPointY = keypoint.y;
    // }

    let indexTip = hand.keypoints [8];
    stroke(255, 255, 255);
    strokeWeight(10);
    line(pindexTipX, pindexTipY, indexTip.x, indexTip.y);

    if (pindexTipX > indexTip.x);
    pindexTipX = indexTip.x 
    pindexTipY = indexTip.y
  }
}
}