import { useState, type FormEvent } from 'react'

const inputStyle: Record<string, string | number> = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '12px',
  border: '1px solid rgba(255,255,255,0.1)',
  backgroundColor: 'rgba(255,255,255,0.04)',
  color: '#D7E2EA',
  fontSize: '15px',
  fontFamily: "'Kanit', sans-serif",
  outline: 'none',
  boxSizing: 'border-box',
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ backgroundColor: '#0C0C0C', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              flex: '1 1 280px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              justifyContent: 'center',
            }}
          >
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', letterSpacing: '1px', marginBottom: '4px' }}>EMAIL</p>
              <a href="mailto:oja.joa789@gmail.com" style={{ color: '#D7E2EA', fontSize: '18px', textDecoration: 'none' }}>oja.joa789@gmail.com</a>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', letterSpacing: '1px', marginBottom: '4px' }}>LOCATION</p>
              <p style={{ color: '#D7E2EA', fontSize: '18px', margin: 0 }}>Dubai, United Arab Emirates</p>
            </div>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', letterSpacing: '1px', marginBottom: '4px' }}>SOCIAL</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a
                  href="https://github.com/AJOAJ44"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D7E2EA', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ajo-antony-3aa966223"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D7E2EA', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              flex: '1 1 400px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: 'vertical' } as Record<string, string | number>}
            />
            <button
              type="submit"
              style={{
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: "'Kanit', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
              }}
            >
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
