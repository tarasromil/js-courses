import React from 'react';
import styled from 'styled-components';


const divideVotes = votes => {
  const positive = votes.filter(vote => vote.isPositive).length;
  const negative = votes.length - positive;
  return { positive, negative };
};


const Answers = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;


const Answer = styled.li`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;


const Votes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 10%;
  margin-right: 10px;
`;


const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90%;
`;

const AnswerBody = styled.div`
  display: flex;
  font-size: 11pt;
  margin-bottom: 10px;
`;

const AnswerBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;


const AnswerBottom = styled.span``;


const AnswersList = ({ answers, votes, users, onVote, user }) => (
  <Answers>
    {answers.map(answer => {
      const currentVotes = votes.filter(vote => vote.answerId === answer._id);
      const { positive, negative } = divideVotes(currentVotes);
      const author = users.find(user => user._id === answer.createdById)
        || { profile: { fullName: 'Anonymous' } };
      return (
        <Answer key={answer._id}>
          <Votes>
            <button disabled={!user} onClick={() => onVote(answer._id, true)}>{positive} +</button>
            <button disabled={!user} onClick={() => onVote(answer._id, false)}>{negative} -</button>
          </Votes>

          <AnswerWrapper>
            <AnswerBody>{answer.title}</AnswerBody>

            <AnswerBottomWrapper>
              <AnswerBottom>
                By: <strong>{author.profile.fullName}</strong>
              </AnswerBottom>

              <AnswerBottom>
                {answer.createdAt.toLocaleDateString()}
              </AnswerBottom>
            </AnswerBottomWrapper>
          </AnswerWrapper>
        </Answer>
      )}
    )}
  </Answers>
);


export default AnswersList;
