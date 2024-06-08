// contexts/EditingContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context
interface EditingContextType {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

// Create a context with a default value
const EditingContext = createContext<EditingContextType | undefined>(undefined);

// Create a provider component
export const EditingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditingContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditingContext.Provider>
  );
};

// Custom hook for easier use of the context
export const useIsEditing = (): EditingContextType => {
  const context = useContext(EditingContext);
  if (context === undefined) {
    throw new Error('useIsEditing must be used within an EditingProvider');
  }
  return context;
};
