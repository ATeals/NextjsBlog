# Ateals Next.js Blog

Next.js의 app dir, vercel을 이용한 개인 웹 블로그

# 사용 기술

-   Next.js (v_13 App dir)
-   Typescript
-   Tailwind
-   contentlayer


# 폴더 구조 (아래와 같이 변경 예정)

## posts

    블로그 collection에 들어갈 mdx 문서를 모아 놓은 폴더

## public

    Next.js에서 제공하는 배포시 필요한 assets을 담아 놓은 폴더

## src

    소스 폴더

### app

    Next.js에서 제공하는 route 폴더 이 폴더에 작성된 폴더별로 페이지 라우팅
    페이지에 단독적으로 들어가는 components와 메인 페이지 파일인 page.tsx,
    각 페이지의 메타데이터, layout 파일, 404페이지 등이 포함됨

### components

    각 페이지에 대한 컴포넌트를 제외하고 나머지 공통 컴포넌트 들을 모아 놓은 폴더

### hook(?)

    커스텀 훅이 생긴다면 커스텀 훅을 보관하는 폴더

### styles

    글로벌 스타일이나 css 파일을 모아 놓은 폴더

### utils

    나머지 필요한 함수들 과 api관련 모듈을 모아 놓은 폴더
