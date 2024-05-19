import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const LoadingScreen = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html center>{progress} % loaded</Html>
  )
}

export default LoadingScreen