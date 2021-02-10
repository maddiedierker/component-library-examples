This small app (created with `create-react-app`) displays the same React components using 3 different styling solutions:
- [CSS modules](https://github.com/css-modules/css-modules), [SCSS](https://sass-lang.com/guide), and [classnames](https://github.com/JedWatson/classnames)
- [emotion](https://emotion.sh/docs/introduction) (CSS-in-JS)
- [styled-components](https://styled-components.com/) (CSS-in-JS)

You can set it up locally (steps below), but it's simple enough to convey in a screenshot:

![components](/public/components.png)

Only the React components above are styled; all `<h1>`s and the `<button>` at the bottom are unstyled because they're just HTML elements and there are no global styles. 
  
There is a `<Button>` and `<DangerButton>` component with the same styles applied for each styling solution. Since they are visually the same, these examples display how to:
- Apply conditional styles using props
- Build on an existing component (`<DangerButton>` is a fancy wrapper around `<Button>` in each example, but this can be done in many different ways)
- Extending and overriding base styles

# Set up locally

Requirements:
- node >=10

1. Clone the repository.
2. Run `yarn install` from the root directory.
3. Run `yarn start` to start the server.
