export default function Footer() {
  return (
    <footer className="ew-footer">
      <div className="ew-container footer-inner">
        <div className="brand">
          <div className="logo-mark small">◈</div>
          <span className="brand-title">EstateWise</span>
        </div>

        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} EstateWise
        </div>
      </div>
    </footer>
  );
}
