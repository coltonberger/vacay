import React, { Component } from 'react'
import '../../App.css'

class Schedule extends Component {
  render () {
    return (
      <div className='ui bottom fixed menu'>
      <h4>Current Activity List</h4>
        <table className='ui celled table'>
          <tbody>
            <tr>
              {this.props.scheduledEvents.map((event, index) => (
                <td key={index}>
                {event.eventName} <i type="button" value="remove" className="fa fa-window-close" aria-hidden="true"
                onClick={(event) => this.props.deleteSingleEvent(index)}/>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div><input type="reset" value="clear" className="ui button" onClick={() => this.props.deleteAllEvents()}/></div>
        <div><input type="button" value="save" className="ui button" onClick={this.props.saveSchedule}/></div>
      </div>
    )
  }
}

export default Schedule
