# Summary

This app allows users to type in annual income and choose with year to calculate the text of the year.

## The View

# Assumptions

It only calculate the general tax range rates, not based on province or country's scenario.

# Setup

- Add `NEXT_PUBLIC_TAX_API` in `.env.local`
- Run the app: `yarn dev`
- Run the test: `yarn test`

# Implementation process

The following steps were taken to develope the app:

- Prioritized tasks
- Set up simple form
- Fetch API data
- write custom hook (useFetch) to fetch data
- write custom hook (useTax) to calculate the results
- Add unit tests
- Improve UI

# Libraries/Tools used

- Uses Nextjs for client
- Uses react testing library & jest for testing
- Uses Tailwindcss for UI

# Decisions and tradeoffs

## Client side request cache

This app is only developed in the client side. I was thinking to add another api to fetch data and cache the results from there,
This can be useful if is bigger scopes, so we wont tired the api, can return cached api data for the same request. (Also tax brackets shouldn't change often).

But with the smaller scope, I decided to go with useSWR, cache on the client side, that makes me easily fetch data and only revalidate it when the api results change. In the other hand, cache the results from calculation by using useMemo, So when the user chanced only annual income, it won't refetch the api, will only recalculate the results.

## Client side browser cache

Consider the user cases of recalculating the results for different incomes and years are rare, I didn't do browser caching. So if the user refresh the app, it won't remember the last results.

# If it was a bigger project

This is a coding challenge and the scope is quite small. If it were a bigger real project, doing the following would be better:

1. Working on server side caching to reduce the api hit.

2. Available years may change in the future, we can also return proper error from the api and updated in the app.

3. UI/UX improvement

- error messages can be more informative.

4. Increase test coverage for edge cases

- add end to end test, and retry api tests
