import "styled-components";

declare module "styled-components" {
  export interface ContentTheme {
    borderRadius?: string;
    colors?: {
      main?: string;
      secondary?: string;
    };
    padding?: {
      primary?: string;
      secondary?: string;
    };
  }
}
