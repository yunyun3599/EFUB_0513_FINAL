import React from 'react';
import styled from 'styled-components';
//import {FullScreen, useFullScreenHandle} from "react-full-screen";

const Template = styled.div`
    width: 512px;
    margin-left:auto;
    margin-right:auto;
    margin-top:6rem;
    border-radius:4px;
    overflow:hidden;
`

const AppTitle = styled.div`
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    background: white;
`

const TodoTemplate = ({children}) => {
    //const handle = useFullScreenHandle();
    return(
        <Template>
            {/*<button onClick = {handle.enter}>EnterFullScreen</button>
            <FullScreen handle={handle}>*/}
            <AppTitle>일정관리</AppTitle>
            <Content>{children}</Content>
            {/*</FullScreen>*/}
        </Template>
    )
}

export default TodoTemplate;