import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles";
import { SearchBar } from "./components/SearchBar";
import { UserList } from "./components/UserList";
import { UserDetail } from "./components/UserDetail";

const App: FC = () => (
  <BrowserRouter>
    <SearchBar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:username" element={<UserDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
