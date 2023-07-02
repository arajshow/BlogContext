import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import CategoryPage from "./pages/BlogPage";

export default function App() {

  const {fetchBlogPost} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

      const page = searchParams.get("page") ?? 1;

      if(location.pathname.includes("tags")){
        const tag = location.pathname.split("/").at(-1).replace("-", " ");
        fetchBlogPost(Number(page), tag);
      }
      else if(location.pathname.includes("categories")){
        const category = location.pathname.split("/").at(-1).replace("-", " ");
        fetchBlogPost(Number(page), null, category);
      }else{
        fetchBlogPost(Number(page));
      }

    
  }, [location.pathname, location.search]);

  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element = {<BlogPage/>} />
      <Route path="/tags/:tag" element = {<TagPage/>} />
      <Route path="/categories/:category" element = {<CategoryPage/>} />
    </Routes>

    // <div className="flex flex-col items-center gap-y-1 w-full h-full">
    //   <Header/>
    //   <Blog/>
    //   <Pagination/>
    // </div>
  );
}
