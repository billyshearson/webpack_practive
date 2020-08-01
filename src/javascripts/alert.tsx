import * as React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
  border-radius: 4em;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    <AlertContainer>
      <div>{message}</div>
    </AlertContainer>
  );
};

export default Alert;
