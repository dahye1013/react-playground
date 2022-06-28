import './Card.css';

// act as a shell around
const Card = ({ className, children }) => {
  /**
	[class props]
    custom components css only support in module
	=> must set to support effect like down below
   */
  const classes = 'card ' + className;
  /**
	[all props - children]
	- special props built into react
	- which every component receives
	- children is reserved name
   */

  return <div className={classes}>{children}</div>;
};

export default Card;
