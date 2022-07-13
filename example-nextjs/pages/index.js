
//components
import Head from "next/head";
import Layout from "../components/Layout";
import Content from '../components/Content';

export default function Home() {
	/* export default makes function available to the entire site rather than this page, home is called automatically as the default of the index */
	return (
		<Layout>
			<Head>
				<title>enRemembrance</title>
				<link rel="icon" href="/images/icon.png" />
				<meta name="enRemembrance" content="enRemembrance"/>
			</Head>
			<Content/>

		</Layout>
	);
}
