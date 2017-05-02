# React-InstantSearch ColorPicker Example

A color picker component ready to be used by React-InstantSearch:

```jsx
<ColorPicker
  attributeName="colors"
  colorMap={{
    'color--BLACK': 'Black',
    'color--WHITE': ['White'],
    'color--BLUE': 'Blue',
    'color--GREEN': 'Green',
    'color--RED': 'Red',
    'color--PINK': 'Pink'
  }}
/>
```

* `attributeName` is the attribute that contains the color in the index
* `colorMap` maps CSS classes to color names.
