import React from 'react';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import CourseCtaCard from '../src/components/CourseHeader.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);

let testCourseData = {
  current_price: 12.99,
  price: 199.99,
  discount: 0.94,
  course_len: 34.5,
  num_of_articles: 142,
  dwl_resources_count: 73,
  discountCountdown: '3 days',
  isOnDiscount: true
};

let correctText = {
  current_price: '$12.99',
  price: '$199.99',
  discount: '94% Off',
  course_len: '34.5 hours',
  num_of_articles: '142 articles',
  dwl_resources_count: '73 downloadable resources',
};

describe('Course CTA Card', () => {
  test('Renders to the screen', () => {
    render(<CourseCtaCard />);
  });

  test('Displays the correct current price', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.current_price)
  })

  test('Displays the correct original price', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.price);
  });

  test('Displays the correct discount percentage', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.discount)
  });

  test('Displays the correct discount countdown', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.discountCountdown);
  });

  test('Displays the correct course length', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.course_len);
  });

  test('Displays the correct number of articles', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.num_of_articles);
  });

  test('Displays the correct number of downloadbale resources', () => {
    const { container } = render(<CourseCtaCard courseData={testCourseData}/>);
    expect(container).toHaveTextContent(correctText.dwl_resources_count);
  });
});
