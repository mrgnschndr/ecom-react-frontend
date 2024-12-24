import React from 'react';
import axios from 'axios';
import Seed from './Seed.js';


class App extends React.Component {

  seedDB = async () => {
    try {
      let res = await axios.get('http://localhost:3001/users');
      this.setState({
        users: res.data
      })
      return res;
    } catch(error) {
      console.log(error.message)
    }
  }


  
  render() {
    return (
      <div className="App">
        <Seed />
      </div>
  )}
}

export default App;
