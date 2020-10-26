import React from 'react';
import axios from 'axios';

const firstQuote = [
  {
    quote:
      'By chilling my loins I increase the chances of impregnating my wife.',
    character: 'Apu Nahasapeemapetilon',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
    characterDirection: 'Left',
  },
];

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteSimpson: firstQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  render() {
    return (
      <>
        <button type='button' onClick={this.getQuote}>
          Get quote
        </button>
        <div className='DisplayQuote'>
          <p>
            <strong>{this.state.quoteSimpson.character}</strong>
          </p>
          <p>{this.state.quoteSimpson.quote}</p>
          <img
            src={this.state.quoteSimpson.image}
            alt={this.state.quoteSimpson.character}
          />
        </div>
      </>
    );
  }

  fetchQuote(idQuote) {}

  getQuote() {
    let idQuote = parseInt(prompt('Numéro de quote :'));
    if (!isNaN(idQuote)) {
      const url = `https://simpsons-quotes-api.herokuapp.com/quotes?id=${idQuote}`;
      axios
        .get(url)
        .then((response) => response.data)
        .then((quoteOneSimpson) => {
          //console.log('data decoded from JSON:', quoteOneSimpson);
          this.setState({
            quoteSimpson: quoteOneSimpson[0],
          });

          //   // Build a block of HTML
          //   let quoteHtml = `<p><strong>${quoteSimpson.character}</strong></p>
          //     <p>${quoteSimpson.quote}</p><img src="${quoteSimpson.image}" alt="${quoteSimpson.character}"/>`;
          //   document.querySelector('#simpsons-quotes').innerHTML = quoteHtml;
          // });
        });
    }
  }
}

export default QuoteCard;
