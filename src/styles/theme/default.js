const theme = {
    breakpoint: {
        tablet: 650,
        desktop: 1040,
    },
    position: {
        navHeight: "5.25rem",
        footerHeight: "8.75rem",
        contentHeight: "calc(100vh - 3.5rem - 8.75rem - 5px)",
        pageTitleHeight: "8rem",
        contentPadding: "1rem",
    },
    color: {
        backgroundLight: "#FAFAFA",
        backgroundDark: "#212121",

        primary: "#82AAFF",
        secondary: "#76CA8E",
        tertiary: "#F07178",

        primaryBackground: "#f3f7ff",
        secondaryBackground: "#f3fff5",
        tertiaryBackground: "#fff7f3",

        primaryDark: "#688CD8",
        secondaryDark: "#58A76E",
        tertiaryDark: "#D86854",

        fontDark: "#343D46",
        fontMedium: "#A2A8B5",
        fontSubtle: "#A2A8B5",
        fontLight: "#EEFFFF",
    },
    font: {
        family: {
            primary: "SF Pro Text",
            secondary: "Consolas",
        },
        size: {
            desktop: {
                xs: "0.75rem",
                s: "0.875rem",
                m: "1rem",
                l: "1.375rem",
                xl: "1.5rem",
                xxl: "2.5rem",
                xxxl: "4rem",
            },
            mobile: {
                xs: "0.75rem",
                s: "0.875rem",
                m: "1rem",
                l: "1.125rem",
                xl: "1.5rem",
                xxl: "1.755",
                xxxl: "2rem",
            },
        },
    },
    spacing: {
        xs: "0.5rem",
        s: "0.75rem",
        m: "1.25rem",
        l: "2rem",
        xl: "3.25rem",
        xxl: "5.25rem",
    },
    line: {
        color: "#A2A8B5",
        dashWidth: 2,
        dashLength: 10,
        dashTotal: 12,
    },
};

export default theme;
