import video from "../data/video.js";
import ViewsAndLikes from "./ViewsAndLikes.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const views = video.views;
  const uploadDate = video.createdAt;

  const [upvotes, setUpvotes] = useState(video.upvotes);
  function handleUpvotes() {
    setUpvotes(upvotes + 1);
  }
  const [downvotes, setDownvotes] = useState(video.downvotes);
  function handleDownvotes() {
    setDownvotes(downvotes + 1);
  }

  const comments = video.comments
  


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <ViewsAndLikes
        views={views}
        uploadDate={uploadDate}
        handleUpvotes={handleUpvotes}
        handleDownvotes={handleDownvotes}
        upvotes={upvotes}
        downvotes={downvotes}
      />
      <button>toggleComments</button>
      <Comments comments={comments} />
    </div>
  );
}

export default App;
