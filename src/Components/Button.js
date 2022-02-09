import PropTypes from 'prop-types';

const Button = ({color, text, onClick} /* < this is where props from Header.js are cought*/) => {

  return (
  <button onClick={onClick} style={{backgroundColor:'green'}} className='btn'> 
    {text}
  </button>    
  )
};

Button.defaultProps = { 
    color: 'steelblue',
    text: "ADD"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired, 
}
export default Button;
