import Crumb from "./crumb";
import { useRouter } from "next/router";
import { useMemo } from "react";

const BreadCrumbs = (props) => {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];

    const paths = pathWithoutQuery.split("/").filter((v) => v.length > 0);

    const crumblist = paths.map((subpath, idx) => {
      const href = "/" + paths.slice(0, idx + 1).join("/");
      const title = subpath;
      return { href, title };
    });

    return [{ href: "/", title: "Home" }, ...crumblist];
  }, [router.asPath]);

  return (
    <div>
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </div>
  );
};

export default BreadCrumbs;
