import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from '../components/auth/LandingPage';

describe('<LandingPage />', () => {
    it('renders', () => {
        const component = renderer.create(
            <LandingPage />
        );
    });
});