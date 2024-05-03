import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaulttheme } from "./style/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaulttheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="sucess" />
      <Button variant="danger" />
    </ThemeProvider>
  );
}
