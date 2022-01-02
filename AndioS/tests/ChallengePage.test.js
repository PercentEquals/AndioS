import React from 'react';
import renderer from 'react-test-renderer';

import { Alert } from 'react-native';

import ChallengePage from '../components/childApp/ChallengePage';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

let challengeMock = null;
let route = null;
let navigation = null;

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
    challengeMock = {
        id: 1,
        title: 'title',
        dates: [
            {
                date: new Date(2020, 1, 1),
                done: false,
            },
            {
                date: new Date(2020, 1, 2),
                done: true,
            },
            {
                date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                done: false,
            },
            {
                date: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
                done: false,
            }
        ],
        chall: 'chall',
        reward: 10,
    }

    route = {
        params: {
            challenge: challengeMock,
        }
    } 

    navigation = {
        navigate: jest.fn(),
        pop: jest.fn(),
        setOptions: jest.fn(),
    }
});

describe('<ChallengePage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ChallengePage route={route} navigation={navigation} />
        );

        const wrapper = mount(<ChallengePage route={route} navigation={navigation} />);
    });

    it('renders with button and clicks yes', async () => {
        const wrapper = shallow(<ChallengePage route={route} navigation={navigation} />);
        const spyAlert = jest.spyOn(Alert, 'alert');

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
             element.props().onPress();
        });
        await spyAlert.mock.calls[0][2][0].onPress(); // Click 'yes' on Alert
    });

    it('renders with button and clicks yes and finishes challenge', async () => {
        const challengeMockLocal = {
            id: 1,
            title: 'title',
            dates: [
                {
                    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                    done: false,
                }
            ],
            chall: 'chall',
            reward: 10,
        }
    
        const routeLocal = {
            params: {
                challenge: challengeMock,
            }
        } 

        const wrapper = shallow(<ChallengePage route={routeLocal} navigation={navigation} />);
        const spyAlert = jest.spyOn(Alert, 'alert');

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
             element.props().onPress();
        });
        await spyAlert.mock.calls[0][2][0].onPress(); // Click 'yes' on Alert
    });

    it('renders with button and clicks no', async () => {
        const wrapper = shallow(<ChallengePage route={route} navigation={navigation} />);
        const spyAlert = jest.spyOn(Alert, 'alert');

        wrapper.findWhere((n) => n.prop('onPress')).forEach(element => {
             element.props().onPress();
        });

        await spyAlert.mock.calls[0][2][1].onPress(); // Click 'no' on Alert
    });
});