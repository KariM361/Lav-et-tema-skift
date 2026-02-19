import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Theme } from './components/Theme/Theme';

function App() {
  const [isDark, setIsDark] = useState(false);

  const images = [
    "src/assets/Cigaretpakke-AKKC.jpg",
    "src/assets/duck-karolinelund.jpg",
    "src/assets/Face-karolinelund.jpg",
    "src/assets/Foldekniv-AKKC.jpg",
    "src/assets/Gaden-AKKC.jpg",
    "src/assets/husk-at-kysse-AKKC.jpg",
    "src/assets/stadion-AKKC.jpg",
    "src/assets/randio-AKKC.jpg",
    "src/assets/rich-guys-karolinelund.jpg",
    "src/assets/Spray-dude-AKKC.jpg",

  ];

  const links = [
    { label: "Home", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ];


  return (
    <Wrapper isDark={isDark}>
      <Header
        title="StreetArt aalborg"
        subtitle="Streetart"
      />

      <Theme
        isDark={isDark}
        onTheme={() => setIsDark((prev) => !prev)}
      />

      <Gallery images={images} />

      <Footer
        links={links}
        address="Vesterbro 24, 9000 Aalborg"
      />
    </Wrapper>
  )
}

export default App
