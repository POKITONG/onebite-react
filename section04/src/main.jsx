import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    // reactDom.createRoot : 파라미터로 전달받은 HTML 요소를 리액트의 뿌리로 만들어 주는 역할
    // document : 현재 컴포넌트가 실행되고 있는 전체 HTML 문서
    // 현재 HTML 의 root 라는 id를 가진 태그를 파라미터로 받아서 리액트의 root 로 변환한 후 해당 루트 아래에
    // App 이라는 컴포넌트를 렌더링

  <StrictMode>
    <App />
  </StrictMode>,
)
