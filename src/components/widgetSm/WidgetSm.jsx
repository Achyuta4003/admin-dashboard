import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profileImg" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">John Carter</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon' />
                    Display 
                </button>
                </li>

                
                <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profileImg" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">John Carter</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display 
                </button>
                </li>

                <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profileImg" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">John Carter</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display 
                </button>
                </li>

                <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profileImg" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">John Carter</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display 
                </button>
                </li>

                <li className='widgetSmListItem'>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profileImg" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">John Carter</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility />
                    Display 
                </button>
                </li>


            </ul>
        </div>
    )
}

export default WidgetSm
