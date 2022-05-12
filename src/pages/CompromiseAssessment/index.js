import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Home/Footer/Footer'
import Main from '../../components/Pages/CompromiseAssessment/Main/Main';
import TimeLine from '../../components/Home/TimeLine/TimeLine';


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

