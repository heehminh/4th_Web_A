/////////////////////// Element ///////////////////////////////

// 파일 탐색 화면
const explorerView = document.getElementById('explorer-view');

// 파일 탐색 화면의 버튼 Wrapper 4개 (파일 추가,폴더 추가,리프레쉬,탐색기 정리)
const explorerViewFileButtons = document.getElementById('explorer-view--sub-header--buttons');

// // 파일 탐색 화면의 버튼 4개 (파일 추가,폴더 추가,리프레시,탐색기 정리)
const explorerViewFileItems = document.querySelectorAll('.explorer-view--file-item');

// 코드 상단의 파일 목록들
const mainHeaderItems = document.querySelectorAll('.main-header--item');

/////////////////////// ClassName ///////////////////////////////

// 파일 탐색 화면의 파일 강한 활성화(직접 클릭시)
const SELECT_EXPLORER_VIEW_DIRECTLY_CLASSNAME = 'explorer-view--item-select_directly';

// 파일 탐색 화면의 파일 약한 활성화(코드 상단 목록에서 파일 클릭시)
const SELECT_EXPLORER_VIEW_INDIRECT_CLASSNAME = 'explorer-view--item-select_indirect';

// 코드 상단의 파일 활성화
const SELECT_MAIN_HEADER_ITEM_CLASSNAME = 'main-header--item-selected';

/////////////////////// Handler ///////////////////////////////

/**
 * HTML Elements 리스트를 받아서 필터를 적용한 새로운 리스트를 반환하는 함수
 * @param {HTMLElement[]} elements HTML Element 리스트
 * @param {Function} fn 필터를 적용할 함수
 * @returns {HTMLElement[]} 필터를 적용한 새로운 HTML Element 리스트
 */
function filterElements(elements, fn) {
  return Array.from(elements).filter(fn);
}

/**
 * 파일 탐색 화면의 파일을 모두 비활성화하는 함수
 * @returns {void}
 */
function unselectAllExplorerViewFileItem() {
  explorerViewFileItems.forEach((item) => {
    item.classList.remove(SELECT_EXPLORER_VIEW_DIRECTLY_CLASSNAME);
    item.classList.remove(SELECT_EXPLORER_VIEW_INDIRECT_CLASSNAME);
  });
}

/**
 * 파일 탐색 화면의 파일을 활성화시키는 함수
 * @param {HTMLElement} item 파일 Element
 * @param {boolean} isDirectly 직접 클릭했는지 여부
 * @returns {void}
 */
function selectExplorerViewFileItem(item, isDirectly) {
  unselectAllExplorerViewFileItem();
  item.classList.add(isDirectly ? SELECT_EXPLORER_VIEW_DIRECTLY_CLASSNAME : SELECT_EXPLORER_VIEW_INDIRECT_CLASSNAME);
}

/**
 * 코드 에디터 상단의 파일을 모두 비활성화하는 함수
 * @returns {void}
 */
function unselectAllMainHeaderItem() {
  mainHeaderItems.forEach((item) => item.classList.remove(SELECT_MAIN_HEADER_ITEM_CLASSNAME));
}

/**
 * 코드 에디터 상단의 파일을 활성화시키는 함수
 * @param {HTMLElement} item 파일 Element
 * @returns {void}
 */
function selectMainHeaderItem(item) {
  unselectAllMainHeaderItem();
  item.classList.add(SELECT_MAIN_HEADER_ITEM_CLASSNAME);
}

/**
 * 이벤트 핸들러 함수 - 파일 탐색 화면의 파일 클릭 시 실행
 * @param {MouseEvent} event 클릭 이벤트
 * @returns {void}
 */
function handleClickExplorerViewFileItem(event) {
  const item = event.target;

  // 자식 요소를 클릭했을 때를 고려해서 텍스트(파일명) 추출
  let itemText = '';
  if (item.querySelector('div')) {
    itemText = item.querySelector('div').textContent;
  } else {
    itemText = item.textContent;
  }

  // 선택된 파일 탐색 화면의 아이템
  const selectedExplorerViewItem = filterElements(
    explorerViewFileItems,
    (item) => item.querySelector('div').textContent === itemText
  );

  // 선택된 코드 에디터 상단의 아이템
  const selectedMainHeaderItem = filterElements(
    mainHeaderItems,
    (item) => item.querySelector('div').textContent === itemText
  );

  // 활성화 처리
  selectExplorerViewFileItem(selectedExplorerViewItem[0], true);
  selectMainHeaderItem(selectedMainHeaderItem[0]);
}

/**
 * 이벤트 핸들러 함수 - 코드 에디터 상단의 파일 클릭 시 실행
 * @param {MouseEvent} event 클릭 이벤트
 * @returns {void}
 */
function handleClickMainHeaderItem(event) {
  const item = event.target;

  // 자식 요소를 클릭했을 때를 고려해서 텍스트(파일명) 추출
  let itemText;
  if (item.querySelector('div')) {
    itemText = item.querySelector('div').textContent;
  } else {
    itemText = item.textContent;
  }

  // 선택된 파일 탐색 화면의 아이템
  const selectedExplorerViewItem = filterElements(
    explorerViewFileItems,
    (item) => item.querySelector('div').textContent === itemText
  );

  // 선택된 코드 에디터 상단의 아이템
  const selectedMainHeaderItem = filterElements(
    mainHeaderItems,
    (item) => item.querySelector('div').textContent === itemText
  );

  // 활성화 처리
  selectExplorerViewFileItem(selectedExplorerViewItem[0], false);
  selectMainHeaderItem(selectedMainHeaderItem[0]);
}

/**
 * 파일 탐색 화면의 버튼 4개 (파일 추가,폴더 추가,리프레시,탐색기 정리)의 보이기 여부를 결정하는 함수
 * @param {boolean} show 보이기 여부
 * @returns {void}
 */
function toggleExplorerViewFileButtons(show) {
  const hiddenClassName = 'transparent';
  const buttons = explorerViewFileButtons.querySelectorAll('button');
  // 투명도를 0으로 설정하고 각각의 버튼에 disabled 적용
  if (show) {
    explorerViewFileButtons.classList.remove(hiddenClassName);
    buttons.forEach((btn) => (btn.disabled = false));
  } else {
    explorerViewFileButtons.classList.add(hiddenClassName);
    buttons.forEach((btn) => (btn.disabled = true));
  }
}

/////////////////////// EventListener ///////////////////////////////

explorerView.addEventListener('mouseenter', () => toggleExplorerViewFileButtons(true));
explorerView.addEventListener('mouseleave', () => toggleExplorerViewFileButtons(false));

explorerViewFileItems.forEach((item) => item.addEventListener('click', handleClickExplorerViewFileItem));
mainHeaderItems.forEach((item) => item.addEventListener('click', handleClickMainHeaderItem));
