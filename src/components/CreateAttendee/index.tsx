import { ReactElement, useState } from 'react'
import { AddAttendeeFunction } from '../../custom-hooks/useAttendees'
import { AttendeePermission } from '../../types'

interface CreateAttendeeProps {
  addAttendee: AddAttendeeFunction
}

const permissionsOptions: Record<string, AttendeePermission> = {
  Admitted: AttendeePermission.Admitted,
  Banned: AttendeePermission.Banned,
  Refused: AttendeePermission.Refused,
  'Special Guest': AttendeePermission.SpecialGuest,
}

const permissionsKeys = Object.keys(permissionsOptions)

const CreateAttendee = (props: CreateAttendeeProps): ReactElement => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [permission, setPermission] = useState<string>(permissionsKeys[0])

  const save = () => {
    props.addAttendee({
      name,
      age,
      permission: permissionsOptions[permission],
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">New Attendee</h5>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            type="text"
            value={name}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            className="form-control"
            id="age"
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter age"
            type="number"
            value={age}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="permission" className="form-label">
            Permission
          </label>
          <select
            aria-label="Default select example"
            className="form-select"
            id="permission"
            onChange={(e) => setPermission(e.target.value)}
            value={permission}
          >
            {permissionsKeys.map((perm, index) => (
              <option value={perm} key={index}>
                {perm}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary" onClick={save}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateAttendee
