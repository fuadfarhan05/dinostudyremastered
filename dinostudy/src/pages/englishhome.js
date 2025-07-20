import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';




function computeTree(arr, index=0){
     if (!arr || index >= arr.length || arr[index] == null) return null;
  return {
    value: arr[index],
    left: computeTree(arr, 2 * index + 1),
    right: computeTree(arr, 2 * index + 2),
  };
}

const treeArray = [
    '5 Q Words',
    'Me, Myself, and I',
    'One Line Singing',
]

const treeData = computeTree(treeArray);


function TreeNode({ node, onClick }) {
  if (!node) return null;
  return (
    <div className="tree-node">
      <button className="tree-btn" onClick={() => onClick(node.value)}>{node.value}</button>
      {(node.left || node.right) && (
        <div className="tree-children">
          <div className="tree-child">
            <TreeNode node={node.left} onClick={onClick} />
          </div>
          <div className="tree-child">
            <TreeNode node={node.right} onClick={onClick} />
          </div>
        </div>
      )}
    </div>
  );
}

function Englishhome() {
  const navigate = useNavigate();
  const handleClick = (value) => {
    if(value === '5 Q Words') {
      navigate('/5questions');
    }
    if(value === 'Me, Myself, and I') {
      navigate('/memyself');
    }
    if(value === 'One Line Singing') {
      navigate('/musiclearn');
    }
  };
  

  return (
    <div className="english-home">
      <h2>Here are your English Lessons</h2>
      <TreeNode node={treeData} onClick={handleClick} />

    </div>
  );
}

export default Englishhome;