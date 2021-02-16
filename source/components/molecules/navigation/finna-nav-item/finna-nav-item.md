---
title: Nav item
state: complete
---

### Description

Navigation item with optional tooltip button and children. 

### Properties

| Property         | Type    | Default Value |
| ---------------- | ------- | ------------- |
| `active`         | boolean | `false`       |
| `ariaCurrent`    | string  |               |
| `attributes`     | array   |               |
| `children`       | array   |               |
| `description`    | string  |               |
| `label`          | string  |               |
| `link`           | string  |               |
| `linkAttributes` | array   |               |
| `renderChildren` | string  | `dropdown`    |
| `tooltipBtn`     | array   |               |

### Notes

`renderChildren` can be used to control how possible child items are rendered. 
Currently supported values are `false`, `simple` and `dropdown`.

`link` is not used if the item has children and the value of `renderChildren`
is `dropdown`.

`tooltipBtn` should contain properties for a finna-tooltip-btn. Tooltip buttons
are only rendered for first level items that do not have a dropdown.

Descriptions are only rendered for child items.

This component currently only supports one level of children.
