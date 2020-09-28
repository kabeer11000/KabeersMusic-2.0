// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
describe("Test", () => {
	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: jest.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // deprecated
				removeListener: jest.fn(), // deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			}))
		});
	});
});
window.matchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () {
		},
		removeListener: function () {
		}
	};
};
import "@testing-library/jest-dom/extend-expect";
