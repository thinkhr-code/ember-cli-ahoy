[![Build Status](https://travis-ci.org/MammothHR/ember-cli-ahoy.svg?branch=master)](https://travis-ci.org/MammothHR/ember-cli-ahoy)

# ember-cli-ahoy

Provides an ES6 module for using [ahoy.js](https://github.com/ankane/ahoy.js).

## Installation

* `ember install ember-cli-ahoy`

## Usage

* Shim

```
import Ahoy from 'ahoy';
```

* As a service

```
import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  ahoy: service(),

  didInsertElement() {
    this.get('ahoy').trackView({
      url: 'foo-bar'
    });
  }
});
```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
