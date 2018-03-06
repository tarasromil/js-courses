import React from 'react';

import TopNavButton from '../Buttons/LinkButton/index';
import TextInput from '../Form/TextInput/index';
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
  display: inline-flex;
  flex: 1;
  margin: 5px;
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
        <option value="title">Title</option>
        <option value="createdAt">Time</option>
      </SortByDropdown>

      <ButtonWrapper>
        <TopNavButton href="/new-question">
          Ask now!
        </TopNavButton>
      </ButtonWrapper>
    </PanelWrapper>

    <QuestionList search={search} sortBy={sortBy} />
  </MainWrapper>
);


export default Dashboard;
