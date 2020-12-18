import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to='/' className="logo">Toast A Bear</Link></li>
                    <li><Link to='/' className="ml-5 mr-3">Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        )
    }
}
export default Navbar