/******
 * import in page component file, if use only for 'getServerSideProps' or 'getServerSideProps'
 * -> imported package will not be part of client side bundle.
 * -> only executed in server. nextJS will detect this not include it in client's side bundle.
 * => good for bundle size,
 * => good for security,
 */
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

/**
 * [http request update state]
 * 1. first when component is rendered first data is empty
 * 2. effect function execute it update state
 * 3. component function will execute again (because state changed)
 * 4. re-rendered with the actual data
 * => two component render cycle
 * => problem of SEO problem
 * html page we fetch from the
 *
 */

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// run on server never in client - run server side code here perform operation that use credentials
export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
