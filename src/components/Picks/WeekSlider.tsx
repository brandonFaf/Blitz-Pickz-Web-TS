import React, { useCallback, useMemo } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import WeekSliderContainer from '../../Styles/Picks/WeekSlider';
import useWeek from '../../hooks/useWeek';
import useViewport from '../../hooks/useViewport';

const WeekSlider: React.FC = () => {
  const currentWeek = useMemo(() => getCurrentWeek(), []);
  const { isMobile } = useViewport();
  const { week, setWeek } = useWeek();
  const weekNumbers = new Array(17).fill('1');
  const weekBox = useCallback(
    node => {
      if (node) {
        node.scrollTo({
          left: ((week - 1) * node.clientWidth) / 5,
          behavior: 'smooth'
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [week]
  );
  return (
    <WeekSliderContainer className='week-slider' ref={weekBox}>
      {!isMobile && (
        <>
          <div></div>
          <div></div>{' '}
        </>
      )}
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
