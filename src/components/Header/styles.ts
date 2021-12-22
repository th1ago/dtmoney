import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.header`
   max-width: 1120px;
   margin: 0 auto;

   /* Unidade de medida REM - tamanho do fonte size do root*/
   padding: 2rem 1rem 12rem;
   display: flex;
   align-items: center;
   /* espaco entre todos os item que estao no Content*/
   justify-content: space-between;

   button{
       font-size: 1rem;
       color: #FFF;
       background: var(--blue-light);
       border: 0;
       padding: 0 2rem;
       border-radius: 0.25rem
       height: 3rem;

       transition: filter 0.2s;

       &:hover{
           filter: brightness(0.9);
       }
   }
`;