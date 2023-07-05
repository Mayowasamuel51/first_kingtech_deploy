import React, { Suspense } from "react";
import Navabr from "./Navabr";
import ErrorBoundary from '../../ErrorBoundary'
import Loading from "../loading";
import Error from "../error"
const Admi_Layout = (Component) =>
  function Page() {
    return (
      <>

        <Navabr />
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <Component />
          </Suspense>
        </ErrorBoundary>

      </>
    );
  };

export default Admi_Layout;