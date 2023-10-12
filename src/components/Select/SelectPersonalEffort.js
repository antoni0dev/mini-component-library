import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectPersonalEffort = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const mirrorRef = React.useRef(null);
  const selectRef = React.useRef(null);

  React.useEffect(() => {
    if (mirrorRef.current && selectRef.current) {
      const width = mirrorRef.current.offsetWidth;
      console.log({ width });
      selectRef.current.style.width = `${width}px`;
    }
  }, [displayedValue]);

  return (
    <>
      <Wrapper>
        <Mirror ref={mirrorRef}>{displayedValue}</Mirror>
        <SelectEl ref={selectRef} value={value} onChange={onChange}>
          {children}
        </SelectEl>
        <Icon id='chevron-down' size='20' />
      </Wrapper>
    </>
  );
};

const Mirror = styled.span`
  position: absolute;
  left: -9999px;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  width: min-content;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
`;

const SelectEl = styled.select`
  padding: 12px 52px 12px 16px;
  border: none;
  color: ${COLORS.gray700};

  // remove the native icon
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
`;

export default SelectPersonalEffort;
