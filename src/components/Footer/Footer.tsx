import { useState } from "react";
import style from "./Footer.module.scss";

interface FooterProps {
  links: { label: string; href: string }[];
  address: string;
}

export function Footer({ links, address }: FooterProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Tak for din tilmelding! ✅");
    setEmail("");
  }

  return (
    <footer className={style.footer}>
      <div className={style.columns}>
        <div>
          <h3>Links</h3>
          <ul className={style.linkList}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Adresse</h3>
          <p>{address}</p>
        </div>

        <div>
          <h3>Nyhedsbrev</h3>
          <form onSubmit={handleSubmit} className={style.newsletter}>
            <input
              className={style.input}
              type="email"
              placeholder="Din email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className={style.button}>Tilmeld</button>
          </form>
          {message && <p className={style.message}>{message}</p>}
        </div>
      </div>
    </footer>
  );
}
