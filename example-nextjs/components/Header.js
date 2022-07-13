import styles from "./header.module.scss";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Logo from "./Logo";
import Search from "./Search";
import PopMenu from "./PopMenu";

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<Row>
					<Column>
						<Logo>

						</Logo>
					</Column>
					<Column>
						<Search>

						</Search>
					</Column>
					<Column>
						<PopMenu>

						</PopMenu>
					</Column>
				</Row>
			</Container>
		</header>
	);
};
export default Header;
