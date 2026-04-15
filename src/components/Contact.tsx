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

        </div>
      </div>
    </section>
  );
}