import { Component } from 'react';
import { Form, SearchButton } from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    pictureName: '',
  };

  handleChange = event => {
    const input = event.currentTarget.value;
    this.setState({ pictureName: input.toLowerCase() });
  };
  handleSubmit = event => {
    const { pictureName } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    if (pictureName === '') {
      alert('You should write your request');
      return;
    }
    onSubmit(pictureName);
    this.setState({ pictureName: '' });
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
            onChange={this.handleChange}
          />
        </Form>
      </header>
    );
  }
}
export default SearchBar;
