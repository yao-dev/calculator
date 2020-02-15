'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/** @format */

var isOperator = exports.isOperator = function isOperator(operatorsList, operator) {
	return operatorsList.includes(operator);
};

var lastCharIsOperator = exports.lastCharIsOperator = function lastCharIsOperator(operatorsList, value) {
	if (!value) return false;
	return isOperator(operatorsList, value.slice(-1).trim());
};

var replaceOperator = exports.replaceOperator = function replaceOperator(str, value) {
	var updateCurrentCalculation = str.slice(0, -1).trim() + ' ' + value;
	return updateCurrentCalculation;
};

var getCalculationResult = exports.getCalculationResult = function getCalculationResult() {
	var currentCalculation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var nextCalculation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	var result = void 0;

	if (!currentCalculation) return { currentCalculation: '0', result: 0 };

	try {
		currentCalculation = currentCalculation.replace(/\x/g, '*');
		result = eval(nextCalculation || currentCalculation);
		currentCalculation = currentCalculation.replace(/\*/g, 'x');

		return {
			currentCalculation: currentCalculation,
			result: result
		};
	} catch (e) {
		result = eval(getNextCalculation(currentCalculation));
		currentCalculation = currentCalculation.replace(/\*/g, 'x');

		return {
			currentCalculation: currentCalculation,
			result: result
		};
	}
};

var getNextCalculation = exports.getNextCalculation = function getNextCalculation(calculation) {
	return calculation.slice(0, -1).trim();
};

var removeLastChar = exports.removeLastChar = function removeLastChar(currentCalculation, operators) {
	var result = void 0;
	var calculation = currentCalculation;

	if (!calculation) return;

	calculation = calculation.slice(0, -1).trim();

	if (isOperator(operators, calculation.slice(-1))) {
		var nextCalculation = getNextCalculation(calculation);

		return getCalculationResult(calculation, nextCalculation);
	}

	return getCalculationResult(calculation);
};

var mustRemoveLastChar = exports.mustRemoveLastChar = function mustRemoveLastChar(selectedValue) {
	if (selectedValue === 'Backspace' || selectedValue === 'remove') {
		return true;
	}

	return false;
};

exports.default = {
	isOperator: isOperator,
	lastCharIsOperator: lastCharIsOperator,
	replaceOperator: replaceOperator,
	getCalculationResult: getCalculationResult,
	removeLastChar: removeLastChar,
	mustRemoveLastChar: mustRemoveLastChar
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvY2FsY3VsYXRvci5qcyJdLCJuYW1lcyI6WyJpc09wZXJhdG9yIiwib3BlcmF0b3JzTGlzdCIsIm9wZXJhdG9yIiwiaW5jbHVkZXMiLCJsYXN0Q2hhcklzT3BlcmF0b3IiLCJ2YWx1ZSIsInNsaWNlIiwidHJpbSIsInJlcGxhY2VPcGVyYXRvciIsInN0ciIsInVwZGF0ZUN1cnJlbnRDYWxjdWxhdGlvbiIsImdldENhbGN1bGF0aW9uUmVzdWx0IiwiY3VycmVudENhbGN1bGF0aW9uIiwibmV4dENhbGN1bGF0aW9uIiwicmVzdWx0IiwicmVwbGFjZSIsImV2YWwiLCJlIiwiZ2V0TmV4dENhbGN1bGF0aW9uIiwiY2FsY3VsYXRpb24iLCJyZW1vdmVMYXN0Q2hhciIsIm9wZXJhdG9ycyIsIm11c3RSZW1vdmVMYXN0Q2hhciIsInNlbGVjdGVkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsQUFFQTs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsZUFBRCxBQUFnQixVQUFhLEFBQ3REO1FBQU8sY0FBQSxBQUFjLFNBQXJCLEFBQU8sQUFBdUIsQUFDOUI7QUFGTSxBQUlQOztBQUFPLElBQU0sa0RBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsZUFBRCxBQUFnQixPQUFVLEFBQzNEO0tBQUksQ0FBSixBQUFLLE9BQU8sT0FBQSxBQUFPLEFBQ25CO1FBQU8sV0FBQSxBQUFXLGVBQWUsTUFBQSxBQUFNLE1BQU0sQ0FBWixBQUFhLEdBQTlDLEFBQU8sQUFBMEIsQUFBZ0IsQUFDakQ7QUFITSxBQUtQOztBQUFPLElBQU0sNENBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsS0FBRCxBQUFNLE9BQVUsQUFDOUM7S0FBTSwyQkFBOEIsSUFBQSxBQUFJLE1BQUosQUFBVSxHQUFHLENBQWIsQUFBYyxHQUE1QyxBQUE4QixBQUFpQixlQUFyRCxBQUErRCxBQUMvRDtRQUFBLEFBQU8sQUFDUDtBQUhNLEFBS1A7O0FBQU8sSUFBTSxzREFBdUIsU0FBdkIsQUFBdUIsdUJBRy9CO0tBRkosQUFFSSx5RkFGaUIsQUFFakI7S0FESixBQUNJLHNGQURjLEFBQ2QsQUFDSjs7S0FBSSxjQUFKLEFBRUE7O0tBQUksQ0FBSixBQUFLLG9CQUFvQixPQUFPLEVBQUUsb0JBQUYsQUFBc0IsS0FBSyxRQUFsQyxBQUFPLEFBQW1DLEFBRW5FOztLQUFJLEFBQ0g7dUJBQXFCLG1CQUFBLEFBQW1CLFFBQW5CLEFBQTJCLE9BQWhELEFBQXFCLEFBQWtDLEFBQ3ZEO1dBQVMsS0FBSyxtQkFBZCxBQUFTLEFBQXdCLEFBQ2pDO3VCQUFxQixtQkFBQSxBQUFtQixRQUFuQixBQUEyQixPQUFoRCxBQUFxQixBQUFrQyxBQUV2RDs7O3VCQUFPLEFBRU47V0FGRCxBQUFPLEFBSVA7QUFKTyxBQUNOO0FBTkYsR0FTRSxPQUFBLEFBQU8sR0FBRyxBQUNYO1dBQVMsS0FBSyxtQkFBZCxBQUFTLEFBQUssQUFBbUIsQUFDakM7dUJBQXFCLG1CQUFBLEFBQW1CLFFBQW5CLEFBQTJCLE9BQWhELEFBQXFCLEFBQWtDLEFBRXZEOzs7dUJBQU8sQUFFTjtXQUZELEFBQU8sQUFJUDtBQUpPLEFBQ047QUFJRjtBQTFCTSxBQTRCUDs7QUFBTyxJQUFNLGtEQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLGFBQUQ7UUFDakMsWUFBQSxBQUFZLE1BQVosQUFBa0IsR0FBRyxDQUFyQixBQUFzQixHQURXLEFBQ2pDLEFBQXlCO0FBRG5CLEFBR1A7O0FBQU8sSUFBTSwwQ0FBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLG9CQUFELEFBQXFCLFdBQWMsQUFDaEU7S0FBSSxjQUFKLEFBQ0E7S0FBSSxjQUFKLEFBQWtCLEFBRWxCOztLQUFJLENBQUosQUFBSyxhQUFhLEFBRWxCOztlQUFjLFlBQUEsQUFBWSxNQUFaLEFBQWtCLEdBQUcsQ0FBckIsQUFBc0IsR0FBcEMsQUFBYyxBQUF5QixBQUV2Qzs7S0FBSSxXQUFBLEFBQVcsV0FBVyxZQUFBLEFBQVksTUFBTSxDQUE1QyxBQUFJLEFBQXNCLEFBQW1CLEtBQUssQUFDakQ7TUFBTSxrQkFBa0IsbUJBQXhCLEFBQXdCLEFBQW1CLEFBRTNDOztTQUFPLHFCQUFBLEFBQXFCLGFBQTVCLEFBQU8sQUFBa0MsQUFDekM7QUFFRDs7UUFBTyxxQkFBUCxBQUFPLEFBQXFCLEFBQzVCO0FBZk0sQUFpQlA7O0FBQU8sSUFBTSxrREFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxlQUFrQixBQUNwRDtLQUFJLGtCQUFBLEFBQWtCLGVBQWUsa0JBQXJDLEFBQXVELFVBQVUsQUFDaEU7U0FBQSxBQUFPLEFBQ1A7QUFFRDs7UUFBQSxBQUFPLEFBQ1A7QUFOTSxBQVFQOzs7YUFBZSxBQUVkO3FCQUZjLEFBR2Q7a0JBSGMsQUFJZDt1QkFKYyxBQUtkO2lCQUxjLEFBTWQ7cUJBTkQsQUFBZTtBQUFBLEFBQ2QiLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXlhby9EZXNrdG9wL2dpdGh1Yi9jYWxjdWxhdG9yIn0=