import React from 'react'
import "../App.css"
const Squares = ({ val, chooseSquare }) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>

  )
}

export default Squares