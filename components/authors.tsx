export default function Authors({
  published = "Published",
  date,
  children,
  by = "by",
}) {
  return (
    <div className="authors">
      {published} {date} {by} {children}
      <style jsx>
        {`
          .authors {
            color: rgb(107 114 128 / var(--tw-text-opacity));
            font-size: 0.875rem;
            margin-top: 1rem;
            line-height: 1.25rem;
            margin-bottom: 4rem;
          }
        `}
      </style>
    </div>
  );
}

export function Author({ name, link }) {
  return (
    <span className="after:content-[','] last:after:content-['']">
      <a key={name} href={link} target="_blank" className="author-link">
        {name}
      </a>
      <style jsx>
        {`
          .author-link {
            -webkit-text-decoration-line: underline;
            text-decoration-line: underline;
            text-underline-position: under;
            text-decoration-thickness: from-font;
          }
        `}
      </style>
    </span>
  );
}
