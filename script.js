console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('song.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
    {songName:"Tum HO", filepath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\song.mp3",coverPath:"C:\Users\hp\OneDrive\Documents\mini project\spotify clone\cover.jpg"},
]
//audioElement.play(); 
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})
//Listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})