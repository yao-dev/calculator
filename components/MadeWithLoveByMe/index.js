/** @format */

import PropTypes from 'prop-types';
import { Container, HeartIcon } from './styles';

const MadeWithLoveByMe = ({ name, heartColor }) => {
	const love = (
		<HeartIcon
			heartColor={heartColor}
			className="fa fa-heart"
			aria-hidden="true"
		/>
	);

	return (
		<Container>
			Made with {love} by {name}
		</Container>
	);
};

MadeWithLoveByMe.propTypes = {
	name: PropTypes.string,
	heartColor: PropTypes.string,
};

MadeWithLoveByMe.defaultProps = {
	name: 'Michaël Yao',
	heartColor: '#D43929',
};

export default MadeWithLoveByMe;
