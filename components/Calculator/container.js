/** @format */

import { bindActionCreators } from 'redux';
import { nextConnect } from '@/configureStore';
import { initDb, reset, updateResult } from './actions';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
	initDb: bindActionCreators(initDb, dispatch),
	updateResult: bindActionCreators(updateResult, dispatch),
	reset: bindActionCreators(reset, dispatch),
});

export const CalculatorContainer = (Component) =>
	nextConnect(mapStateToProps, mapDispatchToProps)(Component);

export default CalculatorContainer;
