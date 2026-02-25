import { Github as GithubIcon, Star, GitFork, GitCommit } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export default async function Github() {
  let repos: Repo[] = [];

  try {
    const res = await fetch('https://api.github.com/users/Mohdtsf/repos?sort=updated&per_page=6', {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (res.ok) {
      repos = await res.json();
      // Filter out forks if desired, or sort them by stars
      repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
    }
  } catch (error) {
    console.error('Failed to fetch github repos:', error);
  }

  // Fallback data if API fails or user has no public repos yet
  if (!repos.length) {
    repos = [
      {
        id: 1,
        name: "AI-Network-Traffic-Analyzer",
        description: "Real-time anomaly detection using Isolation Forest.",
        html_url: "https://github.com/Mohdtsf",
        stargazers_count: 12,
        forks_count: 3,
        language: "Python",
        updated_at: new Date().toISOString(),
      },
      {
        id: 2,
        name: "Image-Encrypt-Decrypt",
        description: "AES Encryption utility with Flask backend.",
        html_url: "https://github.com/Mohdtsf",
        stargazers_count: 8,
        forks_count: 1,
        language: "Flask",
        updated_at: new Date().toISOString(),
      }
    ];
  }

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start tracking-tight">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            Open Source
          </h2>
          <div className="w-full h-px bg-glass-border relative">
            <div className="absolute top-0 h-full w-32 bg-neon-blue"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* GitHub Stats Card */}
          <div className="lg:w-1/3">
            <div className="glass p-8 rounded-2xl border-glass-border h-full flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-neon-blue/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <GithubIcon size={64} className="text-white mb-6" />
              <h3 className="text-2xl font-bold mb-2">@Mohdtsf</h3>
              <p className="text-gray-400 mb-8">Building and breaking things on GitHub.</p>

              <div className="flex justify-center gap-6 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-neon-blue mb-1">200+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest flex items-center gap-1"><GitCommit size={14} /> Commits</span>
                </div>
                <div className="w-px h-12 bg-glass-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-electric-purple mb-1">10+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest flex items-center gap-1"><GithubIcon size={14} /> Repos</span>
                </div>
              </div>

              <a
                href="https://github.com/Mohdtsf"
                target="_blank"
                rel="noreferrer"
                className="mt-8 px-8 py-3 rounded-full border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-colors sm:w-auto w-full font-medium"
              >
                Follow on GitHub
              </a>
            </div>
          </div>

          {/* Repo Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="glass p-6 rounded-2xl border-glass-border hover:-translate-y-2 hover:border-electric-purple/50 hover:shadow-[0_10px_30px_rgba(127,90,240,0.1)] transition-all flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors flex items-center gap-2">
                    <GithubIcon size={18} className="text-electric-purple" />
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1 hover:text-neon-blue transition-colors"><Star size={14} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1 hover:text-electric-purple transition-colors"><GitFork size={14} /> {repo.forks_count}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {repo.description || "A futuristic full-stack or research project exploring new technologies."}
                </p>

                <div className="mt-auto flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${repo.language === 'TypeScript' ? 'bg-blue-400' :
                    repo.language === 'JavaScript' ? 'bg-yellow-400' :
                      repo.language === 'Python' ? 'bg-blue-500' :
                        repo.language === 'Flask' ? 'bg-gray-400' :
                          'bg-electric-purple'
                    }`}></span>
                  <span className="text-xs font-mono text-gray-300">{repo.language || "TypeScript"}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
