import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./PastItem";

export const PostList = ({ posts, title, remove }) => {

   if (!posts.length) {
      return (
         <h1 style={{ textAlign: "center", marginTop: "15px" }}>
            Post not found
         </h1>
      )
   }

   return (
      <div>
         <h1 style={{ textAlign: "center", marginTop: "15px" }}>
            {title}
         </h1>
         <TransitionGroup>
            {posts.map((post, index) =>
               <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
               >
                  <PostItem remove={remove} number={index + 1} post={post} />
               </CSSTransition>
            )}
         </TransitionGroup>
      </div>
   )
}