import { connect } from "react-redux";
import Quotes from "./Quotes";
import { fetchQuotes, newQuote } from "../redux/actions/actionCreators";

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    isFetching: state.isFetching,
    randomIndex: state.randomIndex,
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes()),
    newQuote: (randomIndex) => dispatch(newQuote(randomIndex)),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Quotes);

export default Container;
