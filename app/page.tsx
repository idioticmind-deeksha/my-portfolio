import fs from "fs";
import path from "path";
import { GitHubData } from "../types/github";

export default function Home() {
  // Resolve JSON file path (must be in project-root/data/github.json)
  const file = path.join(process.cwd(), "data", "github.json");
  const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "{}";
  const data = JSON.parse(raw) as GitHubData;

  const user = data.user || {};
  const repos = data.repos || [];
  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  return (
    <div className="row align-items-center">
      <div className="col-md-4 text-center">
        <img
          src={user.avatar_url}
          className="img-fluid rounded-circle"
          style={{ maxWidth: 180 }}
          alt={user.name || user.login}
        />
        <h3 className="mt-3">{user.name || user.login}</h3>
        <p className="text-muted">{user.bio}</p>
        <a
          href={user.html_url}
          className="btn btn-outline-dark"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="col-md-8">
        <h1>Hello — I’m {user.name || user.login}</h1>
        <p className="lead">Frontend Developer — React, TypeScript, Bootstrap</p>

        <div className="row mt-4">
          <div className="col-sm-4">
            <div className="card p-3">
              <h6>Projects</h6>
              <strong>{repos.length}</strong>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card p-3">
              <h6>Total Stars</h6>
              <strong>{totalStars}</strong>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card p-3">
              <h6>Top Repo</h6>
              <strong>{repos[0]?.name ?? "—"}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
