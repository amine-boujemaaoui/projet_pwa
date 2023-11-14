import styled from "@emotion/styled";

export const Card = styled("div")(({ customStyle }: { customStyle: object }) => ({ 
    flexShrink: 0,
    borderRadius: "10px",
    background: "#383838",
    cursor: "pointer",
    overflow: "hidden",
    ...customStyle
}))

