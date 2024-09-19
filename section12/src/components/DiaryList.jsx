import Button from "./Button.jsx";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
        // sort : 어떠한 값도 반환하지 않고 원본 배열을 정렬
        // toSorted() : 원본 배열을 수정하지 않고 정렬된 새로운 배열 반환
    };

    const sortedData = getSortedData();

    const nav = useNavigate();
    return <div className="DiaryList">
        <div className="menu_bar">
            <select onChange={onChangeSortType}>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button text={"새 일기 쓰기"}
                    type={"POSITIVE"}
                    onClick={() => nav("/new")}/>
        </div>
        <div className="list_wrapper">
            {sortedData.map((item) => <DiaryItem key={item.id} {...item}/>)}
        </div>
    </div>;
}

export default DiaryList;