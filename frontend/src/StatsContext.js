import React, { createContext, useState, useContext } from 'react';


const StatsContext = createContext();


export const useStats = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {

    const [stats, setStats] = useState({
        totalStudents: 0,
        placedStudents: 0,
        unplacedStudents: 0
    });


    const updateStats = (newStats) => {
        setStats(newStats);
    };

    return (
        <StatsContext.Provider value={{ stats, updateStats }}>
            {children}
        </StatsContext.Provider>
    );
};
