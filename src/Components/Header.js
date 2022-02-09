// import React from 'react'; // < necessary for when using a class based component 
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
    const onClick = () => {
        console.log('click');
    } 
  return( 
  <header className='header'>
    <h1 /* <h1 style={HeadingStyle} */> {title} </h1>
    <Button  onClick={onClick} /* props found and sent to Button.js *//>
  </header>);
};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}




export default Header



// css in js
// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }




// below is a class based component
// class Header extends React.Component{
//     render(){
//         return (
//             <h1> Hello from a class based component</h1>
//         )
//     }
// }

// export default Header;



