import '@emotion/react'

declare module '@emotion/react' {
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
  }
}