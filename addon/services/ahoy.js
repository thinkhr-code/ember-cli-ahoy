import Service from '@ember/service';
import Ahoy from 'ahoy';

export default Service.extend({
  trackView() {
    Ahoy.trackView(...arguments);
  },

  track() {
    Ahoy.track(...arguments);
  }
});
