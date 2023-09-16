import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

//custom imports
import { sendError } from './errorHandler.js'
import { sendStatus } from './handleStatus.js'

sendError('loaded', 'main.js') // send msg that main.js is loaded

function main() {
  //
  //canvas
  const canvas = document.querySelector('#c')
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })

  //camera
  const fov = 45
  const aspect = 2
  const near = 0.1
  const far = 100
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 10, 20)

  //controls
  const controls = new OrbitControls(camera, canvas)
  controls.target.set(0, 5, 0)
  controls.update()

  //scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('black')

  /*
  
  innhold
  
  */

  //render functinons
 function resizeRendererToDisplaySize(renderer) {
    //
    const canvas = renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      //
      renderer.setSize(width, height, false)
    }
    return needResize
  }
  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      //
      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
    }
    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
  //
  sendStatus(true) // icon that shows that main functio is running
  //
}
main()
