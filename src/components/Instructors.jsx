import { motion } from "framer-motion";
import {ArrowRight,Award,BookOpen,Mail,Star,Users,} from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Web Development Instructor",
    experience: "10+ Years Experience",
    students: "12K+ Students",
    rating: "4.9",
    courses: 8,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    name: "Michael Anderson",
    role: "UI/UX Design Instructor",
    experience: "8+ Years Experience",
    students: "9K+ Students",
    rating: "4.8",
    courses: 6,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Data Science Instructor",
    experience: "7+ Years Experience",
    students: "15K+ Students",
    rating: "4.9",
    courses: 10,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    color: "from-cyan-500 to-indigo-500",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Digital Marketing Instructor",
    experience: "9+ Years Experience",
    students: "11K+ Students",
    rating: "4.8",
    courses: 7,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80", 
    color: "from-violet-500 to-blue-500", 
  }, 
]; 
 
export default function Instructors() { 
  return ( 
    <main className="min-h-screen bg-slate-950 px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8"> 
      <div className="pointer-events-none fixed inset-0 overflow-hidden"> 
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" /> 
        <div className="absolute right-[-10%] top-[30%] h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" /> 
        <div className="absolute bottom-0 left-[30%] h-80 w-80 rounded-full bg-fuchsia-600/5 blur-3xl" /> 
      </div> 
 
      <div className="relative mx-auto max-w-7xl"> 
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="mb-12 text-center" 
        > 
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.1 }} 
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-300" 
          > 
            <Users size={16} /> 
            Meet Our Instructors 
          </motion.div> 
 
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"> 
            Learn From{" "} 
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent"> 
              Industry Experts 
            </span> 
          </h1> 
 
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"> 
            Learn practical skills from experienced instructors who are 
            passionate about helping students build their careers and achieve 
            their goals. 
          </p> 
        </motion.section> 
 
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> 
          {instructors.map((instructor, index) => ( 
            <motion.article 
              key={instructor.id} 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
              }} 
              whileHover={{ 
                y: -10, 
                rotateX: 2, 
                rotateY: -2, 
              }} 
              style={{ 
                transformStyle: "preserve-3d", 
              }} 
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl" 
            > 
              <div className="relative h-64 overflow-hidden"> 
                <motion.img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.5 }} 
                  className="h-full w-full object-cover" 
                /> 
 
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" /> 
 
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-bold backdrop-blur-md"> 
                  <Star 
                    size={13} 
                    className="fill-yellow-400 text-yellow-400" 
                  /> 
                  {instructor.rating} 
                </div> 
 
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-semibold backdrop-blur-md"> 
                  {instructor.experience} 
                </div> 
              </div> 
 
              <div className="p-5"> 
                <h2 className="text-xl font-black">{instructor.name}</h2> 
 
                <p className="mt-1 text-sm font-semibold text-indigo-300"> 
                  {instructor.role} 
                </p> 
 
                <div className="mt-5 grid grid-cols-2 gap-2"> 
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3"> 
                    <BookOpen 
                      size={16} 
                      className="mb-2 text-indigo-400" 
                    /> 
                    <p className="text-lg font-black"> 
                      {instructor.courses} 
                    </p> 
                    <p className="text-[11px] text-white/40"> 
                      Courses 
                    </p> 
                  </div> 
 
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3"> 
                    <Users 
                      size={16} 
                      className="mb-2 text-purple-400" 
                    /> 
                    <p className="text-lg font-black"> 
                      {instructor.students} 
                    </p> 
                    <p className="text-[11px] text-white/40"> 
                      Students 
                    </p> 
                  </div> 
                </div> 
 
                <div className="mt-5 flex gap-2"> 
                  <motion.button 
                    type="button" 
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.96 }} 
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${instructor.color} px-3 py-3 text-xs font-black shadow-lg`} 
                  > 
                    View Profile 
                    <ArrowRight size={14} /> 
                  </motion.button> 
 
                  <motion.button 
                    type="button" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" 
                    title="Contact Instructor" 
                  > 
                    <Mail size={16} /> 
                  </motion.button> 
                </div> 
              </div> 
            </motion.article> 
          ))} 
        </section> 
 
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="mt-16 overflow-hidden rounded-3xl border border-indigo-400/10 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-fuchsia-600/10 p-8 text-center sm:p-12" 
        > 
          <Award className="mx-auto mb-4 text-indigo-400" size={34} /> 
 
          <h2 className="text-2xl font-black sm:text-3xl"> 
            Ready to Start Learning? 
          </h2> 
 
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/50"> 
            Explore our courses and start learning from experienced 
            professionals today. 
          </p> 
 
          <motion.button 
            type="button" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.96 }} 
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-sm font-black shadow-xl" 
          > 
            Explore Courses 
            <ArrowRight size={16} /> 
          </motion.button> 
        </motion.section> 
      </div> 
    </main> 
  ); 
}


