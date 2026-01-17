export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-zinc-900 text-zinc-400 text-sm py-4 text-center">
        <p>
          &copy; {year} Josiah Maius S. Ebia. All rights reserved.{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    );
  }
  