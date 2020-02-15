/** @format */

import PropTypes from 'prop-types';
import { Container } from './styles';

const ControlItemContainer = ({ type, handleCalculation, value }) => {
	return (
		<Container type={type} onClick={handleCalculation}>
			{value}
		</Container>
	);
};

ControlItemContainer.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.node,
	]).isRequired,
	handleCalculation: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['number', 'operator']),
};

export default ControlItemContainer;
