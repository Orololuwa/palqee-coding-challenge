import { useContext } from "react";
import StoreContext from "context/storeContext";
import Link from "next/link";
import Nav from "./Nav";
import { useRouter } from "next/router";

const SideBar = () => {
  const ctx = useContext(StoreContext);
  const router = useRouter();

  return (
    ctx.isOpen && (
      <aside>
        <Nav>
          <span className={router.pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </span>

          <details>
            <summary>Star Wars</summary>
            <span
              className={/characters*/g.test(router.pathname) ? "active" : ""}
            >
              <Link href="/characters">Characters</Link>
            </span>
          </details>
        </Nav>
      </aside>
    )
  );
};

export default SideBar;
