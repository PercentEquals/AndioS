import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ParentLoginPage from '../components/auth/ParentLoginPage';

Enzyme.configure({adapter: new Adapter()});

describe('<ParentLoginPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentLoginPage />
        );

        const wrapper = mount(<ParentLoginPage />);
    });

    it('returns as nothing is typed', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentLoginPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();

        expect(onPressEvent).toHaveBeenCalledTimes(0);
    });

    it('returns as not enough is typed', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentLoginPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onChange')).first().props().onChange('1');
        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();

        expect(onPressEvent).toHaveBeenCalledTimes(0);
    });

    it('registers as expectedPassword is not set and then logins', async () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentLoginPage navigation={navigation} />);

        const spyAlert = jest.spyOn(Alert, 'alert');

        // REGISTER
        wrapper.findWhere((n) => n.prop('onChange')).first().props().onChange('1111');
        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();

        await spyAlert.mock.calls[0][2][0].onPress(); // Click 'yes' on Alert

        expect(onPressEvent).toHaveBeenCalledTimes(1);

        // LOGIN
        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();

        // BAD PASSWORD
        wrapper.findWhere((n) => n.prop('onChange')).first().props().onChange('1122');
        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();
    });

    it('cancels registration on Alert decline', async () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentLoginPage navigation={navigation} />);

        const spyAlert = jest.spyOn(Alert, 'alert');

        wrapper.findWhere((n) => n.prop('onChange')).first().props().onChange('1111');
        wrapper.findWhere((n) => n.prop('onPress')).first().props().onPress();

        await spyAlert.mock.calls[0][2][1].onPress(); // Click 'no' on Alert

        expect(onPressEvent).toHaveBeenCalledTimes(0);
    });
});