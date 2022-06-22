import { Hero } from "./components/Hero";
import { NavigationBar } from "./components/NavigationBar";
import { WaitListContextProvider } from "./contexts/HeroContext";

export const Home = () => {
  return (
    <WaitListContextProvider>
      <NavigationBar />
      <Hero />
    </WaitListContextProvider>
  );
};
