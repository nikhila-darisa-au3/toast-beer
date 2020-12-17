import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { GET_BEER_CONTENT } from '../actions/actiontype'
import { mapDispatchToProps } from '../store/store'
class BeerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beerData: ''
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.dispatch({
            type: GET_BEER_CONTENT,
            id: Number(id)
        })
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    {this.props.beerContent.length > 0 ?
                        this.props.beerContent.map((data, index) => {
                            return <div key={index}>
                                <h3>{data.name}</h3>
                                <p>{data.description}</p>
                                <img src={data.image_url} className="mb-5" width='400' height='400'  />
                                <p><b>Brewers Tips: </b>{data.brewers_tips}</p>
                                <p><b>Food Pairing: </b></p>
                                <ul>
                                {data.food_pairing.map((content,i)=>{
                                    return <li>{content}</li>
                                })}
                                </ul>
                            </div>
                        })
                        : "Loading..."}
                </div>
            </React.Fragment>
        )
    }
}
export default connect(mapDispatchToProps)(BeerDetails)