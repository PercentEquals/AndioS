import React from 'react';
import renderer from 'react-test-renderer';

import ChildrenRewardPage from '../components/childApp/ChildrenRewardPage';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe('<ChildrenRewardPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ChildrenRewardPage />
        );

        const wrapper = mount(<ChildrenRewardPage />);
    });

    it('onPress works', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ChildrenRewardPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
            element.props().onPress();
        });
    });
});