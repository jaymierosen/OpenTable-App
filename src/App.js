import React, { Component } from 'react';
import { Wrapper, SubTitle } from './Components/StyledComponents';
import Header from './Components/Header';
import Form from './Components/Form';
import RestaurantList from './Components/RestaurantList';
import Footer from './Components/Footer';
import { capFrstLttr } from './Functions/helper-functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      city: '',
      placeholder: 'inline-block'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // should I be using componentDidMount?
  // I am still a little confused about how lifecycle methods work, but would love to learn more about it and fully understand how they work

  // componentDidMount() {
  //   this.getRestaurants(this.state.city)
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         restaurants: data
  //       })
  //     );
  // }

  handleChange(event) {
    this.setState({
      city: event.target.value,
      placeholder: 'none'
    });
  }

  handleSubmit(e) {
    this.getRestaurants(this.state.city)
      .then(res => res.json())
      .then(data =>
        this.setState({
          restaurants: data.restaurants
        })
      )
      // not sure why errors are not being logged in the console... :/
      .catch(err => console.log("There was an error:" + err));
    e.preventDefault();
  }

  getRestaurants(city) {
    // would have loved to incorporate pagination for the results given more time
    return fetch(`https://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=100`);
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Form handleSubmit={this.handleSubmit} value={this.state.city} handleChange={this.handleChange} />
        <SubTitle>Restaurants in <span className="placeholder" style={{ color: 'lightgrey', display: this.state.placeholder }}>City</span><span style={{ borderBottom: '2px solid grey' }}>{capFrstLttr(this.state.city)}</span></SubTitle>
        <RestaurantList restaurants={this.state.restaurants} />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
