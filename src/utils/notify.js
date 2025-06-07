import { Notify } from 'quasar';

//const notify_transition = { transition: 'opacity 0.15s' };

const opts = {
  copy: {
    position: 'bottom',
    color: 'white',
    textColor: 'grey-8',
    badgeStyle: "opacity: 0"
  },
  pos: {
    position: 'top',
    timeout: 900,
    badgeColor: 'teal-4',
    textColor: 'teal-4',
    type: 'positive',
    color: 'white',
    badgeStyle: 'display:none',
  },
  neg: {
    timeout: 500,
    position: 'top',
    icon: 'warning',
    color: 'white',
    textColor: 'negative',
  },
  action: {
    position: 'top',
    icon: 'warning',
    color: 'white',
    textColor: 'primary',
    timeout: 0,
  },
  info: {
    position: 'top',
    color: 'white',
    textColor: 'grey-8',
  },
  alert: {
    position: 'top',
    icon: 'negative',
    timeout: 900,
    color: 'white',
    textColor: 'negative',
  }
}

const pos = (msg, opt = {}) => Notify.create({ ...opts.pos, ...opt, message: msg })
const neg = (msg, opt = {}) => Notify.create({ ...opts.neg, ...opt, message: msg })
const copy = (msg, opt = {}) => Notify.create({ ...opts.copy, ...opt, message: msg })


export { pos, neg, copy }
