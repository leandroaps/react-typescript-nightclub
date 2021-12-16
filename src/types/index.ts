export enum AttendeePermission {
  Admitted = 'list-group-item-success',
  Refused = 'list-group-item-danger',
  Banned = 'list-group-item-secondary',
  SpecialGuest = 'list-group-item-warning',
}

export interface Attendee {
  name: string;
  age: number;
  permission: AttendeePermission;
}
