import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: 'Enemy - Imagine Dragons',
      file: 'song1.mp3',
      image: 'enemyy.png',
    },
    {
      id: 2,
      title: 'Neon Blade Phonk',
      file: 'song2.mp3',
      image: 'neon.jpg',
    },
    {
      id: 3,
      title: 'ROXANNE - Arizona Zervas',
      file: 'song3.mp3',
      image: 'roxxx.png',
    },
    {
      id: 4,
      title: 'Blueberry Faygo - Lil Mosey',
      file: 'song4.mp3',
      image: 'blueb.jpeg',
    },
    {
      id: 5,
      title: 'Wake Up - Lil Xan',
      file: 'song5.mp3',
      image: 'wakee.jpg',
    },
    {
      id: 6,
      title: 'Rich Bitch - Bankrol Hayden',
      file: 'song6.mp3',
      image: 'richh.jpg',
    },

    // Em breve mais musicas serão adicionadas (poucas musicas para facilitar o upload)
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handlePlay = () => {
  };

  const handlePause = () => {
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audioElement = document.querySelector('audio');
    audioElement.addEventListener('ended', handleNext);

    return () => {
      audioElement.removeEventListener('ended', handleNext);
    };
  }, [currentSongIndex]);

  return (
    <div className="app-container">
      <h1>PlayList Gamer</h1>
      <div className="song-container">
        <img src={currentSong.image} alt={currentSong.title} />
        <AudioPlayer
          src={currentSong.file}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
      <h2 className="song-title">{currentSong.title}</h2>
      <div className="buttons-container">
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Próxima</button>
      </div>
    </div>
  );
}

export default App;
