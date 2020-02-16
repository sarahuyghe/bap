import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
	const [model, setModel] = useState();

	useEffect(() => {
		new GLTFLoader().load("/costumizeLayers.glb", setModel);
	});

	return model ? <primitive object={model.scene} /> : null;
};

export default Model;
