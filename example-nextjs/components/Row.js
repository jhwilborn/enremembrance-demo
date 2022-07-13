import styles from './row.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const Row = ({children, nowrap}) =>{
	let rowClasses = cx({
		row : true,
		nowrap : nowrap
	});
	return <div className={rowClasses}>{children}</div>
}
export default Row;