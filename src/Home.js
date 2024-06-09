import { useState, useEffect } from "react";
import BlogList from "./BlockList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setIsLoading(false)
                setBlogs(data)
            })
        }, 1000)
        
    }, [])

    return ( 
        <div className="home">
            { isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}
 
export default Home;