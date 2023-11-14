import styled from "@emotion/styled";

export const Grid = styled("div")`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
  width: 100%;
`;
