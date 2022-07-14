import styles from './buttonimg.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const ButtonImg = ({imgName, /* bgcolor, */ clickHandler, type, width, height}) => {
	let buttonClasses = cx({
		buttonImg : true,
		[`${imgName}`] : imgName,
		[`${type}`] : type
		// [`${bgcolor}`] : bgcolor
	});
	return <button
		className={buttonClasses}
		onClick={clickHandler}
	>
		<Image			
			src={`/images/${imgName}.${type}`}
			alt={`${imgName} button`}
			width={width}
			height={height}
			/>
	</button>
}
export default ButtonImg;