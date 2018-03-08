import React from 'react';
import TextInput from "../Form/TextInput";
import Button from "../Buttons/Button";
import Header from "../Header/Component";
import Form from "../Form/Component";
import styled from 'styled-components';


const Description = styled.textarea`
  width: 50%;
  padding: 8px 20px;
  margin: 5px;
  font-size: 16pt;
  resize: vertical;
  min-height: 200px;
`;


const getHeader = isExists => isExists ? 'Edit Question' : 'Add Question';


const QuestionForm = ({ title, description, tags, onChange, onSubmit, match, submitReady }) => (
  <Form onSubmit={onSubmit}>
    <Header>
      {getHeader(match.params.questionId)}
    </Header>

    <TextInput
      autoFocus
      name="title"
      placeholder="Title"
      value={title}
      onChange={onChange('title')}
    />

    <Description
      name="description"
      placeholder="Description..."
      value={description}
      onChange={onChange('description')}
    />

    <TextInput
      name="tags"
      placeholder="Type tags by whitespace"
      value={tags}
      onChange={onChange('tags')}
    />

    <Button
      primary
      type="submit"
      disabled={!submitReady}
    >
      Submit
    </Button>
  </Form>
);


export default QuestionForm;
