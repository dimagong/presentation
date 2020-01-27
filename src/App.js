import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header.component';
import {Box} from './components/section/box.component';
import {Footer} from './components/footer/folder.component';

class App extends React.Component {
  
  
  render() {
    return (
      <div>
        <Header />
        <Box />
        <Footer />
      </div>
    );

  }
  
}

export default App;
