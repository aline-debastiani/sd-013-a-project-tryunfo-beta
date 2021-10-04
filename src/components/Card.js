import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      index,
      deleteCard,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">{ cardName}</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        <p data-testid="rare-card">{ cardRare }</p>
        <p data-testid="attr1-card">{ cardAttr1}</p>
        <p data-testid="attr2-card">{ cardAttr2}</p>
        <p data-testid="attr3-card">{ cardAttr3}</p>
        <button
          data-testid="delete-button"
          type="button"
          onClick={ () => deleteCard(index) }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.oneOfType([
    PropTypes.string, PropTypes.bool,
  ]).isRequired,
  index: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
