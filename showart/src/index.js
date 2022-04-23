import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Provider store={store}> */}

    <App />
    {/* </Provider> */}

  
    
    </BrowserRouter>

=======
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
>>>>>>> 831a20b0255dd8fd615e6e254be879af9cf57807
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<<<<<<< HEAD
reportWebVitals();
=======
reportWebVitals();

>>>>>>> 831a20b0255dd8fd615e6e254be879af9cf57807
