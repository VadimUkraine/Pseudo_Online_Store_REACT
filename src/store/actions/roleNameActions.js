export default function inputRoleName(name, role) {
  return {
    type: 'INPUT_ROLE_NAME',
    payload: {name: name, role: role}
  };
}