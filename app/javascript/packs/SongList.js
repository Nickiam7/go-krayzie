import React from 'react'
import PropTypes from 'prop-types'

import Song from './Song'

const SongList = props => {
  return(
    <div>
      {props.playList.songs.map(song => {
        return(
          <Song
            key={song.id}
            keyId={song.id}
            album={props.playList.album}
            song={song}
          />
        )
      })}
    </div>
  )
}

SongList.propTypes = {
  playList: PropTypes.object
}

export default SongList