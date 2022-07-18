import "../css/AppHeader.css";

function AppHeader(): JSX.Element {
  return (
    <header>
      <div className="pad">
        <h1>{"favourite places".toUpperCase()}</h1>
      </div>
    </header>
  );
}

export default AppHeader;
