import React, { useCallback, useMemo } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import WeekSliderContainer from '../../Styles/Picks/WeekSlider';

type props = {
  week: number;
  setWeek: (week: number) => void;
};
const WeekSlider: React.FC<props> = ({ week, setWeek }) => {
  const currentWeek = useMemo(() => getCurrentWeek(), []);

  const weekNumbers = new Array(17).fill('1');
  const weekBox = useCallback(
    node => {
      if (node) {
        node.scrollTo({
          left: ((week - 1) * window.innerWidth) / 5,
          behavior: 'smooth'
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [week]
  );
  return (
    <WeekSliderContainer ref={weekBox}>
      {weekNumbers.map((x, i) => {
        let cn = i + 1 === week ? 'active' : '';
        cn += i + 1 === currentWeek ? ' current' : '';
        return (
          <div
            key={i}
            className={cn}
            data-testid={`week-button-${i + 1}`}
            onClick={() => setWeek(i + 1)}
          >
            <div>{i + 1 === week && 'WEEK'}</div>
            {i + 1}
          </div>
        );
      })}
    </WeekSliderContainer>
  );
};

export default WeekSlider;
