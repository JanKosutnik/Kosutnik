'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './v1.module.css'

export default function SphereBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 10)
    camera.position.z = 3.2

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1, 4)
    const material = new THREE.MeshBasicMaterial({
      color: 0x858580,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    })
    const sphere = new THREE.Mesh(geometry, material)
    sphere.rotation.set(-0.18, 0.35, 0.08)
    scene.add(sphere)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: 0, y: 0 }
    let frame = 0
    let visible = !document.hidden

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect()
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.22
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.16
    }

    const render = () => {
      if (!visible) return
      sphere.rotation.y += reducedMotion ? 0 : 0.0007
      sphere.rotation.x += (pointer.y - sphere.rotation.x) * 0.015
      sphere.rotation.z += (-pointer.x - sphere.rotation.z) * 0.015
      renderer.render(scene, camera)
      if (!reducedMotion) frame = requestAnimationFrame(render)
    }

    const onVisibilityChange = () => {
      visible = !document.hidden
      cancelAnimationFrame(frame)
      if (visible) render()
    }

    const observer = new ResizeObserver(resize)
    observer.observe(container)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    resize()
    render()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div className={styles.sphere} ref={containerRef} aria-hidden="true" />
}
