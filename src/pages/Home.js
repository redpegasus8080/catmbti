import React from 'react';
// css-in-js
import styled from 'styled-components';
import PangImage from '../assets/darkSky.jpg';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Wrapper>
            <Header>PEGASUS</Header>
            <Contents>
                <Title>Markab</Title>
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width={350} height={350} />
                </LogoImage>
                <Desc>별자리</Desc>
                <Button>테스트</Button>
            </Contents>
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
`