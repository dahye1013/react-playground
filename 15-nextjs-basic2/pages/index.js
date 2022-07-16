import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'a first meetup',
    image:
      'https://images.unsplash.com/photo-1657828514287-3fd45486c5c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: 'some address 6 ,123',
    description: 'description',
  },
  {
    id: 'm1',
    title: 'a first meetup',
    image:
      'https://images.unsplash.com/photo-1657788913414-2e6f7471f53b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
    address: 'some address 6 ,123',
    description: 'description',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
