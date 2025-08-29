const fs = require("fs");
const path = require("path");

const GH_USER = process.env.GH_USER || "idioticmind-deeksha";
const GH_TOKEN = process.env.GH_TOKEN; 
const PER_PAGE = 100;

async function fetchJson(url, headers) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status} ${res.statusText} - ${txt}`);
  }
  return res.json();
}

async function main() {
  const headers = { Accept: "application/vnd.github.v3+json" };
  if (GH_TOKEN) headers.Authorization = `token ${GH_TOKEN}`;

  const user = await fetchJson(`https://api.github.com/users/${GH_USER}`, headers);
  const reposAll = await fetchJson(
    `https://api.github.com/users/${GH_USER}/repos?per_page=${PER_PAGE}&sort=updated`,
    headers
  );

  const repos = reposAll
    .filter((r) => !r.private)
    .slice(0, 10)
    .map((r) => ({
      id: r.id,
      name: r.name,
      full_name: r.full_name,
      html_url: r.html_url,
      description: r.description,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      language: r.language,
      updated_at: r.updated_at,
      topics: r.topics || []
    }));

  const out = { user, repos };

  const outDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  fs.writeFileSync(path.join(outDir, "github.json"), JSON.stringify(out, null, 2), "utf8");
  console.log("Saved data/github.json (user + repos)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
