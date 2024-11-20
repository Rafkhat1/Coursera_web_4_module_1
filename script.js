(function () {
    var names = [
        "Pavlov",
        "Lop",
        "Jen",
        "Smith",
        "Drakaris",
        "Frank_junior",
        "Sergey",
        "Paula",
        "Laura",
        "Erken",
    ];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
