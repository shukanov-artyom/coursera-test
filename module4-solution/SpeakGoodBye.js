(function(global){
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }
    global.byeSpeaker = byeSpeaker;
})(this);