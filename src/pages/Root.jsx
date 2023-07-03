import { Outlet } from "react-router-dom";

export function Root() {
    return (
      <>
        <header></header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
  }