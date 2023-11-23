import React, { useEffect, useState } from 'react'
import { getServerData } from '../../helper/helper'

function ResultTable() {

  const [data, setData] = useState([])

  useEffect(()=>{
    getServerData("http://localhost:8080/api/result", (res) =>{
      setData(res)
    })
  }, [])
  return (
    <div>
      <table>
        <thead className='table-header'>
            <tr className="table-row">
                <td>Name</td>
                <td>Attemps</td>
                <td>Earn Points</td>
                <td>Result</td>
            </tr>
        </thead>
        <tbody>
          {!data ?? <div>No data Found</div>}{
            data.map((v, i) =>(
              <tr className="table-body" >
                <td>{v?.username || ''}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ''}</td>
            </tr>
            ))
          }
            
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
