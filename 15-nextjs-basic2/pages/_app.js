import '../styles/globals.css';
import Layout from '../components/layout/Layout';
/**
 * - App.js is special file, which exist in this pages folder out of the box which create own as well
 * - kind of root component that
 * - receives props and uses object de structuring to pull information out of the props
 * - component props page props
 * -> pass component automatically by NextJS , since Next JS is the thing using that specific component
 * -> [Component] - hold the actual page content that should be rendered
 * -> [pageProps] - specific props our pages might be getting
 *
 *
 * => with layout or with whichever wrapper inside of our different page files.
 * => wrapping here is more maintainable and convenient approach of applying general components to our application.
 */

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
