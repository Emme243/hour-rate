# CHANGELOG

## Tue 11/08/2022
- Improved `Login` page, added validation and error messages.

## Mon 11/07/2022
- Improved `useTranslationByComponent` hook, renamed variables.
- Added `Login` page. Only layout.

## Sat 11/05/2022
- Improved the way translations are written, translation object must be called as the component name but in snake case. 
Example: if we have a component called `MyComponent` the translation object must be called `my_component` in locale files.
- Improved the way we get translations, now we use a custom hook called `useTranslationByComponent` that returns translations by component names.
- Improved Mui Theme Options, they were moved to the Mui Context Provider.
- Added Navbar.
- Added routing and components for `/` and `/clients/:id` path.

## Sun 11/30/2022
- Added i18n support. `en` and `es` are supported. Default is `en`.
- Added language selector for the UI.
- Added App Configuration Menu, includes:
  - Language selector
  - Theme selector

## Sat 11/29/2022
- Added Mui as styling framework.
- Added `Silka` as custom font family.
- Added dark mode.
- Added routing for `index` and `404` pages.
