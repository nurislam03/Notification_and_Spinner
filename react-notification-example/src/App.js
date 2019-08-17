import React from 'react';
import './App.css';

// React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total_file_size: 0,
      download_limit: 100
    };
  }

  add_to_download_card = size => {
    if(this.state.total_file_size + size <= this.state.download_limit) {
      this.setState({
        total_file_size: this.state.total_file_size + size
      });
      toast.success("You have downloaded a "+ size + " GB file Successfully!");
    } else {
      // notification
      toast.error("Download Limit Exceeded!");
    }
  };

  reset = e => {
    this.setState({
      total_file_size: 0
    });
    toast.info("Download Counter is initialized with 0");
  }


  render() {
    return (
      <div className="App">
          <header className="App-header">
            <div>
              <button className='inc' onClick={() => this.add_to_download_card(40)}>
                <b>Download A(40GB)</b>
              </button>

              <button className='inc' onClick={() => this.add_to_download_card(80)}>
                <b>Download B(80GB)</b>
              </button>

              <button className='inc' onClick={() => this.add_to_download_card(30)}>
                <b>Download C(30GB)</b>
              </button>
            </div>

            <div>
              <button className='reset' onClick={this.reset}>
                <b>Reset</b>
              </button>
            </div>

            <b>
              Download Limit: {this.state.download_limit} GB
            </b>

            <h1>
              Total File Size: {this.state.total_file_size} GB
            </h1>
          </header>
          <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={9000} />
      </div>
    );
  }
};

export default App;
