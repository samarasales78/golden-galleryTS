import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const contatoElements = document.querySelectorAll(".footer, .creditos");

    const contatoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    contatoElements.forEach((el) => contatoObserver.observe(el));

    return () => {
      contatoElements.forEach((el) => contatoObserver.unobserve(el));
    };
  }, []);

  return (
    <footer className="footer">
      <div className="creditos">
        <p>Seu conteúdo de contato aqui</p>
      </div>
    </footer>
  );
}