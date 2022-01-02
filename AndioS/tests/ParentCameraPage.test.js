import React from 'react';
import renderer from 'react-test-renderer';

import ParentCameraPage from '../components/parentApp/ParentCameraPage';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe('<ParentCameraPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentCameraPage />
        );

        const wrapper = mount(<ParentCameraPage />);
    });
});