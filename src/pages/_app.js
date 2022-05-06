import Theme from '../styles/theme';
import './Css/index.css';
import "swiper/css/bundle";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
