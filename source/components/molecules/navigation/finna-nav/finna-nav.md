---
title: Nav
state: complete
---

### Description

Basic list of navigation items that supports displaying the active item's 
children.

### Properties

| Property            | Type   | Example value                  | Required |
| ------------------- | ------ | ------------------------------ | -------- |
| `attributes`        | array  |                                | No       |
| `items`             | array  | Array of finna-nav-item arrays | Yes      |
| `renderChildren`    | string | `dropdown`                     | No       |

### Notes

The optional `renderChildren` property can be used to control how possible child
items are rendered. Currently supported values are `false`, `simple` and 
`dropdown`. If this property is set it will override the same property in all 
items.

### Variations

Since this component is based on Bootstrap's nav component it supports all 
Bootstrap nav variations.

Add the `finna-nav-lg` class for a larger variation.
