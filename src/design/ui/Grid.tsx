import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
`;
