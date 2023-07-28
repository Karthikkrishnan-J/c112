var camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 400,
    image_format: '"png"',
    png_quality: 90
});
Webcam.attach(camera);
function selfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("display").innerHTML = '<img id="image" src="' + data_uri + '">'
    });
}
function speak() {
    synth = window.speechSynthesis;
    speak_data = "the gesture is" + emoji;
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function model() {
    console.log("model is loaded");
}
console.log("ml5 version is = " + ml5.version);
machine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wWjgaETKy/model.json", model)
function predict() {
    image = document.getElementById("image");
    machine.classify(image, gotresult);
}
function gotresult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result)
        emoji = document.getElementById("gesture").innerHTML = result[0].label;
        speak()
        if ( emoji == "thumbs up") {
            document.getElementById("emoji").innerHTML = "&#128077";
        }
        else if (emoji == "victory") {
            document.getElementById("emoji").innerHTML = "&#9996";
        }
        else if (emoji == "nice") {
            document.getElementById("emoji").innerHTML = "&#128076";
        }
    }
}