const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'Eagle-Lake-Remembering',
        displayName: 'Remembering',
        artist: 'Eagle Lake',
    },
    {
        name: 'Federico-Albanese-By-the-Deep-Sea',
        displayName: 'By the Deep Sea',
        artist: 'Federico Albanese',
    },
    {
        name: 'Iskandar-Widjaja-Spiegel-im-Spiegel',
        displayName: 'Spiegel im Spiegel',
        artist: 'Iskandar Widjaja',
    },
    {
        name: 'Joep-Beving-Into-The-Dark-Blue',
        displayName: 'Into The Dark Blue',
        artist: 'Joep Beving',
    },
    {
        name: 'John-Metcalfe-Solitude',
        displayName: 'Solitude',
        artist: 'John Metcalfe',
    },
    {
        name: 'Julien-Marchal-Insight-XVII',
        displayName: 'Insight XVII',
        artist: 'Julien Marchal',
    },
    {
        name: 'Martin-Kohlstedt-NIODOM',
        displayName: 'NIODOM',
        artist: 'Martin Kohlstedt',
    },
    {
        name: 'Olafur-Arnalds-unfold',
        displayName: 'Unfold',
        artist: 'Olafur Arnalds',
    },
    {
        name: 'Peter-Broderick-A-Beginning',
        displayName: 'A Beginning',
        artist: 'Eter Broderick',
    },
    {
        name: 'Quentin-Sirjacq-Aquarius',
        displayName: 'Aquarius',
        artist: 'Quentin Sirjacq',
    }
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);