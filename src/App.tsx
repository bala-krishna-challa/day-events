import styles from "./App.module.css";
import DayEvents from "./components/day-events/DayEvents";
import Header from "./components/header/Header";
import DayEventProvider from "./providers/day-event/DayEventProvider";

function App() {
  return (
    <div className={styles["day-events"]}>
      <div className={styles["events-box"]}>
        <Header />
        <DayEventProvider>
          <DayEvents />
        </DayEventProvider>
      </div>
    </div>
  );
}

export default App;
