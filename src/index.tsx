import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import UserStore from './contexts/UserContext';
import GroupStore from './contexts/GroupContext';
import HeaderStore from './contexts/HeaderContext';
import ViewportStore from './contexts/ViewportContext';
import Colors from './Styles/colors';
import styled from 'styled-components/macro';
import ApolloWrapper from './components/ApolloWrapper';
import { BrowserRouter as Router } from 'react-router-dom';

const Body = styled.div`
  font-family: 'acumin-pro', sans-serif;
  background-color: ${Colors.background};
  color: #fff;
`;
ReactDOM.render(
  <React.StrictMode>
    <ViewportStore>
      <Body>
        <ApolloWrapper>
          <UserStore>
            <GroupStore>
              <HeaderStore>
                <Router>
                  <App />
                </Router>
              </HeaderStore>
            </GroupStore>
          </UserStore>
        </ApolloWrapper>
      </Body>
    </ViewportStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
