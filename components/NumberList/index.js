/** @format */

import PropTypes from 'prop-types';
import { Container, RowNumber } from './styles';
import ControlItem from 'components/ControlItem';

const NumberList = ({ numbers, handleCalculation, resetCalculator }) => {
	return (
		<Container>
			{numbers.map((column, columnIndex) => (
				<RowNumber key={columnIndex}>
					{column.map((row, rowIndex) => {
						const isRemoveItem = row === 'remove';
						const ControlItemValue = isRemoveItem ? (
							<i className="fa fa-arrow-left" aria-hidden="true" />
						) : (
							row
						);

						return (
							<div
								key={rowIndex}
								onMouseDown={isRemoveItem && resetCalculator ? true : false}
							>
								<ControlItem.Number
									value={ControlItemValue}
									handleCalculation={() => handleCalculation(row)}
								/>
							</div>
						);
					})}
				</RowNumber>
			))}
		</Container>
	);
};

NumberList.propTypes = {
	numbers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
	handleCalculation: PropTypes.func.isRequired,
	resetCalculator: PropTypes.func.isRequired,
};

export default NumberList;
