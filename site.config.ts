import { siteConfig } from './lib/site-config'

// 먼저 블로그화 하려는 페이지를 웹에 게시할 것! (노션은 기본적으로 비공개이므로 공개설정을 하는 것!)

export default siteConfig({
  // 노션 URL '/'뒤의 문자열로 설정
  rootNotionPageId: '71dc829fec4242a9bc9beed9a48a227e',

  rootNotionSpaceId: null,

  // 기본 사이트 정보 (필수)
  name: '상준의 노션 블로그',
  domain: 'sangjunitblog',
  author: 'Sangjun An',

  // open graph metadata (선택)
  // SNS 공유 시 보이는 미리보기 관련 데이터
  description: '개발관련 공부한 자료 및 글을 올립니다.',

  // 소셜 유저네임 (선택사항)
  github: 'yonggari0821',
  // youtube: '#', // 선택사항 유튜브 채널 이름 또는 `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // 사이트 전역의 기본 노션 아이콘 및 커버 이미지 (선택사항)
  // 페이지별 값이 있다면 사이트 전역의 기본값을 덮어씀.
  // 커버 이미지의 경우 노션 커버 이미의 세로 폭이 작기 때문에 짤려보이며 이를 위한 position 설정이 중요!
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5, // 0.0 커버 이미지의 상단 ~ 1.0 커버 이미지의 하단을 표시

  // LQIP 미리보기 이미지 지원 활성화 여부 (선택사항)
  // LQIP - 고해상도 이미지 렌더링 시에 미리보기로 블러 처리된 저해상도 이미지를 보여주는 기술
  // 사용자 경험을 위해서 왠만하면 true로 설정하는 것이 좋음
  isPreviewImageSupportEnabled: true,

  // 캐시된 미리보기 이미지를 생성하기 위해 redis 사용 활성화 여부 (선택사항)
  // redis를 통한 캐시를 활성화하려면 `REDIS_HOST` 및 `REDIS_PASSWORD` 환경 변수를 설정해야 함.
  isRedisEnabled: false,

  // 노션 페이지 ID를 URL 경로에 매핑해서 사용자 정의 URL을 만들 수 있게 해줌 (선택사항)
  // 예:
  // https://www.notion.so/1234567890abcdef1234567890abcdef
  // 이런 URL을
  // https://yourdomain.com/abc
  // 로 바꾸려면 아래 주석과 같이 설정 (따로 안하려면 null)
  // pageUrlOverrides: {
  //   '/abc': '1234567890abcdef1234567890abcdef',
  // }
  pageUrlOverrides: null,

  // 기본 노션 탐색 스타일을 사용할지 중요한 페이지로의 링크가 포함된 커스텀 탐색 스타일을 사용할지 여부.
  // `navigationLinks`를 사용하려면 `navigationStyle`을 `custom`으로 설정할 것!
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
