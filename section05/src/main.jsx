import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    // <StrictMode> : 개발 모드로 리액트 앱을 실행하고 있을 때 코드에 문제가 있는지 내부적으로
    // 검사해서 경고해주는 도구
    <App />
)
