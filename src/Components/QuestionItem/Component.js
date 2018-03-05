import React from 'react';
import Tags from "../Tags/Component";


const QuestionItem = ({ question }) => (
  <li>
    <h3>
      <a href={`/question/${question._id}`}>
        {question.title}
      </a>
    </h3>

    <Tags tags={question.tags} />
  </li>
);


export default QuestionItem;
