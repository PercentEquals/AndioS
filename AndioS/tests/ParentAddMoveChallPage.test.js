import React from 'react';
import renderer from 'react-test-renderer';

import ParentAddMoveChallPage from '../components/parentApp/ParentAddMoveChallPage';

describe('<ParentAddMoveChallPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentAddMoveChallPage />
        );
    });

    it('onPress works', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentAddMoveChallPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
            element.props().onPress();
        });

        wrapper.findWhere((n) => n.prop('onChangeText')).forEach(element => {
            element.simulate('changeText', '1111');
        });

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
            element.props().onPress();
        });
    });
});