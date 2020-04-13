React Form Input component
====

This will be a how-to guide for usage.

```$xslt
<FormInput handleChange={changeHandler} name={optional} type={input-type}
           value={stateVariableWithValue} label={'The name for the label'}
            light required/>
```

* **handleChange** - a callback for when the value changes a typical example would
be
```js
const handleChange = e => {
    setInputValue(e.currentTarget.value)
}
```
* **value** - the current value for the input field.
```js
value={inputValue}
// Or for a multi-value state object
value={inputValue.username}
```
* **name** - (optional)  You can use this to build a single handler for a big form
```js
const handleChange = e => {
    let {name, value} = e.currentTarget
    setInputValues(prev => ({...prev, [name]: value}))
}
```
* **type** - (optional) By default this is a text input.  You can pass a type string to declare
a different type, i.e. 'password', 'number', 'email', etc.
* **label** - (optional) The label to be used for the control.  Without a label, there will be a
simple input field.
* **light** - (optional) By default the component uses dark colors, good for white backgrounds.
With a dark background, use this to invert the colors.  Alternatively, use the styling declarations
to pass your own styles.
* **containerClasses** - (optional) Pass any custom styles to the containing div.
* **inputClasses** - (optional) Pass any custom styles to the input element.
* **labelClasses** - (optional) Pass any custom styles to the label element.

####

#### THANK YOU!

Please feel free to let me know how I can improve this component!
