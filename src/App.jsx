function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello World</h1>
      <p style={styles.text}>Welcome to my React app</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    margin: 0,
    background: "linear-gradient(135deg, #fff9c4, #ffeb3b, #f9a825)",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "4rem",
    color: "#333",
  },
  text: {
    fontSize: "1.25rem",
    color: "#555",
  },
};

export default App;
