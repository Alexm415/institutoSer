import logo from "../assets/images/Wlogo.jpeg";
function Head() {
  return (
    <header>
      <img
        src={logo} // Replace with your actual logo path (import if needed)
        alt="IDEHA Logo"
        className="logo spinning-logo" // Applies sizing and spin animation
      />
    </header>
  );
}
export default Head;
