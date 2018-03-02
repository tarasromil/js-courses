import React from 'react';

import TopNavButton from '../Components/Buttons/LinkButton';
import TextInput from '../Components/Form/TextInput';
import QuestionList from '../Components/QuestionList';


const lower = text => text.toLowerCase();


const isMatch = (text, search) => lower(text).match(search);


const matchBy = (byList, search) => item => byList.some(key => isMatch(item[key], search));


const matchByList = ['title', 'body'];


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <TextInput
          placeholder="Search..."
          autoFocus
          value={this.props.search}
          onChange={this.props.onSearchChange}
        />

        <TopNavButton href="/new-question">
          Ask now!
        </TopNavButton>

        <h2>Users ask: ({this.props.data.length})</h2>

        <QuestionList list={this.props.data} />
      </div>
    )
  }
}


const enhance = (BaseComponent) => {
  const factory = React.createFactory(BaseComponent);

  return class DashboardContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        search: '',
      };

      this.onSearchChange = event => this.setState({ search: lower(event.target.value) });
    }


    render() {
      return factory({
        ...this.props,
        ...this.state,
        data: this.props.data.filter(matchBy(matchByList, this.state.search)),
        onSearchChange: this.onSearchChange,
      });
    }
  };
};


export default enhance(Dashboard);
