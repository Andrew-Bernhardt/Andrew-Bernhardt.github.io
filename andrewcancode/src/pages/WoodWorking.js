import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default function WoodWorking() {
  useEffect(() => {
    document.title = "WoodWorking"
  }, [])
    return (
        <>
        <title>Woodwork</title>
        <link rel="stylesheet" type="text/css" href="./woodwork.css" />
        {/* <Navbar/> */}
        <div className="btn-container">
          <div className="wood-btn" id="generate-btn">
            GENERATE
          </div>
          <input type="text" id="custom-verse" />
          <div className="wood-btn" id="random-verse">
            RANDOM VERSE
          </div>
          <div className="wood-btn" id="random-proverb">
            RANDOM PROVERB
          </div>
          <div className="wood-btn" id="remove-all-wood-btn">
            REMOVE ALL
          </div>
        </div>
        <div className="wood-frame-container">
          <div className="wood-frame">
            <div className="wood-bar draggable-resizable">
              <div className="handle">BIBLE VERSE WOODWORKING</div>
            </div>
          </div>
        </div>
        <div className="styling-absolute">
          <div className="wood-style-controls">
            <div className="style-btn" id="random-resize-btn">RESIZE</div>
            <div className="style-btn" id="random-realign-btn">REALIGN</div>
            <div className="style-btn" id="lighten-btn">LIGHTEN</div>
            <div className="style-btn" id="darken-btn">DARKEN</div>
            <div className="style-btn in-dev">LOCK ROW</div>
            <div className="style-btn" id="shorten-all-btn">SHORTEN ROWS</div>
            <div className="style-btn" id="lengthen-all-btn">LENGTHEN ROWS</div>
          </div>
          <div className="outdated-controls">
            <br />
            <br />
            <br />
            <br />
            <div className="style-btn striped_black" id="outdated-btn">OUTDATED</div>
            <div className="style-btn" id="remove-wood-btn">RMV LAST WOOD ROW</div>
            <div className="style-btn" id="add-wood-btn">ADD WOOD ROW</div>
            <div className="style-btn" id="add-text-btn">ADD TEXT</div>
            <input className="style-btn" type="text" id="custom-text" />
          </div>
        </div>
      </>
    )
}