import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
    <a className="navbar-brand" href="/">Deeksha</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
            <li className="nav-item"><a className="nav-link" href="https://github.com/idioticmind-deeksha" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
