import { ReactElement } from 'react'

import { AddAttendeeFunction } from '../../custom-hooks/useAttendees'
import { Attendee } from '../../types'
import AttendeeInformation from '../AttendeeInformation'
import CreateAttendee from '../CreateAttendee'

interface AttendeeListProps {
  attendees: Attendee[]
  addAttendee: AddAttendeeFunction
}

const AttendeeList = (props: AttendeeListProps): ReactElement => {
  return (
    <>
      <CreateAttendee addAttendee={props.addAttendee} />
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">Attendees</h5>
          <ol className="list-group list-group-numbered ">
            {props.attendees.map((attendee, index) => (
              <AttendeeInformation key={index} attendee={attendee} />
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default AttendeeList
