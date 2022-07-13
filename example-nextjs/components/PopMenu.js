import ButtonImg from "./ButtonImg";
import styles from './popmenu.module.scss';
import Image from "next/image";

const PopMenu = ({imgName, type, clickHandler}) => {
	return <div className={styles.popMenu}>
		<div>
			<button>
				<Image
					src="/images/profile.png" alt="Profile Icon" width="30" height="30"
				/>
			</button>
			<div>
				<a href="">Settings</a>
				<a href="">Help</a>
				<a href="">Log Out</a>
			</div>
		</div>
	</div>
}
export default PopMenu;