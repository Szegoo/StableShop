import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./css/style.css";
import '@fortawesome/fontawesome-free';
import client from './apollo/index';
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);
