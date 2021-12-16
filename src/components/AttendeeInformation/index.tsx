import { ReactElement } from 'react';
import { Attendee } from '../../types';

interface AttendeeInformationProps {
  attendee: Attendee;
}

const AttendeeInformation = (props: AttendeeInformationProps): ReactElement => {
  return (
    <li className={`"list-group-item" ${props.attendee.permission}`}>
      {props.attendee.name} | {props.attendee.age}
    </li>
  );
};

export default AttendeeInformation;
