import './HomePage.scss'
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, PresentationControls, Stage } from '@react-three/drei';
import { gsap } from 'gsap';
import SmoothScroll from './SmoothScroll';


const Model = (props) => {
  // const gltf = useGLTF('drone2.glb');
  const gltf = useLoader(GLTFLoader, 'solar.glb')
  const mixerRef = useRef();

  useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(gltf.scene);
    const animationAction = mixerRef.current.clipAction(gltf.animations[0]);
    animationAction.play();

    return () => mixerRef.current.stopAllAction();
  }, [gltf.animations, gltf.scene]);


  useFrame((state, delta) => {
    // Use gsap to rotate the model around its y-axis
    // gsap.to(mixerRef.current.rotation, {
    //   y: Math.PI,
    //   duration: 1,
    //   repeat: -1, // repeat the animation indefinitely
    //   ease: 'power1.inOut',
    //   yoyo: true, // reverse the animation direction on each repeat
    // });

    mixerRef.current.update(delta)
  });

  return <primitive rotation={[0.5, Math.PI, 0]} object={gltf.scene} position={[0, 0, 0]} ref={mixerRef} scale={0.01} {...props} />;
}



const HomePage = () => {
  document.title = 'Tesla NIT Patna | Home';
  return (
    <div className='pt-16 bg-black'>
      {/* <div className='justify-center flex items-center my-[8rem] flex-col text-5xl font-bold'>
        <h1 className='font-extrabold text-transparent lg:text-8xl md:text-6xl text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Official Website of</h1>
        <h1 className='font-extrabold text-transparent lg:text-7xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600 mt-2'>Tesla NIT Patna</h1>
      </div> */}

      <div className='h-[110vh] w-[100%] relative items-center flex'>

        <div className='w-[40%] flex justify-evenly h-fit items-center mt-[-10rem]'>
          <div >
            <h1 className='text-4xl font-semibold text-sky-500 py-5'>TESLA Club NIT Patna</h1>
            <p className='max-w-[19rem] text-lg'>
              The Official  Technical Club of Electrical Engineering Department NIT, Patna and most active club of the college.
            </p>
          </div>
        </div>

        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "touchAction": 'none', "width": '60%' }} >
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
          <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={null}>
              <Model scale={0.00007} position={[0, 0, 0, 4]} />
            </Stage>
          </PresentationControls>
        </Canvas>

      </div>

      {/* <SmoothScroll/> */}

      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <color attach="background" args={['#000000']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <AnimatedModel />
        </Suspense>
      </Canvas> */}

    </div>
  )
}

export default HomePage