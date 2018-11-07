import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import CourseHeader from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

let mockCourseData = {
  title: 'test',
  subtitle: 'test2',
  avg_rating: 3.5,
  rating_count: 8498,
  student_count: 89492,
  teacher_names: 'Joe Rogan_Daniel Cormier'
};

let correctText = {
  rating_count: '8,498',
  student_count: '89,492',
  teacher_names: 'Joe Rogan, Daniel Cormier',
  avg_rating: '3.5',
  star_count: 3
};

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
    expect(starCount).toBe(correctText.star_count);
  })

//   test('Renders the label component with correct text', () => {
//     const { container } = render(<CourseHeader courseData={mockCourseData} />);
//     const label = container.querySelector('.ui.label');
//     expect(label).toBeInTheDocument();
//     expect(label).toHaveTextContent(mockCourseData.tag);
//   });

  test('Displays the number rating correctly', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    expect(container).toHaveTextContent(correctText.avg_rating);
  });

  test('Displays the ratings count correctly', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    expect(container).toHaveTextContent(correctText.rating_count);
  });

  test('Displays the students count correctly', () => {
    const { container } = render(<CourseHeader courseData={mockCourseData} />);
    expect(container).toHaveTextContent(correctText.student_count);
  });

})
