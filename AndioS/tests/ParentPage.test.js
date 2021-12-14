import React from 'react';
import renderer from 'react-test-renderer';

import ParentPage from '../components/parentApp/ParentPage';

describe('<ParentPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <ParentPage />
        );
    });
});