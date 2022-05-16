import { Container, ValueContainer, Value, Hinge } from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti';
import { useEffect } from 'react';

interface TimeProps {
  key: string;
  value: string;
}

export function Time({ value, key }: TimeProps) {
  return (
    <Container>
      <ValueContainer
        from={{ opacity: 0.5, rotateX: '-90deg' }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{
          type: 'timing',
          duration: 400,
        }}
        key={`${key}-top-${value}`}
      >
        <Hinge />
        <Value>{value}</Value>
      </ValueContainer>
    </Container>
  );
}
