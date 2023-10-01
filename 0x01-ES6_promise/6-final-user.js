import signUpUser from '4-user-promise';
import uploadPhoto from '5-photo-reject';

export default handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => (
      response.map((obj) => ({
        status: obj.status,
        value: obj.value === 'fulfilled' ? obj.value : obj.reason,
      }))
    )
}
