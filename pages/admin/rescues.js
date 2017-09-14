// Module imports
import React from 'react'





// Component imports
import Page from '../../components/Page'
import RescuesTablePanel from '../../components/RescuesTablePanel'





// Component constants
const title = 'Rescues'





class Rescues extends React.Component {

  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  render () {
    return (
      <div>
        <header className="page-header">
          <h2>{title}</h2>
        </header>

        <div className="page-content">
          <RescuesTablePanel />
        </div>
      </div>
    )
  }
}

export default Page(Rescues, title)
