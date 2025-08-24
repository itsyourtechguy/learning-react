const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Kitchen. All rights reserved.</p>
      <p>Follow us on social media!</p>
      <ul className="social-icons">
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </div>
  )
}

export default Footer;