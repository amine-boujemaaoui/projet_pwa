import styled from "@emotion/styled";

export const Image = styled("img")(({ customStyle }: { customStyle: object }) => ({
    width: "377px",
    height: "73px",
    ...customStyle
}))
