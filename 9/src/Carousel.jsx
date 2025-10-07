import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  handlePrev = () => {
    const { images } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
    }));
  };

    handleNext = () => {
    const { images } = this.props;
    this.setState((prevState) => {
            const newIndex = prevState.currentIndex + 1;
            return {
                currentIndex: newIndex >= images.length ? 0 : newIndex
            };
        });
    };

render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn('carousel-item', { active: index === currentIndex })}
            >
              <img alt="" className="d-block w-100" src={image} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
          onClick={this.handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
          onClick={this.handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
// END
