import React from 'react';
// css-in-js
import styled from 'styled-components';
import PangImage from '../assets/darkSky.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';
import { ResultData } from '../assets/data/resultdata';

const Result = () => {
    const navigate = useNavigate();
    
    return (
        <Wrapper>
            <Header>PEGASUS 천마</Header>
            <Contents>
                <Title>결과 보기</Title>
                <LogoImage>
                    <img src={ResultData[0].image} alt="" className="rounded-circle" width={350} height={350} />
                </LogoImage>
                <Desc>예비 결과 설명입니다. {ResultData[0].name}  </Desc>
                <Button style={{ fontFamily: "SimKyungha"}} onClick={() => navigate("/")}>
                    테스트 다시하기
                </Button>
            </Contents>
        </Wrapper>
    )
}

export default Result;

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