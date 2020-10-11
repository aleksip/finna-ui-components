#### Description

Multi-level navigation. Two sets of navigation tabs for larger screens and a navbar for small screens.

#### Properties

| Property           | Type     | Example value                | Required |
| -------------------| -------- | ---------------------------- | -------- |
| additionalClasses  | `string` | `finna-multi-level-nav`      | No       |
| ariaLabel          | `string` | `Finna navigation`           | Yes      |
| ariaLabelPrimary   | `string` | `Finna primary navigation`   | Yes      |
| ariaLabelSecondary | `string` | `Finna secondary navigation` | Yes      |
| items              | `[][]`   |                              | Yes      |

Additionally all finna-navbar properties except `additionalClasses`, `aria-label` and `collapseContent`. Note that at least `collapseId` is required.  

#### Variations

Add the `finna-multi-level-nav-lg` class for a larger variation.
