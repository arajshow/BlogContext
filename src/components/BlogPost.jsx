import React from "react"
import { NavLink } from "react-router-dom";

const BlogPost = ({post}) => {
    return (
        <div className="mt-[50px] flex flex-col ">
            <NavLink to={`/blog/${post.id}`}>
                <p className="text-lg font-bold">{post.title}</p>
            </NavLink>
            
            <p className="text-sm">
                By <span className="italic">{post.author}</span> on {" "}
                <NavLink to={`/categories/${post.category.replace(" ", "-")}`}>
                <span className="underline font-bold">{post.category}</span>
                </NavLink>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
                {post.tags.map( (tag, index) => {
                    return (
                        <NavLink to={`/tags/${tag.replace(" ", "-")}`} >
                            <span key={index} className="text-blue-500 underline font-bold text-[12px] mt-[5px]">{`#${tag} `}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default BlogPost

