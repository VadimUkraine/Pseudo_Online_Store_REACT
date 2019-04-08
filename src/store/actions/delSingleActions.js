export default function deleteGood(id) {
  return {
    type: 'DELETE_GOOD',
    payload: id
  };
}
