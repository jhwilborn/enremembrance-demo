import Post from './Post';
import Ad from './Ad';
import styles from './feed.module.scss';

const Feed = ({children, feedType}) => {
	if(feedType === "post"){
		return <div className={styles.feed}>
			<Post/>
			<Post/>
			<Post/>
		</div>
	} if(feedType === "ad") {
		return <div className={styles.feed}>
			<Ad/>
			<Ad/>
			<Ad/>
		</div>
	}else{
		return <p>Requires prop of feedType "post" or "ad"</p>
	}
}
export default Feed;