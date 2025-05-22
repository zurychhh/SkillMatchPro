import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

// Standardowe breakpointy
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

interface ResponsiveProps {
  children: ReactNode;
}

export const Desktop: React.FC<ResponsiveProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.lg });
  return isDesktop ? <>{children}</> : null;
};

export const Tablet: React.FC<ResponsiveProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.md, maxWidth: breakpoints.lg - 1 });
  return isTablet ? <>{children}</> : null;
};

export const Mobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.md - 1 });
  return isMobile ? <>{children}</> : null;
};

export const NotMobile: React.FC<ResponsiveProps> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: breakpoints.md });
  return isNotMobile ? <>{children}</> : null;
};

// Hook do sprawdzania bieżącego breakpointu
export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.md - 1 });
  const isTablet = useMediaQuery({ minWidth: breakpoints.md, maxWidth: breakpoints.lg - 1 });
  const isDesktop = useMediaQuery({ minWidth: breakpoints.lg });
  const isLargeDesktop = useMediaQuery({ minWidth: breakpoints.xl });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : 'largeDesktop',
  };
};

// Komponent pomocniczy dla elementów z różnymi stylami na różnych breakpointach
interface ResponsiveStylesProps {
  children: (styles: any) => ReactNode;
  mobile: any;
  tablet?: any;
  desktop?: any;
  largeDesktop?: any;
}

export const ResponsiveStyles: React.FC<ResponsiveStylesProps> = ({
  children,
  mobile,
  tablet,
  desktop,
  largeDesktop,
}) => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive();
  
  let styles = mobile;
  
  if (isTablet && tablet) {
    styles = { ...styles, ...tablet };
  }
  
  if (isDesktop && desktop) {
    styles = { ...styles, ...desktop };
  }
  
  if (isLargeDesktop && largeDesktop) {
    styles = { ...styles, ...largeDesktop };
  }
  
  return <>{children(styles)}</>;
};

// Komponent pomocniczy do wyrównywania elementów (spacing helper)
interface SpacingProps {
  children: ReactNode;
  my?: number | { mobile?: number; tablet?: number; desktop?: number };
  mx?: number | { mobile?: number; tablet?: number; desktop?: number };
  mt?: number | { mobile?: number; tablet?: number; desktop?: number };
  mb?: number | { mobile?: number; tablet?: number; desktop?: number };
  ml?: number | { mobile?: number; tablet?: number; desktop?: number };
  mr?: number | { mobile?: number; tablet?: number; desktop?: number };
  py?: number | { mobile?: number; tablet?: number; desktop?: number };
  px?: number | { mobile?: number; tablet?: number; desktop?: number };
  pt?: number | { mobile?: number; tablet?: number; desktop?: number };
  pb?: number | { mobile?: number; tablet?: number; desktop?: number };
  pl?: number | { mobile?: number; tablet?: number; desktop?: number };
  pr?: number | { mobile?: number; tablet?: number; desktop?: number };
}

export const Spacing: React.FC<SpacingProps> = ({ children, ...props }) => {
  const { breakpoint } = useResponsive();
  
  const getSpacingValue = (value: any) => {
    if (typeof value === 'number') return `${value}px`;
    if (typeof value === 'object') {
      if (breakpoint === 'mobile' && value.mobile !== undefined) return `${value.mobile}px`;
      if (breakpoint === 'tablet' && value.tablet !== undefined) return `${value.tablet}px`;
      if (breakpoint === 'desktop' && value.desktop !== undefined) return `${value.desktop}px`;
      if (breakpoint === 'largeDesktop' && value.desktop !== undefined) return `${value.desktop}px`;
    }
    return undefined;
  };
  
  const style = {
    marginTop: props.mt !== undefined ? getSpacingValue(props.mt) : 
               props.my !== undefined ? getSpacingValue(props.my) : undefined,
    marginBottom: props.mb !== undefined ? getSpacingValue(props.mb) : 
                  props.my !== undefined ? getSpacingValue(props.my) : undefined,
    marginLeft: props.ml !== undefined ? getSpacingValue(props.ml) : 
                props.mx !== undefined ? getSpacingValue(props.mx) : undefined,
    marginRight: props.mr !== undefined ? getSpacingValue(props.mr) : 
                 props.mx !== undefined ? getSpacingValue(props.mx) : undefined,
    paddingTop: props.pt !== undefined ? getSpacingValue(props.pt) : 
                props.py !== undefined ? getSpacingValue(props.py) : undefined,
    paddingBottom: props.pb !== undefined ? getSpacingValue(props.pb) : 
                   props.py !== undefined ? getSpacingValue(props.py) : undefined,
    paddingLeft: props.pl !== undefined ? getSpacingValue(props.pl) : 
                 props.px !== undefined ? getSpacingValue(props.px) : undefined,
    paddingRight: props.pr !== undefined ? getSpacingValue(props.pr) : 
                  props.px !== undefined ? getSpacingValue(props.px) : undefined,
  };
  
  return <div style={style}>{children}</div>;
};

export default {
  Desktop,
  Tablet,
  Mobile,
  NotMobile,
  ResponsiveStyles,
  Spacing,
  useResponsive,
  breakpoints,
};