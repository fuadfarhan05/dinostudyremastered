import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function MeMyself() {
  const [dividerX, setDividerX] = useState(680);
  const dragging = useRef(false);
  const navigate = useNavigate();

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

  const [stack, setStack] = useState(['Me', 'Myself', 'I']);

  const handleCardClick = (word) => {
    setStack(prev => prev.slice(0, -1));
  };

  return (
    <div className="split-window-container">
      <div className="split-pane left-pane" style={{ width: dividerX }}>
        <div className="instructions">
          <h2>Instructions</h2>
          <p>In this lesson, you will learn about the pronouns <strong>Me</strong>, <strong>Myself</strong>, and <strong>I</strong>. These words are used to talk about yourself in different ways.</p>
          <ul>
            <li>Me is used as the object of a verb or preposition. Example: "She gave the book to <strong>me</strong>."</li>
            <li>Myself is used for emphasis or to show that you did something to yourself. Example: "I made this cake <strong>myself</strong>."</li>
            <li>I is used as the subject of a sentence. Example: "<strong>I</strong> am going to the store."</li>
          </ul>
          <p>Can you use these words in a sentence?</p>
          <h3><strong>Examples:</strong></h3>
          <p><strong>Word:</strong> Me</p>
          <p><strong>Sentence:</strong> My friend called <strong>me</strong> last night.</p>
        </div>
      </div>
      <div
        className="split-divider"
        onMouseDown={onMouseDown}
        style={{ left: dividerX }}
      />
      <div className="split-pane right-pane" style={{ left: dividerX + 5 }}>
        <h2>Play Here:</h2>
        <p>Click on the cards to study the pronouns.</p>
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
          <h3>Write a sentence using any of the words you learned:</h3>
          <textarea
            placeholder="Type your sentence here..."
            rows="4"
            cols="50"
          />
        </div>
        <div className='finished-container'>
          <button className='finished' onClick={() => navigate('/englishhome')}>I'm finished</button>
        </div>
      </div>
    </div>
  );
}

export default MeMyself;