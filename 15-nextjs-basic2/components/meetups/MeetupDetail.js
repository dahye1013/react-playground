/**
 * MeetupDetail.module.css is scoped  this component
 * special way import which will be picked up by NextJS
 * behind the scene it will then transform from css classes
 * class names are unique per component that ensure style can't spill over
 * that's why also wanted to show this approach here
 *
 * -> classes is JavaScript in the end. it guaranteed to be unique
 * -> will be available as properties on this object.
 * -> will be the transformed css files which are guaranteed to be unique. (without clashing styles)
 *
 *
 */
import classes from './MeetupDetail.module.css';

export const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
