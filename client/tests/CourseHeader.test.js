import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import CourseHeader from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const mockData = jest.fn();
describe('CourseHeader Component', () => {
  test('renders to the document', () => {
    render(<CourseHeader />);
  });

  test('displays the course title', () => {
    const { container } = render(<CourseHeader courseData={{ title: 'test' }}/>);
    expect(container).toHaveTextContent('test');
  });

  test('displays the course subtitle', () => {
    const { container } = render(<CourseHeader courseData={{ subtitle: 'test' }}/>);
    expect(container).toHaveTextContent('test');
  });

})
