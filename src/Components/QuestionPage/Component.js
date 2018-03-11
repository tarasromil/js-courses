import React from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import Form from '../Form/Component';
import AnswersList from "../AnswersList/Container";
import TextInput from "../TextInput/Component";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.h1``;


const Description = styled.div`
  font-size: 12pt;
  margin: 10px;
  padding: 15px 0;
`;


const QuestionPage = ({ question, user, answer, onChange, onSubmit, submitReady }) => (
  <Wrapper>
    <Title>{question.title}</Title>
    <div>By: <strong>{user.profile.fullName}</strong></div>

    <Description>{question.description}</Description>


    <AnswersList />

    <Form onSubmit={onSubmit}>
      <TextInput
        placeholder="Type your comment here..."
        value={answer}
        onChange={onChange('answer')}
      />

      <Button
        primary
        disabled={!submitReady}
      >
        Answer
      </Button>
    </Form>
  </Wrapper>
);


export default QuestionPage;
