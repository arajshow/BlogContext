import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import { useLocation, useNavigate} from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] =  useState([]);
    const {setLoading, loading} = useContext(AppContext)
    const navigation = useNavigate();
    const location = useLocation();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);

        let url = `${newBaseUrl}?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.clear();
            console.log("data");
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("error occured", error);
        }
    }

    useEffect(() =>{
        if(blogId)
            fetchRelatedBlogs();
    }, [location.pathname])


    return (
        <div>
            <Header/>
            <div>
                <button
                className="rounded-md border-2 px-4 py-1 mt-[100px]"
                onClick={ () => navigation(-1)}
                >
                    Back
                </button>
            </div>
            {
                loading ?
                (<div className="min-h-[80vh] w-full flex justify-center items-center">
                <p className="text-center font-bold text-3xl">Loading</p>
                </div>) :
                (
                    blog ?
                    (
                        <div>
                            <BlogPost post ={blog} />
                            <h2> Related Blogs </h2>
                            {
                                relatedblogs.map( (post) => (
                                    <BlogPost post={post} key={post.id} />
                                ))
                            }
                        </div>
                    ) :
                    (
                        <div>
                            <p>No Blog Found</p>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default BlogPage

