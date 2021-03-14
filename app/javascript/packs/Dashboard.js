import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import SongList from './SongList'

const Dashboard = props => {
  const [playList, setPlayList] = useState(props.playList)

  return(
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="dashboard__section section-current-list">
            <SongList
              playList={playList}
            />
          </div>
        </div>
      </div>
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
