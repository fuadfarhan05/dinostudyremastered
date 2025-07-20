import React from 'react';
import '../App.css';

// Helper function to build a binary tree from an array (level order)
function computeTree(arr, index = 0) {
  if (!arr || index >= arr.length || arr[index] == null) return null;
  return {
    value: arr[index],
    left: computeTree(arr, 2 * index + 1),
    right: computeTree(arr, 2 * index + 2),
  };
}

// Example math lessons
const mathTreeArray = [
  'Addition',
  'Subtraction',
  'Multiplication',
  'Division',
  'Fractions',
  'Decimals',
  'Geometry'
];

const mathTreeData = computeTree(mathTreeArray);

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

function Mathhome() {
  const handleClick = (value) => {
    alert(`You clicked: ${value}`);
  };

  return (
    <div className="english-home">
      <h2>Here are your Math Lessons</h2>
      <TreeNode node={mathTreeData} onClick={handleClick} />
    </div>
  );
}

export default Mathhome;