import styles from './buttonimg.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const ButtonImg = ({imgName, /* bgcolor, */ clickHandler, type}) => {
	let buttonClasses = cx({
		buttonimg : true,
		[`${imgName}`] : imgName,
		[`${type}`] : type
		// [`${bgcolor}`] : bgcolor
	});
	return <button
		className={buttonClasses}
		onClick={clickHandler}
	>
		<Image>			
			src={`/images/${imgName}.${type}`}
			alt={`${imgName} button`}
			width="36"
			height="36"

		</Image>
	</button>
}
export default ButtonImg;