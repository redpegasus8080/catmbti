import React from 'react';
// css-in-js
import styled from 'styled-components';
import PangImage from '../assets/pegasus_paper.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        // useHistory
        navigate('question');
    }

    return (
        <Wrapper>
            <Header>PEGASUS 천마</Header>
            <Contents>
                <Title>Markab</Title>
                <LogoImage>
                    <img src={PangImage} alt="" className="rounded-circle" width={350} height={350} />
                </LogoImage>
                <Desc>별자리</Desc>
                <Button style={{ fontFamily: "SimKyungha"}} onClick={handleClickButton}>테스트</Button>
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
    font-family: "SimKyungha";
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "SimKyungha";
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
    font-family: "SimKyungha";
`