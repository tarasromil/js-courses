import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags/Component";


const LI = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  box-shadow: 0 8px 12px #bf7406;
`;


const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;


const Time = styled.time`
  display: inline-flex;
  flex: 3;
  justify-content: flex-end;
  padding: 5px;
  font-weight: 700;
`;


const QuestionItem = ({ question }) => (
  <LI>
    <h3>
      <a href={`/question/${question._id}`}>
        {question.title}
      </a>
    </h3>

    <BottomWrapper>
      <Tags tags={question.tags} />
      <Time>{question.createdAt.toLocaleDateString()}</Time>
    </BottomWrapper>
  </LI>
);


export default QuestionItem;
