import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import CourseHeader from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('CourseHeader Component', () => {
  test('renders to the document', () => {
    render(<CourseHeader />);
  })
})
