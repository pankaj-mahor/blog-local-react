import {useState} from 'react';

const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : 'My blog 1', body: 'loremp pis ...', author:'pankaj', id:'1'},
        {title : 'My blog 2', body: 'loremp pis ...', author:'pankaj m', id:'2'},
        {title : 'My blog 3', body: 'loremp pis ...', author:'pankaj mah', id:'3'}
    ]);
    return ( 
        <div className="home">
            <h2>Blogs by Us</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;