import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;
    // console.log(props , blogs)

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <Link to={`/blogs/${blog.id}`} className="read-more">Read more</Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;