---
title: Nav item
state: inreview
---

### Description

Navigation item with optional tooltip button or children. 

### Properties

| Property      | Type    | Example value                  | Required |
| ------------- | ------- | ------------------------------ | -------- |
| `active`      | boolean | `true`                         | No       |
| `children`    | array   | Array of finna-nav-item arrays | No       |
| `description` | string  | Additional description         | No       |
| `id`          | string  | `tab-special`                  | No       |
| `label`       | string  | Tab label                      | Yes      |
| `link`        | string  | `https://finna.fi`             | Yes/No   |
| `tooltipBtn`  | array   | finna-tooltip-btn array        | No       |

### Notes

The `link` property is not required (and is not used) if the item has children.
