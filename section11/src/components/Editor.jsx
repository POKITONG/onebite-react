import "./Editor.css";
import {useContext, useRef, useState} from "react";
import {TodoDispatchContext} from "../App.jsx";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onKeyDown = (e) => {
        // 사용자가 키보드를 누를 때 발생하는 이벤트
        // 어떤 키를 눌렀는지는 이벤트 객체에 keyCode 에 저장된다.
        console.log(e.code);
        if (e.code === "Enter") {
            onSubmit();
        }
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    return <div className="Editor">
        <input value={content}
               ref={contentRef}
               onKeyDown={onKeyDown}
               onChange={onChangeContent}
               placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
    </div>;
}

export default Editor;