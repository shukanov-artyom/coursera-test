(function(global) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }
    global.helloSpeaker = helloSpeaker;
})(this);