import styles from "./column.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Column = ({children}) => {
	let columnClasses = cx({
		column : true
	});
	return <div className={columnClasses}>{children}</div>
};
export default Column;