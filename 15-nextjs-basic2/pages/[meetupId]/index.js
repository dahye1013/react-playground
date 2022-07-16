import MeetupDetail from '../../components/meetups/MeetupDetail';

export const MeetupDetails = () => {
  return (
    // 1. keep the jsx code lean
    // 2. styling reason - keep page folder leaner.(only js)
    // => more common to includes these css files
    // => if css files name is 'filesname.module.css' only scope filename component
    // => in this case css is unique from the classes
    <MeetupDetail
      title="a first meetup"
      image="https://images.unsplash.com/photo-1657828514287-3fd45486c5c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      address="address"
      description="description"
    ></MeetupDetail>
  );
};

export default MeetupDetails;
