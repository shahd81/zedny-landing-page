import { motion as Motion} from "framer-motion";

export default function UserSelector({ setUserType }) {
  return (
    <div className="flex justify-center gap-10 py-20">

      <Motion.div
        whileHover={{ scale:1.05 }}
        onClick={() => setUserType("individual")}
        className="bg-gray-800 p-10 rounded-xl cursor-pointer w-72 text-center shadow-lg"
      >
        <h2 className="text-2xl mb-2">Individual</h2>
        <p className="text-gray-400">
          Take an assessment and start learning from your real level.
        </p>
      </Motion.div>

      <Motion.div
        whileHover={{ scale:1.05 }}
        onClick={() => setUserType("company")}
        className="bg-gray-800 p-10 rounded-xl cursor-pointer w-72 text-center shadow-lg"
      >
        <h2 className="text-2xl mb-2">Company</h2>
        <p className="text-gray-400">
          Build a full training platform for your employees.
        </p>
      </Motion.div>

    </div>
  );
}