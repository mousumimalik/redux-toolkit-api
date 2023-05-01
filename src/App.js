import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  const responseInfo = useGetAllPostQuery();
  const responseInfoById = useGetPostByIdQuery(11);
  const responseInfoByLimit = useGetPostByLimitQuery(5);
  const [deletePost, responseInfoDelete] = useDeletePostMutation();
  const [createPost, responseInfoCreate] = useCreatePostMutation();
  const [updatePost, responseInfoUpdate] = useUpdatePostMutation();

  const newPost = {
    title: "This is new Title",
    body: "This is new Body",
    userId: 1,
  };

  const updatePostData = {
    id: 1,
    title: "This is updated Title",
    body: "This is updated Body",
    userId: 1,
  };

  // console.log("responseInfo=>", responseInfo);
  // console.log("responseInfoById=>", responseInfoById);
  // console.log("responseInfoByLimit=>", responseInfoByLimit);
  // console.log(
  //   "responseInfoDelete=>",
  //   responseInfoDelete,
  //   " ",
  //   "deletePost=>",
  //   deletePost
  // );
  // console.log(
  //   "responseInfoCreate=>",
  //   responseInfoCreate,
  //   " ",
  //   "responseInfoCreate.data=>",
  //   responseInfoCreate.data,
  //   " ",
  //   "responseInfoCreate.isSuccess=>",
  //   responseInfoCreate.isSuccess,
  //   " ",
  //   "newPost=>",
  //   newPost
  // );

  if (responseInfo.isLoading) {
    return <div>Loading...</div>;
  }

  if (responseInfo.isError) {
    return (
      <div>
        An error has been occured. <br /> {responseInfo.error.error}
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <h1>Redux Toolkit - RTK Query (Get All Data)</h1>

        {responseInfo.data.map((post) => (
          <div key={post.id}>
            <h3>
              {post.id} : {post.title}
            </h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className="App">
        <h1>Redux Toolkit - RTK Query (Get Data By Id)</h1>

        <h3>
          {responseInfoById.data.id ? responseInfoById.data.id : null} :{" "}
          {responseInfoById.data.title}
        </h3>
        <p>{responseInfoById.data.body}</p>
      </div>

      <div className="App">
        <h1>Redux Toolkit - RTK Query (Get Limitted Data)</h1>

        {responseInfoByLimit.data.map((post) => (
          <div key={post.id}>
            <h3>
              {post.id} : {post.title}
            </h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className="App">
        <h1>Redux Toolkit - RTK Query (Delete Data)</h1>

        <button onClick={() => deletePost(2)}>Delete Post</button>
      </div>

      <div className="App">
        <h1>Redux Toolkit - RTK Query (Create Data)</h1>

        {/* <button onClick={() => createPost()}>Create Post</button> */}
        <button onClick={() => createPost(newPost)}>Create Post</button>
      </div>

      <div className="App">
        <h1>Redux Toolkit - RTK Query (Update Data)</h1>

        <button onClick={() => updatePost(updatePostData)}>Update Post</button>
      </div>
    </>
  );
}

export default App;
