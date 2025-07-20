import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../App.css';

function FiveQuestions() {
  const navigate = useNavigate();
  const [dividerX, setDividerX] = useState(680); // Initial width of left pane
  const dragging = useRef(false);

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

  const [stack, setStack] = useState(['Who', 'What', 'Where', 'When', 'Why', 'How']);

    const handleCardClick = (word) => {
    setStack(prev => prev.slice(0, -1)); // Remove the last item
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  });

  return (
    <div className="split-window-container">
      <div className="split-pane left-pane" style={{ width: dividerX }}>
        {/* Left content */}
        
        <div className="instructions">
          <h2>Instructions:</h2>
        <p>In this lesson you will be studying the 6 question words on the flashcard deck on your right. The words are:</p>
        <ul>
          <li>Who</li>
          <li>What</li>
          <li>Where</li>
          <li>When</li>
          <li>Why</li>
          <li>How</li>
        </ul>
        <p>Can you use these words in a sentence?</p>
        <h3><strong>Examples:</strong></h3>
        <p><strong>Word:</strong> How</p>
        <p><strong>Sentence: </strong> How many apples are in the store?</p>

        </div>
      </div>
      <div
        className="split-divider"
        onMouseDown={onMouseDown}
        style={{ left: dividerX }}
      />
      <div className="split-pane right-pane" style={{ left: dividerX + 5 }}>
        {/* Right content */}
        <h2>Play Here:</h2>
        <p>Click on the cards to study the 5 Question words.</p>
        <div className="card-stack">
        {stack.length > 0 ? (
            <div
            className="card"
            onClick={() => handleCardClick(stack[stack.length - 1])}
            >
            {stack[stack.length - 1]}
            </div>
        ) : (
            <div className="card">All done!</div>
        )}
        </div>
        <div className="sentence-input">
          <h3>Write a sentence using any of the words you learned word:</h3>
          <textarea
            placeholder="Type your sentence here..."
            rows="4"
            cols="50"
          />  
        </div>
        <div className='finished-container'>
          <button className='finished' onClick={()=>navigate('/englishhome')}>I'm finished</button>
        </div>
      </div>
    </div>
  );
}

export default FiveQuestions;