import React from 'react'


const CrudDemo = () => {
  return (
    <div className="App">
                 <h2 className="text-center">Person List</h2>
                 <div className = "row">
                    <button className="btn btn-primary"> Add Person</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Id</th>
                                    <th> Name</th>
                                    <th> Email </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                                                    
                                        <tr>
                                             <td> 1 </td>   
                                             <td> John williams </td>
                                             <td> john@gmail.com</td>
                                             <td>
                                                 <button className="btn btn-info">Details </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">Edit </button>
                                             </td>
                                        </tr>
                                    
                                
                            </tbody>
                        </table>

                 </div>
    </div>
  )
}

export default CrudDemo