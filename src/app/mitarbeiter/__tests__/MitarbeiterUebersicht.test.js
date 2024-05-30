import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MitarbeiterUebersichtPage from '../page';
import { getMitarbeiterUebersichtRequestAction } from '../store/MitarbeiterUebersichtTypes';
const fs = require('fs');
const util = require('util');
const mockStore = configureMockStore();

describe('MitarbeiterUebersichtPage', () => {
  it('renders loading state', () => {
    const store = mockStore({
      MITARBEITER_UEBERSICHT_SLICE_NAME: {
        mitarbeiterUebersicht: null,
        error: null,
        isLoading: true,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterUebersichtPage />
      </Provider>,
    );
    console.log(screen);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const store = mockStore({
      MITARBEITER_UEBERSICHT_SLICE_NAME: {
        mitarbeiterUebersicht: null,
        error: 'An error occurred',
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterUebersichtPage />
      </Provider>,
    );
    console.log(screen);
    expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
  });

  it('dispatches getMitarbeiterUebersichtRequestAction on mount', () => {
    const store = mockStore({
      MITARBEITER_UEBERSICHT_SLICE_NAME: {
        mitarbeiterUebersicht: [],
        error: null,
        isLoading: false,
      },
    });

    render(
      <Provider store={store}>
        <MitarbeiterUebersichtPage />
      </Provider>,
    );

    const actions = store.getActions();
    expect(actions[0]).toEqual(getMitarbeiterUebersichtRequestAction());
  });

  it('renders a Mitarbeiter and clicks on edit', async () => {
    const store = mockStore({
      MITARBEITER_UEBERSICHT_SLICE_NAME: {
        mitarbeiterUebersicht: [{ id: 1, name: 'Max Mustermann', link: null }],
        error: null,
        isLoading: false,
      },
    });

    const { debug, container } = render(
      <Provider store={store}>
        <MitarbeiterUebersichtPage />
      </Provider>,
    );

    debug();
    // fs.writeFileSync(
    //   'debugOutput.txt',
    //   util.inspect(container.innerHTML, { depth: null }),
    //   'utf-8',
    // );

    // expect(await screen.getByTestId('name-cell-1')).toBeInTheDocument();
    // expect(await screen.getByTestId('link-cell-1')).toBeInTheDocument();
    // expect(await screen.getByTestId('link-edit-button-1')).toBeInTheDocument();
    // const editButton = await screen.getByTestId('link-edit-button-1');
    // fireEvent.click(editButton);
  });
});
