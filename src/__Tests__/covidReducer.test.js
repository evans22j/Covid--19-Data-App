import {
  fetchCountries,
  initialState,
} from '../redux/countries/countries';

jest.mock('../redux/countries/countries');

describe('load continents covid data', () => {
  test('Test connection to the Redux Store', () => {
    const state = initialState[0];
    expect(state).toBe(undefined);
  });

  test('Test access to the API', () => {
    const dispatch = jest.fn();
    dispatch(fetchCountries());
  });
});
