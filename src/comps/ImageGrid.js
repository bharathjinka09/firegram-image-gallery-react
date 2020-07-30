import React from 'react'
import useFiresore from '../hooks/useFirestore'

const ImageGrid = () => {
	const { docs } = useFiresore('images')
	console.log(docs)

	return (
		<div className="img-grid">
	       { docs && docs.map(doc => (
	        <div className="img-wrap" key={doc.id}>
	          <img style={{objectFit:'contain'}} width='100%' src={doc.url} alt="uploaded pic"/>
	        </div>
	       ))}			
		</div>
	)
}

export default ImageGrid