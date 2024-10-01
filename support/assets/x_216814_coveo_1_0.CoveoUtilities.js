function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var coveoApp = coveoApp || {}; // eslint-disable-line no-use-before-define, no-var
// this is needed because we declare and define the global variable here, and it could be declared+defined by any ui_script in any order

coveoApp.utilities = function () {
  function _replaceScriptTagsRecursive(parent) {
    for (var index = 0; index < parent.childNodes.length; index++) {
      var node = parent.childNodes[index];
      if (node.nodeName.toUpperCase() === 'SCRIPT') {
        var newElem = document.createElement('script');
        for (var i = 0; i < node.attributes.length; i++) {
          newElem.setAttribute(node.attributes[i].name, node.attributes[i].value);
        }
        newElem.innerHTML = node.innerHTML;
        parent.replaceChild(newElem, node);
      } else {
        _replaceScriptTagsRecursive(node);
      }
    }
  }

  /**
   * @description Display the warning box and add a warning to it.
   * @param  {Object} parentHtmlElement
   * @param  {String} warning
   */
  var appendWarning = function appendWarning(parentHtmlElement, warning) {
    parentHtmlElement.querySelector('#coveo-warning-box').style.display = 'block';
    var warningDom = document.createElement('div');
    warningDom.innerHTML = warning;
    parentHtmlElement.querySelector('#coveo-warning-box > #warnings').appendChild(warningDom);
  };
  return {
    type: 'utilities',
    appendWarning: appendWarning,
    setHtmlOnElement: function setHtmlOnElement(templateElement, htmlTemplate) {
      var temp = document.createElement('div');
      temp.innerHTML = htmlTemplate;
      _replaceScriptTagsRecursive(temp);
      while (templateElement.hasChildNodes()) {
        templateElement.removeChild(templateElement.firstChild);
      }
      templateElement.appendChild(temp);
    },
    loadCultureFile: function loadCultureFile(root, settings, templateElement, initCoveoCallback) {
      if (settings.culture && settings.culture !== 'en') {
        var jsuiUrl = document.querySelector('.coveo-script').src;
        var newurl = jsuiUrl.replace(/(.*?\/js\/).+/i, "$1cultures/".concat(settings.culture, ".js"));
        console.log('Adding Coveo JSUI culture file', newurl);
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = newurl;
        newScript.onload = function () {
          initCoveoCallback(root, settings, templateElement);
        };
        newScript.onerror = function () {
          console.error('Unable to load Coveo JSUI Culture file.', newurl);
          initCoveoCallback(root, settings, templateElement);
        };
        templateElement.appendChild(newScript);
      } else {
        initCoveoCallback(root, settings, templateElement);
      }
    },
    getCurrentPageContext: function getCurrentPageContext(widgetScope) {
      return {
        currentPageSysId: widgetScope.page.sys_id,
        currentPageName: widgetScope.page.sys_name,
        currentPageLocation: top.location.href,
        currentRecordSysId: coveoApp.utilities.getUrlParameter('sys_id')
      };
    },
    mergeUserContext: function mergeUserContext(serverUserContext, scopeContext) {
      var updatedServerUserContext = _objectSpread({}, serverUserContext);
      updatedServerUserContext.user_department = scopeContext.department_dv || '';
      updatedServerUserContext.user_departmentID = scopeContext.department || '';
      updatedServerUserContext.user_title = scopeContext.title || '';
      updatedServerUserContext.user_language = scopeContext.preferred_language || '';
      updatedServerUserContext.user_isVip = !!scopeContext.vip || false;
      updatedServerUserContext.user_domain = scopeContext.sys_domain || 'global';
      updatedServerUserContext.user_username = serverUserContext.user_username || scopeContext.user_name || '';
      updatedServerUserContext.user_email = serverUserContext.user_email || scopeContext.email || '';
      updatedServerUserContext.user_ID = serverUserContext.user_ID || scopeContext.sys_id || '';
      updatedServerUserContext.user_name = serverUserContext.user_name || scopeContext.name || '';
      updatedServerUserContext.user_groups = serverUserContext.user_groups || [];
      updatedServerUserContext.user_roles = serverUserContext.user_roles || [];
      updatedServerUserContext.user_companyID = serverUserContext.user_companyID || '';
      return updatedServerUserContext;
    },
    getUrlParameter: function getUrlParameter(name) {
      var match = new RegExp("[\\?&]".concat(name, "=([^&#]*)"), 'i').exec(top.location.search);
      return match === null ? '' : decodeURIComponent(match[1].replace(/\+/g, ' '));
    },
    setDisplayIfNotNull: function setDisplayIfNotNull(htmlElement, display) {
      if (htmlElement) {
        htmlElement.style.display = display;
      }
    },
    mergeObjects: function mergeObjects(first, second) {
      if (!first) {
        return second;
      }
      if (!second) {
        return first;
      }
      var result = {};
      Object.keys(first).concat(Object.keys(second)).forEach(function (k) {
        if (result[k] === undefined) {
          if (first[k] === undefined) {
            result[k] = second[k];
          } else if (second[k] === undefined) {
            result[k] = first[k];
          } else if (_typeof(first[k]) === 'object' && _typeof(second[k]) === 'object' && !Array.isArray(first[k]) && !Array.isArray(second[k])) {
            // Both defined.
            result[k] = coveoApp.utilities.mergeObjects(first[k], second[k]);
          } else {
            // Source 2 always override if we cannot merge both values.
            result[k] = second[k];
          }
        }
      });
      return result;
    },
    /**
     * @description add a warning box if organizationId or searchToken are missing
     * @param  {Object} coveoData
     * @param  {Object} context
     */
    validateOrgAndSearchToken: function validateOrgAndSearchToken(coveoData, context) {
      // If we do not have a token available, display a warning to Coveo Admins.
      if (!coveoData.searchToken && coveoData.organizationId && coveoData.isCoveoAdmin) {
        appendWarning(context, "Unable to authenticate the current user for the configured Organization ".concat(coveoData.organizationId, ", check the System Logs for more details."));
      }
      if (!coveoData.organizationId && coveoData.isCoveoAdmin) {
        appendWarning(context, 'It appears that no Coveo Cloud organization has been linked to your ServiceNow instance yet. Please visit the&nbsp;<a href="x_216814_coveo_1_0_coveo_configure.do">Configuration Page</a>.');
      }
    },
    /**
     * @description Add the top topQueriesClick action to ActionCause List
     */
    registerTopQueriesCustomActionCauses: function registerTopQueriesCustomActionCauses() {
      var topQueriesClickActionCause = {
        name: 'topQueriesClick',
        type: 'interface'
      };
      Coveo.addActionCauseToList(topQueriesClickActionCause);
    }
  };
}();