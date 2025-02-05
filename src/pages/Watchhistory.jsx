import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { deleteVideoFromHistory, getVideoFromHistoryApi } from '../services/allApi'
import Table from 'react-bootstrap/Table';

function Watchhistory() {

const [videoHistory, setVideoHistory] = useState([])
const [deleteStatus, setDeleteVideoStatus] = useState([])

  const getHistory = async()=>{
    const result = await getVideoFromHistoryApi()

    if(result.status >=200 && result.status <300){
      setVideoHistory(result.data)
    }
  }

  console.log(videoHistory);

  useEffect(()=>{
    getHistory()
  },[deleteStatus])

  const deleteHistory = async(id)=>{
    const result = await deleteVideoFromHistory(id)
    console.log(result);
    setDeleteVideoStatus(result.data)
  }

  
  return (
    <>
    <div className='d-flex p-3 mt-5 w-100 mb-5'>
      <h4 className='ms-md-5'>Watch History</h4>
      <h5 className='ms-auto me-md-5'><Link to={'/home'} style={{color:'white', textDecoration:'none'}} > <span id='h'><FontAwesomeIcon icon= {faArrowLeft} beat className='me-2' />Back to Home</span>  <FontAwesomeIcon icon={faHouse} className='ms-2' /> </Link></h5>
    </div>
<div className='row w-100 mt-5'>
  <div className='col-md-2'></div>
  <div className='col-md-8'>

 {videoHistory?.length>0?
<Table className='table table-bordered table-light'>
  <thead>
    <tr>
      <th>#</th>
      <th>Caption</th>
      <th>Url</th>
      <th>Time Stamp</th>
      <th className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
{ videoHistory?.map((item, index)=>(<tr>
      <td> {index +1}</td>
      <td> {item?.caption} </td>
      <td> <Link to={item?.url} target = '_blank'> {item?.url} </Link></td>
      <td> {item?.timeStamp} </td>
      <td className='text-center'><button className='btn btn-danger' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
    </tr>))}
    
  </tbody>
</Table>
:
<p className='text-warning fs-5'>No watch History</p>}
  </div>
  <div className='col-md-2'></div>
</div>

</>
  )
}

export default Watchhistory