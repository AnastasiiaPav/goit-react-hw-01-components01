import styled from "styled-components";

 export const Name = styled.p`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: center;
 `

 export const Img = styled.img`
    width: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    border: solid 1px black;
 `

 export const Form =  styled.li`
    border: solid 1px black;
    width: 69px;
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