import React from 'react';
import { Link as RRLink, LinkProps } from 'react-router-dom';

// Used for allowing MUI to work with react-router and create links without
// requiring page reload
export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  itemProps,
  ref
) {
  return <RRLink ref={ref} {...itemProps} role={undefined} />;
});
