export function openNewWindow(url) {
  return window.open(`http://localhost:3000/${url}`, '_blank', 'fullscreen');
}
