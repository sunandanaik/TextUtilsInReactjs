import React, { useState } from 'react';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('dark');//Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#274059';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = "TextUtils - Dark mode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = "TextUtils - Light mode";
    }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/"> */}
              <Textform showAlert={showAlert} heading="TextUtils - Word Counter Character Counter, Remove Extra Spaces" mode={mode} />
            {/* </Route>
          </Switch> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
