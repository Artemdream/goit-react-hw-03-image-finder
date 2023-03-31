import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../styles.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  //* Значення інпута записуємо в стейт
  handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    this.setState({ searchQuery });
  };

  //*  Передаємо в App значення searchQuery і очищуємо форму
  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <label className="SearchForm-button-label">
              <BsSearch />
            </label>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChangeSearchQuery}
          />
        </form>
      </header>
    );
  }
}
