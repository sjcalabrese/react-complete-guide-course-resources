export default function TabButton({children, onSelect}) {
//   Can use any name for you props except for "children" suck as onSelect
    
    return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
