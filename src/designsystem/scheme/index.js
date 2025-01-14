import api from './api.js';
import { Scheme } from './script/scheme/scheme.js';
import { SchemeValue } from './script/scheme/scheme-value.js';
import { SchemeSelector } from './script/scheme/scheme-selector.js';
import { SchemeEmission } from './script/scheme/scheme-emission.js';
import { SchemeTheme } from './script/scheme/scheme-theme.js';
import { SchemeEvent } from './script/scheme/scheme-event.js';

api.scheme = {
  Scheme: Scheme,
  SchemeValue: SchemeValue,
  SchemeSelector: SchemeSelector,
  SchemeEmission: SchemeEmission,
  SchemeTheme: SchemeTheme,
  SchemeEvent: SchemeEvent
};

export default api;
