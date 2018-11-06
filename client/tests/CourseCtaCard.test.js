import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react';
import CourseCtaCard from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Course CTA Card', () => {
  test('Renders to the screen', () => {
    render(<CourseCtaCard />);
  });
});
