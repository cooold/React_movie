import { useState, useEffect, useRef } from "react"
import {API_GET_DATA} from '../../global/Constants'
import List from './components/List'
import './index.css'

var page = 1

async function fetchData(setData,isChangePage){
    if(isChangePage){
        page=page+1
        isChangePage = false
    }
    fetch(API_GET_DATA+page)
        .then(res => res.json())
        .then(data => {
            setData(data.movie);
        })
    
}

function nextPage(setData,isChangePage){
    isChangePage =true
    fetchData(setData,isChangePage)
}

const Home = () => {
    const[data,setData] = useState([0]);
    const isInitialRender = useRef(true);
    const isChangePage = useRef(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [data])

    useEffect(() => {
        if(!isInitialRender){
            return
        }
        fetchData(setData)
        isInitialRender.current = false;
      }, [])

    return <div >
        <List listData={data}/>
        <div className="container">
        <button  onClick={() => nextPage(setData,isChangePage)}  className="btnn mt-2 buttonRight">下一頁</button>
        </div>
    </div>
}

export default Home