import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px;
`;
const StyledSpan = styled.span`
  margin-right: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 10px;
`;
const Tags = ({ title }) => (
  <StyledSpan className='bg-black text-white mr-2 py-1 px-2 font-weight-bold'>{title}</StyledSpan>
);

const Header = () => {
  const topics = ['redux-toolkit', 'createAsyncThunk', 'createSlice'];
  const keify = (v) => `${v}`;
  return (
    <StyledHeader>
      {topics.map((item, i) => (
        <Tags title={item} key={keify(i)} />
      ))}
    </StyledHeader>
  );
};

export default Header;
