import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { GitHubData } from "@/types/github";

export default function Navbar() {
  const file = path.join(process.cwd(), "data", "github.json");
    const raw = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "{}";
    const data = JSON.parse(raw) as GitHubData;
  
    const user = data.user || {};
    const repos = data.repos || [];
    const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
                <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Deeksha</Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/experience"
                rel="noreferrer"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
       

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

   <Image
           src={user.avatar_url}
           width={40}
           height={40}
           className="img-fluid rounded-circle brand"
           alt={user.name || user.login}
         />
      </div>
    </nav>
  );
}
