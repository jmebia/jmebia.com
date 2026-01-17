export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-zinc-900 text-zinc-400 text-sm py-4 text-center">
        <p>
          &copy; {year} Josiah Maius S. Ebia. All rights reserved.{" "}
        </p>
      </footer>
    );
  }
  