import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // You can disable whichever you don't need
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
