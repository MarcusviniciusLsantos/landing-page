import styled from "styled-components";
import { rem } from "polished";
import {
  global,
  layout,
  audit,
  typography,
  colors,
  device,
} from "@/styles/variables";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${layout.sidePadding};

  @media ${device.s} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.l} {
    grid-gap: calc(${layout.sectionTopBottomPadding} / 2);
  }

  > a {
    position: relative;
    border: ${rem("1px")} solid transparent;
    border-radius: ${audit.cardBorderRadius};
    padding: ${rem("40px")};
    transition-duration: ${global.hoverTransitionDuration};
    text-decoration: none;
    background-color: ${audit.cardBackgroundColor};
    background-clip: padding-box;
    -webkit-background-clip: padding-box;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: ${rem("-1px")};
      border-radius: inherit;
      background: ${global.gradientBorderColor};
      z-index: -1;
    }

    &:hover {
      border-color: ${audit.cardBorderColorHover};
    }

    svg {
      width: auto;
      max-height: ${rem("60px")};
    }

    span {
      display: block;
      margin-top: calc(${layout.sectionTopBottomPadding} / 2);
      font-size: ${rem("16px")};
      font-weight: ${typography.fontWeigthMedium};
      letter-spacing: ${rem("1px")};
      text-transform: uppercase;
      color: ${colors.grey600};
    }
  }
`;
