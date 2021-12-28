import React from 'react';
import renderer from 'react-test-renderer';

import { datesDayDiff, datesHourDiff, datesAreOnSameDay, addChallenge, getChallenges } from '../components/Store';

describe('Store', () => {
    it('datesDayDiff works', () => {
        expect(datesDayDiff(new Date(2020, 1, 2), new Date(2020, 1, 1))).toBe(1);
    });

    it('datesHourDiff works', () => {
        expect(datesHourDiff(new Date(2020, 1, 2).getTime(), new Date(2020, 1, 1).getTime())).toBe(24);
    });

    it('datesAreOnSameDay works', () => {
        expect(datesAreOnSameDay(new Date(2020, 1, 2), new Date(2020, 1, 1))).toBe(false);
        expect(datesAreOnSameDay(new Date(2020, 1, 2), new Date(2020, 1, 1))).toBe(false);
        expect(datesAreOnSameDay(new Date(2021, 1, 1), new Date(2020, 1, 1))).toBe(false);
        expect(datesAreOnSameDay(new Date(2020, 1, 1), new Date(2020, 1, 1))).toBe(true);
    });

    it('store works', async () => {
        await addChallenge("", "", new Date(2200, 1, 1), "");
    });
});