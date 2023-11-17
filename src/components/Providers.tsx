import { ThemeProvider } from "./ThemeProvider";

type Providers = {
  children: React.ReactNode;
};
const Providers = ({ children }: Providers) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="na-app-theme">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
