import styled from "@emotion/styled";

export const Card = styled("div")(({ customStyle }: { customStyle: object }) => ({ 
    flexShrink: 0,
    borderRadius: "6px",
    background: "#383838",
    overflow: "hidden",
    ...customStyle
}))

