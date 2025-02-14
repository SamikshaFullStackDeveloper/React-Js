import React from "react";
import "./HomePage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-links">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Project</h2>
            <h2>Contact</h2>
          </div>
        </nav>
        <div className="name" >
          <div style={{ marginTop: "100px" }}>
            <h1>Samiksha Tarase</h1>
            <p style={{ fontSize: "30px" }}>I'm a Full Stack Developer</p>
          </div>
          <div>
            <img src="https://t3.ftcdn.net/jpg/07/94/63/46/360_F_794634655_kMst6W7KE6Z5El17S9pgdXKwfXsZh00X.jpg"></img>
          </div>
        </div>
      </div>

    );
  }
}

// https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg

// 

// https://t4.ftcdn.net/jpg/07/61/35/67/360_F_761356733_9CS91hVomGiiwYBOJavKTsVYHciVezT8.jpg


// import React from "react";
// // import { motion } from "framer-motion";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Github, Linkedin, Mail } from "lucide-react";

// const Portfolio = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold text-gray-800">Full Stack Developer Portfolio</h1>
//         <p className="text-lg text-gray-600 mt-4">
//           Hi! I'm [Your Name], a passionate Full Stack Developer building scalable and user-friendly web applications.
//         </p>
//       </header>

//       <section className="mt-10">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Array(6).fill(null).map((_, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-2xl shadow-md overflow-hidden"
//             >
//               <Card>
//                 <CardContent>
//                   <img
//                     src={`https://via.placeholder.com/300x150?text=Project+${index + 1}`}
//                     alt={`Project ${index + 1}`}
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
//                     <p className="text-gray-600">
//                       Description of the project goes here. Highlight features and tech stack used.
//                     </p>
//                     <Button className="mt-4 w-full" variant="outline">
//                       View Details
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <section className="mt-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           I'm a skilled full stack developer experienced in technologies like React, Node.js, Express, and MongoDB.
//           I enjoy solving complex problems and creating impactful applications that users love.
//         </p>
//       </section>

//       <footer className="mt-16 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
//         <div className="flex justify-center space-x-4 mt-4">
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-900"
//           >
//             <Github size={28} />
//           </a>
//           <a
//             href="https://linkedin.com/in/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-900"
//           >
//             <Linkedin size={28} />
//           </a>
//           <a
//             href="mailto:your.email@example.com"
//             className="text-gray-600 hover:text-gray-900"
//           >
//             <Mail size={28} />
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;
