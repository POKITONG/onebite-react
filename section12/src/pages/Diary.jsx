import {useParams} from "react-router-dom";

const Diary = () => {
    const params = useParams();
    console.log(params);
    // useParams : 현재 브라우저에 명시한 URL 파라미터의 값을 가져오는 훅

    return <div>{params.id}번 일기입니다. ~~~</div>
};

export default Diary;