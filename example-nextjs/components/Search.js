import ButtonImg from "./ButtonImg";
import styles from "./search.module.scss";
import Image from 'next/image';

const Search = () => {
	return <div className={styles.search}>
		<div className="searchbox">
			<form action="" method="get">
				<input type="text" name="searchField" id="searchField" placeholder="Search"/>
				<button type="submit"><Image src="/images/search.png" alt="Submit search button" width="36" height="36"/></button> {/* placeholder for buttonimg */}
			</form>
		</div>
	</div>;
};
export default Search;