const Toolbar = ({ filters, selected, onSelectFilter }) => {
return (
    <div>
     {filters.map(filter => (
        <button
         key={filter}
         onClick={() => onSelectFilter(filter)}
         className={filter === selected ? 'selected' : ''}
        >
         {filter}
        </button>
     ))}
    </div>
);
};

export default Toolbar;