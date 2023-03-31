import React, { Component } from 'react';
import '../styles.css';

export class Modal extends Component {
  //* Вішаємо слухач на window по натисканню клавіші при монтуванні
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  //* Видаляємо слухача з window при розмонтуванні
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  //* Закриваємо модалку по клавіші Esc
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  //* Закриваємо модалку по кліку
  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}
