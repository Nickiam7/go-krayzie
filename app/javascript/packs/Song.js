import React from 'react'
import PropTypes from 'prop-types'

const Song = ({song, album, keyId}) => {
  return(
    <div className="song" key={keyId}>
      <div className="song__main">
        <div className="song__thumb">
          <img src={album.cover.url} />
        </div>
        <div className="song__info">
          <h2>{song.title}</h2>
          <p>{album.title}</p>
        </div>
      </div>
      <div className="song__duration">
        <p>{song.duration}</p>
      </div>
      <div className="song__duration">
        <p>actions</p>
      </div>
    </div>
  )
}

Song.propTypes = {
  keyId: PropTypes.number,
  albumTitle: PropTypes.string,
  song: PropTypes.object
}

export default Song

