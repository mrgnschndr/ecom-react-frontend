import React from 'react';
import axios from 'axios';


class App extends React.Component {

  seedDB = async () => {
    try {
      let res = await axios.get('http://localhost:5002/users');
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
        
      </div>
  )}
}

export default App;
