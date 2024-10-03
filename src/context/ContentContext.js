import React, { useState, createContext } from 'react';

// Create the context
export const ContentContext = createContext();

// ContentProvider component to provide the content state
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("Initial Content");

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};
