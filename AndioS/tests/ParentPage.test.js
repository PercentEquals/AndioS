import React from 'react';
import renderer from 'react-test-renderer';

import ParentPage from '../components/parentApp/ParentPage';

describe('<ParentPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentPage />
        );
    });

    it('onPress works', () => {
        const onPressEvent = jest.fn();
        const navigation = { navigate: onPressEvent };

        const wrapper = shallow(<ParentPage navigation={navigation} />);

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
            element.props().onPress();
        });

        expect(onPressEvent).toHaveBeenCalled();
    });
});