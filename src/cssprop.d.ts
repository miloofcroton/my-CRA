/// <reference types="styled-components/cssprop" />

/* attempt #1 to get syntax highlighting */
// import { CSSProp } from 'styled-components';
// declare module 'react' {
//   interface Attributes {
//     css?: CSSProp;
//   }
// }

/* attempt #2 to get syntax highlighting */
// declare namespace React {
//     interface HTMLAttributes<T> extends DOMAttributes<T> {
//        css?: import('react').CSSProperties
//     }
//  }
