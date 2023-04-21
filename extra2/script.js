let now_playing = document.querySelector('.tocando-agr');
let track_art = document.querySelector('.imagem-mus');
let track_name = document.querySelector('.nome-musica');
let track_artist = document.querySelector('.artista-mus');

let playpause_btn = document.querySelector('.playpause-musica');
let next_btn = document.querySelector('.proxima-musica');
let prev_btn = document.querySelector('.anterior-musica');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.tempo-atual');
let total_duration = document.querySelector('.duracao');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/1.jpg',
        name : 'Numb',
        artist : 'Linkin Park',
        music : 'music/Numb.mp3'
    },
    {
        img : 'images/2.png',
        name : 'Here Without You',
        artist : '3 Doors Down',
        music : 'music/Here Without You.mp3'
    },
    {
        img : 'images/3.png',
        name : 'Bring Me To Life',
        artist : 'Evanescence',
        music : 'music/Bring Me To Life.mp3'
    },
    {
        img : 'images/4.jpg',
        name : 'Sweet Child O Mine',
        artist : 'Guns N Roses',
        music : 'music/Sweet Child O Mine.mp3'
    },
    {
        img : 'images/5.png',
        name : 'Complicated',
        artist : 'Avril Lavigne',
        music : 'music/Complicated.mp3'
    },
    {
        img : 'images/6.jpg',
        name : 'Dont Tell Me',
        artist : 'Avril Lavigne',
        music : 'music/Dont Tell Me.mp3'
    },
    {
        img : 'images/7.jpg',
        name : 'Im With You',
        artist : 'Avril Lavigne',
        music : 'music/Im With You.mp3'
    },
    {
        img : 'images/8.jpg',
        name : 'Nobodys Home',
        artist : 'Avril Lavigne',
        music : 'music/Nobodys Home.mp3'
    },
    {
        img : 'images/1.jpg',
        name : 'Sk8er Boi ',
        artist : 'Avril Lavigne',
        music : 'music/Sk8er Boi.mp3'
    },
    {
        img : 'images/2.png',
        name : 'I Hate Everything About',
        artist : 'Three Days Grace',
        music : 'music/I Hate Everything About.mp3'
    },
    {
        img : 'images/3.png',
        name : 'The Reason',
        artist : 'Hoobastank',
        music : 'music/The Reason.mp3'
    },
    {
        img : 'images/5.png',
        name : 'In The End',
        artist : 'Linkin Park',
        music : 'music/In The End.mp3'
    },
    {
        img : 'images/6.jpg',
        name : 'Papercut',
        artist : 'Linkin Park',
        music : 'music/Papercut.mp3'
    },
    {
        img : 'images/7.jpg',
        name : 'Crawling',
        artist : 'Linkin Park',
        music : 'music/Crawling.mp3'
    },
    {
        img : 'images/8.jpg',
        name : 'Faint',
        artist : 'Linkin Park',
        music : 'music/Faint.mp3'
    },
    {
        img : 'images/1.jpg',
        name : 'From The Inside',
        artist : 'Linkin Park',
        music : 'music/From The Inside.mp3'
    },
    {
        img : 'images/2.png',
        name : 'With Arms Wide Open',
        artist : 'Creed',
        music : 'music/With Arms Wide Open.mp3'
    },
    {
        img : 'images/3.png',
        name : 'My Sacrifice',
        artist : 'Creed',
        music : 'music/My Sacrifice.mp3'
    },
    {
        img : 'images/4.jpg',
        name : 'Dont Stop Dancing',
        artist : 'Creed',
        music : 'music/Dont Stop Dancing.mp3'
    },
    {
        img : 'images/5.png',
        name : 'One Last Breath',
        artist : 'Creed',
        music : 'music/One Last Breath.mp3'
    },
    {
        img : 'images/6.jpg',
        name : 'Call Me When You re Sober',
        artist : 'Evanescence',
        music : 'music/Call Me When You re Sober.mp3'
    },
    {
        img : 'images/7.jpg',
        name : 'Everybodys Fool',
        artist : 'Evanescence',
        music : 'music/Everybodys Fool.mp3'
    },
    {
        img : 'images/8.jpg',
        name : 'Going Under',
        artist : 'Evanescence',
        music : 'music/Going Under.mp3'
    },
    {
        img : 'images/1.jpg',
        name : 'Photograph',
        artist : 'Nickelback',
        music : 'music/Photograph.mp3'
    },
    {
        img : 'images/2.png',
        name : 'Someday',
        artist : 'Nickelback',
        music : 'music/Someday.mp3'
    },
    {
        img : 'images/3.png',
        name : 'Savin Me',
        artist : 'Nickelback',
        music : 'music/Savin Me.mp3'
    },
    {
        img : 'images/4.jpg',
        name : 'Far Away',
        artist : 'Nickelback',
        music : 'music/Far Away.mp3'
    },
    {
        img : 'images/5.png',
        name : 'How You Remind Me',
        artist : 'Nickelback',
        music : 'music/How You Remind Me.mp3'
    },
    {
        img : 'images/6.jpg',
        name : 'Dani California',
        artist : 'Red Hot Chili Peppers',
        music : 'music/Dani California.mp3'
    },
    {
        img : 'images/7.jpg',
        name : 'Otherside',
        artist : 'Red Hot Chili Peppers',
        music : 'music/Otherside.mp3'
    },
    {
        img : 'images/8.jpg',
        name : 'By The Way',
        artist : 'Red Hot Chili Peppers',
        music : 'music/By The Way.mp3'
    },
    {
        img : 'images/1.jpg',
        name : 'Welcome To My Life',
        artist : 'Simple Plan',
        music : 'music/Welcome To My Life.mp3'
    },
    {
        img : 'images/2.png',
        name : 'Crazy',
        artist : 'Simple Plan',
        music : 'music/Crazy.mp3'
    },
    {
        img : 'images/3.png',
        name : 'Broken',
        artist : 'Seether ft. Amy Lee',
        music : 'music/Broken.mp3'
    },
    {
        img : 'images/4.jpg',
        name : 'Boulevard Of Broken Dreams',
        artist : 'Green Day',
        music : 'music/Boulevard Of Broken Dreams.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Música " + (track_index + 1) + " de " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// definir as cores do degradê
var colors = ['#919191', '#0c0c0c'];

// definir o tempo de transição em milissegundos
var transitionTime = 1500;

// obter o elemento de fundo
var background = document.getElementById('background');

// definir a posição inicial
var currentPosition = 0;

// função para atualizar o degradê
function updateGradient() {
  // definir a posição final
  var newPosition = currentPosition + 1;
  if (newPosition >= colors.length) {
    newPosition = 0;
  }
  
  // atualizar o degradê
  background.style.background = 'linear-gradient(to bottom right, ' + colors[currentPosition] + ', ' + colors[newPosition] + ')';
  
  // atualizar a posição atual
  currentPosition = newPosition;
}

// iniciar a animação
setInterval(updateGradient, transitionTime);
