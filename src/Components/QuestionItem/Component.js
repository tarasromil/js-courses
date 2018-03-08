import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags/Component";
import { Link } from 'react-router-dom';


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
  font-weight: 700;
  text-decoration: none;
  font-size: 16pt;
  padding-bottom: 10px;
`.withComponent(Link);


const Edit = styled.a`
  display: inline-flex;
  color: #0f0f0f;
  font-weight: 700;
  text-decoration: none;
  padding: 5px 10px;
`.withComponent(Link);


const Time = styled.time`
  display: inline-flex;
  color: #0f0f0f;
  text-decoration: none;
  flex: 3;
  padding: 5px;
  justify-content: flex-end;
  font-weight: 500;
`;


const QuestionItem = ({ question }) => (
  <QuestionWrapper>
    <TopWrapper>
      <Title to={`/question/${question._id}`}>
        {question.title}
      </Title>

      <Edit to={`/question/edit/${question._id}`}>Edit</Edit>
    </TopWrapper>

    <BottomWrapper>
      <Tags tags={question.tags} />

      <Time>{question.createdAt.toLocaleDateString()}</Time>
    </BottomWrapper>
  </QuestionWrapper>
);


export default QuestionItem;
