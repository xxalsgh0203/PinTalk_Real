export function openNewWindow(url) {
  return window.open(
    `http://localhost:3000/${url}`,
    '_blank',
    `width = ${window.screen.width / 2}, height = ${window.screen.height}`,
  );
}
