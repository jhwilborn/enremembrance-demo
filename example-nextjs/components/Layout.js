import {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


export default function Layout ({children}) {
	return <Fragment>
		<Header/>
			<Main> {/* Gives varied levels of padding at different page sizes */}
				{children} 
			</Main>
		<Footer/>
		</Fragment>
}
