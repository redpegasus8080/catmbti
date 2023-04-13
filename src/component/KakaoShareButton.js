import React from "react";
import { Button } from "react-bootstrap";
const {Kakao} = window;

const KakaoShareButton = ({data}) => {
    const url = "https://catmbti0424.netlify.app/";
    const resultUrl = window.location.href;

    console.log('ddd', resultUrl, url);

    React.useEffect(() => {
        Kakao.cleanup();
        Kakao.init("080472ef034418e100f0c9ef25f80148");
        Kakao.isInitialized();
    }, []);

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: 'MBTI',
                description: 'MBTI TEST DESCRIPTION',
                imageUrl:
                    'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
            buttons: [
                {
                    title: '나도 테스트 하러가기',
                    link: {
                    mobileWebUrl: url,
                    webUrl: url,
                    },
                },
            ],
        });
    }
    
    return (
        <Button onClick={shareKakao} style={{ fontFamily: "SimKyungha", width: 170, marginLeft: 20 }} >
            KakaoTalk 공유
        </Button>
    )
}

export default KakaoShareButton;