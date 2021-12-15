import React from 'react';
import renderer from 'react-test-renderer';

import Challenge from '../components/childApp/Challenge';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

let challengeMock = null;

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
    challengeMock = {
        id: 1,
        title: 'title',
        dates: [
            {
                date: new Date(2020, 1, 1),
                steps: 10,
                done: false,
            },
            {
                date: new Date(2020, 1, 1),
                steps: 10,
                done: true,
            },
            {
                date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                steps: 10,
                done: false,
            }
        ],
        reward: 10,
    }
});

describe('<Challenge />', () => {
    it('renders', () => {
        const component = renderer.create(
            <Challenge challenge={challengeMock} />
        );

        const wrapper = mount(<Challenge challenge={challengeMock} />);
    });
});