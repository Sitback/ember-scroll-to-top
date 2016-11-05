# Ember-scroll-to-top
[![Build Status](https://travis-ci.com/zhujy8833/ember-scroll-to-top.svg?token=AbecQTdzwsRokttzSyiy&branch=master)](https://travis-ci.com/zhujy8833/ember-scroll-to-top)

Ember component addon to allow scrolling to top of the page.
## Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-to-top`
* `npm install`
* `bower install`

## How to use
To use this addon, you can wrap you customize markup for the real control element or simply put the component in your template directly (The default control would be `<button>`)

* For option 1: wrap customize markup (__recommended__), you have the abilities to customize your control element such as class name

```
{{#scroll-top
  toggleWhenScroll=true
  effectToToggle='fade'
  onScroll=(action 'onScroll')
  onScrollToTop=(action 'onScrollToTop')
  animate='400' as |clickAction|}}
  <input type='button' onclick={{clickAction}} value='Scroll to Top'/>
{{/scroll-top}}
```
The action of `scroll-to-top` is yielded from the component, so you can put that on your control element.

* For option 2: non-block component structure, default control element will be `<button>`

```
{{scroll-top
  toggleWhenScroll=true
  effectToToggle='fade'
  onScroll=(action 'onScroll')
  onScrollToTop=(action 'onScrollToTop')
  animate='400'}}
```
####Options
| Option Name      | Description                                                                                          | Type    | Default Value |   |
|------------------|------------------------------------------------------------------------------------------------------|---------|---------------|---|
| toggleWhenScroll | Show when scroll down to a specific position, and hide on top of the page                            | Boolean | false         |   |
| effectToToggle   | The effect to show/hide element, if `toggleWhenScroll` is true. Current support 'default' and 'fade' | String  | 'default'     |   |
| animate          | Animation value of scrolling to top, e.g. `animate='500'`                                            | String  | false         |   |

####Callbacks
| Callback      | Description                                       |   
|---------------|---------------------------------------------------|---|---|---|
| onScroll      | Callback when window is being scrolled            |
| onScrollToTop | Callback when window has been scrolled to the top |


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
