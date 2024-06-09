const BlogList = ({ blogs, title }) => {
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <dive className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: {blog.author}</p>
                </dive>
            ))}
        </div>
     );
}
 
export default BlogList;