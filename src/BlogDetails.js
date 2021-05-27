import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { id} = useParams();
    const { data:blog , error , isPending} = useFetch('http://localhost:8000/blogs/' + id);
    return (  
        <div className="blog-details">
            { isPending && <div>Loading.....</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{`written By ${blog.author}`}</p>
                    <div>{blog.body}</div>
                    <Link className="read-more" to="/">Go Home</Link>
                </article>
            )}
            
        </div>
    );
}
 
export default BlogDetails;