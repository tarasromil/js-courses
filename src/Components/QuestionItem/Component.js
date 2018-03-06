import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags/Component";


const QuestionWrapper = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  box-shadow: 0 8px 12px #bf7406;
`;

const TopWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


const Title = styled.a`
  display: inline-flex;
  color: #0f0f0f;
  font-size: 16pt;
  padding-bottom: 10px;
  text-decoration: none;
  font-weight: 700;
`;


const Edit = styled.a`
  display: inline-flex;
  padding: 5px 10px;
  color: #0f0f0f;
  text-decoration: none;
  font-weight: 700;
`;


const Time = styled.time`
  display: inline-flex;
  flex: 3;
  justify-content: flex-end;
  padding: 5px;
  font-weight: 500;
  color: #0f0f0f;
  text-decoration: none;
`;


const QuestionItem = ({ question }) => (
  <QuestionWrapper>
    <TopWrapper>
      <Title href={`/question/${question._id}`}>
        {question.title}
      </Title>
      <Edit href="/">Edit</Edit>
    </TopWrapper>

    <BottomWrapper>
      <Tags tags={question.tags} />
      <Time>{question.createdAt.toLocaleDateString()}</Time>
    </BottomWrapper>
  </QuestionWrapper>
);


export default QuestionItem;
