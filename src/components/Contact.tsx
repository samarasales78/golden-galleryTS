import { useEffect, useRef } from "react";

export default function Contact() {
  const footerRef = useRef<HTMLElement | null>(null);
  const creditosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = [footerRef.current, creditosRef.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contato" ref={footerRef} className="footer">
      <div ref={creditosRef} className="creditos">
        <div className="share">
        <a
            href="https://www.instagram.com/samarasales78?igsh=MWc5aHJjZTV6ODBraA=="
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
              alt="instagram"
            />
          </a>

          <a
            href="https://github.com/samarasales78"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="github"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/samara-matias-sales-573b43390"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="linkedin"
            />
          </a>

          <a href="mailto:smatiassales@gmail.com">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/?size=100&id=38159&format=png&color=000000"
              alt="email"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}