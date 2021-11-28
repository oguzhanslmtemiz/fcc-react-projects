import * as actionTypes from "./actionTypes";

export const fetchQuotes = () => (dispatch) => {
  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({ type: actionTypes.FETCH_QUOTES, payload: data.quotes })
    );
};

export const newQuote = (randomIndex) => ({
  type: actionTypes.NEW_QUOTE,
  payload: randomIndex,
});
