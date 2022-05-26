mooch_x=0;
mooch_y=0;

function preload(){
mooch_img=loadImage("https://i.postimg.cc/50XVrdZS/image.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("PoseNet initialised(model is loaded)");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mooch_x=results[0].pose.nose.x;
        mooch_y=results[0].pose.nose.y+25;
        console.log("mooch_x="+mooch_x);
        console.log("mooch_y="+mooch_y);
        
    }
}

function draw(){
    image(video,0,0,499,499);
    image(mooch_img,mooch_y,mooch_x,50,30);
  }
  
  function take_snapshot(){
      save("Filtered_image.png");
  }

function down(){
    save("https://www.filehorse.com/download/file/UxxrrwFQ-iV20XwBRuCA5xNyfEMHFBfAgm-fwwUJrJN2Uw6xTZruVzquHPWaWlQzHQAQbneZ_h5PnFbDEeeVRDplU8fGmTtMBx8kowpvl_g/")
}
