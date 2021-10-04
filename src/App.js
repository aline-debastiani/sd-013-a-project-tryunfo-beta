import React from 'react';
import { Card, Form } from './components';
import { validateNames, validateNumbers, validateSum } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [],
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveCard = this.handleSaveCard.bind(this);
    this.handleValues = this.handleValues.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState(() => {
      const validationButton = this.handleValues();
      return { [name]: value, isSaveButtonDisabled: validationButton };
    });
  }

  handleValues() {
    const {
      cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const strings = [cardName, cardDescription, cardImage, cardRare];
    const attrs = [cardAttr1, cardAttr2, cardAttr3];

    /* `Nome`, `Descrição`, `Imagem` e `Raridade ` devem conter alguma informação */
    const areStringsValids = validateNames(strings);
    /*  atributos `attr1-input`, `attr2-input` e `attr3-input` máximo 90 pontos cada */
    const areAttrsValids = validateNumbers(attrs);
    /* atributos `attr1-input` + `attr2-input` + `attr3-input` menor igual a 210. */
    const areAttrsSumValid = validateSum(attrs);

    /* verificando se todas validações estão corretas */
    const validation = [areStringsValids, areAttrsValids, areAttrsSumValid]
      .every((validate) => validate);

    /* negação pois as validações retornam o resultado esperado,
    e o botão espera o oposto disso no disabled */
    return !validation;
  }

  handleSaveCard(cardInfo) {
    const { cards } = this.state;
    // cardTrunfo(checkbox checked) ? true : false === !!
    const hasTrunfo = !!cardInfo.cardTrunfo;
    this.setState({ ...this.initialState, cards: [cards, cardInfo], hasTrunfo });
  }

  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveCard }
        />
        <Card { ...this.state } />
      </main>
    );
  }
}

export default App;
