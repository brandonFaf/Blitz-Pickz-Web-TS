import React, { useCallback, useMemo } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import WeekSliderContainer from '../../Styles/Picks/WeekSlider';
import useWeek from '../../hooks/useWeek';
import useViewport from '../../hooks/useViewport';

const WeekSlider: React.FC = () => {
  const currentWeek = useMemo(() => getCurrentWeek(), []);
  const { isMobile } = useViewport();
  const { week, setWeek } = useWeek();
  const weekNumbers = new Array(23).fill('1');
  const weekBox = useCallback(
    node => {
      if (node) {
        node.scrollTo({
          left: ((week - 1) * node.clientWidth) / 5,
          behavior: 'smooth',
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
        const word = i <= 17 ? 'WEEK' : 'ROUND';
        let number;
        switch (i) {
          case 18:
            number = 'Wld Crd';
            break;
          case 19:
            number = 'DIV';
            break;
          case 20:
            number = 'CONF';
            break;
          case 21:
            number = 'PB';
            break;
          case 22:
            number = 'SB';
            break;
          default:
            number = (i + 1).toString();
        }
        return (
          <div
            key={i}
            className={cn}
            data-testid={`week-button-${i + 1}`}
            onClick={() => setWeek(i + 1)}
          >
            <div>{i + 1 === week && word}</div>
            {number}
          </div>
        );
      })}
    </WeekSliderContainer>
  );
};

export default WeekSlider;
