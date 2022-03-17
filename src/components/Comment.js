import react from "react";

function Comment({ comment }){
    return (
        <div>
            <h4>{comment.user}</h4>
            <h6>{comment.comment}</h6>
        </div>
    )

}

export default Comment