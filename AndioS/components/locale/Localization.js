import * as React from 'react';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from './en.json';
import pl from './pl.json';

i18n.translations = {
    en,
    pl
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

const localize = (key, options = {}) => {
    return i18n.t(key, options);
}

export default localize;