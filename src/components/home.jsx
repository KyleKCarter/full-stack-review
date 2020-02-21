import React from 'react';
import NavBar from './navBar';
import { connect } from 'react-redux';
import { getReviews, updateState } from '../redux/reducers/reviewsReducer';

class Home extends React.Component {

    componentDidMount() {
        this.props.getReviews()
    }

    render() {
        const mappedReviews = this.props.reviews.map((val, index) => {
            return (
                <div key={index} style={{ border: '1px solid black', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px 0px', margin: '2%' }}>
                    <img src={val.movie_poster} alt="img" />
                    <h4>{val.movie_title}</h4>
                    <h2>{val.rating}</h2>
                    <p>{val.review}</p>
                    <p>Author: {val.username}</p>
                </div>
            )
        })
        return (
            <div>
                <header style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <NavBar />
                </header>
                <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <h1>Reviews</h1>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexFlow: 'row wrap', width: '100%'}}>
                        {mappedReviews}
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviewsReducer.reviews,
        poster: state.reviewsReducer.poster
    }
}

export default connect(mapStateToProps, {
    getReviews,
    updateState
})(Home);