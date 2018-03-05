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
  justify-content: flex-end;
  padding: 15px;
`;


const Dashboard = ({ search, onSearchChange }) => (
  <MainWrapper>
    <PanelWrapper>
      <TextInput
        placeholder="Search..."
        autoFocus
        value={search}
        onChange={onSearchChange}
      />

      <ButtonWrapper>
        <TopNavButton href="/new-question">
          Ask now!
        </TopNavButton>
      </ButtonWrapper>
    </PanelWrapper>

    <QuestionList search={search} />
  </MainWrapper>
);


export default Dashboard;
