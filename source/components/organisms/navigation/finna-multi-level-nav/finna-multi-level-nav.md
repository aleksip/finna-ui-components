---
title: Multi-level navigation
state: complete
---

### Description

Multi-level navigation. Tabbed navigation bar for large screens and a navbar for 
small screens.

### Properties

| Property             | Type   | Example value                | Required |
| ---------------------| ------ | ---------------------------- | -------- |
| `ariaLabel`          | string | Finna navigation             | Yes      |
| `attributes`         | array  |                              | No       |
| `brandContent`       | string | Brand content                | Yes      |
| `brandLink`          | string |                              | No       |
| `collapseId`         | string | `finna-navbar-collapse`      | Yes      |
| `items`              | array  |                              | Yes      |

Additionally all finna-navbar properties except `attributes`, `ariaLabel` and 
`collapseContent`. Note that at least `collapseId` is required.  

### Variations

Add the `finna-multi-level-nav-lg` class for a larger variation.

Add the `finna-multi-level-nav-content` class for a content navigation
variation.
