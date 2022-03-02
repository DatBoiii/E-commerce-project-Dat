import React from 'react';
import '../css/Stemplayer.css';
import data from "../data.json"


class Stemplayer extends React.Component {
    constructor() {
      super();
      this.state = {
        products: data.products
      };
    }
    render() {
      return(
        <div className='StemBackground'>
          <div id='title'>
            <h1>The Stem Player</h1>
          </div>
  
          <img id='product-display' src="https://imboldn.com/wp-content/uploads/2021/08/Donda-Stem-Player-01-800x450.jpg" />
          <div className='stemtext'>
            <h1>Stem Player</h1>
            <p>The Stem Player is a handheld device that allows you to split Kanye's catelogue of songs into stems. </p>
            <h2>Features:</h2>
            <ul>
                <li>Ship with Donda and Donda 2</li>
                <li>Control Vocals, Drums, Bass, and Samples</li>
                <li>Be able to add effects to the songs</li>
                <li>Save, playback, and download your mixes</li>
                <li>Update the contents and software your device</li>
            </ul>
            <h2>Specs:</h2>
            <ul>
              <li>Bluetooth</li>
              <li>4 Touch Sensitive Light Sliders</li>
              <li>3.5mm Jack</li>
              <li>8GB Storage</li>
              <li>Supports: .MP3 .WAV .MP4</li>
            </ul>
            <div className='stemtext btn'>
              <h2>Price:</h2>
              <h4>$200</h4>
            </div>
          </div>
  
          <div id='reviews'>
            <h1>Reviews:</h1>
  
              <h5>JOJO:</h5>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <p>This product is the best! Ten out of ten will by again!</p>
  
              <h5>Joseph:</h5>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <p>Wow so cool! Thanks Kanye!</p>
  
              <h5>Noah:</h5>
              <div>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <p>This is a garage product.</p>
  
              <h5>Trevor:</h5>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <p>It's alright. Could be better.</p>
  
              <div>
                <h4>Add Your Review</h4>
                <input typeof='text' id='textBox'></input>
                <button>Add</button>
              </div>
          </div>
        </div>
        
      );
    }
  }

  export default Stemplayer;