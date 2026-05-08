import type { PartyMember } from "@/types/party";

export default function PartyList({ members }: { members: PartyMember[] }) {
  return (
    <ul className="list-unstyled">
      {members.map((m, i) => (
        <li key={i} className="mb-3">
          <h3 className="font-alt">{m.name}</h3>
          {m.role && (
            <p className="fs-10 fw-bold ls-2 m-0 text-primary-2 text-uppercase">
              {m.role}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
