import styled from "styled-components";

export const TodoStyle = styled.div`
text-align: center;
color:${(props) => props.color};
height: 400;
width: 100%;
`;

export const Table = styled.table`
text-align: center;
margin: 50px;
`;

export const Hr = styled.hr`
width: ${(style) => style.width}
`;