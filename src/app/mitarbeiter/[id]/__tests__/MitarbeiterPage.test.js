import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MitarbeiterPage from '../page';

const mockStore = configureMockStore();

describe('Page', () => {
  it('renders hello max mustermann', () => {
    const store = mockStore({
      MITARBEITER_SLICE_NAME: {
        mitarbeiter: {
          name: 'Max Mustermann',
        },
        error: null,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterPage />
      </Provider>,
    );

    const wrapper = screen.getByTestId('mitarbeiter_begruessungstext');
    const text = wrapper.querySelector('div');

    expect(text?.textContent).toContain('Hi, I am Max Mustermann');
  });

  it('renders no data found', () => {
    const store = mockStore({
      MITARBEITER_SLICE_NAME: {
        mitarbeiter: null,
        error: null,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterPage />
      </Provider>,
    );

    const wrapper = screen.getByTestId('mitarbeiter_begruessungstext');
    const text = wrapper.querySelector('span');

    expect(text?.textContent).toContain('No data');
  });

  it('is loading', () => {
    const store = mockStore({
      MITARBEITER_SLICE_NAME: {
        mitarbeiter: null,
        error: null,
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterPage />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
