const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingInWorkHours = (workStart, workEnd, meetingStart, duration) => {

  const workStartMin = timeToMinutes(workStart);
  const workEndMin = timeToMinutes(workEnd);
  const meetingStartMin = timeToMinutes(meetingStart);

  const meetingEndMin = meetingStartMin + duration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
};

isMeetingInWorkHours('08:00', '17:30', '14:00', 90); // true
isMeetingInWorkHours('8:0', '10:0', '8:0', 120);     // true
isMeetingInWorkHours('08:00', '14:30', '14:00', 90); // false
isMeetingInWorkHours('14:00', '17:30', '08:0', 90);  // false
isMeetingInWorkHours('8:00', '17:30', '08:00', 900); // false
