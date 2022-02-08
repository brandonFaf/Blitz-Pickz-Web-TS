import getDayOfYear from 'date-fns/getDayOfYear';
export default () => {
  const weeks = [
    0, 100, 257, 264, 271, 278, 285, 292, 299, 306, 313, 320, 327, 334, 341,
    348, 355, 362,
  ];
  const day = getDayOfYear(new Date());
  if (day < 4) {
    return 17;
  }
  if (day < 10) {
    return 18;
  }
  if (day < 18) {
    return 19;
  }
  if (day < 24) {
    return 20;
  }
  if (day < 31) {
    return 21;
  }
  if (day < 37) {
    return 22;
  }
  if (day < 100) {
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
