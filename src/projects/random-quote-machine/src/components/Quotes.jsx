import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default class Quotes extends Component {
  constructor(props) {
    super(props);
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuotes();
    this.handleNewQuote();
  }

  handleNewQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * this.props.quotes.length);
    this.props.newQuote(randomQuoteIndex);
  }

  render() {
    let { quote, author } = this.props.isFetching
      ? { quote: "Loading...", author: false }
      : this.props.quotes[this.props.randomIndex];
    let icon = this.props.isFetching ? faSpinner : faQuoteLeft;
    let randomColorIndex = Math.floor(Math.random() * this.props.colors.length);
    let randomColor = this.props.colors[randomColorIndex];
    return (
      <div
        className="container animation"
        style={{ backgroundColor: randomColor }}
      >
        <div id="quote-box">
          <blockquote id="quote">
            <p id="text" className="animation" style={{ color: randomColor }}>
              <FontAwesomeIcon icon={icon} />
              {quote}
            </p>
            <p id="author" className="animation" style={{ color: randomColor }}>
              {author ? "- " + author : author}
            </p>
          </blockquote>
          <div className="buttons">
            <a
              className="button animation"
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                '"' +
                quote +
                '" ' +
                "- " +
                author
              }
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
              style={{ backgroundColor: randomColor }}
            >
              <FontAwesomeIcon icon={faTwitter} />
              Tweet
            </a>
            <button
              className="button animation"
              id="new-quote"
              onClick={this.handleNewQuote}
              style={{ backgroundColor: randomColor }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
