import React, { useEffect, useState } from 'react'
import Contactcard from '../components/Contactcard'
import { apiclient } from '../../../shared/services/api-client'


const Allcontacts = () => {

    const [contact , setcontact ] = useState([]);

    const getallcontact = async () => {
        const res = await apiclient.get("http://localhost:1234/getallcontact" );
        setcontact( contact => res.data.records);
        console.log("Response is  =  " , res);
        console.log("Response.name  is  =  " , res.data.records.name);
    }
    
    useEffect(() => {
        getallcontact();
    } , []);

return (
    
    <>
    <p>All contacts are listed </p>

    {contact.length === 0 && <p>No Contacts </p>}
        {contact.length>0 && contact.map(eachcontact =>{
            return ( <Contactcard
                Name={eachcontact.name}
                Desc={eachcontact.desc}
                Email={eachcontact.email}
                Mobile={eachcontact.mobile}
                ID={eachcontact._id}
            />)
        })}
    {/* <Contactcard Name={contact.name}  /> */}
    </>
)
}

export default Allcontacts
