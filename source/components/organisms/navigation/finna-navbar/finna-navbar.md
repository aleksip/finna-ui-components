---
title: Navbar
state: complete
---

### Description

Navbars are responsive components that serve as navigation headers for your 
application or site. They begin collapsed (and are toggleable) in mobile views
and become horizontal as the available viewport width increases.

### Properties

| Property             | Type   | Example value            | Required |
| -------------------- | ------ | ------------------------ | -------- |
| `additionalClasses`  | string | `visible-xs`             | No       |
| `ariaLabel`          | string | Finna navigation         | Yes      |
| `brandContent`       | string | Brand content            | Yes      |
| `brandLink`          | string |                          | No       |
| `brandSrOnly`        | string |                          | No       |
| `collapseContent`    | string | A rendered nav component | Yes      |
| `collapseId`         | string | `finna-navbar-collapse`  | Yes      |
| `toggleBtnSrOnly`    | string | More                     | Yes/No   |
| `toggleBtnIconClass` | string | `fa-handle-open`         | No       |
| `toggleBtnLabel`     | string |                          | No       |

### Notes

The `toggleBtnSrOnly` property is required if there is no `toggleBtnLabel`.

### Variations

Add the `finna-navbar-content` class for a content navigation variation. This
variation has a prominent color for the navbar and styles the mobile collapse
content to look similar to dropdown menus.
