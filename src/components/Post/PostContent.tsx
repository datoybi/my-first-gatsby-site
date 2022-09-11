import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0;
  word-break: break-all;
  color: #222;

  // Markdown Style
  line-height: 1.8;
  font-size: 1.1rem;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 5x;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 25px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 0;
    margin: 50px 0;
  }

  // Adjust Link Element Style
  a {
    background-color: rgba(0, 0, 0, 0.07);
    color: #222;
    font-weight: 100;
    padding: 0.25rem;
    border-radius: 0.25rem;

    &:hover {
      text-decoration: underline;
    }
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  p code[class='language-text'],
  h1 code[class='language-text'],
  h2 code[class='language-text'],
  li code[class='language-text'],
  h3 code[class='language-text'] {
    // highlight
    background-color: #ffffff;
    color: #231900;
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: 0.5s linear highlight-animation;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }

  table {
    border: 1px solid #abb8c3;
    margin: 25px 0;
  }

  th {
    border: 1px solid #abb8c3;
  }

  td {
    border: 1px solid #abb8c3;
    padding-left: 1rem;
  }

  p > .gatsby-resp-image-wrapper {
    margin: 20px 0;
  }

  img {
    margin: 20px 0;
    width: 100%;
  }

  // !: Markdown Responsive Design
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 50px 20px;
    line-height: 1.6;
    font-size: 1.1em;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 23px;
    }

    h3 {
      font-size: 20px;
    }

    hr {
      margin: 50px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
