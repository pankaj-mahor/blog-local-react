import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const{ data:blogs ,isPending ,error} = useFetch('http://localhost:8000/blogs');

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