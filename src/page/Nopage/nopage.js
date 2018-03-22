import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';
import { Header } from 'semantic-ui-react'
class Nopage extends Component {
render() {
    
    return (
      
      <div className="nopage">
        <Navbar />
        <div class="rebody">
          <br />
          <Header textAlign='center'>Page not found<i aria-hidden="true" ></i> </Header>
        </div>
    

<br />
<Footer />
</div>
);
}
}

export default Nopage;