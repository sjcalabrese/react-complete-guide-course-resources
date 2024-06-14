export default function TabButton({children, isSelected, ...props}) {
//   Can use any name for you props except for "children" suck as onSelect
    
    return (
    <li>
      <button className={isSelected ? 'active': ''} {...props}>{children}</button>
    </li>
  );
}
