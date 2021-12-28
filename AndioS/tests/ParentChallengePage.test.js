import React from 'react';
import renderer from 'react-test-renderer';

import ParentChallangePage from '../components/parentApp/ParentChallangePage';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe('<ParentChallangePage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentChallangePage />
        );

        const wrapper = mount(<ParentChallangePage />);
    });
});