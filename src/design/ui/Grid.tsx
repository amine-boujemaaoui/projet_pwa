import styled from "@emotion/styled";

export const Grid = styled("div")({
  display: "grid",
  gap: "1.5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 260px))",
  width: "100%",
  justifyContent: "center",
});
