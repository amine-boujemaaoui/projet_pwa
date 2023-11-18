import styled from "@emotion/styled";
import { useTheme } from "../theme/ThemeProvider";

function ErrorPage() {

    const { theme } = useTheme();

    return (
        <Main className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <CenteredContent>
                <h1>Loading ...</h1>
            </CenteredContent>
        </Main>
    );
}

export default ErrorPage;

const Main = styled("main")({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    padding: "3rem",
});

const CenteredContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
