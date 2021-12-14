import logo from './logo.svg';
import mgpLogo from './mgp_logo.jpg';
import { Segment, Header, Icon } from 'semantic-ui-react'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header as='h1' icon className="App-header">
        <Icon name='settings' color="violet" />
    MG Digital Prints
    <Header.Subheader>
          Coming Soon!!
    </Header.Subheader>
      </Header>
      {/* <Segment>
        <Icon loading name='certificate' />
      </Segment> */}
      <Segment className="App-footer" textAlign="center">
        <p>Powered by <img src={mgpLogo} className="mgp-logo" alt="logo" /></p>
      </Segment>
    </div>
  );
}

export default App;
