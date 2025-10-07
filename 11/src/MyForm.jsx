import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      formData: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false
      }
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  handleBack = () => {
    this.setState({ submitted: false });
  };

  renderForm() {
    const { formData } = this.state;

    return (
      <form name="myForm" onSubmit={this.handleSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input 
            type="text" 
            className="form-control" 
            name="city" 
            id="city"
            value={formData.city}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select 
            id="country" 
            name="country" 
            className="form-control"
            value={formData.country}
            onChange={this.handleInputChange}
          >
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={formData.acceptRules}
                onChange={this.handleInputChange}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  renderTable() {
    const { formData } = this.state;
    
    // Создаем массив пар [ключ, значение] и сортируем по ключу
    const sortedEntries = Object.entries(formData)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
        <table className="table">
          <tbody>
            {sortedEntries.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return this.state.submitted ? this.renderTable() : this.renderForm();
  }
}
// END
