const randomQuote = document.getElementById("randomQuote");

function randomizer(min, max){
    let quotes = ['Your illness is not your identity. Your chemistry is not your character. - Rick Warren',
    'Happiness can be found even in the darkest of times, if only one remembers to turn on the light. - Albus Dumbledore',
    'Self-care is how you take your power back. - Lalah Delia',
    'My dark days made me strong. Or maybe I was already strong, and they made me prove it. - Emery Lord',
    'You, yourself, as much as anybody in the entire universe, deserve your love and affection. - Buddha',
    'Let your story go. Allow yourself to be present with who you are right now. - Russ Kyle',
    'You don\'t have to control your thoughts. You just have to stop letting them control you. - Dan Millman',
    'One small crack does not mean that you are broken, it means that you were put to the test and you didn\'t fall apart. - Linda Poindexter',
    'Sometimes you climb out of bed in the morning and you think, I\'m not going to make it, but you laugh inside - remembering all the times you\'ve felt this way. - Charles Bukowski',
    'There is hope, even when your brain tells you there isn\'t. - John Green',
    'You can\'t control everything. Sometimes you just need to relax and have faith that things will work out. Let go a little and just let life happen. - Kody Keplinger'];

    return quotes[(Math.floor(Math.random()*max-min))+min];
}
    document.getElementById("randomQuote").innerHTML = randomizer(1,10);