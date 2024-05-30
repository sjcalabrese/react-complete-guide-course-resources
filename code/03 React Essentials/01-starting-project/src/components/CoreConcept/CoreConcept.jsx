import "./CoreConcept.css";
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
//! destructuring the props opbject
//! allows you to target specific items from the object

export default function CoreConcept({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }