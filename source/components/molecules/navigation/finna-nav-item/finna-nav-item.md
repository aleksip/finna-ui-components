---
title: Nav item
state: inreview
---

### Description

Navigation item with optional tooltip button and children. 

### Properties

| Property         | Type    | Example value                  | Required |
| ---------------- | ------- | ------------------------------ | -------- |
| `active`         | boolean | `true`                         | No       |
| `ariaSelected`   | boolean | `true`                         | No       |
| `children`       | array   | Array of finna-nav-item arrays | No       |
| `description`    | string  | Additional description         | No       |
| `id`             | string  | `tab-special`                  | No       |
| `label`          | string  | Tab label                      | Yes      |
| `link`           | string  | `https://finna.fi`             | Yes/No   |
| `renderChildren` | string  | `dropdown`                     | No       |
| `tooltipBtn`     | array   | finna-tooltip-btn array        | No       |

### Notes

The optional `renderChildren` property can be used to control how possible child
items are rendered. Currently supported values are `false`, `simple` and 
`dropdown` (default).

The `link` property is not required (and is not used) if the item has children 
and the value of `renderChildren` is `dropdown`.

Tooltip buttons are only rendered for first level items that do not have a 
dropdown.

This component currently only supports one level of children.
