import { h } from 'preact';
import Child from '../src/components/child';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = shallow(<Child />);
		expect(context.find('h2').text()).toBe('A child content');
	});
});
