const windows = [];
let listener = null;

const onKeyDown = ({ key }) => {
  if (key === 'Escape') {
    const index = windows.length - 1;
    if(windows[index].condition && !windows[index].condition()){
      return;
    }
    windows[index].cb();
    windows.length = index;
    if (!windows.length) {
      listener = null;
      document.removeEventListener('keydown', onKeyDown);
    }
  }
};

export const setEscapeControl = (closeWindow, condition = null) => {
  windows.push({
    cb: closeWindow,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onKeyDown);
  }
};

export const removeEscapeControl = () => {
  const index = windows.length - 1;
  windows.length = index;
  if (!windows.length) {
    listener = null;
    document.removeEventListener('keydown', onKeyDown);
  }
};
