import React from 'react';
import logo from './logo.svg';

import { GlobalStyle } from './style/globals';
import { mainTheme } from './style/theme';
import { ThemeProvider } from 'styled-components';

import 'styled-components/macro';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <React.Fragment>
        <GlobalStyle/>
        <div
          css={`
            text-align: center;
          `}
        >
          <header
            css={`
              background-color: #282c34;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: calc(10px + 2vmin);
              color: white;
            `}
          >
            <img
              src={logo}
              alt="logo"
              css={`
                animation: App-logo-spin infinite 20s linear;
                height: 40vmin;
                pointer-events: none;

                @keyframes App-logo-spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
              `}
            />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              css={`
                color: ${(props: any) => props.theme.primaryColor};
              `}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
