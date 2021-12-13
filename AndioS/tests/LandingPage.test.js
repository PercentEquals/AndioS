import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LandingPage from '../components/auth/LandingPage';

// https://docs.reactnativestarter.com/testing

describe('<LandingPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <LandingPage />
        );
    });

    it('onPress works', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<LandingPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();
        wrapper.findWhere((n) => n.prop('onPress')).last().props().onPress();
        expect(onPressEvent).toHaveBeenCalledTimes(2);
    })
});