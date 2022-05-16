import { useEffect, useMemo, useState } from 'react';
import { Text } from 'react-native';
import { Time } from '../components/Time';
import { Container, Clock } from './styles';


export function Home() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const hours = useMemo(() => {
    return currentTime.getHours().toString().padStart(2, '0');
  }, [currentTime]);

  const minutes = useMemo(() => {
    return currentTime.getMinutes().toString().padStart(2, '0');
  }, [currentTime]);

  useEffect(() => {
    const seconds = currentTime.getSeconds()
    const intervalTime = (60 - seconds) * 1000;

    const refreshTime = setTimeout(() => {
      setCurrentTime(new Date())
    }, intervalTime);

    () => clearTimeout(refreshTime);
  }, [currentTime])

  return (
    <Container>
      <Clock>
        <Time key="hour" value={hours} />
        <Time key="minute" value={minutes} />
      </Clock>
    </Container>
  );
}
