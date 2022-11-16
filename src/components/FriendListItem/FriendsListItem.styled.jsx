import styled from "styled-components";

 export const Name = styled.p`
    font-weight: 500;
    font-size: 24px;
 `

 export const Img = styled.img`
    width: 48px;
    border-radius: 50%;
 `

 export const Form =  styled.li`
    border: solid 1px black;
 `
 function ColorOnline(isOnline) {
    if( isOnline.children ){
       return 'green'
    }  else { 
     return 'red';
      }
 }

 export const Online =  styled.span`
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${ColorOnline};
 `