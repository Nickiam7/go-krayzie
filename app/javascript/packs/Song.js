import React from 'react'
import PropTypes from 'prop-types'

const Song = props => {
  console.log(props.song.id)
  return(
    <div className="song" key={props.keyId}>
      <div className="song__title">
        {props.song.title} | {props.albumTitle}
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

