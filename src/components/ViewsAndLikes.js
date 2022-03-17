import react from "react";

function ViewsAndLikes({ views, uploadDate, handleUpvotes, handleDownvotes, upvotes, downvotes }) {
    return (
        <div>
            <h5>{views} Views | Uploaded {uploadDate}</h5>
            <button onClick={handleUpvotes}>{upvotes}👍</button>
            <button onClick={handleDownvotes}>{downvotes}👎</button>
        </div>
    )
}

export default ViewsAndLikes