import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import './user.css'
import {Link} from "react-router-dom";


const User = () => {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='userShowImg' alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">John Carter</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">johncarter55</span>
                        </div>

                        
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+1 123 857 457</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">johncarter55@test.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>


                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder='johncarter55' className='userUpdateInput' />
                            </div>

                            
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder='John Carter' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder='johncarter55@test.com' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder='+1 123 857 457' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                            </div>


                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='userUpdateImg' alt="" />
                                <label htmlFor="file"> <Publish className='userUpdateIcon'/></label>
                                <input type="file" name="" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
