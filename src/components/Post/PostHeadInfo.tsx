import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  margin-bottom: 0;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  margin-top: 150px;

  @media (max-width: 768px) {
    margin: 100px 20px 0 20px;
    width: calc(100% - 40px);
  }
`;

const Title = styled.span`
  white-space: normal;
  font-size: 45px;
  font-weight: 800;
  word-break: keep-all;
  line-height: 1.2;
  background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 768px) {
    font-size: 40px;
    font-weight: bolder;
  }
`;

const DateWrapper = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    margin-bottom: 1em;
    font-size: 15px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  margin-top: 1.5em;

  @media (max-width: 768px) {
    margin-top: 1.5em;
    padding-bottom: 20px;
    border-bottom: 1px solid #222;
  }
`;

const Category = styled.p`
  color: #000;
  background: rgba(0, 0, 0, 0.07);
  padding: 0.3em;
  border-radius: 8px;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadInfoWrapper>
      <DateWrapper>{date}</DateWrapper>
      <Title>{title}</Title>
      <CategoryWrapper>
        {categories.map(category => (
          <Category key={category}>{category}</Category>
        ))}
      </CategoryWrapper>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
