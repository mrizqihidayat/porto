import '../css/ContactSection.css'

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      
      <div className="contact-circle"></div>

      <div className="cta-bg-shape">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="15.36" y1="30" x2="84.64" y2="70" />
          <line x1="15.36" y1="70" x2="84.64" y2="30" />
        </svg>
      </div>

      <div className="cta-content">
        <h2 className="cta-heading">
          Let's <span className="text-red">Work</span><br />
          Together
        </h2>

        <div className="cta-footer">
          
          <div className="cta-email-group">
            <span className="cta-label">Reach out via email~</span>
            <a href="mailto:mrizqihidayatt@gmail.com" className="cta-email-link">
              mrizqihidayatt@gmail.com
            </a>
          </div>

          <div className="cta-social-group">
            <span className="cta-label">Other Media~</span>
            <div className="cta-social-links">
              <a href="https://www.linkedin.com/in/muhammad-rizqi-hidayatullah-b55701289/">LinkedIn</a>
              <a href="https://www.instagram.com/rizqihdyt_?igsh=MTE0NXJ3d2lpcXJpeA==">Instagram</a>
              <a href="https://github.com/mrizqihidayat/">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection