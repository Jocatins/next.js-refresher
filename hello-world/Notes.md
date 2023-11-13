project bootstrapped with [`create-next-app`]

## Notes on Next js

First, run the development server:

```bash
npm run dev
# or
yarn dev

yarn lock files-> ensures consistent installation of dependencies
next.config.js files --> Is a development mode only feature for highlighting potential problems in an application,
                                  --> It helps to identify and save life-cycles
```

### Routing

In Next.js, the routing is a file-based system. The folder is responsible for that

To perform client side navigation, we use the Link component provided by Next.js
`_app.js` is a component that wraps every page in the application

# Pre-rendering

Next JS generates HTML for each page in advance instead of having it done by the client-side JS.
It is done by default in the Next.js App

Why pre-rendering

-   It improves performance
-   It helps with SEO

Next JS supports two forms of pre-rendering

-   Static Generation
-   Server Side Rendering

-   Static Generation is a method of pre-rendering where the HTML pages are generated at build time
-   The pages can be built once, cached by a CDN and served to the client almost instantly
-   E.g - Blog pages, documentations, e-commerce, marketing pages
-   This pre-rendering feature allows the page to be cached by a CDN and indexed by a search engine

`getStaticProps` fn

-   It only runs on the server side, that is why it displays on the console and not on the browser.
-   The codes inside getStaticProps will not be included in the JS bundle that is sent to the browser
-   You can write server side codes, like Node.js inside the getStaticProps functions like accessing the file system or querying a database
-   It is used only for pre-rendering and not client-side data fetching. It is allowed only in a page and cannot be run from a regular component file
-   It should return an object and also return a props key, which is an object
-   It runs on build time

`getStaticPaths` `fallback: false`

-   The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps
-   If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 page

When to set fallback to false

-   When new pages are not added often
-   It is most suitable for an app with a small number of paths to pre-render

`getStaticPaths` `fallback: true`

-   The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps
-   The paths that have not been generated at build time will not result to a 404page. Instead, Next.js will serve a fallback version of the page on the first request
-   In the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
-   When that is done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props.

-   Server Side Rendering (SSR) is a method of pre-rendering where the HTML pages are generated at request time