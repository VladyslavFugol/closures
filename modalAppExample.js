import React from 'react';
import { createRoot } from 'react-dom/client';

function getAppNode() {
  return document.getElementById('modal');
}

let appReadyResolve = null;
let isAppReady = new Promise((resolve) => appReadyResolve = resolve);
let modalResultResolve = null;
let onCloseModalResult = new Promise((resolve) => modalResultResolve = resolve);

function createModalApp(config) {
  const root = createRoot(getAppNode());

  const privateModalAPI = {
    run: () => console.log('App is not ready'),
  };

  function onSetModalMethods(callback) {
    privateModalAPI.run = callback;
    appReadyResolve();
  }

  async function run() {
    await isAppReady;
    privateModalAPI.run();

    return await onCloseModalResult;
  }

  root.render(<Main onCloseModal={modalResultResolve} onSetModalMethod={onSetModalMethod}/>)

  return { run };
}

export default createModalApp;