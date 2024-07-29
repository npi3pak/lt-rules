const Tab = ({ isActive, onClick, children }) => {
    return (
        <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Tab;
