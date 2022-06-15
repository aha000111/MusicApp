import {useState} from 'react';

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'dfgdg',
      artist: 'gagf',
      img_src: '/public/images/tupac.png',
      src: './public/music/tupac_AintMadAtCha'
    },

  ])
  return (
    <div className="App">
      COMPONENETS HERE
    </div>
  );
}

export default App;
