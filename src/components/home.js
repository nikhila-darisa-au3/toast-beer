import React from 'react'
import Navbar from './navbar'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapDispatchToProps, store } from '../store/store'
import { GET_BEER_DETAILS, LIKE_POST, ADD_COMMENT } from '../actions/actiontype'
let interval
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    if (window.location.pathname === '/') {
      this.getData()
      interval = setInterval(this.getData, 5000)
      setInterval(() => {
        this.setState({
          beers: this.props.beers
        })
      }, 6000)
    } else {
      clearInterval(interval)
    }
  }
  componentWillMount() {
    clearInterval(interval)
  }
  getData() {
    fetch('https://api.punkapi.com/v2/beers/random').then(data => data.json()).then(res => {
      let data = res[0]
      data.likes = 0
      data.comments = []
      data.color = ""
      store.dispatch({
        type: GET_BEER_DETAILS,
        data: data
      })

    })
  }
  likePost = (id) => {
    this.props.dispatch({
      type: LIKE_POST,
      id: id
    })
  }
  addComment = (e, id) => {
    if (e.keyCode === 13) {
      if (e.target.value.length > 0) {
        this.props.dispatch({
          type: ADD_COMMENT,
          data: e.target.value,
          id: id
        })
        document.getElementById("comment").value = ''
      }
    }
  }
  render() {
    const { beers } = this.state
    console.log(this.props.beers)
    return (
      <React.Fragment>
        <Navbar />
        {this.props.beers.length > 0 ?
          <div>
            {this.props.beers.map((data, index) => {
              let color = data.color
              return <div key={index} className="row mt-5">
                <div className="col-sm-3">
                </div>
                <div className="col-sm-6 mt-2" style={{ "background": "white", "boxShadow": "2px 2px 2px 2px rgba(.2,.2,.2,.2)" }}>
                  <Link className="link" to={`/beer/${data.id}`}>
                    <h4 className="logo">{data.name}</h4>
                    <p>{data.description}</p>
                    <img src={data.image_url} className="mb-5" width='150' height='350' style={{ "marginLeft": "34%" }} />
                  </Link>
                  <hr />
                  <div className="post-details">
                    <h6 onClick={() => this.likePost(data.id)} style={{ "cursor": "pointer", "color": color }}><i className="fa fa-thumbs-up" aria-hidden="true"></i> {data.likes}  Likes</h6>
                    <h6 onClick={() => { this.addComment(data.id) }}>{data.comments.length} Comments</h6>
                  </div>
                  <hr />
                  <p> <b>comments</b> :</p>
                  {data.comments.map((data, i) => {
                    return <p className="comment-text" key={i}>{data}</p>
                  })}
                  <input id="comment"placeholder="Add Comment" onKeyDown={(e) => this.addComment(e, data.id)} className="mb-4 comment-box" />
                </div>
                <div className="col-sm-3">
                </div>
              </div>
            })}
            <h6 style={{ "textAlign": "center" }}>Loading...</h6>
          </div>
          : "Loading..."
        }
      </React.Fragment>
    )
  }
}
export default connect(mapDispatchToProps)(Home);
