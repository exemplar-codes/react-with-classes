import ErrorBoundary from "./components/ErrorBoundary";
import UserFinder from "./components/UserFinder";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <UserFinder />
      </ErrorBoundary>
    </div>
  );
}

export default App;
