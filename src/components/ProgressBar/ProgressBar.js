/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS, PROGRESSBAR_CONSTRAINTS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
  },
  medium: {
    '--height': '12px',
  },
  large: {
    '--height': '16px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ size, value }) => {
  if (value < 0 || value > 100) {
    throw new Error('Invalid progress value');
  }

  const style = SIZES[size];

  if (!style) {
    throw new Error('Invalid size value');
  }

  return (
    <Wrapper style={style} value={value}>
      <FillWrapper>
        <Fill style={style} value={value} />
      </FillWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div.attrs({
  role: 'progressbar',
  'aria-valuemin': PROGRESSBAR_CONSTRAINTS.min,
  'aria-valuemax': PROGRESSBAR_CONSTRAINTS.max,
  'aria-valuenow': (props) => props.value,
  tabIndex: -1,
})`
  width: 10em;
  background: #eee;
  padding: var(--padding);
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  /* Trim off corners when progress bar is near full */
`;

const FillWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Fill = styled.div`
  background: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: var(--height);
`;
