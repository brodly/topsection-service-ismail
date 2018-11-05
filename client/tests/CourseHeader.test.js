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
    const { container } = render(<CourseHeader courseData={{subtitle: 'test'}}/>);
    expect(container).toHaveTextContent('test');
  });

  test('renders the rating component', () => {
    const { container } = render(<CourseHeader courseData={{ avg_rating: 3 }} />);
    const ratingComponent = container.querySelector('.ui.star.rating');
    expect(ratingComponent).toBeInTheDocument();
  })

  test('Renders the rating component with the corrct star count', () => {
    const { container } = render(<CourseHeader courseData={{ avg_rating: 3 }} />);
    const starCount = container.querySelectorAll('.active').length;
    expect(starCount).toBe(3);
  })

  test('Renders the label component with correct text', () => {
    const tag = 'Bestseller';
    const { container } = render(<CourseHeader courseData={{ hasTag: true, tag }} />);
    const label = container.querySelector('.ui.label');
    console.log(label)
    // expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(tag);
  })

})
