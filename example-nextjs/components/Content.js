import Row from "./Row";
import Column from "./Column";
import Feed from "./Feed";

const Content = () => {
	return (
		<div>
			<Row>
				<Column>Col1</Column>
				<Column>
					<Feed feedType="post"/>
				</Column>
				<Column>
					<Feed feedType="ad"/>
				</Column>
			</Row>
		</div>
	);
};
export default Content;
