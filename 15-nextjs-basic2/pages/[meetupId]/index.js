import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export const MeetupDetails = (props) => {
  return (
    // 1. keep the jsx code lean
    // 2. styling reason - keep page folder leaner.(only js)
    // => more common to includes these css files
    // => if css files name is 'filesname.module.css' only scope filename component
    // => in this case css is unique from the classes
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    ></MeetupDetail>
  );
};

/**
 * export page component file, if it's dynamic
 * not if using getServerSideProps
 * - `getStaticProps` is pre-generated during build process
 * -> NextJS all pre generate all version of this dynamic page in advance. for all support ID
 * => since dynamic NextJS needs to know for which ID values should pre-generate ths page.
 *
 *
 */

export const getStaticPaths = async () => {
  // describe all the dynamic segment value

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    /*****
     * [fallback]
     * - tells nextJS path contains all supported parameter values or just some of them
     * (false) -> defined all supported paths, if not entered to not supported path would see 404
     * (true) -> try to generate a page for this ID dynamically on the server
     * => allow to pre generate some of pages for specific ID values
     * define some page, not pre-generate all pages and only most popular pages.
     */
    fallback: false,
    // path keys, one object per version of dynamic page
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  // encode url, could be access with context.params.meetupId
  // -> meetupId is the identifier i have between the square bracket.
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
