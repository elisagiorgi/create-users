import { Container } from "./Counter.styles";
import PropTypes from "prop-types";

const Counter = ({ number }) => {
  return <Container>{number}</Container>;
};

export default Counter;

Counter.propTypes = {
  number: PropTypes.number,
};
