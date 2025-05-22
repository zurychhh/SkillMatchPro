import React, { ReactNode, CSSProperties } from 'react';
import { useResponsive } from './Responsive';

// Typ definiujący wartości responsywne
interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
}

interface FlexProps {
  children: ReactNode;
  direction?: CSSProperties['flexDirection'] | ResponsiveValue<CSSProperties['flexDirection']>;
  justify?: CSSProperties['justifyContent'] | ResponsiveValue<CSSProperties['justifyContent']>;
  align?: CSSProperties['alignItems'] | ResponsiveValue<CSSProperties['alignItems']>;
  wrap?: CSSProperties['flexWrap'] | ResponsiveValue<CSSProperties['flexWrap']>;
  gap?: number | string | ResponsiveValue<number | string>;
  width?: string | ResponsiveValue<string>;
  height?: string | ResponsiveValue<string>;
  padding?: string | ResponsiveValue<string>;
  margin?: string | ResponsiveValue<string>;
  style?: CSSProperties;
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({ 
  children, 
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 0,
  width,
  height,
  padding,
  margin,
  style = {},
  className,
}) => {
  const { breakpoint } = useResponsive();
  
  // Funkcja do uzyskiwania wartości na podstawie bieżącego breakpointu
  const getValue = <T,>(value: T | ResponsiveValue<T>): T | undefined => {
    if (typeof value !== 'object' || value === null) {
      return value as T;
    }
    
    // Sprawdzamy czy jest to wartość responsywna
    const isResponsiveObject = (obj: any): obj is ResponsiveValue<T> => {
      return obj && (
        'mobile' in obj || 
        'tablet' in obj || 
        'desktop' in obj
      );
    };
    
    if (!isResponsiveObject(value)) {
      return value as T;
    }
    
    if (breakpoint === 'mobile' && value.mobile !== undefined) {
      return value.mobile;
    }
    
    if ((breakpoint === 'tablet' || breakpoint === 'mobile') && value.tablet !== undefined) {
      return value.tablet;
    }
    
    if (value.desktop !== undefined) {
      return value.desktop;
    }
    
    // Fallback do mobilnej wartości jeśli inne nie są zdefiniowane
    return value.mobile;
  };
  
  // Konwersja gap z liczby na string jeśli potrzeba
  const processGap = (gap: number | string | undefined): string | undefined => {
    if (gap === undefined) return undefined;
    return typeof gap === 'number' ? `${gap}px` : gap;
  };
  
  const flexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: getValue(direction),
    justifyContent: getValue(justify),
    alignItems: getValue(align),
    flexWrap: getValue(wrap),
    gap: processGap(getValue(gap)),
    width: getValue(width),
    height: getValue(height),
    padding: getValue(padding),
    margin: getValue(margin),
    ...style
  };
  
  return (
    <div style={flexStyle} className={className}>
      {children}
    </div>
  );
};

// Komponent kolumny
export const Column: React.FC<FlexProps> = (props) => {
  return <Flex {...props} direction="column" />;
};

// Komponent rzędu
export const Row: React.FC<FlexProps> = (props) => {
  return <Flex {...props} direction="row" />;
};

export default Flex;