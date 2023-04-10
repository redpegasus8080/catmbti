import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        { id: "EI", score: 0 },
        { id: "SN", score: 0 },
        { id: "TF", score: 0 },
        { id: "JP", score: 0 },
    ]);
    const navigate = useNavigate();

    console.log('totalScore', totalScore);

    const hancleClickButton = (no, type) => {
        const newScore = totalScore.map((s) => 
            s.id === type ? { id: s.id, score: s.score + no } : s
        );

        setTotalScore(newScore);
        // 다음문제로 문제수 증가
        if(QuestionData.length !== questionNo + 1) {
            setQuestionNo(questionNo + 1);
        }else{
            // 결과 도출
            const mbti = newScore.reduce(
                (acc, curr) => 
                    acc + (curr.score >= 2 ? curr.id.substring(0,1) : curr.id.substring(1,2)), 
                ""
            );

            console.log(mbti);
            // 결과 페이지 이동
            // navigate("/result");
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti: mbti,
                })}`
            });
        }

        // if ( type === "EI" ) {
        //     // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
        //     const addScore = totalScore[0].score + no;
        //     // 새로운 객체
        //     const newObject = { id: type, score: addScore };
        //     // splice 통해 새로운 객체를 해당 객체 자리에 넣어줌
        //     totalScore.splice(0, 1,  newObject);

        // }else if ( type === "SN" ) {
        //     const addScore = totalScore[0].score + no;
        //     const newObject = { id: type, score: addScore };
        //     totalScore.splice(1, 1,  newObject);

        // }else if ( type === "TF" ) {
        //     const addScore = totalScore[0].score + no;
        //     const newObject = { id: type, score: addScore };
        //     totalScore.splice(2, 1,  newObject);

        // }else if ( type === "JP" ) {
        //     const addScore = totalScore[0].score + no;
        //     const newObject = { id: type, score: addScore };
        //     totalScore.splice(3, 1,  newObject);
        // }

        // setQuestionNo(questionNo + 1);
    }

    // const hancleClickButtonB = (no, type) => {
    //     if ( type === "EI" ) {
    //         // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
    //         const addScore = totalScore[0].score + no;
    //         // 새로운 객체
    //         const newObject = { id: type, score: addScore };
    //         // splice 통해 새로운 객체를 해당 객체 자리에 넣어줌
    //         totalScore.splice(0, 1,  newObject);

    //     }else if ( type === "SN" ) {
    //         const addScore = totalScore[0].score + no;
    //         const newObject = { id: type, score: addScore };
    //         totalScore.splice(1, 1,  newObject);

    //     }else if ( type === "TF" ) {
    //         const addScore = totalScore[0].score + no;
    //         const newObject = { id: type, score: addScore };
    //         totalScore.splice(2, 1,  newObject);

    //     }else if ( type === "JP" ) {
    //         const addScore = totalScore[0].score + no;
    //         const newObject = { id: type, score: addScore };
    //         totalScore.splice(3, 1,  newObject);
    //     }

    //     setQuestionNo(questionNo + 1);
    // }

    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{ marginTop: '20px' }}/>
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                <Button onClick={() => hancleClickButton(1, QuestionData[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>{QuestionData[questionNo].answera}</Button>
                <Button onClick={() => hancleClickButton(0, QuestionData[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`
const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    font-family: "SimKyungha";
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`