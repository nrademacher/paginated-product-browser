This is my solution to a coding challenge for mid-level frontend engineers.

The tasks were as follows:

- Fetch list of products from external API
- Each request should return up to 10 products
- Requests should be paginated using the requests `skip` parameter
- The paginated products should be displayed in the app using a simple card or grid layout
- A "Load more" button should be included in the UI and allow the user to load the next set of paginated data
- The paginated data should be appended to the data already in state without reloading it
- The button should be disabled once there is no more data to load
- The app should appropriate handle loading and error states
- The app should allow the user to retry loading products on error
