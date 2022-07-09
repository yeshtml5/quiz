https://velog.io/@1000peach/sagatoolkit-redux-saga%EC%99%80-redux-toolkit%EC%9C%BC%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0-k1w4qdlb

https://cocoder16.tistory.com/65

구현시 요청 사항
페이지 클릭 : 현재 보고 있는 페이지 활성화
작성하고 난뒤 -> 다른페이지를 보고 있더라도 1페이지로 + 폼이 초기화
수정하고 난뒤 -> 현재 보고 있는 페이지 유지 + 폼이 초기화
삭제하고 난뒤 -> 1페이지로 돌아오기
진행
개발환경 : node > 14

해당 프로젝트로 이동 후 터미널에서 해당 npm run api 입력하면 API 서버가 동작하고, http://localhost:4000/comments 에서 확인 하실 수 있습니다.

터미널을 하나 더 킨 후 npm start 입력하고 chrome 브라우저에서 http://localhost:3000를 주소창에 입력후 소스를 작성하면서 진행해주세요.

API 요청하기
json server -> https://www.npmjs.com/package/json-server 참고
http://localhost:4000/comments 입력하면 data.json 에 적은 데이터를 확인 할 수 있습니다.
API 를 통해 입력하거나 수정하면 data.json 파일내용도 변경됩니다.
총 댓글수를 불러 오는 API 가 없으므로 /comments 로 받아서 직접 계산합니다.
한페이지에 4개의 게시물이 보이고, 최근 게시물부터 정렬해서 3페이지를 보고 싶은 경우는 아래와 같습니다. GET /comments?\_page=3&\_limit=4&\_order=desc&\_sort=id
method url
GET /comments
GET /comments/{commentId}
POST /comments
PUT /comments/{commentId}
DELETE /comments/{commentId}

#참고영상
https://www.youtube.com/watch?v=xtD4YMKWI7w
https://www.youtube.com/watch?v=9MMSRn5NoFY&t=1422s
