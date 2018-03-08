import React from 'react';

import LinkButton from '../Buttons/LinkButton';
import TextInput from '../Form/TextInput';
import QuestionList from '../QuestionList/Container';
import styled from 'styled-components';


const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PanelWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonWrapper = styled.span`
  display: inline-flex;
  flex: 1;
  padding: 10px;
  margin: 5px;
  justify-content: flex-end;
`;

const SortByDropdown = styled.select`
  flex: 2;
  margin: 5px;
  padding: 0 10px;
  font-size: 16pt;
`;


const Dashboard = ({ search, onChangeSearch, sortBy, onChangeSortBy }) => (
  <MainWrapper>
    <PanelWrapper>
      <TextInput
        placeholder="Search..."
        autoFocus
        value={search}
        onChange={onChangeSearch}
      />

      <SortByDropdown value={sortBy} onChange={onChangeSortBy}>
        <option value="createdAt">Time</option>
        <option value="title">Title</option>
      </SortByDropdown>

      <ButtonWrapper>
        <LinkButton to="/question/new">
          Ask now!
        </LinkButton>
      </ButtonWrapper>
    </PanelWrapper>

    <QuestionList search={search} sortBy={sortBy} />
  </MainWrapper>
);


export default Dashboard;
