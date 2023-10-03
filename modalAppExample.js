function createModalApp(config) {
  let isCalled = false;

  function run() {
    if (isCalled) return;

    return new Promise((resolve) => renderModal(resolve))
  }

  function renderModal(resolve) {
    isCalled = true;
    // рендерим тут модалку і прокидаєм в неї наш resolve
  }

  return { run };
}