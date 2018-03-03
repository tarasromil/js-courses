import React from 'react';
import { withStateHandlers } from 'recompose';

import TopNavButton from '../Components/Buttons/LinkButton';
import TextInput from '../Components/Form/TextInput';
import QuestionList from '../Components/QuestionList';


const Dashboard = ({ search, onSearchChange, data }) => (
  <div>
    <TextInput
      placeholder="Search..."
      autoFocus
      value={search}
      onChange={onSearchChange}
    />

    <TopNavButton href="/new-question">
      Ask now!
    </TopNavButton>

    <h2>Users ask: ({data.length})</h2>

    <QuestionList list={data} />
  </div>
);


const lower = text => text.toLowerCase();


const matchBy = (byList, search) => item => byList.some(key => lower(item[key]).match(search));


const matchByList = ['title', 'description'];


const enhance = withStateHandlers(
  props => ({
    search: '',
    data: props.data,
  }),
  {
    onSearchChange: (state, props) => event => {
      const search = lower(event.target.value);
      return {
        search,
        data: props.data.filter(matchBy(matchByList, search)),
      };
    },
  },
);


export default enhance(Dashboard);
