import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Persondetails from './Persondetails';
import {Button, Table} from 'react-bootstrap';
import PersonDetails from './Persondetails';
import {Link, useNavigate} from 'react-router-dom';

function Main() {
    let history = useNavigate();

    const handleEdit = (id,name,email) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('Id',id);

    }

    const handleDelete = (Id) =>{
        var index = PersonDetails.map(function(e){
            return e.Id
        }).indexOf(Id);

         PersonDetails.splice(index,1);
       
         history('/main');
    
    
        }




    return (

<Fragment>

    <div style={{margin:'10rem'}}>
           <Table stripped bordered hover size="5m">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    Persondetails && Persondetails.length>0
                    ?
                    Persondetails.map((item) =>{
                        return (
                            <tr>
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>
                                
                                <Button onClick={() => alert(item.Id,item.Name,item.Email)}>Details</Button>
                                
                                <Button style={{marginLeft: "10px"}} onClick={() => handleDelete(item.Id)}>Delete</Button>
                                <Link to={"/edit"}>
                                <Button style={{marginLeft: "10px"}} onClick={() => handleEdit(item.Id,item.Name,item.Email)}>Edit</Button>
                                </Link>
                           
                            </td>
                            </tr>
                        )

                        
                    })
                    :
                    "no data available"
               } 
            </tbody>
           </Table>
           <br>
           </br>
           <Link className="d-grid gap-2" to="/add">
            <Button size="lg">Add Person</Button>
           </Link>
    </div>
</Fragment>
  )
}
export default Main;
