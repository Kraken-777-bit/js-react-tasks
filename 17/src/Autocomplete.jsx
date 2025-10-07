import axios from 'axios';
import React from 'react';

// BEGIN
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      countries: [],
      activeIndex: -1, // индекс выделенного элемента
    };
  }

  handleChange = async (e) => {
    const term = e.target.value.trim();
    this.setState({ term, activeIndex: -1 });

    if (term === '') {
      this.setState({ countries: [] });
      return;
    }

    try {
      const res = await axios.get('/countries', { params: { term } });
      this.setState({ countries: res.data });
    } catch (e) {
      console.error(e);
      this.setState({ countries: [] });
    }
  };

  handleKeyDown = (e) => {
    const { activeIndex, countries } = this.state;

    if (e.key === 'ArrowDown') {
      this.setState({
        activeIndex: (activeIndex + 1) % countries.length,
      });
    }

    if (e.key === 'ArrowUp') {
      this.setState({
        activeIndex: (activeIndex - 1 + countries.length) % countries.length,
      });
    }

    if (e.key === 'Enter' && activeIndex >= 0) {
      this.selectCountry(countries[activeIndex]);
    }
  };

  selectCountry = (country) => {
    this.setState({ term: country, countries: [], activeIndex: -1 });
  };

  highlightMatch = (country) => {
    const { term } = this.state;
    const regex = new RegExp(`(${term})`, 'i');
    return country.replace(regex, '<strong>$1</strong>');
  };

  render() {
    const { term, countries, activeIndex } = this.state;

    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            value={term}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </form>

        {countries.length > 0 && (
          <ul>
            {countries.map((country, i) => (
              <li
                key={country}
                onClick={() => this.selectCountry(country)}
                style={{
                  backgroundColor: i === activeIndex ? '#dbeafe' : 'transparent',
                  cursor: 'pointer',
                }}
                dangerouslySetInnerHTML={{ __html: this.highlightMatch(country) }}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
// END
