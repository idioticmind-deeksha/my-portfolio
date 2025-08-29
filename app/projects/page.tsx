import fs from "fs";
import path from "path";
import Link from "next/link";
import { Repo } from "../../types/github";

export default function ProjectsPage() {
  const file = path.join(process.cwd(), "data", "github.json");
  const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "{}";
  const data = JSON.parse(raw);
  const repos: Repo[] = data.repos || [];

  return (
    <>
      <h1 className="mb-4">Projects</h1>
      <div className="row g-4">
        {repos.map((r) => (
          <div key={r.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text flex-grow-1">{r.description ?? "No description."}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small>Stars: ⭐ {r.stargazers_count}  Forks : {r.forks_count}</small>
                  <div>
                    <a className="btn btn-sm btn-outline-primary me-2 fs-5" href={r.html_url} target="_blank" rel="noreferrer">Repo</a>
                  </div>
                </div>
              </div>
              <div className="card-footer">Language: <small>{r.language ?? "—"}</small></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
