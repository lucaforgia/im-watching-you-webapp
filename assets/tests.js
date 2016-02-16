define('im-watching-you/tests/acceptance/tasks/show-test', ['exports', 'qunit', 'im-watching-you/tests/helpers/module-for-acceptance'], function (exports, _qunit, _imWatchingYouTestsHelpersModuleForAcceptance) {

   (0, _imWatchingYouTestsHelpersModuleForAcceptance['default'])('Acceptance | tasks/show');
   (0, _qunit.test)('visiting /tasks/show', function (assert) {
      // let model = this.subject();
      assert.expect(1);

      // beforeEach: function() {
      // };

      // var store = this.application.__container__.lookup('route:tasks').store;
      // var record;
      // var idTask = 1111;
      // Ember.run(()=>{
      //
      //     record = store.createRecord('task',{title:'primo',time:0, id:idTask});
      //     return record.save();
      // });
      //
      // visit(`/tasks/${idTask}`);
      // andThen(function() {
      //     assert.ok(true);
      // });

      assert.ok(true);
   });
});

// import Ember from 'ember';
define('im-watching-you/tests/acceptance/tasks/show-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/tasks');
  QUnit.test('acceptance/tasks/show-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/tasks/show-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('im-watching-you/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('im-watching-you/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/serializer.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/serializer.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/input-text/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/input-text');
  QUnit.test('components/input-text/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-text/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/list-btn/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/list-btn');
  QUnit.test('components/list-btn/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-btn/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/main-btn/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/main-btn');
  QUnit.test('components/main-btn/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-btn/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/tasks/show/chrono-btn/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/tasks/show/chrono-btn');
  QUnit.test('components/tasks/show/chrono-btn/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks/show/chrono-btn/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/tasks/show/trash-btn/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/tasks/show/trash-btn');
  QUnit.test('components/tasks/show/trash-btn/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks/show/trash-btn/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/components/tasks/show-page/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/tasks/show-page');
  QUnit.test('components/tasks/show-page/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/tasks/show-page/component.js should pass jshint.');
  });
});
define('im-watching-you/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('im-watching-you/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('im-watching-you/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'im-watching-you/tests/helpers/start-app', 'im-watching-you/tests/helpers/destroy-app'], function (exports, _qunit, _imWatchingYouTestsHelpersStartApp, _imWatchingYouTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _imWatchingYouTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _imWatchingYouTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('im-watching-you/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('im-watching-you/tests/helpers/resolver', ['exports', 'ember/resolver', 'im-watching-you/config/environment'], function (exports, _emberResolver, _imWatchingYouConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _imWatchingYouConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _imWatchingYouConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('im-watching-you/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('im-watching-you/tests/helpers/start-app', ['exports', 'ember', 'im-watching-you/app', 'im-watching-you/config/environment'], function (exports, _ember, _imWatchingYouApp, _imWatchingYouConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _imWatchingYouConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _imWatchingYouApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('im-watching-you/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('im-watching-you/tests/info/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - info');
  QUnit.test('info/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'info/route.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/input-text/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('input-text', 'Integration | Component | input text', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'input-text', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('input').length, 1);
  });
});
define('im-watching-you/tests/integration/components/input-text/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/input-text');
  QUnit.test('integration/components/input-text/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-text/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/list-btn/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('list-btn', 'Integration | Component | list btn', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'list-btn', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('svg').length, 1);
  });
});
define('im-watching-you/tests/integration/components/list-btn/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/list-btn');
  QUnit.test('integration/components/list-btn/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-btn/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/main-btn/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('main-btn', 'Integration | Component | main btn', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'main-btn', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('svg').length, 1);

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
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
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'main-btn', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('.text').text().trim(), 'template block text');
  });
});
define('im-watching-you/tests/integration/components/main-btn/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/main-btn');
  QUnit.test('integration/components/main-btn/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-btn/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/tasks/show/chrono-btn/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tasks/show/chrono-btn', 'Integration | Component | tasks/show/chrono btn', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 25
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'tasks/show/chrono-btn', ['loc', [null, [1, 0], [1, 25]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('svg').length, 1);

    // Template block usage:" + EOL +
  });
});
define('im-watching-you/tests/integration/components/tasks/show/chrono-btn/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/tasks/show/chrono-btn');
  QUnit.test('integration/components/tasks/show/chrono-btn/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tasks/show/chrono-btn/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/tasks/show/trash-btn/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('tasks/show/trash-btn', 'Integration | Component | tasks/show/trash btn', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 24
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
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
        statements: [['content', 'tasks/show/trash-btn', ['loc', [null, [1, 0], [1, 24]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('svg').length, 1);
  });
});
define('im-watching-you/tests/integration/components/tasks/show/trash-btn/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/tasks/show/trash-btn');
  QUnit.test('integration/components/tasks/show/trash-btn/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tasks/show/trash-btn/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/integration/components/tasks/show-page/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

    (0, _emberQunit.moduleForComponent)('tasks/show-page', 'Integration | Component | tasks/show page', {
        integration: true
    });

    (0, _emberQunit.test)('it renders', function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
        assert.expect(3);

        var title = 'currentTitle';
        var time = '11';
        this.set('title', title);
        this.set('time', time);

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'fragmentReason': {
                        'name': 'missing-wrapper',
                        'problems': ['wrong-type']
                    },
                    'revision': 'Ember@2.2.0',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 56
                        }
                    }
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
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
                statements: [['inline', 'tasks/show-page', [], ['title', ['subexpr', '@mut', [['get', 'title', ['loc', [null, [1, 24], [1, 29]]]]], [], []], 'time', ['subexpr', '@mut', [['get', 'time', ['loc', [null, [1, 35], [1, 39]]]]], [], []], 'isRunning', true], ['loc', [null, [1, 0], [1, 56]]]]],
                locals: [],
                templates: []
            };
        })()));

        var htmlText = this.$().text().trim();
        assert.notEqual(htmlText, '');

        assert.ok(htmlText.indexOf(title) !== -1);
        assert.ok(htmlText.indexOf(time) !== -1);
    });

    (0, _emberQunit.test)('active class works', function (assert) {
        assert.expect(2);
        this.set('running', true);
        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'fragmentReason': {
                        'name': 'missing-wrapper',
                        'problems': ['wrong-type']
                    },
                    'revision': 'Ember@2.2.0',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 37
                        }
                    }
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
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
                statements: [['inline', 'tasks/show-page', [], ['isRunning', ['subexpr', '@mut', [['get', 'running', ['loc', [null, [1, 28], [1, 35]]]]], [], []]], ['loc', [null, [1, 0], [1, 37]]]]],
                locals: [],
                templates: []
            };
        })()));
        assert.ok(this.$('div').hasClass('active'));
        this.set('running', false);
        assert.ok(!this.$('div').hasClass('active'));
    });
});
define('im-watching-you/tests/integration/components/tasks/show-page/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/tasks/show-page');
  QUnit.test('integration/components/tasks/show-page/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/tasks/show-page/component-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('im-watching-you/tests/task/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - task');
  QUnit.test('task/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'task/model.js should pass jshint.');
  });
});
define('im-watching-you/tests/tasks/new/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - tasks/new');
  QUnit.test('tasks/new/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tasks/new/route.js should pass jshint.');
  });
});
define('im-watching-you/tests/tasks/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - tasks');
  QUnit.test('tasks/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tasks/route.js should pass jshint.');
  });
});
define('im-watching-you/tests/tasks/show/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - tasks/show');
  QUnit.test('tasks/show/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tasks/show/route.js should pass jshint.');
  });
});
define('im-watching-you/tests/test-helper', ['exports', 'im-watching-you/tests/helpers/resolver', 'ember-qunit'], function (exports, _imWatchingYouTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_imWatchingYouTestsHelpersResolver['default']);
});
define('im-watching-you/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('im-watching-you/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/application/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('task', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('im-watching-you/tests/unit/application/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/serializer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/info/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:info', 'Unit | Route | info', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('im-watching-you/tests/unit/info/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/info');
  QUnit.test('unit/info/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/info/route-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/task/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
    // import {getTime} from '../../../utils/time-util';

    (0, _emberQunit.moduleForModel)('task', 'Unit | Model | task', {
        // Specify the other units that are required for this test.
        needs: []
    });

    (0, _emberQunit.test)('it exists', function (assert) {
        var model = this.subject();
        // let store = this.store();
        assert.ok(!!model);
    });

    // test('chronoTime is working', function(assert) {
    //     var time = 3723;
    //     let model = this.subject({time:time});
    //
    //     var chronoTime = model.get('chronoTime');
    //     assert.equal(chronoTime, getTime(time));
    //
    //     assert.ok(chronoTime.indexOf('01') !== -1 && chronoTime.indexOf('02') !== -1 && chronoTime.indexOf('03') !== -1);
    //     // let store = this.store();
    // });
});
define('im-watching-you/tests/unit/task/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/task');
  QUnit.test('unit/task/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/task/model-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/tasks/new/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tasks/new', 'Unit | Route | tasks/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('im-watching-you/tests/unit/tasks/new/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/tasks/new');
  QUnit.test('unit/tasks/new/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/tasks/new/route-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/tasks/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:tasks', 'Unit | Route | tasks', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('im-watching-you/tests/unit/tasks/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/tasks');
  QUnit.test('unit/tasks/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/tasks/route-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/tasks/show/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
	// import Ember from 'ember';

	(0, _emberQunit.moduleFor)('route:tasks/show', 'Unit | Route | tasks/show', {
		// Specify the other units that are required for this test.
		needs: ['model:Task'],
		beforeEach: function beforeEach() {}
	});

	(0, _emberQunit.test)('it exists', function (assert) {
		var route = this.subject();
		assert.ok(route);
	});
	//
	// test('timer is working', function(assert) {
	// 	assert.expect(3);
	//
	// 	var route = this.subject();
	// 	assert.equal(route.get('time'),0);
	//
	// 	var store = route.store;
	// 	var record;
	//
	// 	Ember.run(()=>{
	// 		record = store.createRecord('task',{title:'testing route',id:666});
	// 		record.set('time',1000);
	// 		route.set('currentModel',record);
	// 		route.afterModel(record,{});
	// 		record.get('deleteRunningObs')();
	// 	});
	//
	//
	// 	assert.equal(route.get('time'),1000);
	//
	// 	// alert(this.subject().store);
	//
	// 	assert.ok(route);
	// });
});
define('im-watching-you/tests/unit/tasks/show/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/tasks/show');
  QUnit.test('unit/tasks/show/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/tasks/show/route-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/unit/utils/time-util-test', ['exports', 'im-watching-you/utils/time-util', 'qunit'], function (exports, _imWatchingYouUtilsTimeUtil, _qunit) {

    (0, _qunit.module)('Unit | Utility | time util');

    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
        var time = 3723000;
        var chronoTime = (0, _imWatchingYouUtilsTimeUtil.getTime)(time);
        assert.ok(chronoTime.indexOf('01') !== -1 && chronoTime.indexOf('02') !== -1 && chronoTime.indexOf('03') !== -1);
    });
});
define('im-watching-you/tests/unit/utils/time-util-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/utils');
  QUnit.test('unit/utils/time-util-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/time-util-test.js should pass jshint.');
  });
});
define('im-watching-you/tests/utils/time-util.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - utils');
  QUnit.test('utils/time-util.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/time-util.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('im-watching-you/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map