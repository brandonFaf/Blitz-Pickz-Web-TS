import getDayOfYear from 'date-fns/getDayOfYear';
export default () => {
  const weeks = [
    0, 100, 256, 263, 270, 277, 284, 291, 298, 305, 312, 319, 326, 333, 340,
    347, 353, 361,
  ];
  const day = getDayOfYear(new Date());
  if (day < 3) {
    return 17;
  }
  if (day < 9) {
    return 18;
  }
  if (day < 17) {
    return 19;
  }
  if (day < 23) {
    return 20;
  }
  if (day < 30) {
    return 21;
  }
  if (day < 36) {
    return 22;
  }
  if (day < 99) {
    return 23;
  }
  for (let i = 1; i < weeks.length; i++) {
    const weekDay = weeks[i];
    const newxtWeekDay = weeks[i + 1];
    if (!newxtWeekDay) {
      return 17;
    }
    if (weekDay <= day && newxtWeekDay > day) {
      return i;
    }
  }
  return 1;
};
