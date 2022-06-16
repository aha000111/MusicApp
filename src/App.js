import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "I ain't Mad at Cha",
      artist: "Tupac",
      img_src: "./images/tupac.png",
      src: "./music/tupac_AintMadAtCha.mp3"
    },
    {
      title: "Lose Yourself",
      artist: "Eminem",
      img_src: "./images/eminem.png",
      src: "./music/Eminem_LoseYourself.mp3"
    },
    {
      title: 'NY State of Mind',
      artist: 'Nas',
      img_src: './public/images/nas.png',
      src: './public/music/nas_NYStateOfMind.mp3'
    },
    {
      title: "Hustler's Ambition",
      artist: '50 Cent',
      img_src: './public/images/50cent.png',
      src: "./public/music/50cent_Hustler'sAmbition.mp3"
    },
    {
      title: 'Lights Please',
      artist: 'J Cole',
      img_src: './public/images/JCole.png',
      src: './public/music/JCole_LightsPlease.mp3'
    },
    {
      title: 'Te Felicito',
      artist: 'Shakira',
      img_src: './public/images/shakira.png',
      src: './public/music/Shakire_TeFelicito.mp3'
    },
    {
      title: 'Re-wind, ft. Artful Dodger',
      artist: 'Craig David',
      img_src: './public/images/CraigDavid.png',
      src: './public/music/CD_rewind.mp3'
    },
    {
      title: 'Livin on a Prayer',
      artist: 'Bon Jovi',
      img_src: './public/images/BonJovi.png',
      src: './public/music/BonJovi_LivinOnAPrayer.mp3'
    },
    {
      title: 'Sweet Child O Mine',
      artist: 'Guns N Roses',
      img_src: './public/images/GunsNRoses.png',
      src: "./public/music/GunsN'Roses_SweetChildO'Mine.mp3"
    },
    {
      title: 'You Can Do It',
      artist: 'Ice Cube',
      img_src: './public/images/cube.png',
      src: './public/music/IceCube_YouCanDoIt.mp3'
    },    {
      title: 'Clap Again',
      artist: 'Akon',
      img_src: './public/images/Akon.png',
      src: './public/music/Akon_ClapAgain.mp3'
    },    {
      title: 'Pencil Full of Lead',
      artist: 'Paolo Nutini',
      img_src: './public/images/PaoloNutini.png',
      src: './public/music/PaoloNutini_Pencil Fulloflead.mp3'
    },    {
      title: 'Thank You',
      artist: 'Dido',
      img_src: './public/images/Dido.png',
      src: './public/music/Dido_ThankYou.mp3'
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setnextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);


  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
