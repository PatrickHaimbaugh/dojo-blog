import { useState } from "react";
import BlogList from "./BlockList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    const handleDelete = (blogId) => {
        const newBlogs = blogs.filter((blog) => blog.id !== blogId)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;