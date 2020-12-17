import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/home.css'

import { mapDispatchToProps } from '../store/store'
class DashBoard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.props.beers.map((data, index) => {
                            return <div key={index} style={{ "boxShadow": "2px 2px 2px 2px rgba(.2,.2,.2,.2)", "margin": "3%" }} className="col-xl-3 col-sm-6 col-md-3  col-lg-4 mt-5 mb-5">
                                <Link to={`/beer/${data.id}`} className="link">
                                    <div><h3>{data.name}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default connect(mapDispatchToProps)(DashBoard)