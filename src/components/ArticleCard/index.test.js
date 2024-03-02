import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from './ArticleCard';

describe('ArticleCard component', () => {
  const mockArticleData = {
    link: 'https://example.com/article',
    title: 'Sample Article Title',
    publishDate: '2024-03-01',
    updateDate: '2024-03-02',
    section: 'Sample Section',
    heading: 'Sample Heading',
    writer: 'John Doe',
    summary: 'This is a sample article summary.',
  };

  test('renders article card with correct data', () => {
    render(
      <ArticleCard
        link={mockArticleData.link}
        title={mockArticleData.title}
        publishDate={mockArticleData.publishDate}
        updateDate={mockArticleData.updateDate}
        section={mockArticleData.section}
        heading={mockArticleData.heading}
        writer={mockArticleData.writer}
        summary={mockArticleData.summary}
      />
    );

    expect(screen.getByText(`Article Heading : ${mockArticleData.title}`)).toBeInTheDocument();
    expect(screen.getByText(`Article Summary : ${mockArticleData.summary}`)).toBeInTheDocument();
    expect(screen.getByText(`Source : ${mockArticleData.heading}`)).toBeInTheDocument();
    expect(screen.getByText(`Writer : ${mockArticleData.writer}`)).toBeInTheDocument();
    expect(screen.getByText(`Published Date : ${mockArticleData.publishDate}`)).toBeInTheDocument();
    expect(screen.getByText(`Updated Date : ${mockArticleData.updateDate}`)).toBeInTheDocument();
    expect(screen.getByText(`Section : ${mockArticleData.section}`)).toBeInTheDocument();
    expect(screen.getByText('Visit Article :')).toHaveAttribute('href', mockArticleData.link);
  });
});
