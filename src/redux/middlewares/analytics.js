import { compose } from 'redux';

export default (setup, filter, discover) => (store) => (next) => (action) => {
  if (action.eventTarget && action.eventTarget.addEventListener) {
    compose(
      discover,
      filter,
      setup
    )(action.eventTarget);
  }
};
