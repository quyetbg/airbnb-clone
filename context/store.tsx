import { createContext, useReducer, ReactNode } from 'react';
import { dataReducer } from './reducer';

interface IGuests {
  adults: number;
  children: number;
  infants: number;
}

interface IInitialState {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: IGuests;
}

export const initialState: IInitialState = {
  location: '',
  checkIn: null,
  checkOut: null,
  guests: { adults: 0, children: 0, infants: 0 },
};

interface IDataContextProps {
  children: ReactNode;
}

export const DataContext = createContext<ReturnType<typeof useReducer>>(null!);

export const ContextProvider = ({ children }: IDataContextProps) => (
  <DataContext.Provider value={useReducer(dataReducer, initialState)}>
    {children}
  </DataContext.Provider>
);