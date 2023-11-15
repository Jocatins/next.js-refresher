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

# Static Generation

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
-   If fallback is set to true, then any paths not returned by getStaticPaths will be dynamically generated at request time
-   Next.js keeps track of the new list of pre-rendered pages. Subsequent request to the same path will serve the generated page

When to set fallback to true

-   When there may be new pages added frequently
-   It is most suitable if your app has a large number of static pages that depend on data e.g large e-commerce site

`getStaticPaths` `fallback: blocking`

-   The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps
-   The paths that have not been generated at build time will not result in a 404 page. Instead on the first request, Next.js will render the page on the server and return generated HTML

When to set fallback to blocking

-   On a UX level, some people prefer the page to be loaded without any loading indicator
-   But, the technical issue it was introduced was because some crawlers did not support JS

# Static Generation and Issues

-   It is a method of pre-rendering where the HTML pages are generated at build time
-   The pre-rendered static pages can be pushed to a CDN, cached and served to clients instantly
-   Static content is fast and better for SEO as they are immediately indexed by search engines
-   Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seem like a really good approach to a wide variety of applications in prod.

# Issues

-   The build time is proportional to the number of pages in the application
-   A page, once generated, can contain stale data till the time you rebuild the app

# Incremental Static Regeneration

There was a need to update only those pages which needed a change without having to rebuild the entire app

-   With ISR, Next.js allows you to update static pages after you have build the application
-   You can statically generate individual pages without needing to rebuild the entire app, solving issue of stale data

# Server Side Rendering

-   Server Side Rendering (SSR) is a method of pre-rendering where the HTML pages are generated at request time
-   The HTML is generated for every incoming request
-   `getServerSideProps()` runs only on the server side
-   The function will never run on client-side
-   You can write server-side codes directly in `getServerSideProps()`
-   It cannot be run on a regular component, it is used for pre-rendering and not client-side data fetching

# Different Objects you can access from Context

-   Request and Response
-   Query
-   Params
