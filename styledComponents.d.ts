import 'styled-components';
import Theme from '@/app/Variables';

type ITheme = typeof Theme

declare module 'style-components' {
  export interface DefaultTheme extends  ITheme{}
};