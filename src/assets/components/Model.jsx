import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export function Model(props) {
  const ismobile = useMediaQuery({ maxWidth: 768 });
  const { nodes, materials } = useGLTF("/assets/flowerscene.gltf");
  return (
    <group {...props} dispose={null}>
      <pointLight
        intensity={100}
        decay={2}
        position={[ismobile ? 6 : 4.136, 7.584, ismobile ? -8 : -1.105]}
        rotation={[-1.839, 0.602, 1.932]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={22.895}
        position={[19.02, 6.486, -9.376]}
        rotation={[-2.766, 1.075, 2.808]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.004"]}
        position={[-0.026, 3.632, 0]}
        scale={[0.157, 0.811, 0.811]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[-0.201, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[0.941, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[1.935, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[2.929, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[-2.359, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.002"]}
        position={[-0.11, 3.646, -0.001]}
        rotation={[-1.365, 0, 0]}
        scale={[0.811, 0.811, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["Material.003"]}
        position={[0.463, 3.646, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.001"]}
        position={[-0.398, 3.632, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.157, 0.811, 0.811]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.005"]}
        position={[-0.454, 0.445, -0.803]}
        rotation={[2.177, 0.755, 0.102]}
        scale={[0.252, 0.635, 0.321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.005"]}
        position={[-0.493, 0.669, -0.119]}
        rotation={[2.993, -0.898, -0.243]}
        scale={[0.252, 0.635, 0.321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.005"]}
        position={[-0.132, 0.466, -0.283]}
        rotation={[-0.225, -0.64, 2.533]}
        scale={[0.252, 0.635, 0.321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.005"]}
        position={[-0.103, 0.57, -0.655]}
        rotation={[2.39, 1.138, 0.52]}
        scale={[0.252, 0.635, 0.321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.004"]}
        position={[-1.025, 3.126, -3.103]}
        rotation={[-0.366, -0.302, 0.283]}
        scale={[0.132, 0.678, 0.678]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[-0.572, -0.352, 0.216]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[0.523, 0.039, 0.409]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[1.489, 0.363, 0.198]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[2.558, 0.355, -0.212]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[-2.764, 0.024, -0.41]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.006"]}
        position={[-1.093, 3.11, -3.12]}
        rotation={[-1.816, -0.327, -0.253]}
        scale={[0.678, 0.678, 0.465]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials["Material.003"]}
        position={[-0.564, 3.839, -1.612]}
        rotation={[-0.366, -0.302, 0.283]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Material.001"]}
        position={[-1.311, 3.013, -3.156]}
        rotation={[2.776, 0.302, 2.859]}
        scale={[0.132, 0.678, 0.678]}
      />
    </group>
  );
}

useGLTF.preload("/assets/flowerscene.gltf");
