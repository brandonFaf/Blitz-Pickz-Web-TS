import getWeek from 'date-fns/getWeek';
import sub from 'date-fns/sub';
const getCurrentWeek = () => {
  const w = getWeek(sub(new Date(), {days: 2})) - 35;
  return w > 0 ? w : (w + 35) % 17;
};
export default getCurrentWeek;
