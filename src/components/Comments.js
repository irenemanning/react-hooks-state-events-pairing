import React from "react";



function Comments({ comments }) {

    // function CommentSection() {
    //     comments.map((comment)=>{
    //         return (
    //             <div>
    //                 <h4>{comment.user}</h4>
    //                 <h6>{comment.comment}</h6>
    //             </div>
    //         )
    //     })
    // }
    
    return (
        <div>
        <h3>{comments.length} Comments</h3>
        {/* <CommentSection /> */}
        </div>
    )
}

export default Comments