import { matchPath } from 'react-router';

export default function(location, url = null) {
  if (location && url !== null) {
    const match = matchPath(location.pathname, { path: url });

    return match.params;
  }

  if (location && url === null) {
    const route = location.pathname.split('/');

    return route[1];
  }

  return null;
}
