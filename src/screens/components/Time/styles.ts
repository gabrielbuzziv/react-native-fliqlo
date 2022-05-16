import styled, { css } from 'styled-components/native';

import { MotiView } from 'moti';

export const Container = styled(MotiView)`
  background: #000;
  border-radius: 20px;

  padding: 20px 30px;
  margin-left: 10px;
`;

export const ValueContainer = styled(MotiView)`
  transform-origin: center;
  overflow: hidden;
`;

export const Value = styled.Text`
  color: white;
  font-size: 70px;
  font-weight: bold;
`;

export const Hinge = styled.View`
  background: black;
  
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 9;

  height: 2px;
  width: 100%;
`;