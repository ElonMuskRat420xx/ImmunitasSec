import Theme from '../styles/theme';
import './Css/index.css';
import '../components/Services/services.css';

  export default function App({ Component, pageProps }) {
    return (
      <>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
    );
  }
  