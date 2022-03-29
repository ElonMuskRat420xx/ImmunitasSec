import Theme from '../styles/theme';
import './index.css';
import '../components/FAQ/scss/main.scss';
import '../components/FAQ/faq.css';
import '../components/Header/core.css';



  export default function App({ Component, pageProps }) {
    return (
      <>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </>
    );
  }
  