export const base = '/folklore-ui';
export const origin = 'https://parthawe.github.io';
export function withBase(path='/') {
  if(!path.startsWith('/')||path===base||path.startsWith(`${base}/`))return path;
  return `${base}${path}`;
}
