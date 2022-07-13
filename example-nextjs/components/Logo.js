import Image from 'next/image';

const Logo = ({size="1"}) => { //sets default color to black
	return <Image 
		src={`/images/logo.webp`}
		alt="enRemembrance Logo"
		width={63 * size}
		height={20 * size}
	/>
}
export default Logo;