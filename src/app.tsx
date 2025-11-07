import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route,
} from "preact-iso";

import HomePage from "./pages/home.page.tsx";
import Layout from "./layout/index.tsx";

const NotFoundPage = lazy(() => import("./pages/notfound.page.tsx"));
const BlogsPage = lazy(() => import("./pages/blogs.page.tsx"));
const ProjectsPage = lazy(() => import("./pages/projects.page.tsx"));

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Layout>
          <Router>
            <Route path="/" component={HomePage} />
            <Route path="/blogs" component={BlogsPage} />
            <Route path="/projects" component={ProjectsPage} />
            {/* @ts-ignore */}
            <NotFoundPage default />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  );
}
