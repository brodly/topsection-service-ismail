import React from 'react';
import NavBar from '../src/components/NavBar.js';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('NavBar Component', () => {

  test('renders to the document', () => {
    render(<NavBar />);
  });

});
