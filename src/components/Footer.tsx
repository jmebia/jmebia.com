export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 text-sm py-4 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p>
          &copy; {year} Josiah Maius S. Ebia. All rights reserved.{" "}
        </p>
      </footer>
    );
  }
  