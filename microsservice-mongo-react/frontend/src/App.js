import OrderList from "./components/OrderList";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";


function App() {
  return (
    <div className="App">
      <OrderList />
      <hr />
      <UserForm />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
