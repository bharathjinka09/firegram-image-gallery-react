import React from 'react'
import useFiresore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
	const { docs } = useFiresore('images')
	console.log(docs)

	return (
		<div className="img-grid">
	       { docs && docs.map(doc => (
	        <motion.div className="img-wrap" key={doc.id}
	        	layout
	        	whileHover={{opacity:1}}
	        	onClick={() => setSelectedImg(doc.url)}
	        >
	          <motion.img style={{objectFit:'contain'}} width='100%' src={doc.url} alt="uploaded pic" 
	          	initial={{ opacity:0 }}
	          	animate={{ opacity:1 }}
	          	transition={{ delay:1 }}
	          />
	        </motion.div>
	       ))}			
		</div>
	)
}

export default ImageGrid