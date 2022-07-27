import { useState, useEffect } from "react";
import { QueryClient, useQuery } from 'react-query'
import { PostDetail } from "./PostDetail";

const maxPostPage = 10;

async function fetchPosts(currentPage) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);


  const queryClient = new QueryClient()
  /**
   * [pagination]
   * 1. put currentPage as a dependency 
   * 2. when dependency is changed, re-fetch data
   */
  const { data, isError, error, isLoading } = useQuery(['post', currentPage], () => fetchPosts(currentPage), {
    staleTime: 2000
  })

  useEffect(() => {
    const nextPage = currentPage + 1;
  })
  if (isLoading) return <h3>Loading...</h3>

  if (isError)
    return (
      <>
        <h3>Something went wrong </h3>
        <p>{error.toString()}</p>
      </>)

  if (!data) return <div />

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      {/* 
      - state update is asynchronous
      -> not known whether or not this update has taken effect

      - not good deterministic way to known current page
      -> useEffect = 

      */}
      <div className="pages">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(prevValue => prevValue - 1)}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled={currentPage >= maxPostPage} onClick={() => setCurrentPage(prevValue => prevValue + 1)}>

          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
