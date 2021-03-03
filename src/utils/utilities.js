export const iosSafeZone = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? '30px' : '0px';
