import React from 'react';
import './Detail.css';

class Detail extends React.Component{
  componentDidMount(){
    console.log(this.props);
    const {location, history} = this.props;
    if (location.state === undefined){
      history.goBack();
      //history.push('/');
    }
  }

  render(){
    const {location} = this.props;
    if (location.state){
      const {genres, poster, summary, title, year} = location.state;
      return (
        <div className="detail">
          <div className="movie_card">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__info">
              <h2 className="movie__title">{title}</h2>
              {genres.map((genre,idx) =>
              <span key={idx} className='genres__genre'>{genre}</span>)}
              <span className='movie__year'>{year}</span>
            </div>
          </div>
          <span>{summary}</span>
        </div>
        );
    }else{
      return null;
    }
  }
}

export default Detail;