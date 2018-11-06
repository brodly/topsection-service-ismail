import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import CourseHeader from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

let mockCourseData = {
  title: 'test',
  subtitle: 'test2',
  avg_rating: 3,
  rating_count: 8498,
  student_count: 89492
}

describe('CourseHeader Component', () => {
  test('renders to the document', () => {
    render(<CourseHeader />);
  });

  test('displays the course title', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData}/>);
    expect(container).toHaveTextContent(mockCourseData.title);
  });

  test('displays the course subtitle', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData}/>);
    expect(container).toHaveTextContent(mockCourseData.subtitle);
  });

  test('renders the rating component', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    const ratingComponent = container.querySelector('.ui.star.rating');
    expect(ratingComponent).toBeInTheDocument();
  })

  test('Renders the rating component with the corrct star count', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    const starCount = container.querySelectorAll('.active').length;
    expect(starCount).toBe(mockCourseData.avg_rating);
  })

  test('Renders the label component with correct text', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    const label = container.querySelector('.ui.label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(mockCourseData.tag);
  });

  test('Displays the correct rating as a number', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
  });

  test('Displays the ratings count correctly', () => {

  });

  test('Displays the students count correctly', () => {

  });

})
