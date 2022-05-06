import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Infrastructure Testing/Main/Main';
import TimeLine from '../../components/TimeLine/TimeLine';


export default function InfrastructureTesting({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Layout>

                    <Main />

                    <Footer />

                </Layout>


            </Theme>
        </>
    );
}

