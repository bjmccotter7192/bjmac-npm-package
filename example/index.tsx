// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BJForm } from '../src/index';

const App = () => {
  return (
    <div>
      <h1>HELLO</h1>
      <BJForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
