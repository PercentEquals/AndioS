import React from 'react';
import renderer from 'react-test-renderer';

import ChildrenPage from '../components/childApp/ChildrenPage';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe('<ChildrenPage />', async () => {
    it('renders', () => {
        const component = renderer.create(
            <ChildrenPage />
        );

        const wrapper = mount(<ChildrenPage />);
    });
});