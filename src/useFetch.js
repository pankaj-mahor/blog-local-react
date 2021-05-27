import {useState , useEffect} from 'react';

// We can make custom hooks but it should start with *useAnyName*
const useFetch = (url)=>{

    const [data , setData] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect( () => {
        const abortcont = new AbortController(); 
        fetch(url , {signal : abortcont.signal})//second property to abort
            .then((response) => {
                if(!response.ok){
                    throw Error('Could not fetch the data due to having stomach problem in server.\n Thanks for co operating Try again later');
                }
                // console.log(response)
                return response.json();
            })
            .then((data)=>{
                // console.log(data);
                setIsPending(false);
                setError(null);
                setData(data);
            })
            .catch((err)=>{
                if(err.name === 'AbortError'){
                    console.log('Aborted')
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
            });
        
        return () =>{
            abortcont.abort();
        }    
    }, [url]);//Whenever there is changes in url it will run this useFetch ,

    return {data , isPending , error}
}

export default useFetch;