import { Posts } from "./Posts";
import "./App.css";

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/**
 * client contains the cash and all of default option
 */
const queryClient = new QueryClient()

function App() {
  return (
    // provide React Query client to App
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>Blog Posts</h1>
        <Posts />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
