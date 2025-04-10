import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/player.css';


function DataColection() {
    const [post, setPost] = useState({})
    const [id, setId] = useState()
    const [idClick, setIdClick] = useState()
    // const [joke, setJokes] = useState()

    const handleClick = () => {
        setIdClick(id)
    }

    // useEffect(() => {
    //     axios.get(`https://www.news24bd.tv/details/${idClick}`)
    //         .then(res => {
    //             console.log(res)
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     // fetchData();
    // }, [idClick])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        // fetchData();
    }, [idClick])

    // https://api.icndb.com

    // useEffect(() => {
    //     axios.get(`http://api.icndb.com/jokes/random/${joke}`)
    //         .then(res => {
    //             console.log(res)
    //             setJokes(res.data);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [joke])


    return (
        <div style={{ textAlign: 'center', margin: '80px' }}>
            <h2 style={{ fontFamily: 'cursive', marginBottom:'50px'}}>This Input the number(1-100)</h2>
            <input type='text' value={id} onChange={e => setId(e.target.value)} className='empty'/>
            <button className='btn-fetch' onClick={handleClick}>Fetch</button>
            <div style={{color:'purple',margin:'10px 0'}}>
                <h4>Title: {post.title}</h4>
                <h4>User ID: {post.userId}</h4>
                <h5>Details: {post.body}</h5>        
            </div>
            <Link to='/' className='btn btn-success'>Back</Link>
        </div>
    )
}

export default DataColection;

//https://jsonplaceholder.typicode.com/posts/1/comments