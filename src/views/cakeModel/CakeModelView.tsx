'use client'

import React, {type FC, useLayoutEffect, useRef} from "react";
import {Canvas, useThree} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import type { OrbitControls as DreiOrbitControls } from 'three-stdlib'

type CakeModelViewProps = {
    Cake: React.ComponentType<any>;
};

function CameraControls() {
    const controlsRef = useRef<DreiOrbitControls>(null!)
    const { camera, gl } = useThree()

    useLayoutEffect(() => {
        const controls = controlsRef.current
        if (!controls) return;
        controls.setAzimuthalAngle(Math.PI / 4)
        controls.setPolarAngle(Math.PI / 4)

        controls.update()
    }, [])

    return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />
}

const CakeModelView: FC<CakeModelViewProps> = ({Cake}) => {

    return (
        <Canvas
            shadows
            style={{height: '60vh', width: '60vw', userSelect: 'none',}}
            className={'draggable'}
            camera={{ position: [1, 0, 1], fov: 25, near: 0.1, far: 1000, zoom: 0.5 }}
            onCreated={({ camera }) => {
                camera.lookAt(0, 0, 0);
                camera.updateProjectionMatrix();
            }}
        >
            <CameraControls />
            <pointLight position={[0, 20, 10]} intensity={1.5} />
            <Cake />
            <Environment preset="studio" blur={0.8} />
            <OrbitControls />
            {/*<SceneDebugger/>*/}
        </Canvas>
    );
};

export default CakeModelView;