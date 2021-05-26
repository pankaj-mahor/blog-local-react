import {useEffect, useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs , setBlogs] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then((response) => {
                if(!response.ok){
                    throw Error('Could not fetch the data due to having stomach problem in server.\n Thanks for co operating Try again later');
                }
                // console.log(response)
                return response.json();
            })
            .then((data)=>{
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
                setIsPending(false);
                // console.log(err.message);
            });

    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading .............</div>}
            {error && <div>{ error}</div>}
            {blogs && <BlogList blogs={blogs}  title="All Blogs!" />}
            {/* <BlogList blogs={blogs}/> */}
            {/* <BlogList blogs={blogs.filter( (blog) =>blog.author === 'pankaj m' )} title="pankaj m blog" /> */}
        </div>
    );
}
 
export default Home;