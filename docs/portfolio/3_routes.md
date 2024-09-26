# Routes

```
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading.jsx";

const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Suspense fallback={<Loading />}>
          <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
```
