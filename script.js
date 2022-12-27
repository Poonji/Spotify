console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('song.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tum HO", filepath:"song/song.mp3",coverPath:"covers/1.jpg"},
]
//audioElement.play(); 
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
    }
})
//Listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})