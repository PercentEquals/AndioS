import React from 'react';
import renderer from 'react-test-renderer';

import Background from '../components/Background';

describe('<Background />', () => {
    it('renders', () => {
        const component = renderer.create(
            <Background />
        );
    });
});