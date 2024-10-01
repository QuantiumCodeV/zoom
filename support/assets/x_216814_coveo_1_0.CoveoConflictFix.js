// Because Coveo Underscore overrides Lodash which is used by some parts of ServiceNow, we check if the current
// underscore variable has a function specific to Lodash (uniqBy) and if not, it means _ is currently
// set to Underscore, so calling noConflict() will revert back to Lodash (https://underscorejs.org/#noConflict)
// We check that _.noConflict is defined, because starting at v1.10.0 of Underscore.js, noConflict is only generated after
// a call to rollup.config.js, so it might be undefined at first (https://github.com/jashkenas/underscore/pull/2826)
if (Coveo && Coveo._ && _ && Coveo._ === _ && typeof _.uniqBy === 'undefined' && typeof _.noConflict === 'function') {
  _.noConflict();
}

// When using IE11, the CustomEvent global variable is created by ServiceNow, but overriden by the JSUI
// and then it is missing all the required functions from the CustomEventManager.
if (!!CustomEvent && typeof CustomEvent === 'function' && !CustomEvent.fireAll) {
  console.warn('CustomEvent is a function and is missing ServiceNow CustomEventManager functions. Adding them back.');
  Object.keys(NOW.CustomEvent).forEach(function (key) {
    CustomEvent[key] = NOW.CustomEvent[key];
  });
}