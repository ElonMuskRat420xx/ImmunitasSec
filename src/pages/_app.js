import Theme from '../styles/theme';
import './Css/index.css';

  export default function App({ Component, pageProps }) {
    return (
      <>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
    );
  }
  