import React from 'react';
import renderer from 'react-test-renderer';

import { datesDayDiff, datesHourDiff } from '../components/Store';

describe('Store', () => {
    it('datesDayDiff works', () => {
        expect(datesDayDiff(new Date(2020, 1, 2), new Date(2020, 1, 1))).toBe(1);
    });

    it('datesHourDiff works', () => {
        expect(datesHourDiff(new Date(2020, 1, 2).getTime(), new Date(2020, 1, 1).getTime())).toBe(24);
    });
});