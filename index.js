function App() {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <main>
      <section id='drum-machine'>
        <Display />
      </section>
    </main>
  );
}
function Display() {
  const [lastPlayed, setLastPlayed] = React.useState('');

  function handleSound(id) {
    const sound = document.getElementById(id);
    sound.play();
    audio.forEach((item) => {
      if (item.keyCode === id) {
        setLastPlayed(item.id);
      }
    });
  }
  function handleKeyPress(e) {
    audio.forEach((item) => {
      if (item.keyCode === e.keyCode || item.keyCode === e.keyCode - 32) {
        handleSound(item.keyCode);
        setLastPlayed(item.id);
      }
    });
  }

  return (
    <div id='display'>
      {document.addEventListener('keypress', handleKeyPress)}
      {audio.map((item) => {
        const { id, keyTrigger, url, keyCode } = item;
        return (
          <button
            key={keyCode}
            className='drum-pad'
            id={id}
            onClick={() => handleSound(keyCode)}
          >
            <audio
              className='clip'
              src={url}
              type='audio/mpeg'
              id={keyCode}
            ></audio>
            {keyTrigger}
          </button>
        );
      })}
      <h2>{lastPlayed}</h2>
    </div>
  );
}
const audio = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];
ReactDOM.render(<App />, document.getElementById('root'));
