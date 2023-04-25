import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* 'Noto Sans KR' */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;700&display=swap');

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Noto Sans KR', 'Open Sans', sans-serif;
       color: #515151;
   }
   #root{
       margin: 0 auto;
   }
   `;
