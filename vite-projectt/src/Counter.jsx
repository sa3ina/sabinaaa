import { useState } from "react";
function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return { count, increment, decrement };
}

export default useCounter;
// import { useEffect, useReducer } from "react";
// import "./App.css";
// import useCounter from "./Counter";
// import Counter from "./Count";
// import axios from "axios";
// import { useState } from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Heading,
//   Stack,
//   StackDivider,
//   Box,
//   Text,
//   Divider,
//   ButtonGroup,
//   Button,
//   Image,
// } from "@chakra-ui/react";
// function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   console.log(data.login);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="type here"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           axios.get(`https://api.github.com/users/${search}`).then((res) => {
//             setData(res.data);
//           });

//           console.log(search);
//         }}
//       >
//         button
//       </button>
//       {data && (
//         <ChakraProvider>
//           <Card maxW="sm">
//             <CardBody>
//               <Image
//                 src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//                 alt="Green double couch with wooden legs"
//                 borderRadius="lg"
//               />
//               <Stack mt="6" spacing="3">
//                 <Heading size="md">{data.name}</Heading>
//                 <Text>
//                   This sofa is perfect for modern tropical spaces, baroque
//                   inspired spaces, earthy toned spaces and for people who love a
//                   chic design with a sprinkle of vintage design.
//                 </Text>
//                 <Text color="blue.600" fontSize="2xl">
//                   $450
//                 </Text>
//               </Stack>
//             </CardBody>
//             <Divider />
//           </Card>
//         </ChakraProvider>
//       )}
//     </>
//   );
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "inputValue":
//       return { value: action.value, arr: [] };
//     case "add":
//       return { value: state.value, arr: [...state.arr, state.value] };
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { value: "", arr: [] });

//   return (
//     <>
//       <input
//         type="text"
//         value={state.value}
//         onChange={(e) => {
//           dispatch({ value: e.target.value, type: "inputValue" });
//         }}
//       />
//       <button
//         onClick={() => {
//           dispatch({ value: "", type: "add" });
//         }}
//       >
//         add
//       </button>

//       <ul>
//         {state.arr.map((elem, i) => {
//           return <li key={i}>{elem}</li>;
//         })}
//       </ul>
//       <Counter />
//     </>
//   );
// }
