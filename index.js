function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  var lowerCase = string
  if (string.toLowerCase()===lowerCase){
    return console.log('I can\'t hear you!')
  }
}