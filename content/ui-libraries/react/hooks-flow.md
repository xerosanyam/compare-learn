### Hooks Lifecycle

Mounting:

1. useState() -> lazy initializers
2. render: rest of the function code
3. update DOM
4. run layout effects
5. Browser paints screen
6. run effects

Updating:

1. render: rest of the function code
2. update DOM
3. cleanup layout effects
4. run layout effects
5. Browser paints screen
6. clean up side effects of prev render
7. run effects

Unmount:

3. cleanup layout effects
4. clean up side effects of prev render
