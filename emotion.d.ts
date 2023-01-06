import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
    };
    typography: {
      font: {
        weight: {
          bold: string;
          medium: string;
          regular: string;
        };
        size: {
          xxxs: string;
          xxs: string;
          xs: string;
          sm: string;
          md: string;
          lg: string;
          xl: string;
        };
      };
    };
    spacing: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      13: string;
      14: string;
      15: string;
      16: string;
    };
  }
}
