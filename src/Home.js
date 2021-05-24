const Home = () => {

    const handleClick = (e) =>{
        console.log('hello, ninjas')
    }

    const handleClickA = (name, e) =>{
        console.log('hello, again' + name, e.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={(e) => {handleClickA(' pankaj', e)}}>Click</button>

        </div>
    );
}
 
export default Home;