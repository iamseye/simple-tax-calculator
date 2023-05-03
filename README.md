# Summary

This app allows users to type in annual income and choose with year to calculate the text of the year.

## The View

![Screen Shot 2023-05-02 at 9 53 34 PM](https://user-images.githubusercontent.com/6887905/235929587-43aad7da-ee63-4c31-852f-21dbf5977a64.png)


# Assumptions

It only calculate the general tax range rates, not based on province or country's scenario.

# Setup

- Added `NEXT_PUBLIC_TAX_API` in `.env.local`

- Run the app: `yarn dev`
- Run the test: `yarn test`

# Implementation process

The following steps were taken to improve the app:

- Prioritized tasks
- Set up the client side separately, with eslint and tailwindcss
- Implemented a search function on the React client with a new UI
- Improved search with case-insensitivity and search length limit
- Improved UI and UX with pagination, improved search API with pagination (see future plan)
- Added tests, and error messages, and deployed them to render.com

# Libraries/Tools used

- Uses Nextjs for client
- Uses Jest for testing
- Uses Tailwindcss for UI

# Decisions and tradeoffs

## Pagination or infinite scroll

When listing all items, the two common methods are pagination and infinite scroll. I chose pagination because:

- Infinite scroll may make it hard to find results when there are too many. It may also be less suitable for mobile users.
- Pagination makes more sense when searching through the script. In real life, users do not start searching from the first page; they usually search by sections.
- In the future, we can speed up server processing time by giving clear ranges and reducing memory costs.

## Doing pagination on the client side vs server side

Initially, I implemented pagination on the server side. However, since the script results are still in a small scope, and every page wouldn't make sense to show too many results (e.g., 1000), it's faster to do it on the client side.

If the scope were to increase in the future, it would make sense to do client and server-side pagination:

For example: If there is a result limitation of 20,000, once the results are higher than 20,000, and a user wants to see more results (by clicking the `next` button), the server would fetch the following 20,000 results

# If it was a bigger project

This is a coding challenge and the scope is quite small. If it were a bigger real project, doing the following would be better:

1. Write a script to extract the text and important filter (ex: SCENE, PLACE) and save it in the database

- This can extend the search function and results information, ex: show which SENNCE in the title, search `hamlet` in the SENNE I

2. Add cache on the server side

- add a middleware with library ex: `go-cache`

3. UI/UX improvement

- Remember search and results after refreshing the page by adding the search query in the URL or localstorage

4. Increase test coverage for edge cases

5. For a team project, it will be good to have the project dockerized.
