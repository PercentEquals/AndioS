import React from 'react';

import localize from '../components/locale/Localization';

describe('<Localization />', () => {
    it('translates', () => {
        expect(localize('welcome', {locale: 'en'})).toBe('Hello');
        expect(localize('welcome', {locale: 'pl'})).toBe('Cześć');
    });
});