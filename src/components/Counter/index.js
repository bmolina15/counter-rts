function Counter(props) {
  const number = props.number;

  return (
    <div>
      <h1>Counter:{number}</h1>
    </div>
  );
}

// const Counter = (props) =>{
//         return (
//           <div>
//             <h1>Counter:{props.number}</h1>
//           </div>
//         );
//  }


export default Counter;
