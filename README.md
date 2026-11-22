# Kanban Board

React를 활용하여 제작하는 개인용 칸반 보드 프로젝트입니다.

작업(Task)을 컬럼별로 관리하고, 각 작업의 상태와 진행 상황을 확인할 수 있는 작업 관리 애플리케이션입니다.

React의 기본 개념을 실제 프로젝트에 적용하며 컴포넌트 분리, Props 전달, State 관리, 데이터 처리 및 LocalStorage 활용 방법을 학습하는 것을 목표로 합니다.

## Tech Stack

- React
- JavaScript (JSX)
- CSS
- LocalStorage

## Features

기능은 실제 구현한 순서에 따라 정리했습니다.

### 1. Board Layout
- [x] 기본 칸반 보드 구성
- [x] Todo, In Progress, Done 컬럼 표시
- [x] 컴포넌트 분리 및 구성

### 2. Column Management
- [x] 컬럼 추가
- [x] 컬럼 이름 변경
- [x] 컬럼 삭제

### 3. Task Management
- [x] Task 추가
- [x] Task 제목 수정
- [x] Task 삭제
- [x] 컬럼별 Task 개수 표시

### 4. Data Persistence
- [x] LocalStorage를 이용한 데이터 저장
- [x] 페이지 새로고침 후 데이터 불러오기

### 5. Task Details
- [ ] Task 상세 정보 Modal
- [ ] Task 설명 (Description)
- [ ] 우선순위 설정 (High / Medium / Low)
- [ ] 마감일 설정 (Due Date)
- [ ] 진행도 설정 (Progress: 0~100%)

### 6. Planned Features
- [ ] Task 상세 정보 수정 및 저장
- [ ] Drag & Drop을 통한 Task 이동
- [ ] 검색 및 필터링
- [ ] 반응형 UI 개선

## Project Structure

```text
src/
├── components/
│   ├── KanbanBoard.jsx
│   ├── BoardColumn.jsx
│   ├── TaskCard.jsx
│   └── TaskDetail.jsx
├── App.js
├── App.css
└── index.js
```

## Getting Started

### Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

### Run

```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

### Build

```bash
npm run build
```

## Data Structure

Task 데이터는 다음과 같은 구조로 관리합니다.

```javascript
{
  id: 1,
  title: "React 공부하기",
  description: "React의 State와 Effect 학습하기",
  priority: "high",
  dueDate: "2026-11-30",
  progress: 50
}
```

컬럼은 Task 배열을 포함하는 객체로 구성합니다.

전체 컬럼 데이터는 `KanbanBoard` 컴포넌트에서 React State로 관리하며, 하위 컴포넌트에는 Props를 통해 데이터를 전달합니다.

LocalStorage를 활용하여 브라우저에 데이터를 저장하고 불러옵니다.

## Reference Projects

React 컴포넌트 구조, 상태 관리 및 기능 구현 방식을 학습하기 위한 참고 오픈소스입니다.

### 1. react-dnd-kit-tailwind-shadcn-ui

https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui

**주요 기술**
- React
- TypeScript
- Vite
- @dnd-kit
- Tailwind CSS
- shadcn/ui

**참고할 내용**
- Drag & Drop을 이용한 칸반 보드 구현
- 컬럼 및 카드 이동
- 드래그 앤 드롭 이벤트 처리
- 접근성을 고려한 Drag & Drop 구현

현재 프로젝트와 기술 스택은 다르지만, 향후 Drag & Drop 기능을 구현할 때 주요 참고 자료로 활용합니다.

### 2. react-kanban-board

https://github.com/leriuz/react-kanban-board

**참고할 내용**
- React 컴포넌트 구조
- Task CRUD
- LocalStorage 데이터 관리
- HTML5 Drag & Drop
- Task 상세 정보 및 우선순위

현재 프로젝트의 기본적인 Task 관리 기능과 데이터 처리 구조를 비교하는 용도로 활용합니다.

참고 프로젝트의 코드를 그대로 사용하는 대신, 현재 프로젝트의 JavaScript + JSX 구조에 맞춰 필요한 기능과 구현 방식을 학습하고 적용합니다.

## Project Goal

이 프로젝트는 단순한 칸반 보드 제작을 넘어 React의 핵심 개념을 실제로 적용하고 이해하는 것을 목표로 합니다.

- 컴포넌트 분리 및 재사용
- Props를 통한 컴포넌트 간 데이터 전달
- useState를 이용한 상태 관리
- useEffect를 이용한 데이터 저장 및 불러오기
- map(), filter() 등을 활용한 배열 데이터 처리
- LocalStorage를 활용한 데이터 유지
- 컴포넌트 간 이벤트 및 함수 전달
- Drag & Drop을 통한 사용자 인터랙션 구현