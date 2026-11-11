import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

let hasCompletedInitialLoad = false;

export const hasLoadedBefore = () => hasCompletedInitialLoad;

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoadingState] = useState(() => {
    if (hasCompletedInitialLoad) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);

  const setIsLoading = (state: boolean) => {
    if (!state) {
      hasCompletedInitialLoad = true;
    }
    setIsLoadingState(state);
  };

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    if (hasCompletedInitialLoad) {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          setTimeout(() => {
            module.initialFX();
          }, 50);
        }
      });
    }
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className={`main-body ${hasCompletedInitialLoad ? "main-active" : ""}`}>
        {children}
      </main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
