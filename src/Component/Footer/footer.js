import React, { Component } from 'react';

import './footer.css';
import { Label,Icon,Image} from 'semantic-ui-react'
import logo from '../../styles/logo.png'

class Footer extends Component {
  render() {
    return (
      
      <div className="Footer">
        <h5 class="ui icon centered aligned">
          <label >
              <Icon name='copyright'/> 2017 by Sharing Our Heart <Image class='ui mini right spaced image' src={logo} size='tiny' />
          </label>
        </h5>
      </div>
    );
  }
}

export default Footer;