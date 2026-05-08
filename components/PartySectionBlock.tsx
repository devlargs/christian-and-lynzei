import type { PartySection } from "@/types/party";

export default function PartySectionBlock({
  section,
}: {
  section: PartySection;
}) {
  const useGrid = section.members.length > 4;
  return (
    <div className="col-12 col-md-11 col-lg-10 text-center mb-4">
      <span
        className="divider divider-floral d-block mb-3 mx-auto"
        style={{ opacity: 0.7 }}
      ></span>
      <h3 className="font-alt fs-3 text-primary mb-3">{section.title}</h3>
      {useGrid ? (
        <div
          className="mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
            rowGap: "0.75rem",
            maxWidth: 720,
          }}
        >
          {section.members.map((m, i) => (
            <div key={i} className="text-center">
              <h3 className="font-alt fs-5 m-0">{m.name}</h3>
              {m.role && (
                <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                  {m.role}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ columnGap: "3rem", rowGap: "0.75rem" }}
        >
          {section.members.map((m, i) => (
            <div key={i} className="text-center">
              <h3 className="font-alt fs-5 m-0">{m.name}</h3>
              {m.role && (
                <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
                  {m.role}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
