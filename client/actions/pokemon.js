export function searchTermChanged(searchInput) {
  return {
    type: 'SEARCH_INPUT_CHANGED',
    payload: searchInput
  };
}

export function markCaught(name) {
  return {
    type: 'MARK_CAUGHT',
    payload: name
  };
}
