import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showArticle, setShowArticle] = useState(false);
  const [articleBody, setArticleBody] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  let sharedState = {
    showArticle,
    setShowArticle,
    articleBody,
    setArticleBody,
    articleTitle,
    setArticleTitle,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
