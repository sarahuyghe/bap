import React, { useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

const Controls = () => {
	const orbitRef = useRef();
	const { camera, gl } = useThree();

	useFrame(() => {
		orbitRef.current.update();
	});

	return (
		<orbitControls
			autoRotate
			maxPolarAngle={Math.PI / 3}
			minPolarAngle={Math.PI / 3}
			args={[camera, gl.domElement]}
			ref={orbitRef}
		/>
	);
};

export default Controls;
