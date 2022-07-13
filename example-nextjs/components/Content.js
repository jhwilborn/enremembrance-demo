import Row from "./Row";
import Column from "./Column";
import Post from './Post';


const Content = () => {
	return (
		<div>
			<Row>
				<Column>Col1</Column>
				<Column>Col2</Column>
				<Column>
					<Post/>
				</Column>
			</Row>
		</div>
	);
};
export default Content;
