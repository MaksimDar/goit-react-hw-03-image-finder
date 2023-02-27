import { Component } from 'react';
import { Form, SearchButton } from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const input = event.currentTarget.value;
    this.setState({ query: input.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      alert('You should write your request');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </Form>
      </header>
    );
  }
}
export default SearchBar;
