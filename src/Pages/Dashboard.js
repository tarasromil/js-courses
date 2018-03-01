import React from 'react';

import Button from '../Components/Buttons/Button';
import Form from '../Components/Form';
import TextInput from '../Components/Form/TextInput';
import QuestionList from '../Components/QuestionList';


const lower = text => text.toLowerCase();


const isMatch = (text, search) => lower(text).match(search);


const matchBy = (byList, search) => item => byList.some(key => isMatch(item[key], search));


const matchByList = ['title', 'body'];


class Dashboard extends React.Component {
  state = {
    search: '',
  };

  render() {
    console.log('this.props: ', this.props);
    const { search } = this.state;

    const filteredData = this.props.data.filter(matchBy(matchByList, search));

    return (
      <div>
        <h2>Dashboard ({filteredData.length})</h2>

        <Form direction="row">
          <TextInput
            placeholder="Search..."
            autoFocus
            value={search}
            onChange={e => this.setState({ search: lower(e.target.value) })}
          />

          <Button primary>
            Ask now!
          </Button>
        </Form>

        <QuestionList list={filteredData} />
      </div>
    )
  }
}


export default Dashboard;
