export const metadata = {
  title: "Chat - APP",
  description: "Una aplicación de chat futurista y moderna.",
  icons: {
    icon: "img/favicon.ico",
    apple: "img/apple-touch-icon.png", // Agrega soporte para íconos en dispositivos Apple
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1", // Para mejorar la experiencia en dispositivos móviles
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <title>{metadata.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />    
      </head>
      <body style={styles.body}>
        <div style={styles.container}>{children}</div>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Orbitron', sans-serif",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#E0E0E0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
    boxSizing: "border-box",
  },
};
