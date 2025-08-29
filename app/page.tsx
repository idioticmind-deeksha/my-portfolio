import fs from "fs";
import path from "path";
import { GitHubData } from "../types/github";
import Image from "next/image";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";

export default function Home() {
  const file = path.join(process.cwd(), "data", "github.json");
  const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "{}";
  const data = JSON.parse(raw) as GitHubData;

  const user = data.user || {};
  const repos = data.repos || [];
  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  return (
    <div className="row align-items-start">
      <div className="col-md-4 text-center">
        <div className=" border border-secondary rounded p-4">
<Image
          src={user.avatar_url}
          width={180}
          height={180}
          className="img-fluid rounded-circle"
          alt={user.name || user.login}
          
        />
        <h3 className="mt-3">{user.name || user.login}</h3>
         <a
          href={user.html_url}
          className="btn btn-outline-primary btn-lg mb-4"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
        </div>
        <p className="mt-4">{user.bio}</p>
        <div className="mt-3 text-start">
          <ExperiencePage /> 
        </div>
       
      </div>

      <div className="col-md-8">
        <ProjectsPage />
      </div>
    </div>
  );
}
