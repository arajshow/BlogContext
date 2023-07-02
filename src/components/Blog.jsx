import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogPost from "./BlogPost";


export default function Blog(){

    const {loading, posts} = useContext(AppContext);

    return (
        <div className="flex flex-col gap-y-10 my-10 w-6/12 justify-center items-center">
            {
                loading ?
                (<div className="min-h-[80vh] w-full flex justify-center items-center">
                <p className="text-center font-bold text-3xl">Loading</p>
                </div>) :
                (
                    posts.length === 0 ?
                    (<div className="min-h-[80vh] w-full flex justify-center items-center">
                        <p className="text-center font-bold text-3xl">No Post Found</p>
                    </div>):
                    (
                        posts.map( (post) => (
                            // you can use different component here also
                            <BlogPost post={post} key={post.id} />
                        ))
                    )
                )
            }

        </div>
    );
}