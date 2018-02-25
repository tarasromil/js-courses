import React from 'react';
import data from '../data.json';
import Button from "../Components/Buttons/Button/Button";


class Dashboard extends React.Component {
  state = {
    data: [],
    isFetching: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data, isFetching: false })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>

        <Button>Ask now!</Button>

        {!this.state.isFetching ?
          this.state.data.map(item => (
            <div key={item._id}>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          )) : (
            <h1>Loading...</h1>
          )
        }
      </div>
    )
  }
}


export default Dashboard;
