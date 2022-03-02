import React from 'react';
import '../css/Stemplayer.css';
import data from "../data.json"


class GapCoat extends React.Component {
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
            <h1>Gap Coat</h1>
          </div>
  
          <img id='product-display' src="https://media.gq.com/photos/60faee2e2a7aae32836ff46d/16:9/w_2560%2Cc_limit/yeezy-jacket.jpg" />
          <div className='stemtext'>
            <h1>Gap Coat</h1>
            <p> Very cool. </p>
            <div className='stemtext btn'>
              <h2>Price:</h2>
              <h4>$60</h4>
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

  export default GapCoat;