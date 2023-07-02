import React from "react"
import Header from "../components/Header"
import Blog from "../components/Blog";
import Pagination from "../components/Pagination"

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-col w-full items-center">
                <Blog/>
                <Pagination/>
            </div>
        </div>
    );
}

export default Home

