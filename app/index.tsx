import { Text, View } from "react-native";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";

export default function Index() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
