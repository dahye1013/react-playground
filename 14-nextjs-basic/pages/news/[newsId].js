// sub package of the next package which exposes routing specific functionality
// - useRouter hook not one built into react, custom hook by next team
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <div>[newsId]</div>;
};

export default DetailPage;
