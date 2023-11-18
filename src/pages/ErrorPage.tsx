import { useTheme } from '../theme/ThemeProvider';
import styled from "@emotion/styled";

function ErrorPage() {

    const { theme } = useTheme();

    return (
        <Main className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <CenteredContent>
                <h1>There was an error</h1>
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
    minHeight: "100vh",
    padding: "3rem",
});

const CenteredContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
