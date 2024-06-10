export default function TabButton({children, onSelect, isSelected}) {
//   Can use any name for you props except for "children" suck as onSelect
    
    return (
    <li>
      <button className={isSelected ? 'active': ''} onClick={onSelect}>{children}</button>
    </li>
  );
}
