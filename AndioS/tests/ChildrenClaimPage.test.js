import React from 'react';
import renderer from 'react-test-renderer';
import ChildrenClaimPage from '../components/childApp/ChildrenClaimPage';


describe('<ChildrenClaimPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ChildrenClaimPage route={{
                params: 
                {
                    challenge: {
                        title: 'test', 
                        reward: '30', 
                        dates: [{
                            date: new Date(2020, 1, 1).toISOString(),
                        }],
                        file: null
                    }
                }
            }} />
        );
    });

    it('renders with uri', async () => {
        const wrapper = shallow(
            <ChildrenClaimPage route={{
                params: 
                {
                    challenge: {
                        title: 'test', 
                        reward: '30', 
                        dates: [{
                            date: new Date(2020, 1, 1).toISOString(),
                        }],
                        file: {
                            realUri: 'fake_uri',
                        }
                    }
                }
            }} />
        );

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
            element.props().onPress();
       });
    });
});