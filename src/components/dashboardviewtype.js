import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function GridView({ items }) {
    return (
        <div className="row">
            {items.map((data, index) => {
                return <div key={index} style={{ "background": "white", "boxShadow": "2px 2px 2px 2px rgba(.2,.2,.2,.2)", "margin": "3%" }} className="col-xl-3 col-sm-6 col-md-3  col-lg-4 mt-5 mb-5">
                    <Link to={`/beer/${data.id}`} className="link">
                        <div>
                            <h4 className="logo">{data.name}</h4>
                            <p>{data.description}</p>
                            <p>Likes: {data.likes}</p>
                        </div>
                    </Link>
                </div>
            })}
            <div className="col-sm-4">

            </div>
        </div>
    )
}
function ListView({ items }) {
    return (
        <React.Fragment>
            {items.map((data, index) => {
                return <div key={index} className="row mb-3">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6 mt-2" style={{ "background": "white", "boxShadow": "2px 2px 2px 2px rgba(.2,.2,.2,.2)", "width": "100%" }}>
                        <Link className="link" to={`/beer/${data.id}`}>
                            <h4 className="logo">{data.name}</h4>
                            <p>{data.description}</p>
                        </Link>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            })}
        </React.Fragment>)
}
export { GridView, ListView }