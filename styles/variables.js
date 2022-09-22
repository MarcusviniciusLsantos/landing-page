import { rem } from "polished";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  grey50: "#F1F1F3",
  grey100: "#E3E3E8",
  grey400: "#8F91A3",
  grey500: "#73758C",
  grey600: "#5C5E70",
  grey700: "#454654",
  grey800: "#2E2F38",
  grey900: "#17171C",
  grey950: "#0C0C0E",
  blue400: "#6873E9",
  blue500: "#4250E4",
  blue600: "#3540B6",
  purple500: "#4329A6",
  purple700: "#281964",
  purple800: "#1B1042",
  purple850: "#140C32",
  oracle500: "#9669ED",
  oracle850: "#2D2047",
  green500: "#35E0AD",
  green850: "#104334",
  yellow500: "#FFD646",
  yellow850: "#4D4015",
};

export const device = {
  xs: `(min-width: 375px)`,
  s: `(min-width: 700px)`,
  m: `(min-width: 900px)`,
  l: `(min-width: 1280px)`,
  xl: `(min-width: 1600px)`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: "(min-width: 538px) and (min-height: 720px)",
};

export const global = {
  hoverTransitionDuration: "0.3s",
  sectionBorderBottom: colors.grey900,
};

export const layout = {
  contentMaxWidth: rem("1344px"),
  sidePadding: rem("16px"),
  sectionTopBottomPadding: rem("80px"),
};

export const typography = {
  fontFamily: "'Space Grotesk', Verdana, Arial, Helvetica, sans-serif",
  fontWeigthLight: 300,
  fontWeigthRegular: 400,
  fontWeigthMedium: 500,
  fontWeigthSemiBold: 600,
  fontWeigthBold: 700,
  fontSize: rem("16px"),
};

export const nav = {
  height: rem("72px"),
  backgroundColor: colors.grey950,
  fontSize: rem("14px"),
  color: colors.white,
  colorHover: colors.grey100,
  fontWeight: typography.fontWeigthMedium,
};

export const bounties = {
  cardBorderColor: colors.purple700,
  cardBorderColorHover: colors.purple500,
  cardBorderRadius: rem("8px"),
  cardBackgroundColor: colors.purple850,
  cardPadding: rem("15px"),
  networkBackgroundColor: colors.purple800,
  prizeBorderRadius: rem("8px"),
  statusDefaultBackgroundColor: colors.oracle850,
  statusDefaultColor: colors.oracle500,
  statusOpenBackgroundColor: colors.green850,
  statusOpenColor: colors.green500,
  statusFundingBackgroundColor: colors.yellow850,
  statusFundingColor: colors.yellow500,
  statusProposalBackgroundColor: colors.oracle850,
  statusProposalColor: colors.oracle500,
};
