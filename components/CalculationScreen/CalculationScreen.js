import PropTypes     from 'prop-types';
import { Container } from './CalculationScreenStyle';

const CalculationScreen = ({ currentCalculation, result }) => {
  return (
    <Container>
      <div>
        <p>{ currentCalculation }</p>
        <span>{ result }</span>
      </div>
    </Container>
  );
};

CalculationScreen.propTypes = {
  currentCalculation: PropTypes.string.isRequired,
  result:             PropTypes.number.isRequired,
};

export default CalculationScreen;
