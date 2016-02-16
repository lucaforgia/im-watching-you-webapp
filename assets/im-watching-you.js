"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('im-watching-you/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'im-watching-you/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _imWatchingYouConfigEnvironment) {

    var App = undefined;

    _ember['default'].MODEL_FACTORY_INJECTIONS = true;

    App = _ember['default'].Application.extend({
        // LOG_TRANSITIONS: true,
        // LOG_TRANSITIONS_INTERNAL: true,
        // LOG_VIEW_LOOKUPS: true,
        // LOG_ACTIVE_GENERATION: true,
        rootElement: '#im-watching-you',
        modulePrefix: _imWatchingYouConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _imWatchingYouConfigEnvironment['default'].podModulePrefix,
        Resolver: _emberResolver['default']
    });

    (0, _emberLoadInitializers['default'])(App, _imWatchingYouConfigEnvironment['default'].modulePrefix);

    exports['default'] = App;
});
define('im-watching-you/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].LSAdapter.extend({
		namespace: 'im-watching-you'
	});
});
define('im-watching-you/application/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].LSSerializer.extend({});
});
define('im-watching-you/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'im-watching-you/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _imWatchingYouConfigEnvironment) {

  var name = _imWatchingYouConfigEnvironment['default'].APP.name;
  var version = _imWatchingYouConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('im-watching-you/components/input-text/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		init: function init() {
			_ember['default'].run.scheduleOnce('afterRender', this, function () {
				this.$('input.new-task').focus();
			});
			return this._super.apply(this, arguments);
		},
		keyDown: function keyDown(event) {
			this.sendAction('action', event.keyCode);
		}
	});
});
define("im-watching-you/components/input-text/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/input-text/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [1, 14], [1, 25]]]]], [], []], "class", "new-task"], ["loc", [null, [1, 0], [1, 44]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('im-watching-you/components/list-btn/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		tagName: 'span',
		classNames: ['list-btn'],
		click: function click() {
			this.sendAction('action');
		}
	});
});
define("im-watching-you/components/list-btn/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 86,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/list-btn/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el1 = dom.createElement("svg");
        dom.setAttribute(el1, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        dom.setAttribute(el1, "xmlns:cc", "http://creativecommons.org/ns#");
        dom.setAttribute(el1, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        dom.setAttribute(el1, "xmlns:svg", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
        dom.setAttribute(el1, "xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
        dom.setAttribute(el1, "width", "36");
        dom.setAttribute(el1, "height", "31");
        dom.setAttribute(el1, "viewBox", "0 0 36 31.000001");
        dom.setAttribute(el1, "id", "svg8776");
        dom.setAttribute(el1, "version", "1.1");
        dom.setAttribute(el1, "inkscape:version", "0.91 r13725");
        dom.setAttribute(el1, "sodipodi:docname", "list-btn.svg");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("defs");
        dom.setAttribute(el2, "id", "defs8778");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("sodipodi:namedview");
        dom.setAttribute(el2, "id", "base");
        dom.setAttribute(el2, "pagecolor", "#ffffff");
        dom.setAttribute(el2, "bordercolor", "#666666");
        dom.setAttribute(el2, "borderopacity", "1.0");
        dom.setAttribute(el2, "inkscape:pageopacity", "0.0");
        dom.setAttribute(el2, "inkscape:pageshadow", "2");
        dom.setAttribute(el2, "inkscape:zoom", "7.9195959");
        dom.setAttribute(el2, "inkscape:cx", "20.253403");
        dom.setAttribute(el2, "inkscape:cy", "18.566655");
        dom.setAttribute(el2, "inkscape:document-units", "px");
        dom.setAttribute(el2, "inkscape:current-layer", "layer1");
        dom.setAttribute(el2, "showgrid", "false");
        dom.setAttribute(el2, "units", "px");
        dom.setAttribute(el2, "inkscape:window-width", "1468");
        dom.setAttribute(el2, "inkscape:window-height", "841");
        dom.setAttribute(el2, "inkscape:window-x", "-8");
        dom.setAttribute(el2, "inkscape:window-y", "-8");
        dom.setAttribute(el2, "inkscape:window-maximized", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("metadata");
        dom.setAttribute(el2, "id", "metadata8781");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("rdf:RDF");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("cc:Work");
        dom.setAttribute(el4, "rdf:about", "");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:format");
        var el6 = dom.createTextNode("image/svg+xml");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:type");
        dom.setAttribute(el5, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:title");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("g");
        dom.setAttribute(el2, "inkscape:label", "Layer 1");
        dom.setAttribute(el2, "inkscape:groupmode", "layer");
        dom.setAttribute(el2, "id", "layer1");
        dom.setAttribute(el2, "transform", "translate(0,-1021.3622)");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("g");
        dom.setAttribute(el3, "style", "fill:#00617c;fill-opacity:1");
        dom.setAttribute(el3, "id", "g6638");
        dom.setAttribute(el3, "transform", "matrix(0.98322806,0,0,0.99440264,-272.44656,669.84087)");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("rect");
        dom.setAttribute(el4, "ry", "1.8790348");
        dom.setAttribute(el4, "y", "353.5");
        dom.setAttribute(el4, "x", "277.09396");
        dom.setAttribute(el4, "height", "7.1744967");
        dom.setAttribute(el4, "width", "32.114094");
        dom.setAttribute(el4, "id", "rect6640");
        dom.setAttribute(el4, "style", "fill-opacity:1;stroke:none;stroke-width:5;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("rect");
        dom.setAttribute(el4, "style", "fill-opacity:1;stroke:none;stroke-width:5;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.setAttribute(el4, "id", "rect6642");
        dom.setAttribute(el4, "width", "32.114094");
        dom.setAttribute(el4, "height", "7.1744967");
        dom.setAttribute(el4, "x", "281.59396");
        dom.setAttribute(el4, "y", "366");
        dom.setAttribute(el4, "ry", "1.8790348");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("rect");
        dom.setAttribute(el4, "ry", "1.8790348");
        dom.setAttribute(el4, "y", "377.5");
        dom.setAttribute(el4, "x", "281.59396");
        dom.setAttribute(el4, "height", "7.1744967");
        dom.setAttribute(el4, "width", "32.114094");
        dom.setAttribute(el4, "id", "rect6644");
        dom.setAttribute(el4, "style", "fill-opacity:1;stroke:none;stroke-width:5;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [85, 0], [85, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('im-watching-you/components/main-btn/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNameBindings: ['main-btn'],
		'main-btn': _ember['default'].computed('small', {
			get: function get() {
				if (this.get('small')) {
					return 'main-btn small';
				}
				return 'main-btn';
			}
		}),

		click: function click() {
			this.sendAction('action');
		}
	});
});
define("im-watching-you/components/main-btn/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 65,
              "column": 1
            }
          },
          "moduleName": "im-watching-you/components/main-btn/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el1 = dom.createElement("svg");
          dom.setAttribute(el1, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
          dom.setAttribute(el1, "xmlns:cc", "http://creativecommons.org/ns#");
          dom.setAttribute(el1, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
          dom.setAttribute(el1, "xmlns:svg", "http://www.w3.org/2000/svg");
          dom.setAttribute(el1, "xmlns", "http://www.w3.org/2000/svg");
          dom.setAttribute(el1, "xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
          dom.setAttribute(el1, "xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
          dom.setAttribute(el1, "width", "175");
          dom.setAttribute(el1, "height", "55");
          dom.setAttribute(el1, "viewBox", "0 0 175 55.000001");
          dom.setAttribute(el1, "id", "svg7662");
          dom.setAttribute(el1, "version", "1.1");
          dom.setAttribute(el1, "inkscape:version", "0.91 r13725");
          dom.setAttribute(el1, "sodipodi:docname", "button-small.svg");
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("defs");
          dom.setAttribute(el2, "id", "defs7664");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("sodipodi:namedview");
          dom.setAttribute(el2, "id", "base");
          dom.setAttribute(el2, "pagecolor", "#ffffff");
          dom.setAttribute(el2, "bordercolor", "#666666");
          dom.setAttribute(el2, "borderopacity", "1.0");
          dom.setAttribute(el2, "inkscape:pageopacity", "0.0");
          dom.setAttribute(el2, "inkscape:pageshadow", "2");
          dom.setAttribute(el2, "inkscape:zoom", "1.4");
          dom.setAttribute(el2, "inkscape:cx", "61.957946");
          dom.setAttribute(el2, "inkscape:cy", "90.124665");
          dom.setAttribute(el2, "inkscape:document-units", "px");
          dom.setAttribute(el2, "inkscape:current-layer", "layer1");
          dom.setAttribute(el2, "showgrid", "false");
          dom.setAttribute(el2, "units", "px");
          dom.setAttribute(el2, "inkscape:window-width", "1468");
          dom.setAttribute(el2, "inkscape:window-height", "841");
          dom.setAttribute(el2, "inkscape:window-x", "-8");
          dom.setAttribute(el2, "inkscape:window-y", "-8");
          dom.setAttribute(el2, "inkscape:window-maximized", "1");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("metadata");
          dom.setAttribute(el2, "id", "metadata7667");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("rdf:RDF");
          var el4 = dom.createTextNode("\n	      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("cc:Work");
          dom.setAttribute(el4, "rdf:about", "");
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:format");
          var el6 = dom.createTextNode("image/svg+xml");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:type");
          dom.setAttribute(el5, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:title");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n	    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2, "inkscape:label", "Layer 1");
          dom.setAttribute(el2, "inkscape:groupmode", "layer");
          dom.setAttribute(el2, "id", "layer1");
          dom.setAttribute(el2, "transform", "translate(0,-997.36216)");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("path");
          dom.setAttribute(el3, "inkscape:export-ydpi", "86.990471");
          dom.setAttribute(el3, "inkscape:export-xdpi", "86.990471");
          dom.setAttribute(el3, "style", "fill:#1a1a1a;fill-opacity:1;stroke-width:1.95499396;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
          dom.setAttribute(el3, "d", "m 174.99999,1051.3847 -87.49994,0 M 0,998.33963 l 87.50005,0");
          dom.setAttribute(el3, "id", "path6807");
          dom.setAttribute(el3, "inkscape:connector-curvature", "0");
          dom.setAttribute(el3, "sodipodi:nodetypes", "cccc");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 65,
              "column": 1
            },
            "end": {
              "line": 132,
              "column": 0
            }
          },
          "moduleName": "im-watching-you/components/main-btn/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el1 = dom.createElement("svg");
          dom.setAttribute(el1, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
          dom.setAttribute(el1, "xmlns:cc", "http://creativecommons.org/ns#");
          dom.setAttribute(el1, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
          dom.setAttribute(el1, "xmlns:svg", "http://www.w3.org/2000/svg");
          dom.setAttribute(el1, "xmlns", "http://www.w3.org/2000/svg");
          dom.setAttribute(el1, "xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
          dom.setAttribute(el1, "xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
          dom.setAttribute(el1, "width", "340");
          dom.setAttribute(el1, "height", "67");
          dom.setAttribute(el1, "viewBox", "0 0 340 67.000001");
          dom.setAttribute(el1, "id", "svg6524");
          dom.setAttribute(el1, "version", "1.1");
          dom.setAttribute(el1, "inkscape:version", "0.91 r13725");
          dom.setAttribute(el1, "sodipodi:docname", "button.svg");
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("defs");
          dom.setAttribute(el2, "id", "defs6526");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("sodipodi:namedview");
          dom.setAttribute(el2, "id", "base");
          dom.setAttribute(el2, "pagecolor", "#ffffff");
          dom.setAttribute(el2, "bordercolor", "#666666");
          dom.setAttribute(el2, "borderopacity", "1.0");
          dom.setAttribute(el2, "inkscape:pageopacity", "0.0");
          dom.setAttribute(el2, "inkscape:pageshadow", "2");
          dom.setAttribute(el2, "inkscape:zoom", "1.4");
          dom.setAttribute(el2, "inkscape:cx", "85.408627");
          dom.setAttribute(el2, "inkscape:cy", "95.679448");
          dom.setAttribute(el2, "inkscape:document-units", "px");
          dom.setAttribute(el2, "inkscape:current-layer", "layer1");
          dom.setAttribute(el2, "showgrid", "false");
          dom.setAttribute(el2, "units", "px");
          dom.setAttribute(el2, "inkscape:snap-nodes", "false");
          dom.setAttribute(el2, "inkscape:snap-others", "false");
          dom.setAttribute(el2, "inkscape:snap-bbox", "false");
          dom.setAttribute(el2, "inkscape:window-width", "1468");
          dom.setAttribute(el2, "inkscape:window-height", "841");
          dom.setAttribute(el2, "inkscape:window-x", "-8");
          dom.setAttribute(el2, "inkscape:window-y", "-8");
          dom.setAttribute(el2, "inkscape:window-maximized", "1");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("metadata");
          dom.setAttribute(el2, "id", "metadata6529");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("rdf:RDF");
          var el4 = dom.createTextNode("\n	      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("cc:Work");
          dom.setAttribute(el4, "rdf:about", "");
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:format");
          var el6 = dom.createTextNode("image/svg+xml");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:type");
          dom.setAttribute(el5, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("dc:title");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n	      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n	    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          dom.setAttribute(el2, "inkscape:label", "Layer 1");
          dom.setAttribute(el2, "inkscape:groupmode", "layer");
          dom.setAttribute(el2, "id", "layer1");
          dom.setAttribute(el2, "transform", "translate(0,-985.36216)");
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("path");
          dom.setAttribute(el3, "inkscape:export-ydpi", "86.990471");
          dom.setAttribute(el3, "inkscape:export-xdpi", "86.990471");
          dom.setAttribute(el3, "style", "fill:#1a1a1a;fill-opacity:1;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
          dom.setAttribute(el3, "d", "m 340.00001,1050.8655 -170.00001,0 M 0,986.85885 l 170,0");
          dom.setAttribute(el3, "id", "path6513");
          dom.setAttribute(el3, "inkscape:connector-curvature", "0");
          dom.setAttribute(el3, "sodipodi:nodetypes", "cccc");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n	    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 136,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/main-btn/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "text");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "small", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, 1, ["loc", [null, [1, 0], [132, 7]]]], ["content", "yield", ["loc", [null, [134, 1], [134, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('im-watching-you/components/tasks/show/chrono-btn/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNames: ['chrono-btn'],
		click: function click() {
			return this.sendAction('chronoClick');
		}
	});
});
define("im-watching-you/components/tasks/show/chrono-btn/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 75,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/tasks/show/chrono-btn/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el1 = dom.createElement("svg");
        dom.setAttribute(el1, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        dom.setAttribute(el1, "xmlns:cc", "http://creativecommons.org/ns#");
        dom.setAttribute(el1, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        dom.setAttribute(el1, "xmlns:svg", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
        dom.setAttribute(el1, "xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
        dom.setAttribute(el1, "width", "300");
        dom.setAttribute(el1, "height", "115");
        dom.setAttribute(el1, "viewBox", "0 0 300 115");
        dom.setAttribute(el1, "id", "start-btn");
        dom.setAttribute(el1, "version", "1.1");
        dom.setAttribute(el1, "inkscape:version", "0.91 r13725");
        dom.setAttribute(el1, "sodipodi:docname", "logo-btn.svg");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("defs");
        dom.setAttribute(el2, "id", "defs5241");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("sodipodi:namedview");
        dom.setAttribute(el2, "id", "base");
        dom.setAttribute(el2, "pagecolor", "#ffffff");
        dom.setAttribute(el2, "bordercolor", "#666666");
        dom.setAttribute(el2, "borderopacity", "1.0");
        dom.setAttribute(el2, "inkscape:pageopacity", "0.0");
        dom.setAttribute(el2, "inkscape:pageshadow", "2");
        dom.setAttribute(el2, "inkscape:zoom", "1.4");
        dom.setAttribute(el2, "inkscape:cx", "50.926569");
        dom.setAttribute(el2, "inkscape:cy", "62.47283");
        dom.setAttribute(el2, "inkscape:document-units", "px");
        dom.setAttribute(el2, "inkscape:current-layer", "layer1");
        dom.setAttribute(el2, "showgrid", "false");
        dom.setAttribute(el2, "inkscape:snap-bbox", "false");
        dom.setAttribute(el2, "inkscape:window-width", "1468");
        dom.setAttribute(el2, "inkscape:window-height", "841");
        dom.setAttribute(el2, "inkscape:window-x", "-8");
        dom.setAttribute(el2, "inkscape:window-y", "-8");
        dom.setAttribute(el2, "inkscape:window-maximized", "1");
        dom.setAttribute(el2, "units", "px");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("metadata");
        dom.setAttribute(el2, "id", "metadata5244");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("rdf:RDF");
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("cc:Work");
        dom.setAttribute(el4, "rdf:about", "");
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:format");
        var el6 = dom.createTextNode("image/svg+xml");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:type");
        dom.setAttribute(el5, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n		");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:title");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	  ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("g");
        dom.setAttribute(el2, "inkscape:label", "Layer 1");
        dom.setAttribute(el2, "inkscape:groupmode", "layer");
        dom.setAttribute(el2, "id", "layer1");
        dom.setAttribute(el2, "transform", "translate(0,-937.36221)");
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("g");
        dom.setAttribute(el3, "id", "g6306");
        dom.setAttribute(el3, "transform", "translate(-225.13151,791.53027)");
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("path");
        dom.setAttribute(el4, "style", "fill:none;fill-opacity:1;stroke-width:6.67038012;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.setAttribute(el4, "d", "m 521.81451,203.6268 c -22.94462,22.76841 -65.87897,53.86995 -147.14477,53.86995 M 227.52499,203.6268 c 26.93495,-27.75634 65.87894,-53.86994 147.14475,-53.86994");
        dom.setAttribute(el4, "id", "path6308");
        dom.setAttribute(el4, "inkscape:connector-curvature", "0");
        dom.setAttribute(el4, "sodipodi:nodetypes", "cccc");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("circle");
        dom.setAttribute(el4, "style", "fill-opacity:1;stroke:none;stroke-width:2.31396842;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none");
        dom.setAttribute(el4, "id", "circle6310");
        dom.setAttribute(el4, "cx", "374.65775");
        dom.setAttribute(el4, "cy", "203.62682");
        dom.setAttribute(el4, "r", "35.549294");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [74, 0], [74, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('im-watching-you/components/tasks/show/trash-btn/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		click: function click() {
			this.sendAction('action');
		}
	});
});
define("im-watching-you/components/tasks/show/trash-btn/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 70,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/tasks/show/trash-btn/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el1 = dom.createElement("svg");
        dom.setAttribute(el1, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
        dom.setAttribute(el1, "xmlns:cc", "http://creativecommons.org/ns#");
        dom.setAttribute(el1, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
        dom.setAttribute(el1, "xmlns:svg", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns", "http://www.w3.org/2000/svg");
        dom.setAttribute(el1, "xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd");
        dom.setAttribute(el1, "xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape");
        dom.setAttribute(el1, "width", "35");
        dom.setAttribute(el1, "height", "41");
        dom.setAttribute(el1, "viewBox", "0 0 35 41.000001");
        dom.setAttribute(el1, "id", "svg7097");
        dom.setAttribute(el1, "version", "1.1");
        dom.setAttribute(el1, "inkscape:version", "0.91 r13725");
        dom.setAttribute(el1, "sodipodi:docname", "trash.svg");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("defs");
        dom.setAttribute(el2, "id", "defs7099");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("sodipodi:namedview");
        dom.setAttribute(el2, "id", "base");
        dom.setAttribute(el2, "pagecolor", "#ffffff");
        dom.setAttribute(el2, "bordercolor", "#666666");
        dom.setAttribute(el2, "borderopacity", "1.0");
        dom.setAttribute(el2, "inkscape:pageopacity", "0.0");
        dom.setAttribute(el2, "inkscape:pageshadow", "2");
        dom.setAttribute(el2, "inkscape:zoom", "2.8");
        dom.setAttribute(el2, "inkscape:cx", "-12.892677");
        dom.setAttribute(el2, "inkscape:cy", "60.587379");
        dom.setAttribute(el2, "inkscape:document-units", "px");
        dom.setAttribute(el2, "inkscape:current-layer", "layer1");
        dom.setAttribute(el2, "showgrid", "false");
        dom.setAttribute(el2, "units", "px");
        dom.setAttribute(el2, "inkscape:window-width", "1468");
        dom.setAttribute(el2, "inkscape:window-height", "841");
        dom.setAttribute(el2, "inkscape:window-x", "-8");
        dom.setAttribute(el2, "inkscape:window-y", "-8");
        dom.setAttribute(el2, "inkscape:window-maximized", "1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("metadata");
        dom.setAttribute(el2, "id", "metadata7102");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("rdf:RDF");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("cc:Work");
        dom.setAttribute(el4, "rdf:about", "");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:format");
        var el6 = dom.createTextNode("image/svg+xml");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:type");
        dom.setAttribute(el5, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dc:title");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("g");
        dom.setAttribute(el2, "inkscape:label", "Layer 1");
        dom.setAttribute(el2, "inkscape:groupmode", "layer");
        dom.setAttribute(el2, "id", "layer1");
        dom.setAttribute(el2, "transform", "translate(0,-1011.3622)");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("path");
        dom.setAttribute(el3, "sodipodi:nodetypes", "cccc");
        dom.setAttribute(el3, "inkscape:connector-curvature", "0");
        dom.setAttribute(el3, "id", "path6621");
        dom.setAttribute(el3, "d", "m 32.499576,1011.6754 -5.105826,38.035 -20.0012842,0 -5.0585144,-38.035");
        dom.setAttribute(el3, "style", "fill:none;fill-opacity:1;stroke-width:4.70900488;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("path");
        dom.setAttribute(el3, "sodipodi:nodetypes", "ccccccc");
        dom.setAttribute(el3, "inkscape:connector-curvature", "0");
        dom.setAttribute(el3, "id", "path6623");
        dom.setAttribute(el3, "d", "m 12.893625,1049.0155 9.090603,-12.3369 4.198828,-1.1462 -1.106904,4.2093 0.776815,8.7301 -4.975643,-0.4263 z");
        dom.setAttribute(el3, "inkscape:transform-center-y", "0.95533639");
        dom.setAttribute(el3, "inkscape:transform-center-x", "0.9891703");
        dom.setAttribute(el3, "style", "fill-opacity:1;stroke-width:5.26136255;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define('im-watching-you/components/tasks/show-page/component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNames: ['showTaskTemplate'],
		classNameBindings: ['active'],
		active: _ember['default'].computed('isRunning', {
			get: function get() {
				if (this.get('isRunning')) {
					return true;
				}
				return false;
			}
		}),

		actions: {
			showTime: function showTime() {
				this.sendAction('showTime');
			},
			chronoClick: function chronoClick() {
				this.sendAction('chronoClick');
			},
			resetTime: function resetTime() {
				this.sendAction('resetTime');
			},
			removeTask: function removeTask() {
				this.sendAction('removeTask');
			}
		}
	});
});
define("im-watching-you/components/tasks/show-page/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 1
            },
            "end": {
              "line": 15,
              "column": 1
            }
          },
          "moduleName": "im-watching-you/components/tasks/show-page/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		Reset\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/components/tasks/show-page/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "title");
        dom.setAttribute(el1, "class", "elips");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "time");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "reset-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[2] = dom.createElementMorph(element0);
        morphs[3] = dom.createMorphAt(element0, 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
        morphs[6] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        return morphs;
      },
      statements: [["content", "title", ["loc", [null, [2, 1], [2, 10]]]], ["inline", "tasks/show/chrono-btn", [], ["chronoClick", "chronoClick"], ["loc", [null, [5, 1], [5, 52]]]], ["element", "action", ["showTime"], [], ["loc", [null, [8, 18], [8, 39]]]], ["content", "time", ["loc", [null, [9, 1], [9, 9]]]], ["block", "main-btn", [], ["action", "resetTime"], 0, null, ["loc", [null, [13, 1], [15, 15]]]], ["inline", "tasks/show/trash-btn", [], ["action", "removeTask", "class", "trash-btn"], ["loc", [null, [19, 1], [19, 63]]]], ["content", "yield", ["loc", [null, [21, 0], [21, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('im-watching-you/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('im-watching-you/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("im-watching-you/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 2
              }
            },
            "moduleName": "im-watching-you/index/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("			Start\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 1
            },
            "end": {
              "line": 16,
              "column": 1
            }
          },
          "moduleName": "im-watching-you/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "main-btn", [], [], 0, null, ["loc", [null, [13, 2], [15, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "index-route");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo-index.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("I'wy!");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo-index.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("I'm watching you!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("\n		The application right here to smack you.");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		In. The. Face.\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 7, 7);
        return morphs;
      },
      statements: [["block", "link-to", ["tasks"], ["class", "btn-container"], 0, null, ["loc", [null, [12, 1], [16, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('im-watching-you/info/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("im-watching-you/info/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 1
            },
            "end": {
              "line": 24,
              "column": 1
            }
          },
          "moduleName": "im-watching-you/info/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "list-btn", ["loc", [null, [23, 2], [23, 14]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/info/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "info-route");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo-index.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("I'wy!");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "src", "assets/images/logo-index.png");
        dom.setAttribute(el3, "alt", "");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("I'm watching you!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("\n		The application right here to smack you.");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		In. The. Face.\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "credits");
        var el3 = dom.createTextNode("\n		an ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createTextNode("Lucaf's");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" application\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "email");
        dom.setAttribute(el2, "href", "mailto:luca.forgia@gmail.com");
        var el3 = dom.createTextNode("luca.forgia@gmail.com");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "tools");
        var el3 = dom.createTextNode("\n		done with Emberjs, Ember-Cli, Nodejs, Stylus, and Inkscape\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "link");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "target", "_blank");
        dom.setAttribute(el3, "href", "https://github.com/lucaforgia/im-watching-you");
        var el4 = dom.createTextNode("GitHub");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 15, 15);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["tasks"], ["class", "return-btn"], 0, null, ["loc", [null, [22, 1], [24, 13]]]], ["content", "outlet", ["loc", [null, [27, 0], [27, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('im-watching-you/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'im-watching-you/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _imWatchingYouConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_imWatchingYouConfigEnvironment['default'].APP.name, _imWatchingYouConfigEnvironment['default'].APP.version)
  };
});
define('im-watching-you/initializers/export-application-global', ['exports', 'ember', 'im-watching-you/config/environment'], function (exports, _ember, _imWatchingYouConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_imWatchingYouConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _imWatchingYouConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_imWatchingYouConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('im-watching-you/router', ['exports', 'ember', 'im-watching-you/config/environment'], function (exports, _ember, _imWatchingYouConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _imWatchingYouConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('tasks', function () {
            this.route('new');
            this.route('show', {
                path: ':task_id'
            });
        });
        this.route('info');
    });

    exports['default'] = Router;
});
define('im-watching-you/task/model', ['exports', 'ember', 'ember-data', 'im-watching-you/utils/time-util'], function (exports, _ember, _emberData, _imWatchingYouUtilsTimeUtil) {

    var Task = _emberData['default'].Model.extend({
        title: _emberData['default'].attr('string'),
        time: _emberData['default'].attr('number'),
        chronoTime: _ember['default'].computed('time', {
            get: function get() {
                return (0, _imWatchingYouUtilsTimeUtil.getTime)(this.get('time'));
            }
        }),
        isRunning: false
    });

    exports['default'] = Task;
});
define('im-watching-you/tasks/new/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			var newTask = this.store.createRecord('task');
			newTask.set('time', 0);
			newTask.set('isRunning', false);
			return newTask;
		},

		isValid: function isValid(model) {
			var title = model.get('title');
			if (typeof title === 'string' && _ember['default'].$.trim(title) !== '') {
				return true;
			} else {
				return false;
			}
		},

		showAlert: function showAlert() {
			alert('Set a proper title');
		},

		returnToList: function returnToList() {
			var model = this.get('currentModel');
			model.set('title', '');
			this.transitionTo('tasks');
		},

		actions: {
			onKeyPress: function onKeyPress(keyCode) {
				if (keyCode === 27) {
					this.returnToList();
				}
			},
			cancelNew: function cancelNew() {
				this.returnToList();
			},
			willTransition: function willTransition() {
				var model = this.get('currentModel');
				if (!this.isValid(model)) {
					model.deleteRecord();
				}
				model.save();
			},
			saveTask: function saveTask() {
				var model = this.get('currentModel');
				if (!this.isValid(model)) {
					this.showAlert();
				} else {
					this.transitionTo('tasks');
				}
			}
		}
	});
});
define("im-watching-you/tasks/new/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 15,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					Cancel\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 4
            },
            "end": {
              "line": 18,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					Save\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/tasks/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "new-route");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "alert");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("\n			New Task\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "save");
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "btn-cont");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "clear-both");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 3]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 2, 2);
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 2, 2);
        morphs[4] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["saveTask"], ["on", "submit"], ["loc", [null, [6, 21], [6, 54]]]], ["inline", "input-text", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [10, 23], [10, 28]]]]], [], []], "action", "onKeyPress"], ["loc", [null, [10, 4], [10, 50]]]], ["block", "main-btn", [], ["class", "cancel-btn", "action", "cancelNew", "small", true], 0, null, ["loc", [null, [13, 4], [15, 17]]]], ["block", "main-btn", [], ["class", "save-btn", "action", "saveTask", "small", true], 1, null, ["loc", [null, [16, 4], [18, 17]]]], ["content", "outlet", ["loc", [null, [23, 1], [23, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('im-watching-you/tasks/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('task');
		},
		actions: {
			goToTask: function goToTask(model) {
				this.transitionTo('tasks.show', model);
			}
		}
	});
});
define('im-watching-you/tasks/show/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		timer: null,
		startDate: null,

		model: function model(param) {
			if (!this.store.hasRecordForId('task', param.task_id)) {
				return this.transitionTo('tasks');
			}
			return this._super(param);
		},

		afterModel: function afterModel(model, transition) {
			// start the timer as soon as the user enter the task page
			var observerCallback = this.chroneRun.bind(this);
			model.addObserver('isRunning', observerCallback);
			model.set('deleteRunningObs', function () {
				model.removeObserver('isRunning', observerCallback);
			});

			model.set('isRunning', true);
			return this._super(model, transition);
		},

		// changed, no need setInterval, just check date at start and at the end-stop
		// chroneRun(task){
		// 	// this is the route, binded, see this.chroneRun.bind in afterModel method;
		// 	var _t = this;
		// 	if(task.get('isRunning')){
		// 		let timer = setInterval(()=>{
		// 			// changed to increment an internal var, to avoid heavy writting on model
		// 			// _t.incrementProperty('currentModel.time', 100);
		// 			_t.incrementProperty('time');
		// 		},1000);
		// 		_t.set('timer',timer);
		// 	}else{
		// 		clearInterval(_t.get('timer'));
		// 		task.set('time',_t.get('time'));
		// 	}
		// },

		chroneRun: function chroneRun(task) {
			if (task.get('isRunning')) {
				this.set('startDate', new Date());
			} else {
				this.updateTime(task);
				task.save();
			}
		},

		updateTime: function updateTime(model) {
			var newDate = new Date();
			var time = newDate - this.get('startDate');
			this.set('startDate', newDate);
			model.incrementProperty('time', time);
		},

		actions: {
			willTransition: function willTransition() {
				var model = this.get('currentModel');
				if (!model.get('isDeleted')) {
					model.set('isRunning', false);
				}
				model.get('deleteRunningObs')();
			},
			chronoClick: function chronoClick() {
				this.toggleProperty('currentModel.isRunning');
			},
			resetTime: function resetTime() {
				this.set('currentModel.time', 0);
				this.set('startDate', new Date());
			},
			showTime: function showTime() {
				var model = this.get('currentModel');
				if (model.get('isRunning')) {
					this.updateTime(model);
				}
			},
			removeTask: function removeTask() {
				var model = this.get('currentModel');
				model.deleteRecord();
				model.save();
				this.transitionTo('tasks');
			}
		}
	});
});
define("im-watching-you/tasks/show/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/tasks/show/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "tasks/show-page", [], ["title", ["subexpr", "@mut", [["get", "model.title", ["loc", [null, [2, 7], [2, 18]]]]], [], []], "isRunning", ["subexpr", "@mut", [["get", "model.isRunning", ["loc", [null, [3, 11], [3, 26]]]]], [], []], "time", ["subexpr", "@mut", [["get", "model.chronoTime", ["loc", [null, [4, 6], [4, 22]]]]], [], []], "showTime", "showTime", "chronoClick", "chronoClick", "resetTime", "resetTime", "removeTask", "removeTask"], ["loc", [null, [1, 0], [5, 94]]]], ["content", "outlet", ["loc", [null, [7, 0], [7, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("im-watching-you/tasks/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 8,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "list-btn", ["loc", [null, [7, 5], [7, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "assets/images/logo-index.png");
          dom.setAttribute(el1, "alt", "info");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 6
            },
            "end": {
              "line": 25,
              "column": 6
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("							");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "no-tasks");
          var el2 = dom.createTextNode("\n								No Tasks\n							");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 27,
                "column": 7
              },
              "end": {
                "line": 37,
                "column": 7
              }
            },
            "moduleName": "im-watching-you/tasks/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("\n									");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n								");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            var el3 = dom.createTextNode("\n									");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n								");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n								");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["is-active-", ["get", "task.isRunning", ["loc", [null, [28, 30], [28, 44]]]]]]], ["element", "action", ["goToTask", ["get", "task", ["loc", [null, [28, 68], [28, 72]]]]], [], ["loc", [null, [28, 48], [28, 74]]]], ["content", "task.title", ["loc", [null, [30, 9], [30, 23]]]], ["content", "task.chronoTime", ["loc", [null, [33, 9], [33, 28]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 6
            },
            "end": {
              "line": 38,
              "column": 6
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "unless", [["get", "task.isNew", ["loc", [null, [27, 17], [27, 27]]]]], [], 0, null, ["loc", [null, [27, 7], [37, 18]]]]],
        locals: ["task"],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 4
            },
            "end": {
              "line": 47,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "assets/images/plus-btn.png");
          dom.setAttribute(el1, "alt", "+");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.2.0",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 5
              },
              "end": {
                "line": 51,
                "column": 5
              }
            },
            "moduleName": "im-watching-you/tasks/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						Add New Task\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 4
            },
            "end": {
              "line": 52,
              "column": 4
            }
          },
          "moduleName": "im-watching-you/tasks/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "main-btn", [], [], 0, null, ["loc", [null, [49, 5], [51, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 59,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/tasks/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "tasks-route");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "tasks-container");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("menu");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("menuitem");
        dom.setAttribute(el4, "type", "command");
        dom.setAttribute(el4, "label", "list");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("menuitem");
        dom.setAttribute(el4, "type", "command");
        dom.setAttribute(el4, "label", "info");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "main-container");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "scroll-container");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("\n					");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("					");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "fixed");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var element5 = dom.childAt(element4, [1, 1, 1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(element5, 1, 1);
        morphs[4] = dom.createMorphAt(element5, 2, 2);
        morphs[5] = dom.createMorphAt(element6, 1, 1);
        morphs[6] = dom.createMorphAt(element6, 2, 2);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 1], [2, 11]]]], ["block", "link-to", ["tasks"], [], 0, null, ["loc", [null, [6, 4], [8, 16]]]], ["block", "link-to", ["info"], [], 1, null, ["loc", [null, [11, 4], [13, 16]]]], ["block", "unless", [["get", "model", ["loc", [null, [21, 16], [21, 21]]]]], [], 2, null, ["loc", [null, [21, 6], [25, 17]]]], ["block", "each", [["get", "model", ["loc", [null, [26, 14], [26, 19]]]]], [], 3, null, ["loc", [null, [26, 6], [38, 15]]]], ["block", "link-to", ["tasks.new"], ["class", "plus-btn"], 4, null, ["loc", [null, [45, 4], [47, 16]]]], ["block", "link-to", ["tasks.new"], ["class", "add-task"], 5, null, ["loc", [null, [48, 4], [52, 16]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
define("im-watching-you/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "im-watching-you/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('im-watching-you/utils/time-util', ['exports'], function (exports) {
    var moment = window.moment;

    function formatTime(time) {
        if (time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }

    function getTime(milliseconds) {
        var time = moment.duration(milliseconds, 'milliseconds');
        return formatTime(time.hours()) + 'h : ' + formatTime(time.minutes()) + '\' : ' + formatTime(time.seconds()) + '\"';
    }

    exports.getTime = getTime;
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('im-watching-you/config/environment', ['ember'], function(Ember) {
  var prefix = 'im-watching-you';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("im-watching-you/app")["default"].create({"name":"im-watching-you","version":"0.1.0+df108391"});
}

/* jshint ignore:end */
//# sourceMappingURL=im-watching-you.map