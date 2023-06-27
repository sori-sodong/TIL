import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [open, setOpen] = useState(false);
  const btnClickHandler = () => setOpen(!open);
  return (
    <div className='App'>
      <button onClick={btnClickHandler}>click!</button>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: open ? 1 : 0 }}>
        popup
      </motion.div>
    </div>
  );
}

export default App;
