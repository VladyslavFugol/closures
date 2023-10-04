import Modal from 'react-modal';

function createModalApp(config) {
  let isCalled = false;

  function run() {
    console.log('run')
    if (isCalled) return;

    return new Promise((resolve) => renderModal(resolve))
  }

  function renderModal(resolve) {
    isCalled = true;
    // рендерим тут модалку і прокидаєм в неї наш resolve
  }

  return { run };
}

const $parentNode = document.getElementById('root');

const $divTEt = document.createElement('div', 'test')

$parentNode.appendChild(Modal)