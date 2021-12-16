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
      <CreateAttendee addAttendee={props.addAttendee} key="addAttendee" />
      <ol className="list-group list-group-numbered mt-5">
        {props.attendees.map((attendee, index) => (
          <AttendeeInformation key={index} attendee={attendee} />
        ))}
      </ol>
    </>
  )
}

export default AttendeeList
