import React, { ReactNode, CSSProperties } from 'react';
import { useResponsive } from './Responsive';

// Typ definiujący wartości responsywne
interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
}

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
  maxWidth?: string;
  padding?: string | ResponsiveValue<string>;
  margin?: string | ResponsiveValue<string>;
  style?: CSSProperties;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  maxWidth = fluid ? '100%' : '1200px',
  padding = { mobile: '20px', tablet: '30px', desktop: '40px' },
  margin = '0 auto',
  style = {},
  className = '',
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
  
  // Używamy standardowego formatu React dla stylów inline
  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth,
    padding: getValue(padding),
    margin: getValue(margin),
    boxSizing: 'border-box',
    ...style
  };
  
  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default Container;