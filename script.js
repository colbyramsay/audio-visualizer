const audio = new Audio();
audio.src = "./songs/simple-drum-beat.mp3"

/*
const HEIGHT = 1500;
const WIDTH = 1500;

const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");

//const audioCtx = new (window.AudioContext)();
let audioSource = null;
let analyser = null;


//audio.play();

analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

analyser.fftSize = 128;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width / bufferLength;

let x = 0;
function animate() {
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    ctx.fillStyle = "white";
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth;
  }
  requestAnimationFrame(animate);
}
*/
const playAudio = () => {
  audio.play();
  console.log("hello play");
  const audioCtx = new (window.AudioContext)();
  let audioSource = null;
  let analyser = null;
  audioSource = audioCtx.createMediaElementSource(audio); 
}

const logoBtn = document.getElementById("logo");

logoBtn.addEventListener("click", playAudio);