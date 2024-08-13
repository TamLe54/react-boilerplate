import { getGlobalCssVariable } from './get-global-css-variables';

test('getGlobalCssVariable', () => {
  expect(getGlobalCssVariable('--primary')).equal('');
});
