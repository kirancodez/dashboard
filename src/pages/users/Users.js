import react,{useEffect, useState} from "react";
import Base from "../Base";
import { fetchUser } from "./userHelper";

import "./users.scss"

const Users = () => {
    
    const [userslist, setUsers] = useState({
        loading: true,
        users: []
    })
    const {loading, users} = userslist;
    useEffect(() => {
        fetchUser().then((data) => {
            setUsers({loading: false, users: data})
        }) .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <Base title="Users">
            <div className="container">
                <div className="row">
                    {loading ? <p>Loading</p> : 
                    <div className="col-md-8">
                    <table className="widgetLgTable mt-3">
                        <tr className="widgetLgTr bg-secondary ">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Email</th>
                        </tr> 
                        {
                            users.data?.map((value) => (
                                <tr className="widgetLgTr bg-white ">
                                    <td className="widgetLgUser p-3">
                                        <img
                                        src={value.avatar}
                                        alt=""
                                        className="widgetLgImg"
                                        />
                                        <span className="widgetLgName">{value.first_name}</span>
                                    </td>
                                    <td className="widgetLgAmount">{value.id}</td>
                                    <td className="widgetLgAmount">{value.email}</td>
                                </tr>
                            ))
                        }
                        </table>
                    </div>
                    }
                </div>
            </div>
        </Base>
    )
}


export default Users;
