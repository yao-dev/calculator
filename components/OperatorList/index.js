/** @format */

import PropTypes from 'prop-types';
import { Container } from './styles';
import ControlItem from 'components/ControlItem';

const OperatorList = ({ handleCalculation }) => {
	return (
		<Container>
			<ControlItem.Operator
				value={'/'}
				handleCalculation={() => handleCalculation('/')}
			/>
			<ControlItem.Operator
				value={'x'}
				handleCalculation={() => handleCalculation('*', 'x')}
			/>
			<ControlItem.Operator
				value={'-'}
				handleCalculation={() => handleCalculation('-')}
			/>
			<ControlItem.Operator
				value={'+'}
				handleCalculation={() => handleCalculation('+')}
			/>
		</Container>
	);
};

OperatorList.propTypes = {
	handleCalculation: PropTypes.func.isRequired,
};

export default OperatorList;
