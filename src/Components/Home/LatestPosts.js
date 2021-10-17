import React from "react";

const LatestPosts = () => {
  /*
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatest('2021-23-09').then((data) => {
      setPosts(data);
    });
  }, [posts]);

  Inside Return Statement:
      {posts.length > 0 && (
        <Fragment>
        {posts.map(
            (post) => (
                <Fragment>
                <h3><i class="fas fa-thumbs-up">${post.likes}</i><a href='post/post.html'>${post.title}</a></h3>
                <h5><i>${post.author} - ${post.posttime}</i></h5>
                </Fragment>
        ))}
        </Fragment>
      )}
  */

  return (
    <div class='column latest-module'>
      <h2>Latest Posts:</h2>
    </div>
  );
};

export default LatestPosts;
