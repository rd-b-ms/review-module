import React from 'react';

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    const { ratings } = this.props;
    return (
      <div>
        <div>
          <h2>
            {ratings.length}
            {' '}
            Reviews
            <form>
              <input type="text" value={search} onChange={this.handleChange} />
            </form>
          </h2>
        </div>
        <div>
          Accuracy Location
        </div>
        <div>
          Communication Check-in
        </div>
        <div>
          Cleanliness Value
        </div>
      </div>
    );
  }
}
export default ReviewBar;
