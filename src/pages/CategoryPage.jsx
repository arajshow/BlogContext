import React from "react"
import Header from "../components/Header"
import Blog from "../components/Blog";
import Pagination from "../components/Pagination"
import { useLocation, useNavigate } from "react-router-dom";


const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);


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
                <h2 className="text-2xl font-bold">
                    Blogs on <span className="text-blue-500 ">{category}</span>
                </h2>
            </div>
            <Blog/>
            <Pagination/>
        </div>
    );
}

export default CategoryPage

