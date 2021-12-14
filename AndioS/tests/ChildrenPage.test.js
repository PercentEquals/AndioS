import React from 'react';
import renderer from 'react-test-renderer';

import ChildrenPage from '../components/childApp/ChildrenPage';

describe('<ChildrenPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ChildrenPage />
        );
    });
});