export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/portfolio-c10";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p><small>&copy; {currentYear}</small></p>
    </footer>
  )
}