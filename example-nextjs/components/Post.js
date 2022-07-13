import Paragraph from "./Paragraph";
import Image from "next/image";
import Heading from "./Heading";
import styles from "./post.module.scss";
import Column from "./Column";
import Row from "./Row";

//example function, because there is no actual feed. Ideally, this would accept children as contents from a database and display them dynamically
const Post = () => {
	return (
		<div className={styles.post}>
			<div className={styles.titlebar}>
				<div className={styles.title}>
					
				</div>
				<div className={styles.image}>

				</div>
			</div>
			<div className={styles.content}>

			</div>


			{/* <Row>
				<Column>
					<Heading level="2">Share your story</Heading>
					<Heading level="3">Post by jon do</Heading>
				</Column>
				<Column>
					<Image
						src="/images/profile.png"
						alt="alttext"
						width="50"
						height="50"
					/>
				</Column>
			</Row>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
				sed cupiditate consectetur hic corrupti voluptates cumque sit?
				Deleniti cumque sint, dolor hic perspiciatis ipsum obcaecati
				praesentium, facilis temporibus nobis dignissimos! Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Dolor nemo
				reiciendis cupiditate odit fuga eos perferendis aut quidem ipsa
				perspiciatis impedit dolorum adipisci illo quo non molestias,
				rem nostrum qui!
			</Paragraph> */}
		</div>
	);
};
export default Post;
