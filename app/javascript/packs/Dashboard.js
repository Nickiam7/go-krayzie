import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import SongList from './SongList'

const Dashboard = props => {
  const [playList, setPlayList] = useState(props.playList)

  return(
    <>
      <SongList
        playList={playList}
      />
    </>
  )
}

Dashboard.propTypes = {
  playList: PropTypes.object
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('play-list')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Dashboard playList={data} />,
    document.getElementById('dashboard-container')
    .appendChild(document.querySelector('#dashboard'))
  );
});
