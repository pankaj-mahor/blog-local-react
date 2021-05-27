import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('pankaj');
    const [body , setBody] = useState('');
    const [succesmsg , setSuccessMsg] = useState(false)
    const [isPending , setIsPending] = useState(false)

    const history = useHistory();


    const handleSubmit = ((e)=>{
        e.preventDefault();
        const blog = {title , author , body}
        // console.log(blog)
        fetch('http://localhost:8000/blogs' ,{
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new added');
            setSuccessMsg(true);
            setIsPending(true);
            setTimeout(()=>{ 
                // alert("Hello"); 
                setSuccessMsg(false);
                history.push('/')
            }, 3000);

        })
    })


    return (

        <div className="new-blog">
            {succesmsg && <div className="successMsg">{`New Blog Added`} <br></br>Redirecting to home in seconds </div>}
            <form onSubmit={handleSubmit}>    
                <h2>Add a new Blog</h2>

                <label>Blog title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <label>Blog Author :</label>
                <select
                    value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}
                >
                    <option value="pankaj">Pankaj</option>
                    <option value="mahor">Mahor</option>
                </select>
                <label>Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value);
                    }}
                ></textarea>

                {!isPending && <button className="submit-btn">Add blog</button>}
                {isPending && <button className="submit-btn" disabled>Adding...</button>}

            </form>
            {/* <div className="just-preview">
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </div> */}
        </div>
    );
}
 
export default Create;