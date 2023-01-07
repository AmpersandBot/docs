import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div key={page.route}>
        <h3>
          <Link legacyBehavior href={page.route}>
            <A
              style={{ color: "inherit", textDecoration: "none" }}
              className="post-title"
            >
              {/* @ts-ignore */}
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="post-contents">
          {/* @ts-ignore */}
          {page.frontMatter?.description}{" "}
          <span className="read-more">
            <Link href={page.route}>{more + " →"}</Link>
          </span>
        </p>
        {/* @ts-ignore */}
        {page.frontMatter?.date ? (
          // @ts-ignore
          <p className="post-created-date">{page.frontMatter.date}</p>
        ) : null}
        <style jsx>
          {`
            .post-title {
              margin-top: 2rem;
              font-weight: 600;
              letter-spacing: -0.015em;
              font-size: 1.5rem;
            }
            .post-contents {
              margin-top: 1.5rem;
              opacity: 0.8;
            }
            .post-created-date {
              margin-top: 1.5rem;
              font-size: 0.875rem;
              opacity: 0.5;
            }
            .read-more {
              color: hsl(
                var(--nextra-primary-hue) 100% 50% / var(--tw-text-opacity)
              ) !important;
              -webkit-text-decoration-line: underline !important;
              text-decoration-line: underline !important;
              text-underline-position: under !important;
              text-decoration-thickness: from-font !important;
            }
          `}
        </style>
      </div>
    );
  });
}
