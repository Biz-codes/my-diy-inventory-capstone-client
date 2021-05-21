// import React, { Component } from "react";
// import ToolItem from "./ToolItem";
// import { Link } from "react-router-dom";
// import DIYContext from "../DIYContext";
// import Nav from "../Nav";

// class Tools extends Component {
//   static defaultProps = {
//     match: {
//         params: {}
//     }
//   }
  
//   static contextType = DIYContext;

//   render() {
    
//     // console.log(this.context);
//     return (
//       <div className="tools">
//         <div className="nested-nav">
//           <div className="page-heading">
//             <h2>My DIY Tools</h2>
//           </div>
//           <div className="page-heading">
//             <Nav />
//           </div>
//         </div>
//         <div>
//           {this.context.tools_inventory.map((tool) => (
//             <ToolItem
//               key={tool.id}
//               id={tool.id}
//               tool_name={tool.tool_name}
//               details={tool.details}
//               quantity={tool.quantity}

//             />
//           ))}
//         </div>
//         {/* <button>
//           <Link to="/add-tool">Add Tool</Link>
//         </button> */}
//       </div>
//     );
//   }
// }

// export default Tools;