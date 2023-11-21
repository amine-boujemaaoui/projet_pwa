import styled from "@emotion/styled";

export const Card = styled("div")(
  ({ customStyle }: { customStyle: object }) => ({
    flexShrink: 0,
    borderRadius: "6px",
    overflow: "hidden",
    ...customStyle,
  })
);
