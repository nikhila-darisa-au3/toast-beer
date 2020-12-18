import React from 'react'
import Navbar from './navbar'
import { GridView, ListView } from './dashboardviewtype'
import { connect } from 'react-redux'
import '../styles/home.css'
import { mapDispatchToProps } from '../store/store'
class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.beers,
            searchedValue: '',
            isSearched: false,
            searchStatus: "",
            viewType: "grid",
            filterItems: ""
        }
    }
    componentDidMount() {
        let filterItems = []
        this.props.beers.map((data, i) => {
            data.ingredients.malt.map((item, i) => {
                filterItems.push(item.name)
            })
        })
        let result = filterItems.filter(function (item, pos) {
            return filterItems.indexOf(item) == pos;
        })
        this.setState({
            filterItems: result
        })
    }
    search = async (e) => {
        if (e.key === 'Enter') {
            let searchedValue = e.target.value
            if (searchedValue.length <= 0) {

            } else {
                let result = this.props.beers.filter((data, i) => {
                    let name = data.name.toLowerCase()
                    let res = name.includes(searchedValue.toLowerCase())
                    if (res) {
                        return data
                    }
                })
                if (result.length > 0) {
                    this.setState({
                        items: result,
                        searchedValue: searchedValue,
                        isSearched: true
                    })
                } else {
                    this.setState({
                        items: result,
                        searchedValue: searchedValue,
                        isSearched: true,
                        searchStatus: "Sorry not found"
                    })
                }
            }
        }
    }
    changeView = (e) => {
        let viewType = e.target.value
        this.setState({
            viewType: viewType
        })
    }
    getLikedItems = (e) => {
        let sortValue = parseInt(e.target.value)
        console.log(typeof (sortValue))
        let result = this.props.beers.filter((data, i) => {
            console.log(data.likes)
            if (data.likes === sortValue) {
                return data
            }
        })
        if (result.length > 0) {
            this.setState({
                items: result,
                isSearched: true,
                searchStatus: "Items based on likes"
            })
        } else {
            this.setState({
                items: [],
                isSearched: true,
                searchStatus: "No Items were liked"
            })
        }
    }
    submitData = (e) => {
        e.preventDefault();
        console.log(e)
    }

    render() {
        let { items, isSearched, searchedValue, searchStatus, viewType, filterItems } = this.state
        return (
            <React.Fragment>
                <Navbar />
                <div className="header mt-4 mb-4">
                    <input type="text" className="search input-border" placeholder='search' onKeyDown={this.search} />
                    <select className="ml-2 input-border search" name="likes" onChange={this.getLikedItems}>
                        <option>Sort by likes</option>
                        <option value="1">liked beers</option>
                        <option value="0">Non-liked beers</option>
                    </select>
                    <select className="ml-2 input-border search" name="viewType" onChange={this.changeView}>
                        <option>View Type</option>
                        <option value="grid">Grid View</option>
                        <option value="list">List View</option>
                    </select>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            {isSearched ? <h6 className="mb-3">Search Results for - <b>{searchedValue}</b> - {searchStatus}</h6> : null}
                            {viewType === "grid" ?
                                <GridView items={items} />
                                :
                                <ListView items={items} />
                            }

                        </div>
                        <div className="col-sm-4">
                            <div>
                                <h6 className="ml-2">Filter By</h6>
                                {filterItems.length > 0 ?
                                    <div style={{ "justifyContent": "flex-end" }}>
                                        <form onSubmit={(e)=>this.submitData(e)}>

                                            {filterItems.map((data, i) => {
                                                return <div key={i}>
                                                    <input type="checkbox" name={data} value={data} />
                                                    <label>{data}</label>

                                                </div>
                                            })}
                                            <button className="btn btn-primary" type="submit">Save</button>
                                        </form>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default connect(mapDispatchToProps)(DashBoard)
