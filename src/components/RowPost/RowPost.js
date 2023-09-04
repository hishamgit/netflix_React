import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            // console.log(response.data.results[0])
            setMovies(response.data.results)
        }).catch(err=>{             //error without ()
            // alert('Network Error')
        })
    },[])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>
                        <img className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}` } alt="poster" /> //src in {} to include ``
                    )
                }
            </div>
        </div>
    )
}

export default RowPost
