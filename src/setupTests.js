import '@testing-library/jest-dom';
import util from 'util';

Object.defineProperty(global, 'TextEncoder', {
	value: util.TextEncoder,
});
