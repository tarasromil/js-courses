import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;


const QuestionList = ({ list }) => (
  <List>
    {list.length > 0 ?
      list.map(item => (
        <li key={item.id}>
          <h3><a href={`/questions/${item.id}`}>{item.title}</a></h3>
          <span>{item.body}</span>
        </li>
      )) : (
        <li>No items found</li>
      )
    }
  </List>
);

export default QuestionList;
