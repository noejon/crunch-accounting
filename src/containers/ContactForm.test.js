import React from "react";
import { Provider } from "react-redux";
import { cleanup, render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';
import RemoteSubmitButton from './RemoteSubmitButton';
import { createMockStore } from 'redux-test-utils';

afterEach(cleanup);

test('redux form on submit', () => {
  const state = {
    form: {
      contactFormName: {
        values: {
          firstName: '',
          lastName: ''
        }
      }
    }
  };
  const store = createMockStore(state);
  const onSubmit = jest.fn();
  const { getByText } = render(
    <Provider store={store}>
      <ContactForm onSubmit={onSubmit} />
      <RemoteSubmitButton />
    </Provider>
  );

  const submitButton = getByText('Save');
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});