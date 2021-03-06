import React, { Component } from "react"
import Disqus from "disqus-react"
import {useSelector} from "react-redux";
import CommentCount from "../molecules/CommentCount";


function PostComments(props){
    const disqusShortname = "react-blog-3"
    const disqusConfig = {
        url: `http://localhost:3000/blogs/${props.post.user.uuid}/preview/${props.post.id}`,
        identifier: `post-comments-${props.post.id}`,
        title: `Title - ${props.post.id}`
    }
        return (
            <div className="article-container">
                {/*<CommentCount post={props.post}/>*/}
                {/*<h1>Add your comment here</h1>*/}
                {/*<p>Page content.</p>*/}
                <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>
        )
}
export default PostComments;