import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import drake from './imgs/drake.jpeg';
import jb from './imgs/justinbieber.jpeg';
import pnd from './imgs/pnd.jpeg';
import drakesong from './songs/Passionate.mp3';
import justinbiebersong from './songs/Neversaynever.mp3';
import pndsong from './songs/PND.mp3';


const cards = [
  {
    img: drake,
    lyric: 'Drake: "Passionate from miles ____"',
    answer: 'away',
    audio: drakesong
  },
  {
    img: jb,
    lyric: 'Justin Bieber: "Never say ____"',
    answer: 'never',
    audio: justinbiebersong
  },
  {
    img: pnd,
    lyric: 'PND: "I see you in the ____"',
    answer: 'city',
    audio: pndsong
  },
  
];

function MusicLearn() {
  const [dividerX, setDividerX] = useState(680);
  const dragging = useRef(false);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const onMouseDown = () => {
    dragging.current = true;
  };

  const onMouseMove = (e) => {
    if (dragging.current) {
      setDividerX(e.clientX);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  });

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="split-window-container">
      <div className="split-pane left-pane" style={{ width: dividerX }}>
        <div className="instructions">
          <h2>Finish the Lyrics:</h2>
          <p>In this game you will listen to the lyrics of a snippet of a popular song and finish the lyrics by typing the word that comes after!</p>
          <h3><strong>Example:</strong></h3>
          <p>Drake: "Passionate from miles ____"</p>
          <p><strong>Answer:</strong> away </p>
        </div>
      </div>
      <div
        className="split-divider"
        onMouseDown={onMouseDown}
        style={{ left: dividerX }}
      />
      <div className="split-pane right-pane" style={{ left: dividerX + 5 }}>
        <h2>Play Here:</h2>
        <div className="carousel-container">
          <button
            className="carousel-btn"
            onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : cards.length - 1))}
          >
            &#8592;
          </button>
          <div className="carousel-card">
            <img
              src={cards[current].img}
              alt="lyric"
              className="carousel-img"
            />
            <div className="carousel-lyric">{cards[current].lyric}</div>
            <button
              className="play-audio-btn"
              onClick={() => playAudio(cards[current].audio)}
            >
              ▶️ Play Song
            </button>
          </div>
          <button
            className="carousel-btn"
            onClick={() => setCurrent((prev) => (prev < cards.length - 1 ? prev + 1 : 0))}
          >
            &#8594;
          </button>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your answer here and press Enter"
            className="answer-input"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (e.target.value.toLowerCase() === cards[current].answer.toLowerCase()) {
                  alert('Correct!');
                } else {
                  alert(`Incorrect! The correct answer is: ${cards[current].answer}`);
                }
                e.target.value = ''; // Clear input after submission
              }
            }}
          />
        </div>
        <div className='finished-container-button'>
          <button className='finished' onClick={() => navigate('/englishhome')}>I'm finished</button>
        </div>
      </div>
    </div>
  );
}

export default MusicLearn;