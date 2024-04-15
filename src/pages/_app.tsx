import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/components/layout/layout";

import theme from "../styles/theme";

function App(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <AppCacheProvider {...props}>
            <Layout>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Layout>
        </AppCacheProvider>
    );
}

export default App;
