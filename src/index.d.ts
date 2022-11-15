import React from 'react';
import ReactStoreBadge from './index.js';

export interface ReactStoreBadgeProps {
  /** url of App Store and Play Store */
  url: string

  /** platform name. 'ios' and 'android' only */
  platform: 'ios' | 'android'

  /** default locale code. default is en-us */
  defaultLocale: string

  /** locale name. such as en-us */
  locale?: string

  /** width for badge size */ 
  width?: number

  /** height for badge size */ 
  height?: number

  /** target for url to be opened */ 
  target?: "_self" | "_blank" | "_parent" | "_top"
}

declare const ReactStoreBadge: ReactStoreBadgeProps
export default ReactStoreBadge;