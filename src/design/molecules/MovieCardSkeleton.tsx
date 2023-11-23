import styled from "@emotion/styled";

const MovieCardSkeleton = styled("div")({
    width: "100%", 
    height: "24rem",
    borderRradius: "0.375rem",
    backgroundColor: "rgba(255,255,255,0.1)",
    animation: "pulse 1.5s infinite",
    "@keyframes pulse" : {
      "0%, 100%" : {
        opacity:" 0.4",
      },
      "50%" : {
        opacity: "1",
      }
    }
})


export default MovieCardSkeleton;
